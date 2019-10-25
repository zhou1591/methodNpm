/*
 * @Date: 2019-10-25 14:53:04
 * @information: 最后更新时间
 */
/**
 * @Author: 周靖松
 * @information: 字符串加星
 * @Date: 2019-10-25 14:53:06
 */
export default function strEncryp(str,start,end){
    let subStr =''
    let endLen = str.length
    let len =  end - start
    if(end<0){
        len = endLen + end - 1
    }
    len=len>(endLen-start)?endLen-start:len
    
    while(len--){
        subStr += '*'
    }
    return `${str.substring(0,start)}${subStr}${str.substring(end,endLen)}`
}
