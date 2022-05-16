import React from 'react';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import InputNumber from './components/InputNumber';
import Dropdown from './components/Dropdown';
import Scale from './components/Scale';
import Switch from './components/Switch';
import Radio from './components/Radio';
import Message from './components/Message';
import Drawer from './components/Drawer';
import Modal from './components/Modal';
import Select from './components/Select';
import Tooltip from './components/Tooltip';
import Tree from './components/Tree';
import Spin from './components/Spin';
import Upload from './components/Upload';
import Tabs from './components/Tabs';
import Table from './components/Table';
import IconFont from './components/IconFont';
import Color from './components/Color';
import Card from './components/Card';
import Collapse from './components/Collapse';
import Progress from './components/Progress';
import SearchInput from './components/SearchInput';

export const Menus = [
  {
    path: '/color',
    key: 'color',
    name: '颜色 color',
    elements: <Color />,
  },
  {
    path: '/iconfont',
    key: 'iconfont',
    name: '字体图标 IconFont',
    elements: <IconFont />,
  },
  {
    path: '/button',
    key: 'button',
    name: '按钮 Button',
    elements: <Button />,
  },
  {
    path: '/checkbox',
    key: 'checkbox',
    name: '复选框 CheckBox',
    elements: <CheckBox />,
  },
  {
    path: '/input',
    key: 'input',
    name: '文本框 Input',
    elements: <Input />,
  },
  {
    path: '/inputNumber',
    key: 'inputNumber',
    name: '数字输入框 InputNumber',
    elements: <InputNumber />,
  },
  {
    path: '/dropdown',
    key: 'dropdown',
    name: '下拉菜单 Dropdown',
    elements: <Dropdown />,
  },
  {
    path: '/scale',
    key: 'scale',
    name: '拖拽 Scale',
    elements: <Scale />,
  },
  {
    path: '/switch',
    key: 'switch',
    name: '开关 Switch',
    elements: <Switch />,
  },
  {
    path: '/radio',
    key: 'radio',
    name: '单选框 Radio',
    elements: <Radio />,
  },
  {
    path: '/select',
    key: 'select',
    name: '选择器 Select',
    elements: <Select />,
  },

  {
    path: '/modal',
    key: 'modal',
    name: '弹出窗口 Modal',
    elements: <Modal />,
  },
  {
    path: '/message',
    key: 'message',
    name: '消息提示 Message',
    elements: <Message />,
  },
  {
    path: '/drawer',
    key: 'drawer',
    name: '抽屉 Drawer',
    elements: <Drawer />,
  },

  {
    path: '/tooltip',
    key: 'tooltip',
    name: '文字气泡 Tooltip',
    elements: <Tooltip />,
  },
  {
    path: '/tree',
    key: 'tree',
    name: '树 Tree',
    elements: <Tree />,
  },
  {
    path: '/tabs',
    key: 'tabs',
    name: '标签页 Tabs',
    elements: <Tabs />,
  },
  {
    path: '/spin',
    key: 'spin',
    name: '加载中 Spin',
    elements: <Spin />,
  },
  {
    path: '/upload',
    key: 'upload',
    name: '上传组件 Upload',
    elements: <Upload />,
  },
  {
    path: '/table',
    key: 'table',
    name: '表格组件 Table',
    elements: <Table />,
  },
  {
    path: '/card',
    key: 'card',
    name: '卡片 Card',
    elements: <Card />,
  },
  {
    path: '/collapse',
    key: 'collapse',
    name: '折叠面板 Collapse',
    elements: <Collapse />,
  },
  {
    path: '/progress',
    key: 'progress',
    name: '进度条 Progress',
    elements: <Progress />,
  },
  {
    path: '/searchInput',
    key: 'searchInput',
    name: '搜索 SearchInput',
    elements: <SearchInput />,
  },
];

export default Menus;
