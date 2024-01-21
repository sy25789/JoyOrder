<template>
  <div class="container text-center">
    <p class="h5">歡迎使用Joy訂！線上訂餐系統</p>
    <p class="h6" v-if="!isRegister">沒有帳號？<a href="#" @click="switchType">立即註冊</a></p>
    <p class="h6" v-if="isRegister">已有帳號？<a href="#" @click="switchType">立即登入</a></p>
    <form id="loginForm">
      <div class="row mb-4 justify-content-center">
        <div class="col-6">
          <input
            type="mail"
            class="form-control"
            id="inputMail"
            placeholder="電子郵件"
            v-model="inputMail"
          />
        </div>
        <div class="row"></div>
        <div id="validationServer03Feedback" class="invalid-feedback col-6">{{ mailError }}</div>
      </div>
      <div class="row mb-4 justify-content-center">
        <div class="col-6">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="密碼"
            v-model="inputPassword"
          />
          <div id="validationServerUsernameFeedback" class="invalid-feedback">
            {{ passwordError }}
          </div>
        </div>
      </div>
      <div class="row mb-4 justify-content-center" v-if="isRegister">
        <div class="col-6">
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="再次輸入密碼"
            v-model="confirmPassword"
          />
          <div>
            {{ confirmPasswordError }}
          </div>
        </div>
      </div>
      <div class="row mb-4 justify-content-center" v-if="isRegister">
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            id="inputUser"
            placeholder="暱稱"
            v-model="inputUser"
          />
        </div>
      </div>
      <div id="validationServer03Feedback" class="invalid-feedback" v-if="userError">
        {{ userError }}
      </div>
      <div class="row mb-4 justify-content-center" v-if="!isRegister">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            class="btn btn-primary btn-block"
            v-if="!isRegister"
            @click="loginAccount"
          >
            登入
          </button>
        </div>
      </div>
      <div class="row mb-4 justify-content-center gap-2" v-if="isRegister">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" class="btn btn-primary" v-if="isRegister" @click="registerAccount">
            註冊
          </button>
        </div>
      </div>
      <div class="col-auto">
        <a href="#" v-if="!isRegister" @click="switchReset">忘記密碼</a>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useField } from 'vee-validate'

export default defineComponent({
  setup() {
    const isRegister = ref(true)

    const { value: inputMail, errorMessage: mailError } = useField<string>('inputMail', 'required')
    const { value: inputPassword, errorMessage: passwordError } = useField<string>(
      'inputPassword',
      'required'
    )
    const { value: confirmPassword, errorMessage: confirmPasswordError } = useField<string>(
      'confirmPassword',
      'required'
    )
    const { value: inputUser, errorMessage: userError } = useField<string>('inputUser', 'required')

    const loginAccount = () => {}

    const registerAccount = () => {}

    const switchType = () => {
      isRegister.value = !isRegister.value
    }

    const switchReset = () => {}

    return {
      isRegister,
      switchType,
      switchReset,

      loginAccount,
      registerAccount,

      inputMail,
      mailError,
      inputPassword,
      passwordError,
      confirmPassword,
      confirmPasswordError,
      inputUser,
      userError
    }
  }
})
</script>

<style scoped>
.container {
  width: 50%;
}

#loginForm {
  margin-top: 30px;
}

.form-control {
  padding-left: 40px;
  background-size: 20px;
}

#inputMail {
  background: url('../../assets/images/envelope.svg') no-repeat 10px 7px;
}

#inputPassword,
#inputPassword2 {
  background: url('../../assets/images/key.svg') no-repeat 10px 7px;
}

#inputUser {
  background: url('../../assets/images/user.svg') no-repeat 10px 7px;
}

a {
  color: #46a3ff;
  text-decoration: none;
}
</style>
