<template>
    <div>
        <a-card>
            <h2>图书列表</h2>
            <a-divider></a-divider>
        </a-card>
        <space-between>
            <div class="search">
                <a-input-search placeholder="请输入搜索内容" enter-button v-model:value="keyword" @search="onSearch"></a-input-search>
                <a-button @click="backAll" v-if="isSearch == true" id="btn">返回</a-button> 
            </div>
            <a-button @click="show=true">添加一条</a-button>
        </space-between>
        <a-table :dataSource="list" :columns="columns" :pagination="false">
            <template #publishDate="date">
            {{ formTimestamo(date.record.publishData) }}
            </template>
            <template #actions="record">
            <a href="javascript:;" @click="remove(record)">删除</a>
            </template>
        </a-table>
        <space-between style="margin-top :24px">
            <div></div>
            <a-pagination v-model:current="curPage" :total="total" :page-size="10" @change="setPage"></a-pagination>
        </space-between>
        <a-divider></a-divider>
        <AddOne :show="show" @setShow="setShow"/>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
@import './index.scss';
</style>