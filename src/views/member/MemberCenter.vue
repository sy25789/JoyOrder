<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <side-bar />
      </div>
      <div class="col-9">
        <personal-file v-if="type==='personal'"/>
        <credit-card v-if="type==='creditcard'"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import SideBar from './SideBar.vue';
  import Personal from './Personal.vue';
  import CreditCard from './CreditCard.vue'


  export default defineComponent({
    components: {
        'side-bar': SideBar,
        'personal-file': Personal,
        'credit-card': CreditCard
    },
    setup() {
      const type = 'creditcard';

      return { type }
    }
  })
</script>
<style scoped>
.test {
  border: 1px solid black;
}
</style>