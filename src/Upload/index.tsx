import isNumber from 'lodash/isNumber';
import { v4 as uuidv4 } from 'uuid';
import findIndex from 'lodash/findIndex';
import React, { ChangeEvent, Component, HtmlHTMLAttributes } from 'react';
import uploadRequest from './uploadRequest';
import { UploaderProps, UploadItem, UploadRequestReturn } from './interface';
import Button from '../Button';

type UploaderState = {
  uploadRequests: { [key: string]: UploadRequestReturn };
  uploadList: UploadItem[];
};

class Uploader extends Component<UploaderProps, UploaderState> {
  inputRef: HTMLInputElement | null = null;

  constructor(props: any) {
    super(props);

    this.state = {
      uploadRequests: {},
      uploadList: [],
    };
  }

  delFileReq(uid: string) {
    const newValue = { ...this.state.uploadRequests };
    delete newValue[uid];
    this.setState({ uploadRequests: newValue });
  }

  handleUpload = async (file: UploadItem) => {
    const { action, headers, name, data, withCookies, customRequest } = this.props;

    const onSuccess = (response?: object) => {
      console.log(response);
      // const targetFile = this.getTargetFile(file);
      // if (targetFile) {
      //   targetFile.status = STATUS.success;
      //   // 传入的响应将会作为 response 字段被附加到上传列表中对应的文件
      //   targetFile.response = response;
      //   this.updateFileStatus(targetFile);
      // }
      // this.deleteReq(file.uid);
    };

    const onError = (response?: object) => {
      console.log(response);
      // const targetFile = this.getTargetFile(file);
      // if (targetFile) {
      //   targetFile.status = STATUS.fail;
      //   // 传入的响应将会作为 response 字段被附加到上传列表中对应的文件
      //   targetFile.response = response;
      //   this.updateFileStatus(targetFile);
      // }
      // this.deleteReq(file.uid);
    };

    const options = {
      onSuccess,
      onError,
      headers,
      name,
      file: file.originFile,
      data,
      withCookies,
    };

    let request;
    if (action) {
      request = uploadRequest({ ...options, action });
    } else if (customRequest) {
      request = await customRequest(options);
    }

    console.log(request);
    // 更新上传状态
    // this.updateFileStatus(file);
  };

  hanldeFileChange = (files: File[]) => {
    const { limit, fileList = [], onExceedLimit, autoUpload = false, onChange } = this.props;
    const { uploadList } = this.state;

    const changeFilesList: UploadItem = [];
    if (isNumber(limit) && limit < fileList.length + files.length) {
      return onExceedLimit && onExceedLimit(files, fileList);
    }
    files.forEach((file, index) => {
      const uploadItem: UploadItem = {
        onlyKey: uuidv4(),
        originFile: file,
        name: file.name,
        key: uuidv4(),
        // path: file.path,
      };
      if (autoUpload) {
        this.handleUpload(uploadItem);
      }
      changeFilesList.push(uploadItem);
    });
    const currentFilesList = fileList.concat(changeFilesList, uploadList);
    onChange && onChange(currentFilesList, fileList);
    this.setState({ uploadList: currentFilesList });
  };

  delFile = (key: string | number) => {
    const { uploadList } = this.state;
    const delIndex = findIndex(uploadList, { key });
    console.log(delIndex);
  };

  render() {
    const { accept, multiple, children, disabled, showFilesList = true } = this.props;
    const { uploadList } = this.state;
    return (
      <div className="apipost-upload">
        {children ? (
          <div
            onClick={() => {
              !disabled && this.inputRef && this.inputRef.click();
            }}
          >
            {children}
          </div>
        ) : (
          <Button
            type="primary"
            className=""
            onClick={() => {
              !disabled && this.inputRef && this.inputRef.click();
            }}
          >
            选择文件
          </Button>
        )}
        <input
          style={{ display: 'none' }}
          ref={(node) => (this.inputRef = node)}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files) {
              // Array.from(files);
              this.hanldeFileChange([].slice.call(files));
              if (this.inputRef) this.inputRef.value = '';
            }
          }}
        />
        {showFilesList && (
          <div>
            {uploadList.map((item) => {
              return (
                <div key={item.key}>
                  {item.name}
                  {/* <Button
                    onClick={() => {
                      this.delFile(item.key);
                    }}
                  >
                    删除
                  </Button> */}
                </div>
              );
            })}
            <div></div>
          </div>
        )}
      </div>
    );
  }
}

export default Uploader;
