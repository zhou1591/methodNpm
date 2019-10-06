/*
 * @Date: 2019-09-20 14:35:14
 * @information: 最后更新时间
 */
import {_copyField,_jsonCopy} from './init_calss'
import {_readFile} from './public_class'

// 方法对象
let mixinMethod={_copyField,_jsonCopy}

// 混入对象
let mixinObj = {
    methods:mixinMethod
}
const install = (vue) => {
    vue.mixin(mixinObj)
}
const zjsMethods= {
    install,//use 方法
    _copyField,//赋值函数
    _readFile,//读文件
    _jsonCopy
}
export default zjsMethods
