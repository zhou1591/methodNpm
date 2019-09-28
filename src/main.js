/*
 * @Date: 2019-09-20 14:35:14
 * @information: 最后更新时间
 */
import {copyField} from './init_calss'

// 方法对象
let mixinMethod={copyField}

// 混入对象
let mixinObj = {
    methods:mixinMethod
}
const install = (vue) => {
    vue.mixin(mixinObj)
}
const zjsMethods= {
    install,//use 方法
    copyField,//赋值函数
}
export default zjsMethods