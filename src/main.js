/*
 * @Date: 2019-09-20 14:35:14
 * @information: 最后更新时间
 */
import initCalss from './init_calss'
import publicClass from './public_class'
console.log(initCalss,publicClass)
// 混入对象
let mixinObj = {
    methods:initCalss
}
console.log(mixinObj)
const install = (vue) => {
    vue.mixin(mixinObj)
}
const zjsMethods= {
    install,//use 方法
    ...initCalss,//初始化方法
    ...publicClass,//公共方法
}
console.log(zjsMethods)

export default zjsMethods