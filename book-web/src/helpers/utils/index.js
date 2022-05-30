import {message} from 'ant-design-vue'
export const result = (response,authShowErrorMsg = true)=>{
    const {data} = response;
    if((data.code === 0)&& authShowErrorMsg){
        message.error(data.msg);
    }
    return {
        success(cb) {
            if(data.code !== 0){
                cb(data,response)
            }
            return this;
        },
        fail(cb) {
            if(data.code === 0){
                cb(data,response)
            }
            return this;
        },
        finally(cb){
            cb(data,response);
            return this;
        }
    }
};
export const clone = (obj)=>{
    return JSON.parse(JSON.stringify(obj))
}
export const formTimestamo = (ts)=>{
    const date = new Date(Number(ts))
    const YYYY = date.getFullYear();
    const MM = date.getMonth()+ 1 ;
    const DD = date.getDate();
    const HH = date.getHours();
    const mm = date.getMilliseconds();
    const ss = date.getSeconds();
    return `${YYYY}年${MM}月${DD}日${HH}时${mm}分${ss}秒`
}