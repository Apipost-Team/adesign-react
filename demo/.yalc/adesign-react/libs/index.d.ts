import * as React from 'react';
import React__default, { CSSProperties, ReactNode, MouseEvent as MouseEvent$1, InputHTMLAttributes, TextareaHTMLAttributes, ReactDOM, ForwardRefExoticComponent, PropsWithChildren, Component } from 'react';

interface ApipostButtonProps {
    style?: CSSProperties;
    className?: string | string[] | CSSProperties;
    children?: ReactNode;
    prefixCls?: string;
    icon?: ReactNode;
    /**
     * @zh button前置自定义icon
     */
    preFix?: ReactNode;
    /**
     * @zh button后置自定义icon
     */
    afterFix?: ReactNode;
    /**
     * @zh 按钮类型 目前支持默认按钮、确认按钮、连接按钮
     * @defaultValue default
     */
    type?: 'default' | 'primary' | 'link' | 'success' | 'error' | 'warning' | 'info';
    /**
     * @zh 按钮尺寸， 大、中、小、迷你
     * @defaultValue default
     */
    size?: 'mini' | 'small' | 'middle' | 'large';
    /**
     * @zh 按钮圆角类型
     * @defaultValue square
     */
    shape?: 'square' | 'circle' | 'round';
    /**
     * @zh 禁用按钮
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @zh 点击按钮的回调
     */
    onClick?: (e: Event) => void;
}

declare const Button: React__default.ForwardRefExoticComponent<Partial<ApipostButtonProps> & React__default.RefAttributes<HTMLDivElement>>;

interface CardProps {
    extra?: React__default.ReactNode;
    bordered?: boolean;
    style?: React__default.CSSProperties;
    className?: string | string[];
}

declare const Card: React__default.FC<CardProps>;

declare enum CheckStatus {
    UNCHECK = "uncheck",
    CHECKED = "checked",
    HALFCHECK = "halfcheck"
}
interface CheckBoxProps {
    style?: React__default.CSSProperties;
    children?: ReactNode;
    className?: string | string[];
    checked?: CheckStatus;
    defaultChecked?: CheckStatus;
    readOnly?: boolean;
    onChange?: (val: CheckStatus) => void;
    disabled?: boolean;
}

declare const CheckBoxComponent: React__default.FC<CheckBoxProps> & {
    CheckStatus: typeof CheckStatus;
};

interface CollapseProps {
    style?: React__default.CSSProperties;
    className?: string | string[];
    activeKey?: string | string[];
    defaultActiveKey?: string | string[];
    onChange?: (key: string | string[] | null) => void;
}
interface CollapseItemProps {
    name: string;
    headerStyle?: React__default.CSSProperties;
    headerClassName?: string | string[];
    header?: React__default.ReactNode;
}

declare const _default$3: {
    Collapse: React.FC<CollapseProps>;
    CollapseItem: React.FC<CollapseItemProps>;
};

interface DrawerProps {
    style?: CSSProperties;
    className?: string | string[];
    children?: ReactNode;
    /**
     * @zh 抽屉的标题 （为null时不显示）
     */
    title?: ReactNode;
    /**
     * @zh 头部样式
     */
    headerStyle?: CSSProperties;
    /**
     * @zh 抽屉的底部自定义 （为null时不显示）
     */
    footer?: ReactNode;
    /**
     * @zh 底部样式
     */
    footerStyle?: CSSProperties;
    /**
     * @zh 确认按钮文案
     * @defaultValue 确认
     */
    okText?: string;
    /**
     * @zh 取消按钮文案
     * @defaultValue 取消
     */
    cancelText?: string;
    /**
     * @zh 抽屉弹出位置 (top | bottom | right | left)
     * @defaultValue right
     */
    placement?: string;
    /**
     * @zh 抽屉的宽度，`placement`为 `left` `right` 时生效
     * @defaultValue 300
     */
    width?: string | number;
    /**
     * @zh 抽屉的高度 `placement`为 `left` `right` 时生效
     * @defaultValue 300
     */
    height?: string | number;
    /**
     * @zh 是否显示遮罩
     * @defaultValue true
     */
    mask?: boolean;
    /**
     * @zh 点击遮罩关闭
     * @defaultValue true
     */
    maskClosable?: boolean;
    /**
     * @zh 是否显示关闭按钮
     */
    closable?: boolean;
    /**
     * @zh 定位方式是否为fixed
     * @defaultValue true
     */
    fixed?: boolean;
    /**
     * @zh 指定挂载节点
     */
    getContainer?: any;
    onClose?: (e?: any) => void;
    /**
     * @zh 点击确认按钮的回调
     */
    onOk?: (e?: Event) => void;
    /**
     * @zh 关闭弹出框的回调
     */
    onCancel?: (e?: MouseEvent$1 | Event) => void;
    /**
     * @zh 显示隐藏
     */
    visible?: boolean;
}

