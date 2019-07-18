<template>
	<div class="w">
		<div id="reader"></div>
	</div>
</template>
<script>
	import { isLogin } from "../../common/isLogin.js";export default{
		name:'reader',
		data(){
			return {
				docKey:'',
				docId:'',
				token:'',
				host:'BCEDOC',
			}
		},
		created:function(){
			this.docKey = this.$route.query.key
			// console.log(this.$route.query.key)
			this.init();
		},

		mounted: function(){
			// this.read();
		},
		methods:{
			// getKey:()=>{
			// 	this.docKey = this.$route.query.key;
			// },
			init(){
				console.log(this.$route.params.key);
				this.$axios.post('/main/bce-read-auth',{doc_key:this.$route.query.key}).then(res=>{
					// console.log(res.data)
					if(res.data.result){
						this.$message.error(res.data.message);
					}else{
						// console.log(res.data.data.token);
						this.docId = res.data.data.docId;
						this.token = res.data.data.token;
						this.host = res.data.data.host;
						this.read(this.docId,this.token,this.host);

					}

				});
				// console.log(self.docId+"--"+self.token);
            },
            read:function(docId,token,host){

            	var option = {
				    docId: docId,
				    token: token,
				    host: host,
				/*    serverHost: 'http://doc.bj.baidubce.com',*/
				    width: 1200, //文档容器宽度
				    // zoom: true,              //是否显示放大缩小按钮
				    // zoomStepWidth:200,
				    pn: 1,  //定位到第几页，可选
				    fontSize:'big',
				    toolbarConf: {
			            page: true, //上下翻页箭头图标
			            pagenum: true, //几分之几页
			            full: false, //是否显示全屏图标,点击后全屏
			            copy: true, //是否可以复制文档内容
			            position: 'center',// 设置 toolbar中翻页和放大图标的位置(值有left/center)
				    } //文档顶部工具条配置对象,必选
	            };
                new Document('reader', option);
            },

		}

	}
</script>
<style scoped>
	.w{
		padding: 40px 0;
	}
</style>