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
        <div className="basetitle">表格组件 Table</div>
        <div className="desc">用于数据收集展示、分析整理、操作处理。</div>
      </div>

      <ExampleItem
        title="基础表格"
        description="基础的表格展示用法。"
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
        title="带边框表格"
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
        title="支持拖拽排序"
        description="可以配合 react-sortable-hoc 实现拖拽排序。"
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
        title="支持调整列宽"
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
        title="可编辑单元格"
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
        <div className="basetitle">API说明</div>
        <div className="desc" />
      </div>
      <div className="doc-desc">
        <div className="second-title">TableProps</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>data</td>
              <td>表格的数据</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义Class名称</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showBorder</td>
              <td>是否显示边框</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>列描述数据对象的数组</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowSelection</td>
              <td>
                配置表格行是否可选，选中事件等 <font color="orange">(规划中)</font>
              </td>
              <td>rowSelection?: RowSelectionProps | undefined</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowKey</td>
              <td>表格行 key 的取值字段</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showHeader</td>
              <td>是否显示表头</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>noDataElement</td>
              <td>无数据时展示内容</td>
              <td>React.ReactNode;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>layouts</td>
              <td>表格下各列默认布局样式</td>
              <td>LayoutProps;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onLayoutsChange</td>
              <td>调整表格列宽后回调事件</td>
              <td>{`(newLayout: any) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>renderRow</td>
              <td>自定义表格行</td>
              <td>{`(node: React.ReactNode) => React.ReactNode`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>
                表格内数据变化时回调<font color="orange">(规划中)</font>
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
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>rowIndex</td>
              <td>表格行索引</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowData</td>
              <td>当前行数据</td>
              <td>any</td>
              <td>-</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>列描述数据对象的数组</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowKey</td>
              <td>表格行 key 的取值字段</td>
              <td>string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">ColumnProps</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>headerCellStyle</td>
              <td>表头单元格自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bodyCellStyle</td>
              <td>表身单元格自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义Class名称</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>align</td>
              <td>单元格内文字对齐方式</td>
              <td>{`'left' | 'center' | 'right'`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>render</td>
              <td>单元格自定义渲染方式</td>
              <td>{`(
    content: React.ReactNode | string, // 返回值
    rowData: any, // 当前行数据
    rowIndex: number // 所在行索引
  ) => React.ReactNode;`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>表格列名</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowIndex</td>
              <td>当前行索引</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowData</td>
              <td>当前行数据</td>
              <td>any</td>
              <td>-</td>
            </tr>
            <tr>
              <td>enableResize</td>
              <td>当前列是否允许调整列宽</td>
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
