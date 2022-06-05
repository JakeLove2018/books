import {defineComponent, reactive ,ref,onMounted, onBeforeMount,}from 'vue';
import AddOne from './AddOne/index.vue';
import { book,list } from '@/service/index.js';
import { result,formTimestamo } from '@/helpers/utils';
import { message,Modal,Input } from 'ant-design-vue';
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
            {
                title: "库存",
                slots: {
                    customRender: "count"
                }
            },
            {
                title: "操作",
                slots: {
                    customRender: "actions"
                }
            },
            
        ];
        const show = ref(false);
        var   list = ref([]);
        const total = ref(0);    
        const curPage = ref(1);
        const keyword = ref('');
        const isSearch = ref(false);
        const setShow = (bool)=>{
            show.value = bool;
        };
        // 获取列表
        const getList = async ()=>{
            const res = await book.list({
                page:curPage.value,
                size:10,
                keyword:keyword.value,
            });
            result(res).success(({ data }) => {
                const { list: l, total: t, } = data;
                list.value = l,
                    total.value = t
            })
        }
        // 初始化数据
        const setPage = (page)=>{
            curPage.value = page;
            getList()
        }
        // 搜索
        const onSearch =()=>{
            getList();
            if(keyword.value){
                isSearch.value = true;
            }
        }
        // 获取列表,分页,搜索
        onMounted(async ()=>{
            getList()
        });
        // 搜索
        const backAll = ()=>{
            keyword.value = '';
            isSearch.value = false;
            getList();
        }
        // 删除接口,删除数据库中的数据。
        const remove = async ({text: record})=>{
            const res = await book.remove(record._id);
            result(res).success(({msg})=>{
                message.success(msg);
                const idx = list.value.findIndex(item=>item._id === record._id);
                list.value.splice(idx,1);
                // getList();
            })
        };
        const upDateCount = (type,record)=>{
            let word = "增加";
            if(type === 'OUT_COUNT'){
                word = "减少"
            }
            Modal.confirm({
                title: `确定${word}库存吗?`,
                content:(
                    <div><Input class="_book_input_count"></Input> </div>
                ),
                onOk: async() =>{
                    const el = document.querySelector('._book_input_count');
                    let num = el.value;
                    const res =  await book.upDateCount({
                        id:record._id,
                        num,
                        type,
                    })
                    console.log(el.value)
                    result(res).success((data)=>{
                  
                        if (type === type) {
                            num = Math.abs(num);
                        } else {
                            num = -Math.abs(num);
                        }
                        const one = list.value.find(()=>{
                            return item._id === record._id
                        });
                        if(one){
                            one.count = data.count + num;
                            message.success(`成功${word} ${Math.abs(num)} 本书`);
                        }
                        
                    });
                 }
            });
            
        }
        return {
            columns,
            show,
            setShow,
            list,
            formTimestamo,
            curPage ,
            total ,
            setPage,
            keyword,
            onSearch,
            backAll,
            getList,
            isSearch,
            remove,
            upDateCount
        }
    }    
})