/*
 * @Date: 2019-10-05 17:26:14
 * @information: 最后更新时间
 */
/**
 * @Author: 周靖松
 * @information: 读取url query
 * @Date: 2019-10-05 17:26:26
 */
export default function readUrlQuery(queryName) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == queryName) {
            return pair[1];
        }
    }
}