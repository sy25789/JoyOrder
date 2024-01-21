<template>
    <div class="container py-3">
        <store-info />
        <div class="menu-container v-stack">
                <div class="card test my-3" style="width: 18rem;">
                    <div class="card-header font-weight-bold fs-3 text-warning">
                        私房咖啡
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="#">
                            <div class="row" data-bs-toggle="modal" data-bs-target="#itemPop">
                                <div class="col-8">咖啡拿鐵</div>
                                <div class="col-2 d-flex align-items-center">
                                    <img src="@/assets/images/snow2.svg"/>
                                    70
                                </div>
                                <div class="col-2 d-flex align-items-center">
                                    <img src="@/assets/images/cup-hot-fill.svg"/>
                                    70
                                </div>
                            </div>
                            </a>
                        </li>
                        <li class="list-group-item">卡布奇諾</li>
                        <li class="list-group-item">卡布奇諾</li>
                    </ul>
                </div>          
                    <div class="card test my-3" style="width: 18rem;">
                    <div class="card-header font-weight-bold fs-3 text-warning">
                        私房咖啡
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">咖啡拿鐵</li>
                        <li class="list-group-item">卡布奇諾</li>
                        <li class="list-group-item">卡布奇諾</li>
                        <li class="list-group-item">卡布奇諾</li>
                    </ul>
                </div>           
            <div class="card test my-3" style="width: 18rem;">
                <div class="card-header font-weight-bold fs-3 text-warning">
                    私房咖啡
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">咖啡拿鐵</li>
                    <li class="list-group-item">卡布奇諾</li>
                    <li class="list-group-item">卡布奇諾</li>
                    <li class="list-group-item">卡布奇諾</li>
                    <li class="list-group-item">卡布奇諾</li>

                </ul>
            </div>           
            <div class="card test my-3" style="width: 18rem;">
                <div class="card-header font-weight-bold fs-3 text-warning">
                    私房咖啡
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">咖啡拿鐵</li>
                    <li class="list-group-item">卡布奇諾</li>
                    <li class="list-group-item">卡布奇諾</li>
                    <li class="list-group-item">卡布奇諾</li>
                </ul>
            </div>          
        </div>
    </div>
    <item-pop id="itemPop"/>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import StoreInfo from './StoreInfo.vue';
    import ItemPop from './itemPop.vue';

    export default defineComponent({
        components:{
            'store-info': StoreInfo,
            'item-pop': ItemPop
        },
        setup(){}});
</script>
<style scoped>
    .menu-container {
        height: 500px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        overflow-x: scroll;
    }

    .test {
        margin-inline: 10px;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>