declare const Drawer: React__default.FC<DrawerProps>;

interface DropdownProps {
    outsideClose?: boolean;
    trigger?: 'click' | 'hover' | 'contextmenu';
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
    onVisibleChange?: (visible: boolean) => void;
    style?: React__default.CSSProperties;
    className?: string | string[];
    content: React__default.ReactElement;
    children: React__default.ReactElement;
    offset: [x: number, y: number];
}

declare const DropDown: React__default.ForwardRefExoticComponent<DropdownProps & React__default.RefAttributes<any>>;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix' | 'className' | 'size'> {
    style?: CSSProperties;
    className?: string | string[];
    defaultValue?: string;
    /**
     * @zh 输入框的值
     */
    value?: string | number;
    /**
     * @zh 输入框大小
     */
    size?: 'mini' | 'small' | 'middle' | 'large';
    /**
     * @zh 输入框提示信息
     */
    placeholder?: string;
    /**
     * @zh 输入框前置DOM元素
     */
    beforeFix?: React__default.ReactNode;
    /**
     * @zh 输入框后置DOM元素
     */
    afterFix?: React__default.ReactNode;
    /**
     * @zh 输入框禁用属性
     */
    disabled?: boolean;
    /**
     * @zh 是否无边框
     * @defaultValue true
     */
    bordered?: boolean;
    /**
     * @zh 输入框错误状态
     */
    error?: boolean;
    /**
     * @zh 输入框只读属性
     */
    readonly?: boolean;
    /**
     * @zh 自动聚焦
     */
    autoFocus?: boolean;
    /**
     * @zh 允许清空input
     */
    allowClear?: boolean;
    /**
     * @zh 强制使用外部传入value渲染
     */
    forceUseValue?: boolean;
    /**
     * @zh 值改变时的回调
     */
    onChange?: (value: string, e: React__default.FormEvent<HTMLInputElement>) => void;
    /**
     * @zh 清除input回调
     */
    onClear?: () => void;
    /**
     * @zh 失去焦点的回调
     */
    onBlur?: (e: React__default.FocusEvent<HTMLInputElement>) => void;
    /**
     * @zh 获取焦点的回调
     */
    onFocus?: (e: React__default.FormEvent<HTMLInputElement>) => void;
    /**
     * @zh 键盘事件的回调
     */
    onKeyDown?: (e: React__default.FormEvent<HTMLInputElement>) => void;
}
interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'className' | 'maxLength'> {
    style?: CSSProperties;
    className?: string | string[];
    /**
     * @zh 文本域的值
     */
    value?: string | number;
    /**
     * @zh 文本域默认值
     */
    defaultValue?: string | number;
    width?: number;
    height?: number;
    /**
     * @zh 文本域行高
     * @defaultValue 20
     */
    lineHeight?: number;
    /**
     * @zh 清除文本域
     */
    allowClear?: boolean;
    /**
     * @zh 最大输入长度
     */
    maxLength?: number;
    /**
     * @zh 根据输入内容自适应高度
     */
    autoSize?: boolean;
    /**
     * @zh 输入框提示信息
     */
    placeholder?: string;
    /**
     * @zh 自动聚焦
     */
    autoFocus?: boolean;
    /**
     * @zh 输入框禁用属性
     */
    disabled?: boolean;
    /**
     * @zh 输入框只读属性
     */
    readonly?: boolean;
    /**
     * @zh 是否无边框
     * @defaultValue true
     */
    bordered?: boolean;
    /**
     * @zh 值改变时的回调
     */
    onChange?: (value?: string, e?: any) => void;
    /**
     * @zh 回车事件回调
     */
    onPressEnter?: (e: any) => void;
    /**
     * @zh 失去焦点的回调
     */
    onBlur?: (e: any) => void;
    /**
     * @zh 获取焦点的回调
     */
    onFocus?: (e: any) => void;
    /**
     * @zh 键盘事件的回调
     */
    onKeyDown?: (e: any) => void;
}

