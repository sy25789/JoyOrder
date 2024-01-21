<template>
  <search-bar />
  <brand-view data-bs-dismiss="modal"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SearchBar from './SearchBar.vue'
import BrandView from '../BrandView.vue'

export default defineComponent({
  components: {
    'search-bar': SearchBar,
    'brand-view': BrandView
  },
  setup() {}
})
</script>
