<template>
  <div class="container my-3">
    <div class="row">
      <div v-for="n in 3" class="col">
        <div class="card text-center">
          <div class="card-body">
            <img id="brand-icon" src="@/assets/fafa.jpeg"/>
            <p class="card-text">1項商品</p>
            <p class="card-text">發發 淡水牧場</p>
            <h4>共90元</h4>
          </div>
          <div class="card-footer text-muted">
            <button class="btn btn-primary rounded-pill">立刻結帳</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>