<template>
 <div class="modal fade" id="brandPop">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">找品牌</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <input id="input-brand" type="text" class="col form-control" /> 
      </div>
      <div class="container">
        <div v-for="n in 5" class="row py-3">
          <div v-for="n in 3" class="col text-center">
              <div class="rounded-circle btn-lg">
                <router-link to="/searchStore">
                    <img id="brand-icon" src="@/assets/fafa.jpeg" data-bs-dismiss="modal"/>
                </router-link>
                <div>發發</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts"></script>
<style scoped>
    .container {
        max-height: 18rem;
        overflow-y: scroll;
    }
</style>