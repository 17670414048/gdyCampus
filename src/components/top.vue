<template>
	<div id="top-header">
		<div class="w">
			<img src="../statics/images/logo.png" class="logo">
		</div>
	</div>
</template>
<script>
export default {
  name: 'top',
  data(){
    return {};
  },
  methods : {
  }
}
</script>
<style>
	#top-header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 80px;
		background:rgba(255,255,255,1);
		box-shadow:0px 2px 8px 0px rgba(198,198,198,0.5);
		z-index: 999;
		top: 0;
	}
	.logo{
		width: 134px;
		height: 44px;
		vertical-align: middle;
		text-align: left;
		margin: 18px 0;
	}
</style>