declare const Textarea: React__default.FC<TextareaProps>;

declare const InputComponent: React__default.FC<InputProps> & {
    Textarea: typeof Textarea;
};

interface InputNumberProps {
    style?: CSSProperties;
    className?: string | string[];
    defaultValue?: number;
    /**
     * @zh 输入框的值
     */
    value?: number | string;
    /**
     * @zh 最小值
     * @defaultValue -Infinity
     */
    min?: number;
    /**
     * @zh 最大值
     * @defaultValue Infinity
     */
    max?: number;
    /**
     * @zh 是否禁用
     */
    disabled?: boolean;
    /**
     * @zh 上下键位置 row | column
     * @defaultValue row
     */
    type?: string;
    /**
     * @zh 仅展示值或者允许输入
     * @defaultValue input
     */
    modetype?: string;
    /**
     * @zh 值改变时的回调
     */
    onChange?: (value: string | number, e?: React__default.FormEvent<HTMLInputElement>) => void;
}

declare const InputNumber: React__default.FC<InputNumberProps>;

declare const message: (type: string, text: string, timeout?: number) => void;

interface ModalProps {
    className?: string | string[];
    style?: CSSProperties;
    children?: ReactNode;
    /**
     * @zh 是否显示遮罩
     * @defaultValue true
     */
    mask?: boolean;
    /**
     * @zh 允许弹窗关闭
     */
    maskClosable?: boolean;
    /**
     * @zh showTopClosable
     */
    showTopClosable?: boolean;
    /**
     * 弹框body类名
     */
    bodyClassName?: string | string[];
    /**
     * @zh 弹框header内容
     */
    title?: ReactNode;
    /**
     * 弹框body类名
     */
    headerClassName?: string | string[];
    /**
     * @zh 弹框底部内容
     */
    footer?: ReactDOM;
    /**
     * @zh 底部div类名
     */
    footerClassName?: string | string[];
    /**
     * @zh 弹框是否可见
     */
    visible?: boolean;
    /**
     * @zh 是否允许esc关闭弹窗
     * @defaultValue true
     */
    escToExit?: boolean;
    /**
     * @zh 取消按钮文字
     */
    cancelText?: string;
    /**
     * @zh 点击取消按钮回调
     */
    onCancel?: () => void;
    /**
     * @zh 确认按钮文字
     */
    okText?: string;
    /**
     * @zh 点击确认按钮回调
     */
    onOk?: () => void;
}
interface ConfirmProps {
    /**
     * @zh 标题
     */
    title?: string;
    /**
     * @zh 内容
     */
    content?: string;
    /**
     * @zh 取消按钮文字
     */
    cancelText?: string;
    /**
     * @zh 自定义文字
     */
    diyText?: string;
    /**
     * @zh 确认按钮文字
     */
    okText?: string;
    /**
     * 点击取消按钮回调
     */
    onCancel?: () => void;
    /**
     * 提示框大小设置
     */
    large?: boolean;
    /**
     * 点击确认按钮回调
     */
    onOk?: () => void;
    /**
     * 自定义按钮回调
     */
    onDiy?: () => void;
}
interface ShowProps {
    /**
     * @zh 点击外部关闭
     * @defaultValue true
     */
    outsideClose?: boolean;
    props?: any;
}

interface ModalComponent extends ForwardRefExoticComponent<PropsWithChildren<ModalProps>> {
    confirm: (props: ConfirmProps) => void;
    Show: (props: ShowProps, pos: any, modalRef: any) => void;
}
declare const ExportedModalComponent: ModalComponent;

interface ProgressProps {
    style?: CSSProperties;
    className?: string | string[];
    /**
     * @zh 进度条类型
     */
    type?: 'circle' | 'line';
    /**
     * @zh 剩余进度条颜色
     */
    trailColor?: string;
    /**
     * @zh 是否展示文本
     */
    showText?: boolean;
    /**
     * @zh 百分比
     */
    percent: number;
    /**
     * @zh 进度条状态
     */
    status?: 'success' | 'error' | 'warning' | 'normal';
    /**
     * 进度条宽度
     */
    width?: string | number;
    /**
     * @zh 进度条颜色
     */
    color?: string;
    /**
     * @zh 线宽
     */
    strokeWidth?: number;
}

