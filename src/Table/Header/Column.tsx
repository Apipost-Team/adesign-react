import React, { useEffect, useState, useContext, useRef } from 'react';
import { cloneDeep, isArray, isFunction } from 'lodash';
import ReactDom from 'react-dom';
import SplitBar from '../SplitBar';
import Context from '../Context';
import {
  CaretDown as CaretDownSvg,
  CaretUp as CaretUpSvg,
  Down as DownSvg,
} from '../../../icons/index';
import Tooltip from '../../Tooltip';
import Dropdown from '../../Dropdown';
import Button from '../../Button';

const Column = (props) => {
  const { colItem, colIndex } = props;
  const {
    refTable,
    layouts,
    handleLayoutChange = () => undefined,
    tableData,
    setTableData,
    data, // 数据源
  } = useContext(Context);

  const tableHeight = refTable?.current?.offsetHeight || 0;
  const defaultLayout = layouts?.[colIndex];
  const refDropdown = useRef(null);
  const [layout, setLayout] = useState({
    width: colItem.width !== undefined ? colItem.width : 0,
  }); // 组件布局
  const [sortDirections, setSortDirections] = useState('init');
  const [filtersShow, setFiltersShow] = useState(false);
  const [filtersSelect, setFiltersSelect] = useState(undefined);
  useEffect(() => {
    if (defaultLayout !== undefined) {
      setLayout(defaultLayout);
    }
  }, [defaultLayout]);
  const onClickOutside = (event) => {
    if (refDropdown === null || refDropdown.current === null) {
      return;
    }
    // 点击区域外部关闭
    const eleTrigger = ReactDom.findDOMNode(refDropdown.current);
    // const elePopup = ReactDom.findDOMNode(this.popupRef);
    const isInsideClick = [eleTrigger].some((ref) => ref?.contains(event?.target)) || false;
    if (isInsideClick !== true) {
      setFiltersShow(false);
    }
  };
  useEffect(() => {
    // 注册页面点击事件
    document.body.addEventListener('mousedown', onClickOutside, false);
    return () => {
      document.body.removeEventListener('mousedown', onClickOutside, false);
    };
  }, []);
  const onLayoutChange = (newLayout) => {
    if (newLayout.width < 30) {
      newLayout.width = 30;
    }
    setLayout(newLayout);
    handleLayoutChange(newLayout, colIndex);
  };
  const tdClick = () => {
    if (isFunction(colItem?.sorter)) {
      if (isArray(tableData)) {
        let tempTableData = cloneDeep(tableData);
        if (sortDirections === 'init') {
          tempTableData.sort((a, b) => colItem.sorter(a, b));
          setSortDirections('ascend');
        } else if (sortDirections === 'ascend') {
          tempTableData.sort((a, b) => colItem.sorter(b, a));
          setSortDirections('descend');
        } else if (sortDirections === 'descend') {
          tempTableData = data;
          setSortDirections('init');
        }

        setTableData(tempTableData);
      }
    }
  };
  return (
    // <Tooltip
    //   content={
    //     sortDirections === 'init'
    //       ? '点击升序'
    //       : sortDirections === 'ascend'
    //       ? '点击降序'
    //       : '取消排序'
    //   }
    //   placement="top"
    // >
    <td
      className="apipost-table-td"
      style={{
        width: layout?.width > 0 ? `${layout?.width}px` : 'auto',
      }}
      onClick={tdClick}
    >
      <span className="apipost-table-cell">{colItem.title || ''}</span>
      {isArray(colItem?.filters) && (
        // <Dropdown
        //   ref={refDropdown}
        //   content={
        //     <>
        //       <div>123123</div>
        //       {/* {colItem?.filters.map((i, index) => {
        //       return (
        //         <div
        //           key={i?.key || index}
        //           className="special"
        //           onClick={() => {
        //             // refDropdown.current?.setPopupVisible(false);
        //             if (isFunction(colItem?.onFilter)) {
        //               setTableData.filter((item: any) => colItem.onFilter(i.value, item));
        //             }
        //           }}
        //         >
        //           {i.value}
        //         </div>
        //       );
        //     })} */}
        //     </>
        //   }
        //   offset={[0, 0]}
        // >
        //   <DownSvg width={12} />
        // </Dropdown>
        <span
          ref={refDropdown}
          className={`apipost-table-filters ${
            filtersSelect !== undefined ? 'apipost-table-filters-select' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setFiltersShow(!filtersShow);
          }}
        >
          <DownSvg width={12} />
          {filtersShow && (
            <div className="apipost-table-filters-down">
              {colItem?.filters.map((i, index) => {
                return (
                  <div
                    key={i?.key || index}
                    className={`apipost-table-filters-down-item ${
                      filtersSelect === (i?.key || index) ? 'filters-down-item-active' : ''
                    }`}
                    onClick={() => {
                      setFiltersShow(false);
                      if (isFunction(colItem?.onFilter)) {
                        setFiltersSelect(i?.key || index);
                        setTableData(
                          data.filter((item: any) =>
                            colItem.onFilter(i?.key || index, i.value, item)
                          )
                        );
                      }
                    }}
                  >
                    {i.value}
                  </div>
                );
              })}
              <div
                className="apipost-table-filters-down-item"
                onClick={() => {
                  setTableData(data);
                  setFiltersSelect(undefined);
                }}
              >
                <Button type="warning" size="mini">
                  重置
                </Button>
              </div>
            </div>
          )}
        </span>
      )}
      {isFunction(colItem?.sorter) && isArray(tableData) && (
        <span className="apipost-table-sort">
          <CaretUpSvg
            className={`apipost-table-sort-up ${
              sortDirections === 'ascend' ? 'apipost-table-sort-select' : ''
            }`}
            width={10}
          />
          <CaretDownSvg
            className={`apipost-table-sort-down ${
              sortDirections === 'descend' ? 'apipost-table-sort-select' : ''
            }`}
            width={10}
          />
        </span>
      )}
      {colItem.enableResize && (
        <SplitBar layout={layout} tableHeight={tableHeight} onLayoutChange={onLayoutChange} />
      )}
    </td>
    // </Tooltip>
  );
};

export default Column;
