import {defineComponent, reactive ,ref,onMounted, onBeforeMount}from 'vue';
import AddOne from './AddOne/index.vue';
import { book,list } from '@/service/index.js';
import { result,formTimestamo } from '@/helpers/utils';
export default defineComponent({
    components:{
        AddOne
    },
   
    setup(){
        const columns = [
            {
                title:"书名",
                dataIndex:"name"
            },
            {
                title:"作者",
                dataIndex:"author"
            },
            {
                title:"价格",
                dataIndex:"price"
            },
            {
                title:"出版日期",
                dataIndex:"publishData",
                slots:{
                    customRender:"publishDate"
                }
            },
            {
                title:"分类",
                dataIndex:"classify"
            },
        ];
        const show = ref(false);
        var list = ref(list);
        const setShow = (bool)=>{
            show.value = bool;
        };
        onMounted(async ()=>{
            const res = await book.list();
            result(res).success(({data})=>{
                list.value = data
            })
        })
        
        return {
            columns,
            show,
            setShow,
            list,
            formTimestamo,
        }
    }    
})