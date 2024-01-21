<template>
  <div class="container py-3">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/"><img src="../../assets/images/house-door-fill.svg"/></RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
    <div id="searchCondition" class="container px-5 py-2">
      <div class="row py-2">
        <div class="col-auto d-flex align-items-center">搜尋區域</div>
        <div class="col-2 d-flex align-items-start">
          <select class="form-select w-100">
            <option selected>台北市</option>
            <option>台中市</option>
          </select>         
        </div>
        <div class="col-2">
          <select class="form-select w-100">
          </select>         
        </div>
        <div class="col-auto d-flex align-items-center">地址</div>
        <input type="text" class="col form-control" placeholder="請輸入正確格式，如：英專路200號" /> 
      </div>
      <div class="row justify-content-between py-2">
        <div class="col-auto d-flex align-items-center">品牌</div>
        <input id="input-brand" type="text" class="col form-control" /> 
        <div class="col-auto d-flex align-items-center">餐點種類</div>
        <select class="col form-select" aria-label="Default select example"></select>
        <div class="col-auto d-flex align-items-center">星級</div>
        <select class="col form-select"></select>
      </div>
    </div>
  </div>
</template>

<style scoped>
#searchCondition {
  background-color: #e0e0e0;
}
.form-select {
  width: 10px;
}
</style>