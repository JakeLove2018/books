<template>
    <div class="basic-layout">
        <div class="app-header">
            <div class="left">
                <img src="javascript:;" alt="">
                <div class="title">图书管理系统</div>
            </div>
            <div class="right">
                <div class="hello-msg">欢迎,XXX</div>
                <div class="logout">tuichu</div>
            </div>
            
        </div>
        <div class="app-header-placeholder"></div>
        <div class="app-content">
            <div class="left">
                <AppNav />
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>