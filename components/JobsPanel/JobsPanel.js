import React from 'react';
import FeatureList from './FeatureList';

class JobsPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.columns = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];
  }

  render() {
    return this.columns.map(comp => <FeatureList key={comp} title={comp} />);
  }
}

export default JobsPanel;
