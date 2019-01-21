<template>
  <div id="app">
    <!-- <loading :show="true" ></loading> -->
  </div>
</template>

<script>
import Loading from '@/components/loading.vue'
export default {
  name: 'App',
  components: {
    Loading
  },
  created () {
    this.$loading.show()
  }
}
</script>
