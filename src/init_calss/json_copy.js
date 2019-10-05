/*
 * @Date: 2019-10-05 17:26:14
 * @information: 最后更新时间
 */
/**
 * @Author: 周靖松
 * @information: json 深拷贝有缺陷
 * @Date: 2019-10-05 17:26:26
 */
export default function jsonCopy(model){
    return JSON.parse(JSON.stringify(model))
}