<template>
    <div>
        <!--导航-->
        <div class="cart-top">
            <div class="top-left">
                <span class="one">直购网</span><br>
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
        <!--购物车-->
        <div class="cart-body">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="商品名称"
                        width="180">
                    <template #default="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="属性参数"
                        width="180">
                    <template #default="scope">
                        <el-popover effect="light" trigger="hover" placement="top">
                            <template #default>
                                <p>姓名: {{ scope.row.name }}</p>
                                <p>住址: {{ scope.row.address }}</p>
                            </template>
                            <template #reference>
                                <div class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                </div>
                            </template>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="单价(元)">
                    <template #default="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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
    .cart-top {
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
    .cart-body{
        width: 80%;
        height: 500px;
        border: 1px chartreuse solid;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>