import React from 'react';
import WishList from './WishList';
import Applied from './Applied';
import Interview from './Interview';
import Offer from './Offer';
import Rejected from './Rejected';

const JobsPanel = () => (
  <>
    <WishList />
    <Applied />
    <Interview />
    <Offer />
    <Rejected />
  </>
);

export default JobsPanel;
