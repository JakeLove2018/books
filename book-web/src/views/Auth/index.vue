<template>
  <div class="auth">
      <div class="bg"></div>
      <div class="title-info">
          <img src="" alt="">
          <h2 class="title">图书管理系统后台</h2>
      </div>
      <div class="form">
          <a-tabs>
              <a-tab-pane key="1" tab="登录">
                  <div class="item">
                      <a-input placeholder="账户" size="large" v-model:value="loginForm.account">
                          <template #prefix>
                                <UserAddOutlined />
                            </template>
                      </a-input>
                  </div>
                  <div class="item">
                      <a-input placeholder="密码" size="large" v-model:value="loginForm.password">
                          <template #prefix>
                                <usb-outlined />
                            </template>
                      </a-input>
                  </div>
                  <div class="item">
                      <a href="">忘记密码</a>
                  </div>
                  <div class="item">
                      <a-button type="primary" size="large" @click="login">登录</a-button>
                  </div>
              </a-tab-pane>
              <a-tab-pane key="2" tab="注册">
                  <div class="item">
                      <a-input placeholder="账户" size="large" v-model:value="regForm.account">
                            <template #prefix>
                                <UserAddOutlined />
                            </template>
                      </a-input>
                  </div>
                  <div class="item">
                      <a-input placeholder="密码" size="large" v-model:value="regForm.password">
                            <template #prefix>
                                <usb-outlined />
                            </template> 

                      </a-input>
                  </div>
                  <div class="item">
                      <a-input placeholder="邀请码" size="large" v-model:value="regForm.inviteCode">
                          <template #prefix>
                              <mail-outlined />
                          </template>
                          
                      </a-input>
                  </div>
                  <div class="item">
                      <a-button type="primary" size="large" @click="register">注册</a-button>
                  </div>
              </a-tab-pane>
          </a-tabs>
      </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>