declare const ProgressRef: React__default.ForwardRefExoticComponent<ProgressProps & React__default.RefAttributes<unknown>>;

interface RadioGroupProps {
    style?: CSSProperties;
    className?: string;
    children: ReactNode;
    /**
     * @zh 选中的值
     */
    value?: any;
    /**
     * @zh 禁用整个单选组
     */
    disabled?: boolean;
    /**
     * @zh 单选组 name属性
     */
    name?: string;
    /**
     * @zh 按钮组类型 button ｜ radio
     * @defaultValue radio
     */
    type?: 'button' | 'radio';
    /**
     * @zh 选择单选框的回调
     */
    onChange?: (value: any) => void;
}
interface RadioProps {
    style?: CSSProperties;
    children: string;
    className?: string;
    /**
     * @zh 单选框具体值
     */
    value?: any;
    /**
     * @zh 是否选中
     */
    checked?: boolean;
    /**
     * @zh 是否禁用
     */
    disabled?: boolean;
    /**
     * @zh 鼠标离开单选框的回掉
     */
    onMouseLeave?: (event: any) => void;
    /**
     * @zh 选择单选框的回调
     */
    onChange?: (value: any) => void;
    onClick?: (value: any) => void;
}

declare function Radio(props: RadioProps): JSX.Element;
declare namespace Radio {
    var displayName: string;
    var defaultProps: {
        checked: boolean;
    };
    var Group: React__default.FC<RadioGroupProps>;
}

type Layout = {
    nodeProps?: any;
    width?: number | undefined;
    height?: number | undefined;
    flex?: number | undefined;
};
type Layouts = {
    [key: string]: Layout;
};
type PanelOffset = {
    width: number;
    height: number;
};
interface ScalePanelProps {
    children?: React__default.ReactNode | React__default.ReactNode[];
    style?: React__default.CSSProperties;
    className?: string | string[];
    direction?: "horizontal" | "vertical";
    layouts?: Layouts;
    defaultLayouts: Layouts;
    onLayoutsChange?: (layouts: Layouts, panelOffset: PanelOffset) => void;
    realTimeRender?: boolean;
    enableOverflow?: boolean;
}
interface ScaleItemProps {
    index?: number;
    flex?: number;
    barLocation?: "start" | "end";
    children: React__default.ReactNode;
    layouts?: Layouts;
    onLayoutChange?: (layout: Layout, index: number) => void;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    enableScale?: boolean;
    direction?: "horizontal" | "vertical";
    className?: string;
    scaling?: boolean;
    onScaling?: (val: boolean) => void;
    panelOffset?: PanelOffset;
    realTimeRender?: boolean;
    enableOverflow?: boolean;
}

declare const _default$2: {
    ScalePanel: React.FC<ScalePanelProps>;
    ScaleItem: React.ForwardRefExoticComponent<ScaleItemProps & React.RefAttributes<any>>;
};

interface SelectProps {
    defaultValue?: string | number;
    value?: string | number;
    onChange?: (value: string | unknown) => void;
    placeholder?: string;
    onVisibleChange?: (visible: boolean) => void;
    labelInValue?: boolean;
    style?: React__default.CSSProperties;
    className?: string | string[];
    popupStyle?: React__default.CSSProperties;
    popupClassName?: string | string[];
    placement: 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    autoAdjustWidth: boolean;
    /**
     * @zh 输入框大小
     */
    size?: 'mini' | 'small' | 'middle' | 'large';
    formatRender?: (value: ReactNode, childList: OptionProps[], text: ReactNode) => ReactNode;
    dropdownRender?: (menu: ReactNode) => ReactNode;
    children: ReactNode;
    disabled?: boolean;
}
interface OptionProps extends React__default.ReactElement {
    style?: CSSProperties;
    className?: string | string[];
    disabled?: boolean;
    value: string | number;
    children?: ReactNode;
}

declare const Option: React__default.FC<OptionProps>;

declare const SelectComponent: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLDivElement>> & {
    Option: typeof Option;
};

interface SpinProps {
    style?: CSSProperties;
    className?: string | string[];
    children?: ReactNode;
    /**
     * @zh 是否为加载状态
     */
    loading?: boolean;
    /**
     * @zh 加载动画的尺寸
     */
    size?: number;
    /**
     * @zh 自定义图标
     */
    icon?: ReactNode;
    /**
     * @zh 自定义元素
     */
    element?: ReactNode;
    /**
     * @zh 自定义文字
     */
    tip?: string | ReactNode;
    /**
     * @zh 延迟显示加载的时间 (ms)
     */
    delay?: number;
    /**
     * @zh 是否使用点类型的动画
     */
    dot?: boolean;
}

