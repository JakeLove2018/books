import {defineComponent,reactive } from 'vue';
import {UserAddOutlined,UsbOutlined,MailOutlined} from '@ant-design/icons-vue';
import {auth} from '@/service/index.js';
import {message} from 'ant-design-vue';
import { result } from '../../helpers/utils/index.js';
export default defineComponent({
    components:{
        UserAddOutlined,
        UsbOutlined,
        MailOutlined
    },
    setup(){
        const regForm = reactive({
            account:"",
            password:"",
            inviteCode:"",
        });
        const register = async()=>{
            if(regForm.accound === ''){
                message.info('账户不能为空||请输入账户');
                return;
            }
            if(regForm.password === ''){
                message.info('密码不能为空||请输入密码');
                return ;
            }
            if(regForm.inviteCode === ''){
                message.info('邀请码不能为空');
                return ;
            }
            const res = await auth.register(regForm.account,regForm.password,regForm.inviteCode);
            result(res).success((data)=>{
                message.success(data.msg);
               
            })
        };
        const loginForm = reactive({
            account:"",
            password:"",
        })
        const login = async()=>{
            if(loginForm.accound === ''){
                message.info('账户不能为空||请输入账户');
                return;
            }
            if(loginForm.password === ''){
                message.info('密码不能为空||请输入密码');
                return ;
            }
            const res = await auth.login(loginForm.account,loginForm.password);
            result(res).success((data)=>{
                message.success(data.msg);
               
            })
        }
        return {
            regForm,
            register,
            login,
            loginForm,
        }
    }
})