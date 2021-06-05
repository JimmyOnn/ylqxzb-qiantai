<template>
    <div class="registerBg">
        <div class="register_box">
            <h2>欢迎注册本系统！</h2>
            <el-form ref="registerFormRef" :rules="registerRules" :model="registerForm" label-width="0px"
                     class="register_form">
                <el-form-item prop="phone">
                    <el-input placeholder="请输入手机号:" name="phone" v-model="registerForm.phone"
                              prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码:" name="password" v-model="registerForm.password"
                              prefix-icon="el-icon-s-goods"></el-input>
                </el-form-item>
                <el-form-item prop="type">
                    <el-input placeholder="请输入用户类型:" name="type" v-model="registerForm.type"
                              prefix-icon="el-icon-s-order"></el-input>
                </el-form-item>
                <el-form-item prop="token">
                    <el-input placeholder="请输入token:" name="token" v-model="registerForm.token"
                              prefix-icon="el-icon-star-on"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="registerFun">保存</el-button>
                    <el-button type="info" @click="resetRegisterForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                registerRules: {
                    phone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {min: 11, max: 11, message: '请输入正确的11位手机号码', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入登录密码', trigger: 'blur'}
                    ],
                    type: [
                        {required: true, message: '请输入用户类型', trigger: 'blur'}
                    ],
                    token: [
                        {required: true, message: '请输入token', trigger: 'blur'}
                    ]
                },
                registerForm: {
                    phone: '',
                    password: '',
                    type: '',
                    token: ''
                }
            }
        },
        methods: {
            registerFun() {
                this.$refs.registerFormRef.validate(valid=>{
                    if(!valid){
                        return
                    }else{
                        axios({
                            method: 'post',
                            url: '/streaming/user/signup?phone=' + this.registerForm.phone + '&password=' + this.registerForm.password+'&type='+this.registerForm.type+'&token='+this.registerForm.token
                        }).then(response => {
                            if (response.data.phone != null) {
                                this.$message.success('注册成功！')
                                this.$router.push('/login')
                            } else {
                                this.$message.error('注册失败，请检查信息是否填写正确！')
                            }
                        })
                    }
                })
            },
            resetRegisterForm() {
                this.registerForm = {}
            }
        }
    }
</script>

<style Lang="less" scoped>
    .registerBg {
        background-color: #409EFF;
        height: 100%;
    }

    .register_box {
        width: 450px;
        height: 400px;
        background-color: #fff;
        border-radius: 8px;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        box-shadow:2px 2px 10px #303133;
    }

    .register_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }

    h2 {
        text-align: center;
    }
</style>