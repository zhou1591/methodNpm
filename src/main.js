/*
 * @Date: 2019-09-20 14:35:14
 * @information: 最后更新时间
 */
import { _copyField, _jsonCopy, _readUrlQuery } from './init_calss'
import { _readFile } from './public_class'

// 初始化方法
let initCalss = {
    _copyField, //交换字段
    _jsonCopy, //深拷贝
    _readUrlQuery, //获取url 的query
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
}
export default zjsMethods