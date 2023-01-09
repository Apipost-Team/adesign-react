import React from 'react';
import { Pagination } from 'adesign-react';
// import Pagination from  '../../Pagination';
import './index.less';
import ExampleItem from '../_exampleItem';


const PaginationSamples = () => {
  return (
    <div className="radio-example">
      <div className="titles">
        <div className="basetitle">基础分页</div>
        <div className="desc">基础分页</div>
      </div>

      <ExampleItem
        title="基础分页"
        description="基础分页"
        codeContent={`import { Pagination } from  'adesign-react';
ReactDOM.render(
  <div>
    <Pagination></Pagination>
  </div>,
CONTAINER)`}
      >
        <Pagination></Pagination>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Radio</div>
      </div>
      <div className="doc-desc">
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>onChange</td>
              <td></td>
              <td>{`(value: any) => void`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaginationSamples;
