import React from "react";
import { Scale } from "adesign-react";
import "./index.less";
import ExampleItem from "../_exampleItem";

const { ScalePanel, ScaleItem } = Scale;
const ScaleSamples = () => {
  return (
    <div className="scale-example">
      <div className="titles">
        <div className="basetitle">拖拽 Scale</div>
        <div className="desc">页面常用组件，调整功能模块整体布局</div>
      </div>

      <ExampleItem
        title="左右双栏拖动"
        description="最基础的拖动功能"
        codeContent={`import ScalePanel from "../../src/ScalePanel";
import ScaleItem from "../../src/ScaleItem";

ReactDOM.render(
  <div style={{height:'200px',width:'100%',border:'1px solid #eeeeee', background:'#f1f1f1' }}>
  <ScalePanel
    onLayoutsChange={(layouts, panelOffset) => {
      console.log(layouts, panelOffset);
    }}
    defaultLayouts={{ 0: { width: 150 }, 1: { flex: 1 } }}
  >
    <ScaleItem minWidth={40}>这里是左侧的内容</ScaleItem>
    <ScaleItem enableScale={false} minWidth={100}>
      这里是右侧的内容
    </ScaleItem>
  </ScalePanel>
  </div>,
CONTAINER)`}
      >
        <div
          style={{
            height: "200px",
            width: "100%",
            border: "1px solid #eeeeee",
            background: "#f1f1f1",
          }}
        >
          <ScalePanel
            onLayoutsChange={(layouts, panelOffset) => {
              console.log(layouts, panelOffset);
            }}
            defaultLayouts={{ 0: { width: 150 }, 1: { flex: 1 } }}
          >
            <ScaleItem minWidth={40}>这里是左侧的内容</ScaleItem>
            <ScaleItem enableScale={false} minWidth={100}>
              这里是右侧的内容
            </ScaleItem>
          </ScalePanel>
        </div>
      </ExampleItem>

      <ExampleItem
        title="左右三栏拖动"
        description="支持多栏拖动功能"
        codeContent={`import ScalePanel from "../../src/ScalePanel";
import ScaleItem from "../../src/ScaleItem";

ReactDOM.render(
  <div style={{height:'200px',width:'100%',border:'1px solid #eeeeee', background:'#f1f1f1' }}>
  <ScalePanel defaultLayouts={{ 0: { width: 150 }, 1: { width: 150 }, 2: { flex: 1 } }}>
    <ScaleItem minWidth={40}>left(最小宽度是40)</ScaleItem>
    <ScaleItem minWidth={100}>center(最小宽度是100)</ScaleItem>
    <ScaleItem enableScale={false} minWidth={100}>
      right(最小宽度是100)
    </ScaleItem>
  </ScalePanel>
  </div>,
CONTAINER)`}
      >
        <div
          style={{
            height: "200px",
            width: "100%",
            border: "1px solid #eeeeee",
            background: "#f1f1f1",
          }}
        >
          <ScalePanel defaultLayouts={{ 0: { width: 150 }, 1: { width: 150 }, 2: { flex: 1 } }}>
            <ScaleItem minWidth={40}>left(最小宽度是40)</ScaleItem>
            <ScaleItem minWidth={100}>center(最小宽度是100)</ScaleItem>
            <ScaleItem enableScale={false} minWidth={100}>
              right(最小宽度是100)
            </ScaleItem>
          </ScalePanel>
        </div>
      </ExampleItem>

      <ExampleItem
        title="上下拖动"
        description="支持上下方向拖动功能"
        codeContent={`import ScalePanel from "../../src/ScalePanel";
import ScaleItem from "../../src/ScaleItem";

ReactDOM.render(
  <div style={{height:'400px',width:'100%',border:'1px solid #eeeeee', background:'#f1f1f1' }}>
  <ScalePanel
    direction="vertical"
    defaultLayouts={{ 0: { height: 100 }, 1: { height: 150 }, 2: { flex: 1 } }}
  >
      <ScaleItem minHeight={40}>top(最小高度是40)</ScaleItem>
      <ScaleItem minHeight={100}>middle(最小宽度是100)</ScaleItem>
      <ScaleItem enableScale={false} minHeight={100}>
        bottom(最小宽度是100)
      </ScaleItem>
  </ScalePanel>
  </div>,
CONTAINER)`}
      >
        <div
          style={{
            height: "400px",
            width: "100%",
            border: "1px solid #eeeeee",
            background: "#f1f1f1",
          }}
        >
          <ScalePanel
            direction="vertical"
            defaultLayouts={{ 0: { height: 100 }, 1: { height: 150 }, 2: { flex: 1 } }}
          >
            <ScaleItem minHeight={40}>top(最小高度是40)</ScaleItem>
            <ScaleItem minHeight={100}>middle(最小宽度是100)</ScaleItem>
            <ScaleItem enableScale={false} minHeight={100}>
              bottom(最小宽度是100)
            </ScaleItem>
          </ScalePanel>
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc"></div>
      </div>
      <div className="doc-desc">
        <div className="second-title">IScalePanel</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>children</td>
              <td>拖拽组件内子Item</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>拖拽容器样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>拖拽容器class类名</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>容器内子Item排列方向</td>
              <td>'horizontal' | 'vertical'</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onLayoutsChange</td>
              <td>容器内子元素大小变化后回调事件</td>
              <td>{`(layouts: Layouts, panelOffset: PanelOffset) => void`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">ScaleItemProps</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>index</td>
              <td>子项index序号</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>flex</td>
              <td>当其他子项已占据空间后，剩余分配空间占用比例</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>barLocation</td>
              <td>分割条位置</td>
              <td>"start" | "end"</td>
              <td>end</td>
            </tr>
            <tr>
              <td>children</td>
              <td>容器内子元素</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>layouts</td>
              <td>容器布局信息</td>
              <td>Layouts</td>
              <td>-</td>
            </tr>
            <tr>
              <td>minWidth</td>
              <td>最小可调整宽度</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>maxWidth</td>
              <td>最大可调整宽度</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>minHeight</td>
              <td>最小可调整高度</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>maxHeight</td>
              <td>最大可调整高度</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>enableScale</td>
              <td>是否可拖拽</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>onLayoutChange</td>
              <td>当前子元素拖拽回调事件</td>
              <td>{`(layout: ILayout) => void`}</td>
              <td>true</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>容器内子Item排列方向</td>
              <td>'horizontal' | 'vertical'</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>子项容器class类名</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>scaling</td>
              <td>容器是否正在拖拽中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onScaling</td>
              <td>子项item拖拽时回调事件</td>
              <td>{`(val: boolean) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>panelOffset</td>
              <td>父容器布局信息</td>
              <td>PanelOffset</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">SplitBarProps</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>onScaling</td>
              <td>调整layout时状态回调事件</td>
              <td>{`(scaleData: ScaleData | undefined) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>barLocation</td>
              <td>拖拽条位置</td>
              <td>'start' | 'end'</td>
              <td>'end'</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">Layout</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>nodeProps</td>
              <td>layout节点参数信息</td>
              <td>any</td>
              <td>-</td>
            </tr>
            <tr>
              <td>width</td>
              <td>layout容器宽度</td>
              <td>number | undefined</td>
              <td>-</td>
            </tr>
            <tr>
              <td>height</td>
              <td>layout容器高度</td>
              <td>number | undefined</td>
              <td>-</td>
            </tr>
            <tr>
              <td>flex</td>
              <td>layout容器是否自动占用剩余空间</td>
              <td>number | undefined</td>
              <td>undefined</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">PanelOffset</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>

            <tr>
              <td>width</td>
              <td>layout容器宽度</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>height</td>
              <td>layout容器高度</td>
              <td>number</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScaleSamples;
