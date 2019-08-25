const data = {
  jobs: {
    'job-1': {
      id: 'job-1',
      company: 'Google',
      position: 'Senior Front-end',
      date: 1566681661474
    },
    'job-2': {
      id: 'job-2',
      company: 'Aple',
      position: 'Medium Front-end',
      date: 1566681661474
    },
    'job-3': {
      id: 'job-3',
      company: 'Samsung',
      position: 'Lead Front-end',
      date: 1566681661474
    },
    'job-4': {
      id: 'job-4',
      company: 'Twitter',
      position: 'Lead Front-end',
      date: 1566681661474
    },
    'job-5': {
      id: 'job-5',
      company: 'UBS',
      position: 'Lead Front-end',
      date: 1566681661474
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Wishlist',
      jobs: ['job-1', 'job-3', 'job-5']
    },
    'column-2': {
      id: 'column-2',
      title: 'Applied',
      jobs: ['job-2', 'job-4']
    }
  },
  columnOrder: ['column-1', 'column-2']
};

export default data;
