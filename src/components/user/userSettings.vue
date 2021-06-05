<template>
    <div>
        <!--导航-->
        <div class="settings-top">
            <div class="top-left">
                <span class="one">直购网</span><br>
                <div style="display: inline-block;width: 75px; height: 21px;position: absolute;top: 0;bottom: 0; left: 0;margin: auto;right: 0;">
                    <el-dropdown>
                   <span style="color: #fff" class="el-dropdown-link">
                     直播分类<i class="el-icon-arrow-down el-icon--right"></i>
                   </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
            <div class="top-mid">
                <div style="margin-top: 15px">
                    <el-input placeholder="告诉小二你想买啥?" class="input-with-select">
                        <template #append>
                            <el-button icon="el-icon-search"></el-button>
                        </template>
                    </el-input>
                </div>
            </div>
            <div class="top-right">
                <el-button type="text" style="color: #fff">我的直购</el-button>
                <el-badge style="margin-left: 10px" :value="200" :max="99" class="item">
                    <el-button circle icon="el-icon-message-solid"></el-button>
                </el-badge>
                <el-button style="margin-left: 10px" circle icon="el-icon-shopping-cart-2"></el-button>
                <el-dropdown style="margin-left: 20px">
                   <span style="color: #fff" class="el-dropdown-link">
                      {{this.phone}}<i class="el-icon-arrow-down el-icon--right"></i>
                   </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <img class="el-avatar" src="../user/logo.png"/>
            </div>
        </div>
        <!--设置信息-->
        <div class="settings-body">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="red"
                    text-color="#fff"
                    active-text-color="black">
                <el-menu-item index="1">资料设置</el-menu-item>
                <el-menu-item index="2">收货地址设置</el-menu-item>
                <el-menu-item index="3">账号设置</el-menu-item>
                <el-menu-item index="4  ">邮件设置</el-menu-item>
            </el-menu>
            <el-form :rules="settingsRules" :label-position="right" label-width="80px" style="width: 400px;">
                <span style="color: #909399; margin-left: 20px;">完善个人资料时让别人认识你的第一步</span>
                <h2 style="margin-left: 20px">基本信息</h2>
                <el-form-item label="昵称" required prop="petName">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload
                            class="avatar-uploader"
                            action=""
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"
                           style="height: 100px;width: 100px;font-size: 100px"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="性别">
                    <el-checkbox v-model="checked1">男</el-checkbox>
                    <el-checkbox v-model="checked2">女</el-checkbox>
                    <el-checkbox v-model="checked3">保密</el-checkbox>
                </el-form-item>
                <el-form-item label="个人介绍">
                    <el-input style="width: 500px;" type="textarea" :rows="6" placeholder="用一段话介绍你自己，会在你的个人页面展示，最多输入80字"
                              v-model="textarea">
                    </el-input>
                </el-form-item>
                <h2 style="margin-left: 20px">联系信息</h2>
                <el-form-item label="真实姓名">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="常用邮箱" required prop="email">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="QQ号码">
                    <el-input></el-input>
                </el-form-item>
                <el-button type="danger" style="margin-left: 20px;margin-top: 20px">保存</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: '',
                checked1: true,
                checked2: false,
                checked3: false,
                settingsRules: {
                    petName: [{ required: true, message: '请输入昵称:', trigger: 'blur' }],
                    email: [{ required: true, message: '请输入邮箱:', trigger: 'blur'}]
                }
            }
        },
        created() {
            if (window.sessionStorage.getItem('phone') != null) {
                this.phone = window.sessionStorage.getItem('phone')
            }
        },
        methods: {}
    }
</script>

<style Lang="less" scoped>
    .settings-top {
        width: 100%;
        height: 50px;
        background-color: red;
        color: #fff;
        text-align: center;
        display: table;
    }

    .top-left {
        height: 50px;
        width: 220px;
        display: table-cell;
        text-align: center;
        color: #fff;
        margin-bottom: 20px;
        position: relative;
    }

    .one {
        color: #fff;
        font-size: 24px;
        line-height: 41px;
        position: absolute;
        top: 20%;
        bottom: 0;
        left: 0;
        margin: auto;
        right: 50%;
    }

    .top-mid {
        width: 220px;
        display: table-cell;
        text-align: center;
    }

    .top-right {
        width: 220px;
        display: table-cell;
        text-align: center;
        color: #fff;
    }

    .el-avatar {
        vertical-align: middle;
        margin-left: 20px;
    }

    .settings-body {
        width: 80%;
        height: 1000px;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>