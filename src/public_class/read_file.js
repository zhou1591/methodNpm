/*
 * @Date: 2019-09-30 14:09:45
 * @information: 最后更新时间
 */
export default async function readFile(model) {
    let file = model.currentTarget.files[0];
    let reader = new FileReader();
    await reader.readAsText(file);
    reader.onload = await function () {
       return this.result
    };
}