declare const SpinComponent: React__default.ForwardRefExoticComponent<SpinProps & React__default.RefAttributes<unknown>>;

interface SwitchProps {
    style?: React__default.CSSProperties;
    className?: string[] | string;
    /**
     * @zh 开关是否打开
     * @en To set checked
     */
    checked?: boolean;
    /**
     * @zh 默认是否选中
     * @en To set default checked
     */
    defaultChecked?: boolean;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;
    /**
     * @zh 点击开关的回调
     * @en Callback when click
     */
    onChange?: (value: boolean, event: any) => void;
    /**
     * @zh 开关的尺寸，有 `small` 和 `default` 可供选择。
     * @en The size of the switch
     */
    size?: 'small' | 'default';
}

declare const Switch: React__default.FC<SwitchProps>;

interface LayoutProps {
    width: number;
}
interface RowSelectionProps {
    columnTitle?: string;
    columnWidth?: number;
    selectedRowKeys?: string[];
    type?: 'checkbox';
    onSelectChange?: (selectedRowKeys: string[], selectedRows: any[]) => void;
    onSelectAll?: (selected: boolean, selectedRows: any[]) => void;
}
interface TableProps {
    data: any[];
    style?: React__default.CSSProperties;
    className?: string | string[];
    showBorder?: boolean;
    columns: any[];
    rowSelection?: RowSelectionProps | undefined;
    rowKey?: string;
    showHeader?: boolean;
    noDataElement?: React__default.ReactNode;
    layouts?: LayoutProps;
    onLayoutsChange?: (newLayout: any) => void;
    renderRow?: (node: any[], renderFn: (rowData: any, index: number) => React__default.ReactElement) => React__default.ReactElement;
    onChange?: (newData: any) => void;
    hasPadding: boolean;
}

declare const Table: React__default.FC<TableProps>;

interface TabPanProps extends React__default.ReactElement {
    id: string;
    style?: React__default.CSSProperties;
    className?: string | string[];
    children?: React__default.ReactNode;
    title: string | React__default.ReactNode;
    removable?: boolean;
    disabled?: boolean;
    itemWidth?: number;
}
interface RenderProps {
    tabsList?: any;
    headerTabItems?: React__default.ReactNode;
    addButton?: React__default.ReactNode;
    scrollButtons?: React__default.ReactNode;
    handleMouseWheel?: (ev: MouseEvent) => void;
    activedContent?: React__default.ReactNode;
    renderScrollItems?: (elements: React__default.ReactNode) => void;
    activeId?: string;
}
interface TabsProps<T> {
    style?: React__default.CSSProperties;
    className?: string | string[];
    defaultActiveId?: string;
    activeId?: string;
    activeIndex?: number;
    draggable?: boolean;
    showAdd?: boolean;
    showScrollBtns?: boolean;
    children?: any;
    elementCache?: boolean;
    /**
     * @zh 标签页类型  默认样式 default ｜ 选项卡样式 card
     * @defaultValue default
     */
    type?: string;
    onChange?: (activeId: string, tabpan: TabPanProps) => void;
    onAddTab?: (e: React__default.MouseEvent) => void;
    onRemoveTab?: (id: string, tabpan: TabPanProps) => void;
    headerRender?: (tabParams: RenderProps) => React__default.ReactNode;
    contentRender?: (tabParams: RenderProps) => React__default.ReactNode;
    itemWidth?: number;
    headerAutoScroll: boolean;
    emptyContent?: React__default.ReactNode;
}

declare const _default$1: {
    Tabs: React.ForwardRefExoticComponent<TabsProps<any> & React.RefAttributes<HTMLDivElement>>;
    TabPan: React.FC<TabPanProps>;
};

interface TooltipProps {
    trigger?: 'click' | 'hover';
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
    style?: React__default.CSSProperties;
    className?: string | string[];
    content: React__default.ReactElement | string;
    children: React__default.ReactElement;
    offset?: [x: number, y: number];
    showArrow?: boolean;
    bgColor?: string;
}

declare const Tooltip: React__default.ForwardRefExoticComponent<TooltipProps & React__default.RefAttributes<any>>;

