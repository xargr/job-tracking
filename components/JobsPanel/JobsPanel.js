import React from 'react';
import FeatureList from './FeatureList';

const columns = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];

const JobsPanel = () =>
  columns.map(comp => <FeatureList key={comp} title={comp} />);

export default JobsPanel;
