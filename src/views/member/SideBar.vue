<template>
  <div class="container my-3">
    <div class="text-center border-gray py-3">
      <img  id="user-icon" src="@/assets/fafa.jpeg"/>
      <h5>JoyJoy</h5>
      <span>sy25789@gmail.com</span>
    </div>
    <div>
      <div class="btn-group-vertical border-gray w-100 my-3">
        <button class="btn py-2 text-xl-start selected px-2">個人檔案</button>
        <button class="btn py-2 text-xl-start px-2">付款方式</button>
        <button class="btn py-2 text-xl-start px-2">我的載具</button>
        <button class="btn py-2 text-xl-start px-2">我的券夾</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

</script>
<style scoped>
  #user-icon {
    border-radius: 100%;
    width: 100px;
    height: 100px;
  }

  .selected {
    border-left: 5px solid #2894FF;
  }

  .btn-group-vertical .btn:hover {
    background-color: #e0e0e0;
  }
</style>