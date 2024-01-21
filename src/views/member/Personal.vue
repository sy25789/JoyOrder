<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container border-gray my-3 px-4">
    <h3 class="text-center py-2">個人檔案</h3>
    <div class="border-gray"></div>
    <div class="py-4 text-center">
      <button id="user-icon" class="btn btn-lg rounded-circle bg-secondary text-white">+</button>
    </div>
    <p class="my-2">真實姓名</p>
    <input type="text" class="form-control" aria-label="RealName" aria-describedby="basic-addon1">
    <p class="my-2">暱稱</p>
    <input type="text" class="form-control" aria-label="userName" aria-describedby="basic-addon1">
    <p class="my-2">手機號碼</p>
    <input type="text" class="form-control" aria-label="phone" aria-describedby="basic-addon1">
    <p class="my-2">性別</p>
    <div class="justify-content-start d-flex">
      <div class="form-check mx-2">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          男
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
          女
        </label>
      </div>
    </div>
    <p class="my-2">生日</p>
    <input type="text" class="form-control" aria-label="RealName" aria-describedby="basic-addon1">
    <p class="my-2">居住地</p>
    <div class="d-flex justify-content-start">
      <select class="form-select mx-1" aria-label="Default select example">
        <option selected>縣市</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select mx-1" aria-label="Default select example">
        <option selected>區域</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="py-4 text-center">
      <button class="btn btn-lg bg-primary text-white">確認</button>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style scoped>
  #user-icon {
    width: 100px;
    height: 100px;
  }
</style>