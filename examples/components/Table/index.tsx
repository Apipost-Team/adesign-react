import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Table from '../../../src/Table';
import './index.less';
import ExampleItem from '../_exampleItem';
import Input from '../../../src/Input';
import InputNumber from '../../../src/InputNumber';
import { data, columns, columnsResizeAble } from './constant';

const TableSamples = () => {
  const [list, setList] = useState([...data]);

  const handleChange = (rowData: any, rowIndex: number, newVal: any) => {
    const newList = [...list];
    newList[rowIndex] = {
      ...rowData,
      ...newVal,
    };
    setList([...newList]);
  };

  const columnsForEdit = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: any, rowData: any, rowIndex: number) => {
        return (
          <Input
            value={text}
            onChange={(newVal) => {
              handleChange(rowData, rowIndex, { name: newVal });
            }}
          />
        );
      },
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      render: (text: any, rowData: any, rowIndex: number) => {
        return (
          <InputNumber
            value={text}
            onChange={(newVal) => {
              handleChange(rowData, rowIndex, { salary: newVal });
            }}
          />
        );
      },
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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log({
      oldIndex,
      newIndex,
    });
  };

  const renderSortRows = (dataList, renderItem) => {
    const SortableItem = SortableElement(({ rowData, rowIndex }) => {
      return renderItem(rowData, rowIndex);
    });

    const SortableList = SortableContainer(({ items }) => {
      return (
        <tbody>
          {items.map((rowData, index) => (
            <SortableItem
              key={`item-${rowData.key}`}
              index={index}
              rowIndex={index}
              rowData={rowData}
            />
          ))}
        </tbody>
      );
    });

    return (
      <SortableList
        items={dataList}
        onSortEnd={onSortEnd}
        helperContainer={() => document.querySelector('table tbody')}
        updateBeforeSortStart={({ node }) => {
          const tds = node.querySelectorAll('td');
          tds.forEach((td) => {
            td.style.width = `${td.clientWidth}px`;
          });
        }}
      />
    );
  };

  return (
    <div className="switch-example">
      <div className="titles">
        <div className="basetitle">???????????? Table</div>
        <div className="desc">?????????????????????????????????????????????????????????</div>
      </div>

      <ExampleItem
        title="????????????"
        description="??????????????????????????????"
        codeContent={`import Table from "../../src/Table";

  const data = [
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

  const columns = [
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


  ReactDOM.render(
    <Table columns={columns} data={data} />,
  CONTAINER)

        `}
      >
        <Table columns={columns} data={data} />
      </ExampleItem>

      <ExampleItem
        title="???????????????"
        codeContent={`import Table from "../../src/Table";

  const data = [
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

  const columns = [
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


  ReactDOM.render(
    <Table showBorder columns={columns} data={data} />,
  CONTAINER)

        `}
      >
        <Table showBorder columns={columns} data={data} />
      </ExampleItem>

      <ExampleItem
        title="??????????????????"
        description="???????????? react-sortable-hoc ?????????????????????"
        codeContent={`import Switch from "../../src/Switch";

ReactDOM.render(
    <div>
    </div>,
CONTAINER)

        `}
      >
        <Table columns={columns} data={data} renderRow={renderSortRows} />
      </ExampleItem>

      <ExampleItem
        title="??????????????????"
        codeContent={`import Table from "../../src/Table";

  const data = [
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

  const columns = [
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


  ReactDOM.render(
    <Table showBorder columns={columns} data={data} />,
  CONTAINER)

        `}
      >
        <Table showBorder columns={columnsResizeAble} data={data} />
      </ExampleItem>

      <ExampleItem
        title="??????????????????"
        codeContent={`import React, { useState } from 'react';
import Table from "../../src/Table";


        const [list, setList] = useState([...data]);

        const handleChange = (rowData: any, rowIndex: number, newVal: any) => {
          const newList = [...list];
          newList[rowIndex] = {
            ...rowData,
            ...newVal,
          };
          setList([...newList]);
        };


        const data = [
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

        const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            render: (text: any, rowData: any, rowIndex: number) => {
              return (
                <Input
                  value={text}
                  onChange={(newVal) => {
                    handleChange(rowData, rowIndex, { name: newVal });
                  }}
                />
              );
            },
          },
          {
            title: 'Salary',
            dataIndex: 'salary',
            render: (text: any, rowData: any, rowIndex: number) => {
              return (
                <InputNumber
                  value={text}
                  onChange={(newVal) => {
                    handleChange(rowData, rowIndex, { salary: newVal });
                  }}
                />
              );
            },
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


        ReactDOM.render(
          <Table showBorder columns={columns} data={data} />,
        CONTAINER)

              `}
      >
        <Table showBorder columns={columnsForEdit} data={list} />
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API??????</div>
        <div className="desc" />
      </div>
      <div className="doc-desc">
        <div className="second-title">TableProps</div>
        <table>
          <tbody>
            <tr>
              <th>?????????</th>
              <th>??????</th>
              <th>??????</th>
              <th>?????????</th>
            </tr>
            <tr>
              <td>data</td>
              <td>???????????????</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>???????????????</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>?????????Class??????</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showBorder</td>
              <td>??????????????????</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>??????????????????????????????</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowSelection</td>
              <td>
                ????????????????????????????????????????????? <font color="orange">(?????????)</font>
              </td>
              <td>rowSelection?: RowSelectionProps | undefined</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowKey</td>
              <td>????????? key ???????????????</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showHeader</td>
              <td>??????????????????</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>noDataElement</td>
              <td>????????????????????????</td>
              <td>React.ReactNode;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>layouts</td>
              <td>?????????????????????????????????</td>
              <td>LayoutProps;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onLayoutsChange</td>
              <td>?????????????????????????????????</td>
              <td>{`(newLayout: any) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>renderRow</td>
              <td>??????????????????</td>
              <td>{`(node: React.ReactNode) => React.ReactNode`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>
                ??????????????????????????????<font color="orange">(?????????)</font>
              </td>
              <td>{`(newData: any) => void;`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">RowProps</div>
        <table>
          <tbody>
            <tr>
              <th>?????????</th>
              <th>??????</th>
              <th>??????</th>
              <th>?????????</th>
            </tr>
            <tr>
              <td>rowIndex</td>
              <td>???????????????</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowData</td>
              <td>???????????????</td>
              <td>any</td>
              <td>-</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>??????????????????????????????</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowKey</td>
              <td>????????? key ???????????????</td>
              <td>string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">ColumnProps</div>
        <table>
          <tbody>
            <tr>
              <th>?????????</th>
              <th>??????</th>
              <th>??????</th>
              <th>?????????</th>
            </tr>
            <tr>
              <td>headerCellStyle</td>
              <td>??????????????????????????????</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bodyCellStyle</td>
              <td>??????????????????????????????</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>?????????Class??????</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>align</td>
              <td>??????????????????????????????</td>
              <td>{`'left' | 'center' | 'right'`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>render</td>
              <td>??????????????????????????????</td>
              <td>{`(
    content: React.ReactNode | string, // ?????????
    rowData: any, // ???????????????
    rowIndex: number // ???????????????
  ) => React.ReactNode;`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>????????????</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowIndex</td>
              <td>???????????????</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowData</td>
              <td>???????????????</td>
              <td>any</td>
              <td>-</td>
            </tr>
            <tr>
              <td>enableResize</td>
              <td>?????????????????????????????????</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSamples;
