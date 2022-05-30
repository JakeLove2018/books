<template>
    <div>
        <a-card>
            <h2>图书列表</h2>
            <a-divider></a-divider>
        </a-card>
        <space-between>
            <div class="search">
                <a-input-search placeholder="请输入搜索内容" enter-button></a-input-search>
            </div>
            <a-button @click="show=true">添加一条</a-button>
            
        </space-between>
        <a-table :dataSource="list" :columns="columns">
            <template #publishDate="date">
            
            {{ formTimestamo(date.record.publishData) }}
            </template>
        </a-table>
        <a-divider></a-divider>
        <AddOne :show="show" @setShow="setShow"/>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
@import './index.scss';
</style>