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
        let { height, width } = screen
        //根据尺寸进行判断 苹果的型号
        if (height == 812 && width == 375) {
            model = "苹果X"
        } else if (height == 736 && width == 414) {
            model = "iPhone7P - iPhone8P - iPhone6"
        } else if (height == 667 && width == 375) {
            model = "iPhone7 - iPhone8 - iPhone6"
        } else if (height == 568 && width == 320) {
            model = "iPhone5"
        } else {
            model = md.mobile()
        }
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