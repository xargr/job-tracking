import React from 'react';
import FeatureList from './FeatureList';
import ModalForm from '../ModalForm';
import EditModalForm from '../EditModalForm';

class JobsPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      column: 'wishlist',
      data: {},
      updateData: {},
      updateIndex: null,
      updateColumn: ''
    };
    this.columns = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];
  }

  componentDidMount() {
    this.loadLocalStorage();

    window.addEventListener('click', event => {
      if (this.state.isOpen) {
        // create dom element
        const elem = document.createElement('div');
        const div = elem.setAttribute('class', 'overlay');

        // compare created dom element and element that clicked on
        const isOuterClick = elem.isEqualNode(event.target);

        // if is equal set state to close modal
        if (isOuterClick) {
          this.setState({
            isOpen: !this.state.isOpen,
            updateData: {},
            updateIndex: null,
            updateColumn: ''
          });
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('click', () => {});
  }

  loadLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('data'));

    if (localData) {
      this.setState({ data: localData });
    }
  };

  clickAddJob = column => {
    this.setState({
      isOpen: !this.state.isOpen,
      column
    });
  };

  handleModalData = data => {
    this.setState(
      {
        isOpen: !this.state.isOpen
      },
      () => {
        this.saveDataToLocalStorage(data);
      }
    );
  };

  saveDataToLocalStorage = data => {
    if (window) {
      const { column } = this.state;

      const oldStorage = JSON.parse(localStorage.getItem('data'));

      if (oldStorage && oldStorage[column]) {
        const obj = Object.assign({}, oldStorage);
        obj[column] = [...oldStorage[column], data];
        localStorage.setItem('data', JSON.stringify(obj));
        this.loadLocalStorage();
      } else if (oldStorage && !oldStorage[column]) {
        const obj = Object.assign(oldStorage, { [column]: [data] });
        localStorage.setItem('data', JSON.stringify(obj));
        this.loadLocalStorage();
      } else {
        const obj = {};
        obj[column] = [data];
        localStorage.setItem('data', JSON.stringify(obj));
        this.loadLocalStorage();
      }
    }
  };

  updateItem = (column, item, index) => {
    this.setState({
      isOpen: !this.state.isOpen,
      updateColumn: column,
      updateIndex: index,
      updateItem: { ...item }
    });
  };

  handleEditModalData = (data, updateIndex, updateColumn) => {
    if (window) {
      const oldStorage = JSON.parse(localStorage.getItem('data'));

      if (oldStorage && oldStorage[updateColumn]) {
        const obj = Object.assign({}, oldStorage);
        obj[updateColumn][updateIndex] = { ...data };
        localStorage.setItem('data', JSON.stringify(obj));
        this.loadLocalStorage();
        this.setState({
          isOpen: !this.state.isOpen,
          updateData: {},
          updateIndex: null,
          updateColumn: ''
        });
      }
    }
  };

  deletetData = (updateColumn, updateIndex) => {
    if (window) {
      const oldStorage = JSON.parse(localStorage.getItem('data'));

      if (oldStorage && oldStorage[updateColumn]) {
        const obj = Object.assign({}, oldStorage);
        obj[updateColumn].splice(updateIndex, 1);
        localStorage.setItem('data', JSON.stringify(obj));

        this.setState(
          {
            isOpen: !this.state.isOpen,
            updateData: {},
            updateIndex: null,
            updateColumn: ''
          },
          () => {
            this.loadLocalStorage();
          }
        );
      }
    }
  };

  render() {
    const { isOpen, data, updateColumn } = this.state;

    return (
      <>
        {this.columns.map(comp => (
          <FeatureList
            key={comp}
            data={data[comp]}
            column={comp}
            clickAddJob={this.clickAddJob}
            updateItem={this.updateItem}
          />
        ))}
        {isOpen && !updateColumn && (
          <ModalForm handleData={this.handleModalData} />
        )}
        {isOpen && updateColumn && (
          <EditModalForm
            {...this.state}
            handleEditModalData={this.handleEditModalData}
            deletetData={this.deletetData}
          />
        )}
      </>
    );
  }
}

export default JobsPanel;
