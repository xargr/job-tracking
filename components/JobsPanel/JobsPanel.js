import React from 'react';
import FeatureList from './FeatureList';
import ModalForm from '../ModalForm';

class JobsPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      column: 'wishlist',
      data: {}
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
            isOpen: !this.state.isOpen
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
        const obj = oldStorage;
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

  render() {
    const { isOpen, data } = this.state;

    return (
      <>
        {this.columns.map(comp => (
          <FeatureList
            key={comp}
            data={data[comp]}
            title={comp}
            clickAddJob={this.clickAddJob}
          />
        ))}
        {isOpen && <ModalForm handleData={this.handleModalData} />}
      </>
    );
  }
}

export default JobsPanel;
