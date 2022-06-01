import axios from "axios";
export const add = (form)=>{
    return axios.post('http://localhost:3000/book/add',form)
}
// 获取列表,分页,搜索
export const list = (data)=>{
    return axios.get('http://localhost:3000/book/list',{params:data})
}
// 删除接口,删除数据库中的数据
export const remove = (id)=>{
    return axios.delete(`http://localhost:3000/book/${id}`)
}
