<template>
  <div class="container px-5">
    <div class="row justify-content-between">
      <div class="card" style="width: 18rem">
        <RouterLink to="/storemenu">
          <img class="card-img-top" src="../assets/images/food1.jpg" alt="Card image cap" />
          <div class="card-body">
            <div class="row">
              <div class="col-9">
                <h5 class="card-title text-black">一手私藏</h5>
              </div>
              <div id="credit" class="col-3 d-flex align-items-center text-black">
                  <img src="../assets/images/star-fill.svg" /> 5.0
              </div>
            </div>
            <p class="card-text text-secondary">世界上最好喝的紅茶店</p>
          </div>
        </RouterLink>
      </div>
      <div class="card" style="width: 18rem">
        <a href="#">
          <img class="card-img-top" src="../assets/images/food1.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">得正</h5>
            <p class="card-text">烏龍茶很好喝</p>
          </div>
        </a>
      </div>
      <div class="card" style="width: 18rem">
        <a href="#">
          <img class="card-img-top" src="../assets/images/food1.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">一沐日</h5>
            <p class="card-text">最讚的粉粿</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
a {
  text-decoration: none;
}

#credit {
  background-color: #e0e0e0;
  border-radius: 20%;
}

</style>
