import React, { useState, useRef } from 'react';
import SearchInput from '../../../src/SearchInput';
import ExampleItem from '../_exampleItem';
import './index.less';

const Option = SearchInput.Option;


const SearchInputSamples = () => {
  const data = [{ value: "a", text: "a" }, { value: "b", text: "b" }, { value: "c", text: "c" }, { value: "d", text: "d" }]
  const [searchList, setSearchList] = useState(data)
  const handleChange = (event: any) => {
    const arr: any = []
    data.map(item => {
      if (item["value"].indexOf(event.target.value) >= 0) {
        arr.push(item)
      }
    })
    setSearchList(arr)
  }

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
const { Option } = SearchInput;

class SearchInputSamples extends React.Component {
  state = {
    data: [],
  };
  handleChange = value => {};
  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    <SearchInput
      placeholder={this.props.placeholder}
      onChange={this.handleChange}
    >
      {options}
    </Select>
  }
}

ReactDOM.render(
  <>
    <SearchInputSamples placeholder="search input text">
  </>,
  CONTAINER
);`}
      >
        <div className="demo">
          <div>
            <SearchInput
              formatRender={(value, childList, text) => (
                <>
                  <span style={{ paddingLeft: '10px' }}>{text}</span>
                </>
              )}
              placeholder={"搜索"}
              onChange={handleChange}
            >
              {
                searchList.map((d) => (
                  <Option key={d.value} value={d.value}>{d.text}</Option>
                ))
              }
            </SearchInput>
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
            {/* <tr>
              <td>onSearch</td>
              <td>文本框值变化时回调</td>
              <td>function(value: string)</td>
              <td>-</td>
            </tr> */}
            <tr>
              <td>onChange</td>
              <td>input 的 value 变化时，调用此函数</td>
              <td>{`function(value)`}</td>
              <td>-</td>
            </tr>
            {/* <tr>
              <td>notFoundContent</td>
              <td>当下拉列表为空时显示的内容</td>
              <td>ReactNode</td>
              <td>Not Found</td>
            </tr> */}
            {/* <tr>
              <td>filterOption</td>
              <td>是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数</td>
              <td>function(inputValue, option)</td>
              <td>true</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchInputSamples;
