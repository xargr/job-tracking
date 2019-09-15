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
      company: 'Apple',
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
    },
    'job-6': {
      id: 'job-6',
      company: 'RaiseNow',
      position: 'Senior Front-end',
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
    },
    'column-3': {
      id: 'column-3',
      title: 'Interview',
      jobs: ['job-6']
    },
    'column-4': {
      id: 'column-4',
      title: 'Offer',
      jobs: []
    },
    'column-5': {
      id: 'column-5',
      title: 'Rejected',
      jobs: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
  isModalOpen: false,
  modalData: {
    columnId: null,
    company: '',
    position: '',
    jobId: null
  }
};

export default data;
