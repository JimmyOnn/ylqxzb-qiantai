<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png"/>
            </div>
            <el-form ref="loginFormRef" :rules="loginRules" :model="loginForm" label-width="0px" class="login_form">
                <el-form-item prop="phone">
                    <el-input placeholder="请输入手机号:" name="phone" v-model="loginForm.phone" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码:" name="password" type="password" v-model="loginForm.password"
                              prefix-icon="el-icon-s-goods"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button class="register" type="text" @click="registerUser">还没注册?点击此处注册</el-button>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
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
                loginForm: {
                    phone: '12345678910',
                    password: '123'
                },
                loginRules: {
                    phone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {min: 11, max: 11, message: '请输入正确的11位手机号码', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入登录密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            registerUser(){
                this.$router.push('/register')
            },
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields()
                this.loginForm={}
            },
            login() {
                this.$refs.loginFormRef.validate(valid => {
                    if (!valid) {
                        return
                    } else {
                        axios({
                            method: 'post',
                            url: '/streaming/user/login?phone=' + this.loginForm.phone + '&password=' + this.loginForm.password
                        }).then(response => {
                            if (response.data.length > 0) {
                                this.$message.success('登录成功！')
                                console.log(response.data[0].phone)
                                window.sessionStorage.setItem('token', response.data[0].token)
                                window.sessionStorage.setItem('phone', response.data[0].phone)
                                this.$router.push('/home')
                            } else {
                                this.$message.error('用户名或密码错误！')
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style Lang="less" scoped>
    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .login_container {
        background-color: #409EFF;
        height: 100%;
    }

    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        box-shadow:2px 2px 10px #303133;
    }

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        margin: 0 auto;
        transform: translate(0, -50%);
        background-color: #fff;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }

    .register {
        margin-right:  100px;
    }
</style>