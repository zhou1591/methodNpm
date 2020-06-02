/*
 * @Date: 2020-06-02 11:37:12
 * @information: 最后更新时间
 */
import MobileDetect from 'mobile-detect'
export default function getPhone_v() {
    let userAgentObj = navigator.userAgent; //获取userAgent信息
    let md = new MobileDetect(userAgentObj); //初始化mobile-detect
    let os = md.os(); //获取系统
    let model = "";
    let version = ''
    if (os == "iOS") { //ios系统的处理
        version = md.version("iPhone")
        model = md.mobile();
    } else if (os == "AndroidOS") { //Android系统的处理
        version = md.version("Android")
        let versionObj = userAgentObj.split(";").filter(el => el.indexOf("Build/") > 0);
        if (versionObj.length) {
            versionObj = versionObj[0]
            model = versionObj.substring(0, versionObj.indexOf("Build/"));
        }
    }
    return {
        os,
        version,
        model,
        message: `系统：${os},版本：${version},手机型号：${model}`
    }
}