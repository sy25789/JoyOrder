<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-sm">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/about">訂購</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">購物車</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">訂單</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">更多</a>
          <ul class="dropdown-menu">
            <li>
              <RouterLink class="dropdown-item" to="/about">品牌查詢</RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/about">意見回饋</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <div class="navbar-brand justify-content-center">
        <img src="./assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Joy訂
      </div>
      <div v-if="!isLogin">
        <RouterLink class="nav-link" to="/login">
          <img src="./assets/images/user.svg" alt="" width="30" height="24">
          登入/註冊
        </RouterLink>
      </div>
      <div v-if="isLogin">
        Hi, XXX
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col d-flex justify-content-center">col(1)</div>

      <div class="col">col(2)</div>

      <div class="col">col(3)</div>

      <div class="col">col(4)</div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
  .col, .container, .row, .container-fluid {
    border: 1px solid #E0E0E0;
  }
</style>
