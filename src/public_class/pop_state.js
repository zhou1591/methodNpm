/*
 * @Date: 2019-11-30 15:19:21
 * @information: 最后更新时间
 */
export default {
    mounted() {
        window.onpopstate=this.popstateChange
        window.history.pushState('forward', null, '#'); 
        // window.history.forward(1);
    },
    destroyed() {
        window.onpopstate=null
    },
}