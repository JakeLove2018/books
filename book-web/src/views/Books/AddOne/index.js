import {defineComponent,reactive} from 'vue';
import { book } from '@/service/index.js';
import { result ,clone} from '@/helpers/utils/index.js';
import { message } from 'ant-design-vue';
export default defineComponent({
    props:{
        show:Boolean,
    },
    setup(props,context){
        console.log(props)
        const defaultFormData = reactive({
            name:"",
            price:0,
            author:"",
            publishData:0,
            classify:"",
            count:"",
        })
        const addForm = reactive(clone(defaultFormData))
        const submit =async ()=>{
            const form = clone(addForm)
            form.publishData = addForm.publishData.valueOf();
            const res = await book.add(form);
            result(res).success((d,{ data })=>{
                Object.assign(addForm,defaultFormData);
                message.success(data.msg);
            })
        };
        const close = ()=>{
            context.emit('setShow',false)
        }
        return {
            addForm,
            submit,
            props,
            close
        };
    },
});