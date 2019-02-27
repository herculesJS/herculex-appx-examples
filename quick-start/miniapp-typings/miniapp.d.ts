
/**
 * 获取到App实例;
 * 
 * 一般用在各个子页面之中获取顶层应用
 */
declare function getApp(): IAppOptions;

/**
 * 函数用于获取当前页面栈的实例;
 * 
 * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面
 */
declare function getCurrentPages(): IPage[];


declare function App(opts: IAppOptions): void;

/**
 * 代表应用的一个页面，负责页面展示和交互;
 * 
 * - 每个页面对应一个子目录，一般有多少个页面，就有多少个子目录。它也是一个构造函数，用来生成页面实例
 * - 页面初始化时，需要提供数据将作为页面的第一次渲染
 */
declare function Page(opts: IPage): void;

interface IPath {
    /**
     * 当前程序的 query
     */
    query: _IObject;

    /**
     * 当前程序的页面地址
     */
    path: string;
}

interface IAppOptions {
    /**
     * 监听程序初始化, 当程序初始化完成时触发，全局只触发一次;
     */
    onLaunch?: (options: IPath) => void;

    /**
     * 监听程序显示, 当程序启动，或从后台进入前台显示时触发;
     */
    onShow?: (options: IPath) => void;
    /**
     * 监听程序隐藏, 当程序从前台进入后台时触发;
     */
    onHide?: () => void;
    /**
     * 监听程序错误, 当程序发生 js 错误时触发;
     */
    onError?: () => void;

    [propName: string]: any;
}

interface _IObject {
    [propName: string]: any;
}

interface IPage {

    /**
     * 函数用于将数据从逻辑层发送到视图层，同时改变对应的this.data的值
     * 
     * 1. 直接修改this.data无效，无法改变页面的状态，还会造成数据不一致。
     * 2. 请尽量避免一次设置过多的数据。
     */
    setData?: (data: any, callBack?: Function) => void;

    /** 
     * 初始数据或返回初始化数据的函数;
     * 
     * data 为对象时，如果你在页面中修改 data 则会影响该页面的不同实例。
     */
    data?: any;

    /**
     * 页面加载时触发;
     */
    onLoad?: (query: _IObject) => void;

    /**
     * 页面初次渲染完成时触发;
     */
    onReady?: () => void;

    /**
     * 页面显示时触发;
     */
    onShow?: () => void;

    /**
     * 页面隐藏时触发;
     */
    onHide?: () => void;

    /**
     * 页面卸载时触发;
     */
    onUnload?: () => void;

    /**
     * 监听用户下拉刷新事件;
     * 
     * 需要在 app.json 的 window 选项中开启pullRefresh，当处理完数据刷新后，my.stopPullDownRefresh可以停止当前页面的下拉刷新
     */
    onPullDownRefresh?: () => void;

    [propName: string]: any;
}

declare function Component(opts: IComponentOptions): void;

interface IComponentOptions {
    [propName: string]: any;
}