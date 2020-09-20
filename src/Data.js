const data = [
  {
    step: 30,
    heading: 'List your team information',
    data: [
      { label: 'Team Name', value: '', type: 'input', name: 'TeamName' },
      { label: 'Location', value: '', type: 'input', name: 'Location' },
      {
        label: 'Total Number of players including extras',
        value: '',
        type: 'input',
        name: 'TotalNumber',
      },
      { label: 'Captain Name', value: '', type: 'input', name: 'CaptainName' },
    ],
  },
  {
    step: 60,
    heading: 'Joining Date and Location Details',
    data: [
      { label: 'Date of Joining', value: '', type: 'date', name: 'date' },
      {
        label: 'Level of Experience',
        value: '',
        type: 'select',
        name: 'Experience',
        data: ['Newbie', 'Pro ', 'League Level', 'Expert', 'Coach'],
      },
    ],
  },
  {
    step: 90,
    heading: 'Contact Details',
    data: [
      { name: 'Name', value: '', type: 'input', label: 'Name' },
      { name: 'Email', value: '', type: 'input', label: 'Email' },
      { name: 'Telephone', value: '', type: 'input', label: 'Telephone Number' },
    ],
  },
];

export default data;
