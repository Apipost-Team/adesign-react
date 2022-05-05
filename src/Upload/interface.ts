import { CSSProperties, ReactNode } from 'react';

export interface UploadProps {
  style?: CSSProperties;
  className?: string | string[];

  /**
   * @zh 默认的文件列表
   */
  defaultFileList?: UploadItem[];

  /**
   * @zh 文件列表
   */
  fileList?: UploadItem[];

  /**
   * @zh 允许上传文件类型 (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
   */
  accept?: string;

  /**
   * @zh 是否选中文件后自动上传
   * @defaultValue false
   */
  autoUpload?: boolean;

  [key: string]: any;
}

export interface UploaderProps {
  /**
   * 自定义文件上传节点
   */
  children?: ReactNode;

  /**
   * @zh 允许文件上传类型
   */
  accept?: string;

  /**
   * @zh 是否允许多选文件
   * @defaultValue false
   */
  multiple?: boolean;

  /**
   * @zh 禁用文件上传
   */
  disabled?: boolean;

  /**
   * @zh 是否自动上传
   * @defaultValue false
   */
  autoUpload?: boolean;

  /**
   * @zh 最大上传数
   */
  limit?: number;

  /**
   * @zh 默认文件上传列表
   */
  fileList?: UploadItem[];

  /**
   * @zh 是否展示文件了列表
   * @defaultValue true
   */
  showFilesList?: boolean;

  /**
   * @zh 超出最大上传数回调函数
   */
  onExceedLimit?: (files?: File[], fileList?: UploadItem[]) => void;

  /**
   * @zh 文件列表修改回调函数
   */
  onChange?: (files?: UploadItem[], fileList?: UploadItem[]) => void;
  /**
   * @zh 上传文件地址
   */
  action?: string;
  /**
   * @zh 上传时使用的 headers
   */
  headers?: object;
  /**
   * @zh 上传文件字段名
   */
  name?: string;

  /**
   * @zh 上传文件其他body参数
   */
  data?: object | ((any: any) => object);

  /**
   * @zh 上传是否带Cookie
   */
  withCookies?: boolean;

  /**
   * @zh 通过覆盖默认的上传行为，可以自定义自己的上传实现
   * @en Provide an override for the default xhr behavior for additional customization
   */
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void;
}

export interface UploadItem {
  /**
   * @zh 文件对象
   */
  originFile?: File;

  /**
   * @zh 文件路径
   */
  url?: string;

  [key: string]: any;
}

export interface UploadRequestReturn {
  [key: string]: () => void;
}
export type RequestOptions = Pick<UploadProps, 'headers' | 'name' | 'data' | 'withCookies'> & {
  /** 更新当前文件的上传进度 。percent: 当前上传进度百分比 */
  onProgress?: (percent: number, event?: ProgressEvent) => void;
  /** 上传成功后，调用onSuccess方法，传入的response参数将会附加到当前上传文件的reponse字段上 */
  onSuccess?: (response?: any) => void;
  /** 上传失败后，调用onError方法，传入的 response 参数将会附加到当前上传文件的response字段 */
  onError?: (response?: any) => void;
  /** 当前上传文件 */
  file?: File;
  action?: string;
};

export type UploadRequest = (options: RequestOptions) => UploadRequestReturn | void;
