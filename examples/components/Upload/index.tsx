import React from 'react';
import './index.less';
import Upload from '../../../src/Upload';
import ExampleItem from '../_exampleItem';

const uploadSamples = () => {
  return (
    <div className="radio-example">
      <div className="titles">
        <div className="basetitle">上传 Upload</div>
        <div className="desc">文件上传</div>
      </div>

      <ExampleItem
        title="基础上传"
        description="最基础的上传。"
        codeContent={`import Upload from '../../../src/Upload';
ReactDOM.render(
  <div>
    <Upload></Upload>
  </div>,
CONTAINER)`}
      >
        <div>
        <Upload></Upload>
        {/* <Upload autoUpload action='https://console-api.apipost.cn/api/project/import_project'
          headers={{
            "token": "5409507ab0bb9c7ebfff3eee38653982d7279eca"
          }
          }></Upload> */}
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Upload</div>
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
              <td>style</td>
              <td>自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>children</td>
              <td>自定义上传按钮</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultFileList</td>
              <td>默认展示文件列表</td>
              <td>UploadItem []</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>禁用状态</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>accept</td>
              <td>上传文件支持类型</td>
              <td><a target="_black" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">支持类型</a></td>
              <td>-</td>
            </tr>
            <tr>
              <td>autoUpload</td>
              <td>选择文件后自动上传</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>是否可以多选文件</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>limit</td>
              <td>最大上传数</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showFilesList</td>
              <td>是否展示上传文件列表</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>onExceedLimit</td>
              <td>超出最大上传数回调方法</td>
              <td>(files?: File[], fileList?: UploadItem[]) => void;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>文件列表修改回调方法</td>
              <td>(files?: UploadItem[], fileList?: UploadItem[]) => void;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onSuccess</td>
              <td>文件上传成功方法</td>
              <td>(xhr, fileList?: UploadItem[]) => void;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onError</td>
              <td>文件上传成功方法</td>
              <td>(xhr, fileList?: UploadItem[]) => void;</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="titles">
        <div className="basetitle"></div>
        <div className="desc">UploadItem</div>
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
              <td>key</td>
              <td>唯一标识</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>originFile</td>
              <td>文件对象</td>
              <td>File</td>
              <td>-</td>
            </tr>
            <tr>
              <td>name</td>
              <td>文件名称</td>
              <td>string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default uploadSamples;
