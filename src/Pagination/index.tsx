import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Select from '../Select';
import Input from '../Select';
import { PageProps } from './interface';
import './index.less';

const Option = Select.Option;
const pageSizeList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Pagination = (props: PageProps) => {
  const { className, page = 1, pageSize = 10, total = 0, onchange, onSizeChange } = props;

  const [tempPage, setTempPage] = useState(1);

  const handleJumpPage = () => {
    onchange && onchange(tempPage);
  };

  return (
    <div className={classNames('apipost-pagination', className)}>
      <Select
        value={pageSize}
        onChange={(size) => {
          onSizeChange && onSizeChange(size);
        }}
        autoAdjustWidth={false}
      >
        <>
          {pageSizeList.map((item: number) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </>
      </Select>
      <Button
        type="primary"
        disabled={page === 1}
        style={page === 1 ? { backgroundColor: 'rgba(0, 0, 0, 0.06)', color: '#999999' } : {}}
        onClick={() => onchange && onchange(page - 1)}
      >
        上一页
      </Button>
      <Input
        value={tempPage}
        forceUseValue
        onChange={(val: any) => {
          if (isNaN(+val)) return;
          if (total && +val > total) val = total;
          if (val === '') val = 1;

          setTempPage(val);
        }}
      />
      <Button
        type="primary"
        disabled={page === total}
        style={page === total || total < page ? { backgroundColor: 'rgba(0, 0, 0, 0.06)', color: '#999999' } : {}}
        onClick={() => onchange && onchange(onchange && onchange(page - 1))}
      >
        下一页
      </Button>
      <Button type="primary" onClick={handleJumpPage}>
        跳转
      </Button>
    </div>
  );
};

export default Pagination;
