/*
 * @Date: 2019-09-30 14:09:45
 * @information: 最后更新时间
 */
export default async function readFile(model) {
    // 获取文件流
    let file = model.currentTarget.files[0];
    // 创建FileReader实例
    let reader = new FileReader();
    // 读文件
    await reader.readAsText(file);
    reader.onload = await function () {
        // 返回结果
        return this.result
    };
}