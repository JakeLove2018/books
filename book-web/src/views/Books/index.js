import {defineComponent, reactive ,ref}from 'vue';
import AddOne from './AddOne/index.vue';
export default defineComponent({
    components:{
        AddOne
    },
    setup(){
        const columns = [
            {
                title:"名字",
                dataIndex:"name"
            },
            {
                title:"年龄",
                dataIndex:"age"
            }
        ];
        const dataSource = [
            {
                name:"小红",
                age:"123",
            }
        ];
        const show = ref(false);
        const setShow = (bool)=>{
            show.value = bool;
        };
        return {
            columns,
            dataSource,
            show,
            setShow,
        }
    }    
})