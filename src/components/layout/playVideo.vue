<template>
  <div id="play">
    <div class="w">
      <div class="video-top">
        <h4>{{courseName}}-{{videoTitle}}</h4>
      </div>
      <div id="videos"></div>
      <!-- <video id="video" autobuffer controls controlsList="nodownload" type="application/x-mpegURL">
			<source :src="">
				<source :src="videoUrl"></source>
					<source src="/media/video.oga">
					<source src="https://www.zhangxinxu.com/study/media/cat2.mp4">
					<object type="video/ogg" data="/media/video.oga" width="320" height="240">
					<param name="src" value="/media/video.oga">
					<param name="autoplay" value="false">
					<param name="autoStart" value="0">
					<p><a href="/media/video.oga">Download this video file.</a></p>
					</object>
      </video>-->
      <div class="lists">
        <div class="list" v-for="(item,index) in list">
          <a
            @click="play(item.id,index)"
            href="javascript:;"
            class="list-video"
            :class="current==index?'active':''"
          >{{item.name}}</a>
          <!-- <router-link ></router-link> -->
          <!-- <router-link >查看课件</router-link> -->
          <!-- <router-link :to="'/reader?key='+item.doc_key" class="list-book">查看课件</router-link> -->
          <a @click="lookReader(item.doc_key)" class="list-book" href="javascript:;">查看课件</a>
        </div>
        <!-- <div class="list">
					<a @click="play(2)" href="#" class="list-video">第二课时</a>
					<a href="#" class="list-book">查看课件</a>
				</div>
				<div class="list">
					<a @click="play(3)" href="#" class="list-video">第三课时</a>
					<a href="#" class="list-book">查看课件</a>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import { isLogin } from "../../common/isLogin.js";
export default {
  name: "playVideo",
  created: function() {
    this.init();
  },
  data() {
    return {
      player: null,
      course_id: this.$route.query.course_id,
      current: 0,
      courseName: "", //课程名称
      list: [],
      videoTitle: "",
      videoUrl: "",
      id: "",
      cover_url:"",
    };
  },
  mounted: function() {},
  computed: {},
  watch: {
    videoTitle: function(val) {
      this.videoTitle = val;
    },
    videoUrl: function(val) {
      this.videoUrl = val;
      this.init_player();
    },
    id: function(val) {
      this.id = val;
    },
    cover_url:function(val){
    	this.cover_url = val;

    }
  },
  methods: {
    init: function() {
      this.$axios
        .post(
          "/chapter/info",
          {
            course_id: this.course_id
          },
          {
            headers: {
              userid: isLogin().userid,
              source: isLogin().source,
              token: isLogin().token
            }
          }
        )
        .then(res => {
        //   console.log(res.data);
          if (res.data.result) {
            this.$message.error(res.data.message);
          } else {
            this.courseName = res.data.data.course.name;
            this.list = res.data.data.list;
            this.videoTitle = res.data.data.list[this.current].name;
            this.videoUrl = res.data.data.list[this.current].transcode_info[2];
            this.id = res.data.data.list[this.current].id;
            this.cover_url = res.data.data.list[this.current].cover_url
            // this.init_player();
          }
        });
    },
    play: function(id, index) {
      this.current = index;
      this.videoTitle = this.list[this.current].name;
      this.videoUrl = this.list[this.current].transcode_info[2];
      this.id = this.list[this.current].id;
      this.cover_url = this.list[this.current].cover_url;
    //   console.log(this.videoUrl);
    },
    lookReader: function(key) {
    //   console.log(key);
      this.$router.push(`/reader?key=${key}`);
    },
    prepareUrl: function(url, token, user_id, source, course_id, chapter_id) {
      var pos = url.lastIndexOf("/");
      var base_url = url.slice(0, pos + 1);
      base_url =
        base_url +
        "voddrm.token." +
        token +
        "_" +
        user_id +
        "_" +
        source +
        "_" +
        course_id +
        "_" +
        chapter_id +
        "." +
        url.slice(pos + 1);
      return base_url;
    },
    init_player: function() {
      this.player && this.player.destroy();
      let video_urls = this.prepareUrl(
        this.videoUrl,
        isLogin().token,
        isLogin().userid,
        isLogin().source,
        this.course_id,
        this.id
      );
      this.player = new TcPlayer("videos", {
        m3u8: video_urls,
        autoplay: false, //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        //"width" :  '100%',//视频的显示宽度，请尽量使用视频分辨率宽度
        //"height" : '675'//视频的显示高度，请尽量使用视频分辨率高度
        /*"coverpic"  : this.currentPage.cover_url,*/
         "coverpic"  : this.cover_url,
      });
    }
  }
};
</script>
<style>
#play {
  width: 100%;
  background: #f2f2f2;
}
#play .w {
  padding-top: 40px;
  position: relative;
}
#videos {
  width: auto;
  height: 675px;
  background: rgba(216, 216, 216, 1);
}
#play .w .video-top {
  position: absolute;
  top: 40px;
  width: 1200px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  padding: 9px 20px;
  z-index: 1;
}
#play .w .video-top h4 {
  height: 42px;
  font-size: 30px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 42px;
}

#play .lists {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
}
#play .lists .list {
  padding: 20px 20px 20px 0;
}
#play .lists .list .list-video {
  display: block;
  width: 161px;
  height: 60px;
  background: rgba(216, 216, 216, 1);
  border-radius: 30px;
  font-size: 25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
  text-align: center;
  margin: 10px 0;
}
#play .lists .list .list-video.active {
  background: rgba(228, 102, 49, 1);
}
#play .lists .list .list-book {
  display: block;
  width: 161px;
  height: 30px;
  padding: 10px 0;
  font-size: 18px;
  color: rgba(228, 102, 49, 1);
  text-align: center;
}
#play .lists .list .list-book:hover {
  color: #ffb0b0;
}
</style>