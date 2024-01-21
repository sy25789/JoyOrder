<template>
  <div class="container text-white py-3">
    <div class="row justify-content-center">
      <div id="carousel" class="carousel slide col-8">
        <div id="carouselExampleControls" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="../assets/images/img1.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/images/img1.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/images/img1.jpg" alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div id="iconLinks" class="col-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-4 text-center">
            <router-link to="/searchStore">
              <button class="rounded-circle btn-lg">
                <img class="icon-img" src="../assets/images/map.svg" />
              </button>
            </router-link>
            <div>找附近</div>
          </div>
          <div class="col-4 text-center">
            <router-link to="/searchStore">
              <button class="rounded-circle btn-lg">
                <img class="icon-img" src="../assets/images/compass.svg" />
              </button>
            </router-link>
            <div>找區域</div>
          </div>
          <div class="col-4 text-center">
            <button class="rounded-circle btn-lg" data-bs-toggle="modal" data-bs-target="#brandPop">
              <img class="icon-img" src="../assets/images/shop.svg" />
            </button>
            <div>找品牌</div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-4 text-center">
            <button class="rounded-circle btn-lg">
              <img class="icon-img" src="../assets/images/clock-history.svg" />
            </button>
            <div>曾經點過</div>
          </div>
          <div class="col-4 text-center">
            <router-link to="/personal">
              <button class="rounded-circle btn-lg">
                <img class="icon-img" src="../assets/images/credit-card.svg" />
              </button>
            </router-link>
            <div>付款方式</div>
          </div>
          <div class="col-4 text-center">
            <button class="rounded-circle btn-lg">
              <img class="icon-img" src="../assets/images/ticket.svg" />
            </button>
            <div>優惠券匣</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <brand-pop id="brandPop"/>
</template>

<script lang="ts">
import { defineComponent, setup } from 'vue';
import BrandPop from '@/views/purchase/BrandPop.vue'

export default defineComponent({
  components: {
    'brand-pop': BrandPop
  },
  setup() {

  }
})

</script>

<style scoped>
#iconLinks {
  background-color: #5151a2;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
}

.rounded-circle {
  border: none;
}

.icon-img {
  height: 30px;
  width: 30px;
}

.btn-lg {
  height: 50px;
  width: 50px;
}

#iconLinks .row {
  height: 50%;
}
</style>
