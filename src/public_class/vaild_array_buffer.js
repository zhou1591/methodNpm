/*
 * @Date: 2020-03-22 16:36:37
 * @information: 最后更新时间
 */
import md5 from 'md5'
export default class vaileFile{
    constructor(file){
        this.file = file
        // 每次截取多少二进制
        this.whileMax = Math.floor(file.size / 10 > 10240 * 1024 ?  10240 * 1024 : file.size / 10);
        // 循环截取多少次
        this.whileNumber = file.size <= 10240 * 1024 ? 10 : Math.ceil(file.size/this.whileMax)
        // 二进制的截取长度，超出10M后 每10M 截取一部分，最多10M
        this.sliceEnd = Math.floor(1024 * 10240 / file.size * 100 / this.whileNumber * this.whileMax)
        this.sliceEnd = this.whileNumber>10?this.sliceEnd:10240 * 1024 
        // 转换二进制的长度
        this.start = 0 
        this.end = 0;
    }
    /**
     * @Author: 周靖松
     * @Date: 2020-03-22 15:53:07
     * @information: 校验文件二进制唯一
     */
    async vaildArrayBuffer(){
        let promiseArr = []
        while(this.whileNumber--){
            this.start = this.end
            this.end = this.end+this.whileMax
            let { start,end,sliceEnd,file}=this
            let promiseArrayBuffer = new Promise((resolve,reject)=>{
                const reader = new FileReader();
                reader.readAsArrayBuffer(file.slice(start,end));
                reader.onload = () => {
                    resolve(
                        new Uint8Array(reader.result)
                            .slice(0, sliceEnd)
                            .join('')
                    )
                }
            })
            promiseArr.push(promiseArrayBuffer)
        }
        return md5((await Promise.all(promiseArr)).join(''))
    }
}