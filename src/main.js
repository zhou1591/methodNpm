/*
 * @Date: 2019-09-20 14:35:14
 * @information: 最后更新时间
 */
import { _copyField, _jsonCopy, _readUrlQuery,_strEncryp } from './init_calss'
import { _readFile,_popState,_webpackConsole,_vaileFile } from './public_class'

// 初始化方法
let initCalss = {
    _copyField, //交换字段 
    _jsonCopy, //深拷贝
    _readUrlQuery, //获取url 的query
    _strEncryp,//字符串加星
} 

// 混入对象
let mixinObj = {
    methods: initCalss
}
const install = (vue) => {
    vue.mixin(mixinObj)
}
const zjsMethods = {
    install, //use 方法
    _readFile, //读文件
    _copyField, //交换字段
    _jsonCopy, //深拷贝
    _readUrlQuery, //获取url 的query
    _strEncryp,//字符串加星
    _popState,//hash监听浏览器回退
    _webpackConsole,//控制台动画
    _vaileFile,//使用文件二进制校验文件唯一性
}
export default zjsMethods