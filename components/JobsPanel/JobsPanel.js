import React from 'react';
import FeatureList from './FeatureList';
import ModalForm from '../ModalForm';

class JobsPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      column: 'wishlist'
    };
    this.columns = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];
  }

  componentDidMount() {
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

  clickAddJob = column => {
    this.setState({
      isOpen: !this.state.isOpen,
      column
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        {this.columns.map(comp => (
          <FeatureList key={comp} title={comp} clickAddJob={this.clickAddJob} />
        ))}
        {isOpen && <ModalForm />}
      </>
    );
  }
}

export default JobsPanel;
