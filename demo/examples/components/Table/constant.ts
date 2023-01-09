export const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
];

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

export const columnsResizeAble = [
  {
    title: 'Name',
    dataIndex: 'name',
    enableResize: true,
    width: 100,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    enableResize: true,
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    enableResize: true,
    width: 250,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

export const columnsHeaderFulter = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      { key: '1', value: 'Jane Doe' },
      { key: '2', value: 'Alisa Ross' },
      { key: '3', value: 'Kevin Sandra' },
    ],
    onFilter: (key, value, item) => item.name === value,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

export default { data, columns, columnsResizeAble, columnsHeaderFulter };
