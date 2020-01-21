<!--
 * @Date: 2019-10-17 19:10:13
 * @information: 最后更新时间
 -->
# 常用方法包

> 方法说明




### _copyField,//交换字段


    let model = {
        from:el,
        to:this.form.userSourceList[index]={},
        config:{
            address:'sourceAddress',
            sourceCustomerName:'sourceName'
        }
    }
    this._copyField(model)

    从from这个对象上边吧 config 后边的字段赋值给 to 这个对象上对应的 config 前边的字段


### _jsonCopy,//深拷贝



    this.form = this._jsonCopy(this.tableRow)

    深拷贝，顾名思义，值是undefined的话  字段会消失




### _readUrlQuery,//获取url 的query

    let queryName = this._readUrlQuery('queryName')

    会从url  获取到 字段queryName的值


### _readFile,//读文件

    let text = this._readFile(model)

    input里边把文件传进去 ， 可以得到文件里边的内容


### _strEncryp,//字符串加星

    let str = '1234567890'
    _strEncryp(str,3,6)

    // 123***7890

    第一个是字符串，第二个起始下标，第三个结束下标

### _popState ，//hash路由下边监听浏览器回退

    import {_popState } from 'zjsmethods'

    引入之后在 想要监听得vue文件里边进行混入

    mixins:[ _popState ] ;

    然后浏览器回滚得时候会触发 popstateChange 方法 ， 没有的话会默认行为

