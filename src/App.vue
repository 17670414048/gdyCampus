<template>
  <div id="app">
  	<top></top>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top.vue'
import bottom from './components/bottom.vue'
export default {
  name: "app",
  components: {
  	'top':top,
  	'bottom':bottom
  }
};
</script>
<style>
@import "./statics/css/base.css";
</style>


