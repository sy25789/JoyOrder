<template>
  <div class="container-sm">
    <nav class="navbar navbar-light bg-light align-middle font-weight-bold">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">訂購</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/shoppingCart">購物車</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/order">訂單</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >更多</a
          >
          <ul class="dropdown-menu">
            <li>
              <RouterLink class="dropdown-item" to="/brand">品牌查詢</RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/feedback">意見回饋</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <div class="navbar-brand justify-content-center">
        <img
          src="./assets/logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Joy訂
      </div>
      <div v-if="!isLogin">
        <RouterLink class="nav-link" to="/login">
          <img src="./assets/images/user.svg" alt="" width="30" height="24" />
          登入/註冊
        </RouterLink>
      </div>
      <div v-if="isLogin">
        <router-link to="/personal">
          <button class="btn btn-md">
            <img class="user-icon" src="@/assets/fafa.jpeg" />
            Hi, XXX
          </button>
        </router-link>
      </div>
    </nav>
    <RouterView/>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    const isLogin = ref(true)

    return { isLogin }
  }
})
</script>

<style scoped>
.navbar-brand {
  transform: translateX(-70%);
}
.navbar {
  height: calc(100%+30px);
}
.container-sm {
  width: 75%;
}
.user-icon {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
</style>
