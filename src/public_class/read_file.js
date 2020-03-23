/*
 * @Date: 2019-09-30 14:09:45
 * @information: 最后更新时间
 */
export default function readFile(model) {
    return new Promise((resolve, reject) => {
        // 谷歌
        if (window.FileReader) {
            // 获取文件流
            let file = model.currentTarget ? model.currentTarget.files[0] : model;
            // 创建FileReader实例
            let reader = new FileReader();
            // 读文件
            reader.readAsText(file);
            reader.onload = () => {
                resolve(reader.result)
            }
        }
        //支持IE 7 8 9 10
        else if (typeof window.ActiveXObject != 'undefined') {
            let xmlDoc;
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            resolve(xmlDoc.load(model))
        }
        //支持FF
        else if (document.implementation && document.implementation.createDocument) {
            let xmlDoc;
            xmlDoc = document.implementation.createDocument("", "", null);
            xmlDoc.async = false;
            resolve(xmlDoc.load(model))
        }
    })
}