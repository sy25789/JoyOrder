<template>
  <div class="modal fade" id="brandPop">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">咖啡拿鐵</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <img class="w-100" src="@/assets/fafa-pic.jpeg" />
          <h6>杯型</h6>
          <div id="btn-option" class="col px-3 d-flex justify-content-between">
            <button v-for="n in 3" class="w-25 m-2 btn btn-md btn-outline-success">L</button>
          </div>
          <h6>甜度</h6>
          <div id="btn-option" class="col px-3 d-flex justify-content-between">
            <button v-for="n in 4" class="w-25 m-2 btn btn-md btn-outline-success">無糖</button>
          </div>
          <h6>溫度</h6>
          <div id="btn-option" class="col px-3 d-flex justify-content-between">
            <button v-for="n in 4" class="w-25 mx-3 my-2 btn btn-md btn-outline-success">去冰</button>
          </div>
        </div>
        <div class="modal-bottom row h-25 w-100">
          <div class="col py-2 px-4">
            <div>總金額：45元</div>
            <div class="btn-group w-75" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-success w-25">-</button>
              <input class="text-center w-50" id="input-amount" />
              <button type="button" class="btn btn-outline-success w-25">+</button>
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-center">
            <button class="btn btn-success btn-lg" type="submit">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
    .test {
      border: 1px solid black;
    }
    .modal-body {
      height: 400px;
      overflow-y: scroll;
    }

    #input-amount {
      width: 33%;
      border-inline-width: 0px;
      border-block-color: green;
      border-block-width: 1px;
      outline: none;
    }

    #btn-option {
      display: flex;
      flex-wrap: wrap;
    }
  </style>