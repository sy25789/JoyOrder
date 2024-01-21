<template>
    <div class="container">
      <div class="row justify-content-center h-100">
        <div id="store-info" class="col-4">
            <div class="row h-75">
                <div class="col-3 d-flex align-items-center">
                    <img id="brand-icon" src="@/assets/fafa.jpeg"/>
                </div>
                <div class="col">
                    <div id="store-name" class="py-1">淡水牧場</div>
                    <div id="brand-name" class="py-1">發發</div>
                    <div class="store-detail">
                        <div id="store-credit" class="py-1">
                            <img v-for="n in 5" src="@/assets/images/star-fill.svg" />
                            5(15)
                        </div>
                        <div id="store-open-time" class="py-1">
                            <img src="@/assets/images/clock.svg"/>
                            10:00-20:00
                        </div>
                        <div id="store-tel">
                            <img src="@/assets/images/telephone-fill.svg"/>
                            02-123456789
                        </div>
                        <div id="store-add">
                            <img src="@/assets/images/geo-alt-fill.svg" />
                            新北市淡水區ＸＸＸ
                        </div>
                        <div id="store-add">
                            <img src="@/assets/images/currency-dollar.svg" />
                            可現金、Line Pay
                        </div>
                    </div>
                </div>
            </div>
            <div id="info-switch" class="row justify-content-center bg-warning h-25  d-flex align-items-center">
                <div class="col-4 text-center">
                    <button class="rounded-circle btn-lg bg-white">
                    <img class="icon-img" src="@/assets/images/question-lg.svg" />
                    </button>
                <div class="text-white">店家資訊</div>
                </div>
                <div class="col-4 text-center">
                    <button class="rounded-circle btn-lg bg-white">
                    <img class="icon-img" src="@/assets/images/handbag-fill.svg" />
                    </button>
                <div class="text-white">如何取貨</div>
                </div>
            </div>
        </div>
        <div id="store-intro" class="col-8">
            <img class="mh-100" src="@/assets/fafa-pic.jpeg"/>
        </div>
      </div>
    </div>
    <item-pop id="item-pop"/>
</template>
<script lang="ts">
</script>
<style scoped>
.container {
    height: 260px;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
}

#info-switch {
    border-bottom-left-radius: 10px;
}

.store-detail {
    overflow-y: overlay;
    max-height: 60%;
}

#store-intro {
    height: 100%;
}

.rounded-circle {
  border: none;
  width: 40%;
  max-height: 100%;
}

.icon-img {
  width: 80%;
  height: 30px; 
}
</style>