interface TreeProps {
    style?: React__default.CSSProperties;
    className?: string;
    /**
     * @zh 数据源列表
     */
    dataList?: any[];
    /**
     * @zh 展示层级竖线
     */
    showLine?: boolean;
    /**
     * @zh 是否可以拖拽
     */
    draggable?: boolean;
    /**
     * @zh 树节点是否带复选框
     * @defaultValue false
     */
    enableCheck?: boolean;
    /**
     * @zh 复选框只读 该属性仅在enableCheck为true时生效
     */
    checkboxReadOnly?: boolean;
    /**
     * @zh 是否展开全部节点
     */
    isExpandAllKeys?: boolean;
    /**
     * @zh 默认展开指定节点
     */
    defaultExpandKeys?: string[];
    /**
     * @zh 节点展开触发的回调方法
     */
    onExpandKeysChange?: (_keyArr: string[]) => void;
    /**
     * @zh 默认选中节点， 该属性仅在enableCheck为true时生效
     */
    defaultCheckedKeys?: [];
    /**
     * @zh 当前选中节点， 该属性仅在enableCheck为true时生效
     */
    checkedKeys?: [];
    /**
     * @zh 指定渲染节点 dataList 中对应的字段
     */
    fieldNames?: {
        key?: string;
        title?: string;
        parent?: string;
        children?: string;
    };
    /**
     * @zh 选中复选框回调事件
     */
    onCheck?: () => void;
    /**
     * @zh 自定义树节点
     */
    render?: ReactNode;
    /**
     * @zh 是否显示icon
     */
    showIcon?: boolean;
    /**
     * @zh 点击节点回调方法
     */
    onNodeClick?: () => void;
    /**
     * @zh 多选节点回调方法
     */
    onMultiSelect?: () => void;
    /**
     * @zh 全选全部节回调方法，该属性仅在enableCheck为true时生效
     */
    onCheckAll?: () => void;
    /**
     * @zh 节点右侧内容点击回调方法
     */
    onRightClick?: (e: React__default.MouseEvent, nodeData?: any) => void;
    /**
     * @zh 当前选中节点
     */
    selectedKeys?: string[];
    /**
     * @zh tree外部点击事件
     */
    onOutSideClick?: () => void;
    /**
     * @zh 是否虚拟列表显示
     */
    enableVirtualList?: boolean;
    /**
     * @zh 节点排序
     */
    nodeSort?: any;
    checkLeafNode: (nodeItem: any) => boolean;
    rootFilter?: (pre: any, after: any) => any[];
}

declare const _default: React__default.ForwardRefExoticComponent<TreeProps & React__default.RefAttributes<HTMLDivElement>>;

interface UploadProps {
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
interface UploaderProps {
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
    onChange?: (files?: UploadItem[] | any, fileList?: UploadItem[] | any) => void;
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
     * @zh 单文件上传成功后处理方法
     */
    uploadSuccess?: (res: any) => void;
    /**
     * @zh 通过覆盖默认的上传行为，可以自定义自己的上传实现
     * @en Provide an override for the default xhr behavior for additional customization
     */
    customRequest?: (options: RequestOptions) => UploadRequestReturn | void;
}
interface UploadItem {
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
interface UploadRequestReturn {
    [key: string]: () => void;
}
type RequestOptions = Pick<UploadProps, 'headers' | 'name' | 'data' | 'withCookies'> & {
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

type UploaderState = {
    uploadRequests: {
        [key: string]: UploadRequestReturn;
    };
    uploadList: UploadItem[];
};
declare class Uploader extends Component<UploaderProps, UploaderState> {
    inputRef: HTMLInputElement | null;
    constructor(props: any);
    delFileReq(uid: string): void;
    handleUpload: (file: UploadItem) => Promise<void>;
    hanldeFileChange: (files: File[]) => void;
    delFile: (key: string | number) => void;
    render(): JSX.Element;
}

export { Button, Card, CheckBoxComponent as CheckBox, _default$3 as Collapse, Drawer, DropDown as Dropdown, InputComponent as Input, InputNumber, message as Message, ExportedModalComponent as Modal, ProgressRef as Progress, Radio, _default$2 as Scale, SelectComponent as Select, SpinComponent as Spin, Switch, Table, _default$1 as Tabs, Tooltip, _default as Tree, Uploader as Upload };
