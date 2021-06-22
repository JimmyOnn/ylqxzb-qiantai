<template>
    <div>
        <div class="home-top">
            <div class="top-left">
                <span class="one">好吃好喝直购</span><br>
                <span class="two">离实物最近的网购方式</span>
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
                <el-button type="text">我的直购</el-button>
                <el-badge style="margin-left: 10px" :value="200" :max="99" class="item">
                    <el-button circle icon="el-icon-message-solid"></el-button>
                </el-badge>
                <el-button style="margin-left: 10px" circle icon="el-icon-shopping-cart-2" @click="toMyCart"></el-button>
                <el-dropdown style="margin-left: 20px">
                   <span class="el-dropdown-link"  @click="toUserSettings">
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
                <img class="el-avatar" src="../assets/logo.png"/>
            </div>
        </div>
        <el-main class="home-mid">
            <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff"
                     :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template #title>直播分类</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template #title>选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
            <el-button type="info" @click="logout">退出登录</el-button>
        </el-main>

        <el-main class="home-follow">
            <h1>你的关注</h1>
            <div class="follower">
                <img style="display: inline-block" src="../assets/logo.png"/>
                <div class="followerInfo">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="follower">
                <img style="display: inline-block" src="../assets/logo.png"/>
                <div class="followerInfo">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="follower">
                <img style="display: inline-block" src="../assets/logo.png"/>
                <div class="followerInfo">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="follower">
                <img style="display: inline-block" src="../assets/logo.png"/>
                <div class="followerInfo">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="follower">
                <img style="display: inline-block" src="../assets/logo.png"/>
                <div class="followerInfo">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="follower">
                <img style="display: inline-block" src="../assets/logo.png"/>
                <div class="followerInfo">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="habbit">
                <div style="height: 70px;display: inline-block; position:absolute;font-size: 25px">以下根据你的购物兴趣推荐</div>
                <div style="margin-left: 310px; display: inline-block; position: absolute;">
                    <el-button type="text">更改兴趣</el-button>
                </div>
            </div>
        </el-main>

        <el-main class="home-like">
            <h1>猜你喜欢</h1>
            <div class="likeInfo">
                <div style="width: 100%; height: 400px;"><img style="width: 100%; height: 100%;"
                                                              src="../assets/logo.png"/></div>
                <div style="width: 100%; height: 100px; color: gainsboro">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">应届生面试题库于答案辅导+直播</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">应届生的面试宝典</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="likeInfo">
                <div style="width: 100%; height: 400px;"><img style="width: 100%; height: 100%;"
                                                              src="../assets/logo.png"/></div>
                <div style="width: 100%; height: 100px; color: gainsboro">
                    <el-descriptions :column="4">
                        <el-descriptions-item label="用户名">应届生面试题库于答案辅导+直播</el-descriptions-item>
                        <br/><br/>
                        <el-descriptions-item label="手机号">应届生的面试宝典</el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-main>

        <div class="home-footer">
            <div class="footer-span">
                <span>好吃好喝直购 是南京小青柠公司旗下专注买家体验的直播购物平台。</span>
            </div>
            <div class="footer-btn">
                <el-button type="text">关于我们</el-button>
                <el-button type="text">联系我们</el-button>
                <el-button type="text">帮助中心</el-button>
                <span style="margin-left: 70%">关注我们</span>
                <el-button style="margin-right: 30px;margin-left: 5px;" circle icon="el-icon-chat-dot-round"></el-button>
                <el-button circle icon="el-icon-view"></el-button>
                <br/>
                <span style="font-size: 10px;">@2020-2021 南京小青柠公司 版权所有</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                phone: '',
                activeIndex: '1'
            }
        },
        created() {
            if (window.sessionStorage.getItem('phone') != null) {
                this.phone = window.sessionStorage.getItem('phone')
            }
        },
        methods: {
            toMyCart(){
                this.$router.push('/myCart')
            },
            logout() {
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            toUserSettings(){
                this.$router.push('/userSettings')
            }
        }
    }
</script>

<style Long="less" scoped>

    .home-top {
        width: 100%;
        height: 70px;
        background-color: #fff;
        text-align: center;
        display: table;
    }

    .top-left {
        width: 220px;
        display: table-cell;
        text-align: center;
    }

    .one {
        font-size: 24px;
        padding-top: 10px;
        line-height: 41px;
    }

    .two {
        font-size: 15px;
        line-height: 20px;
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
    }

    .el-avatar {
        vertical-align: middle;
        margin-left: 20px;
    }

    .home-mid {
        width: 100%;
        height: 700px;
    }

    .home-follow {
        width: 100%;
        height: 700px;
    }

    .follower {
        width: 500px;
        height: 200px;
        display: inline-block;
        margin-right: 50px;
        margin-left: 50px;
        margin-top: 30px;
        position: relative;
    }

    .followerInfo {
        height: 180px;
        display: inline-block;
        position: absolute;
        margin-top: 20px;
        margin-left: 20px;
    }

    .habbit {
        line-height: 70px;
        width: 100%;
        height: 70px;
        background-color: pink;
        position: relative;
        margin-top: 20px;
    }

    .home-like {
        width: 100%;
        height: 1000px;
    }

    .likeInfo {
        width: 800px;
        height: 500px;
        display: inline-block;
        margin-right: 60px;
        margin-left: 60px;
        margin-top: 30px;
        position: relative;
    }

    .home-footer {
        background-color: #282415;
        color: #fff;
        width: 100%;
        height: 160px;
        position: relative;
    }

    .footer-span {
        width: 600px;
        padding-top: 30px;
        margin-left: 30px;
    }

    .footer-btn {
        width: 100%;
        padding-top: 20px;
        margin-left: 30px;
    }

</style>