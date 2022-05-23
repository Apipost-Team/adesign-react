import React, { useState, useRef } from 'react';
import SearchInput from '../../../src/SearchInput';
import ExampleItem from '../_exampleItem';
import './index.less';

const SearchInputSamples = () => {
  const [value, setValue] = useState('');

  const data = [
    { value: 'a', text: 'a' },
    { value: 'b', text: 'b' },
    { value: 'c', text: 'c' },
    { value: 'd', text: 'd' },
    { value: 'e', text: 'e' },
    { value: 'f', text: 'f' },
    { value: 'g', text: 'g' },
    { value: 'a', text: 'a-1' },
    { value: 'b', text: 'b-1' },
    { value: 'c', text: 'c-1' },
    { value: 'd', text: 'd-1' },
    { value: 'e', text: 'e-1' },
    { value: 'f', text: 'f-1' },
    { value: 'g', text: 'g-1' },
  ];
  const [searchList, setSearchList] = useState(data);
  const handleChange = (value: string) => {
    setValue(value);

    const newList = data.filter((d) => d.text.indexOf(value) !== -1 || value === '');
    setSearchList(newList);
  };

  return (
    <div className="search-input-example">
      <div className="titles">
        <div className="basetitle">搜索 SearchInput</div>
        <div className="desc">基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。</div>
      </div>
      <ExampleItem
        title="可搜索"
        description="可以利用搜索功能快速查找选项"
        codeContent={`
import { SearchInput } from 'adesign';

const [value, setValue] = useState('');
const [searchList, setSearchList] = useState([{ value: 'value', text: 'text' }]);
handleChange = value => {
  // 文本框值变化时回调 可更新searchList
};
ReactDOM.render(
  <>
    <SearchInput
      style={{ width: 300 }}
      dataList={searchList}
      placeholder="搜索"
      value={value}
      onChange={handleChange}
    />
  </>,
  CONTAINER
);`}
      >
        <div className="demo">
          <div>
            <SearchInput
              style={{ width: 300 }}
              dataList={searchList}
              placeholder="搜索"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">input</div>
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
              <td>placeholder</td>
              <td>选择框默认文本</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>选择框style 属性</td>
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>dataList</td>
              <td>下拉列表</td>
              <td> object[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>value</td>
              <td>选择框默认选中</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>input 的 value 变化时，调用此函数</td>
              <td>function(value)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchInputSamples;
