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

### _vaileFile ，//使用文件二进制校验文件唯一性

    当有业务需要上传oss 对象存储的时候，为了避免同一个文件（视频，音频，图片，压缩包等），有可能其他人复制或者改名字等等，造成文件重复上传，大量占用空间，写了一个校验文件二进制的方法


    //首先引入这个类

    import { _vaileFile } from 'zjsmethods'

    //  然后在你需要判断oss 是否有该文件的时候

    new _vaileFile('file对象').vaildArrayBuffer().then(res=>{
        console.log(res)
        // 继续上传 或者 向后端请求已经存在的文件url
    })

    // new 这个类之后 有一个vaildArrayBuffer 方法 他返回一个promise ,里边返回值是一个md5的字符串，这个是这个文件的唯一标识

