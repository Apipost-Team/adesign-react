import React, { useState, useRef } from 'react';
import './index.less';
import ExampleItem from '../_exampleItem';
import Select from '../../../src/Select';
import SvgTargetTo from './target-to.svg';

const Option = Select.Option;

const SelectSamples = () => {
  const refInput = useRef(null);
  const [menuList, setMenuList] = useState(['aaa', 'bbb', 'ccc']);

  return (
    <div className="select-example">
      <div className="titles">
        <div className="basetitle">选择器 Select</div>
        <div className="desc">用于收纳大量选项的信息录入类组件。</div>
      </div>

      <ExampleItem
        title="基本用法"
        description="基础选择器。"
        codeContent={`
import Select from '../../../src/Select';

const Option = Select.Option;

ReactDOM.render(
  <div>
      <Select>
      <Option value="111">aaa</Option>
      <Option value="222">bbb</Option>
      <Option value="333">ccc</Option>
      <Option value="444">ddd</Option>
      <Option value="555">eee</Option>
      <Option disabled value="666">
        fff
      </Option>
    </Select>

    <Select disabled defaultValue="111">
      <Option value="111">aaa</Option>
      <Option value="222">bbb</Option>
      <Option value="333">ccc</Option>
      <Option value="444">ddd</Option>
      <Option value="555">eee</Option>
      <Option disabled value="666">
        fff
      </Option>
    </Select>
  </div>,
CONTAINER)
      `}
      >
        <Select>
          <Option value="111">aaa</Option>
          <Option value="222">bbb</Option>
          <Option value="333">ccc</Option>
          <Option value="444">ddd</Option>
          <Option value="555">eee</Option>
          <Option disabled value="666">
            fff
          </Option>
        </Select>

        <Select disabled defaultValue="111">
          <Option value="111">aaa</Option>
          <Option value="222">bbb</Option>
          <Option value="333">ccc</Option>
          <Option value="444">ddd</Option>
          <Option value="555">eee</Option>
          <Option disabled value="666">
            fff
          </Option>
        </Select>
      </ExampleItem>

      <ExampleItem
        title="自定义选择器"
        description="指定formatRender可以自定义渲染标签"
        codeContent={`
        import Select from '../../../src/Select';
        import SvgTargetTo from './target-to.svg';

        const Option = Select.Option;

        const refInput = useRef(null);
        const [menuList, setMenuList] = useState(['aaa', 'bbb', 'ccc']);

        ReactDOM.render(
          <div>
          <Select
              formatRender={(value, childList, text) => (
                <>
                  <SvgTargetTo />
                  <span style={{ paddingLeft: '10px' }}>{text}</span>
                </>
              )}
              defaultValue="111"
            >
              <Option value="111">aaa</Option>
              <Option value="222">bbb</Option>
              <Option value="333">ccc</Option>
              <Option value="444">ddd</Option>
              <Option value="555">eee</Option>
              <Option disabled value="666">
                fff
              </Option>
            </Select>

            <Select
              data-module="select-diy-example"
              dropdownRender={(menu) => (
                <>
                  <div className="menulist">{menu}</div>
                  <div className="diybox">
                    <input ref={refInput} className="input" />
                    <div
                      className="button"
                      onClick={() => {
                        if (!refInput?.current?.value) {
                          return;
                        }
                        setMenuList([...menuList, refInput?.current?.value]);
                        if (refInput?.current) {
                          refInput.current.value = '';
                        }
                      }}
                    >
                      添加
                    </div>
                  </div>
                </>
              )}
              defaultValue="111"
            >
              {menuList.map((d, index) => (
                <Option key={index} value={d}>
                  {d}
                </Option>
              ))}
            </Select>
          </div>,
        CONTAINER)


        `}
      >
        <Select
          formatRender={(value, childList, text) => (
            <>
              <SvgTargetTo />
              <span style={{ paddingLeft: '10px' }}>{text}</span>
            </>
          )}
          defaultValue="111"
        >
          <Option value="111">aaa</Option>
          <Option value="222">bbb</Option>
          <Option value="333">ccc</Option>
          <Option value="444">ddd</Option>
          <Option value="555">eee</Option>
          <Option disabled value="666">
            fff
          </Option>
        </Select>

        <Select
          data-module="select-diy-example"
          dropdownRender={(menu) => (
            <>
              <div className="menulist">{menu}</div>
              <div className="diybox">
                <input ref={refInput} className="input" />
                <div
                  className="button"
                  onClick={() => {
                    if (!refInput?.current?.value) {
                      return;
                    }
                    setMenuList([...menuList, refInput?.current?.value]);
                    if (refInput?.current) {
                      refInput.current.value = '';
                    }
                  }}
                >
                  添加
                </div>
              </div>
            </>
          )}
          defaultValue="111"
        >
          {menuList.map((d, index) => (
            <Option key={index} value={d}>
              {d}
            </Option>
          ))}
        </Select>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc" />
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
              <td>outsideClose</td>
              <td>点击外部是否自动关闭</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td>下拉菜单展开触发方式</td>
              <td>'click' | 'hover' | 'contextmenu'</td>
              <td>'click'</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>下拉弹窗默认出现位置</td>
              <td> 'top'| 'top-start' | 'top-end' | 'bottom'| 'bottom-start' | 'bottom-end'</td>
              <td>'bottom-start'</td>
            </tr>
            <tr>
              <td>onVisibleChange</td>
              <td>下拉菜单显示状被态改变回调事件</td>
              <td>{`(visible:boolean) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>外部包装容器样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>外部包装容器Class名称</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>content</td>
              <td>下拉内容</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>children</td>
              <td>触发下拉菜单元素</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectSamples;
