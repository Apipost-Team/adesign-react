import { isObject, isString } from "lodash";
import { UploadRequest, RequestOptions } from "./interface";

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

const uploadRequest: UploadRequest = function (options: RequestOptions) {
  const {
    onError = () => undefined,
    onSuccess = () => undefined,
    action = "",
    headers = {},
    name: originName,
    file = "",
    data: originData = {},
    withCookies = false,
  } = options;
  function getValue(value: any) {
    if (typeof value === "function") {
      return value(file);
    }
    return value;
  }
  const name = getValue(originName) as string;
  const data = getValue(originData) as object;
  const xhr = new XMLHttpRequest();
  xhr.onerror = function error(e) {
    onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError(getBody(xhr));
    }

    onSuccess(getBody(xhr));
  };
  const formData = new FormData();
  formData.append(name || "file", file);
  if (isObject(data) && data) {
    Object.keys(data).map((key: string) => formData.append(key, data[key]));
  }
  xhr.open("post", action, true);
  if (withCookies && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  for (const h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);
  return {
    abort() {
      xhr.abort();
    },
  };
};

export default uploadRequest;
