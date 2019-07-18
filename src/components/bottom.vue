<template>
	<div id="footer">
		<div class="w">
			<div class="bottom-text">版权所有：深圳共读科技有限公司 电话：4006662828 公司地址：深圳市南山区沙河西路健兴科技大厦A座401</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'bottom',
  data(){
    return {};
  },
  methods : {
  }
}
</script>
<style>
	#footer{
		position:relative;
		bottom: 0;
		width: 100%;
		height: 132px;
        background:rgba(247,246,244,0.5);
        /*opacity: 0.5;*/
        padding: 52px 0;

	}
	.bottom-text{
		height: 28px;
		line-height: 28px;
		font-size:20px;
		font-weight:400;
		color:rgba(34,34,33,1);
		text-align: center;
	}
</style>