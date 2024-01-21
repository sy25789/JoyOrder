<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <side-bar />
      </div>
      <div class="col-9">
        <personal-file />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import SideBar from './SideBar.vue';
  import Personal from './Personal.vue';

  export default defineComponent({
    components: {
        'side-bar': SideBar,
        'personal-file': Personal
    },
    setup() {
      const type = 'personal';

      return { type }
    }
  })
</script>
<style scoped>
.test {
  border: 1px solid black;
}
</style>