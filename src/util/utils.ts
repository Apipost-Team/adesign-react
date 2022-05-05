export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 判断数据类型
export const ruleType = (data: any) => {
  const d = Object.prototype.toString.call(data);
  return d.substr(8, d.length - 9);
};
