import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import isArray from 'lodash/isArray';
import { UploadItem, UploadProps } from './interface';

const concatFile = function (filesList: UploadItem[]): { [key: string]: UploadItem } {
  const filesObj: any = {};
  if (!isArray(filesList)) {
    return filesObj;
  }
  filesList.forEach((file, index) => {
    if (file.key) {
      filesObj[file.key] = { ...file };
    } else {
      const key = uuidv4();
      filesObj[file.key] = {
        key,
        ...file,
      };
    }
  });
  return filesObj;
};

function Upload(props: UploadProps) {
  return <div></div>;
}

export default Upload;
