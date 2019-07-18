<template>
  <div id="page_home" class="w">
    <div class="slide">
      <img src="../../statics/images/小学生整本书阅读.png" alt>
    </div>
    <!-- 老师简介盒子 -->
    <div class="introduction_box">
      <!-- 老师简介 -->
      <div class="teacher_introduction">
        <p class="title">老师简介</p>
        <p class="line"></p>
        <p class="sub_title">TEACHER PROFILE</p>
        <p
          class="info"
        >胡红梅，深圳市如意小学副校长。广东省青年岗位能手、深圳 市中青年骨干教师、深圳市十大阅读推广人、深圳市十佳最受 学生喜爱教师、市感动深圳教育人物、区优秀专家、区十大青 年风采教师、巾帼之星、“五一劳动模范奖章”；国家教 育部颁发的语文主题探究活动课题“特聘教师”、儿童阅读名师 工作室主持人、市兼职教研员、省名师工作室核心成员。获广 东省第九届青年教师阅读教学大赛一等奖、广东省教师素养大 赛五项全能一等奖、广东省教师录像课大赛一等奖、广东省教 师演讲比赛及楹联大赛一等奖；深圳市青年教师阅读教学大赛 一等奖、深圳市评课及教学论文比赛一等奖等。多篇论文及教 学设计和实录发表在国家核心期刊上。</p>
      </div>
      <div class="my_album">
        <!-- 底部盒子 -->
        <div class="bottom_box"></div>
        <!-- 右侧盒子 -->
        <div class="right_box">
          <div class="user_box">
            <p class="title">胡红梅</p>
            <p class="py">HUHONGMEI</p>
            <p class="work">深圳市如意小学副校长</p>
          </div>
        </div>
        <!-- 左侧盒子 -->
        <div class="protagonist_photo"></div>
      </div>
    </div>
    <!-- 课程亮点盒子 -->
    <div class="curriculum_highlights">
      <div class="header">
        <p class="title">课程亮点</p>
        <p class="line"></p>
        <p class="py">COURSE HIGHLIGHTS</p>
      </div>

      <div
        class="remarks"
      >胡红梅老师的《小学生整本书阅读》，将手把手地教老师们以课堂教学的形式开展整本书阅读，书本涵盖小学所有年级，每本书配有学习 单、拓展训练、课件、微课等项目，将阅读与生活紧密相连，帮助老师们掌握阅读策略和阅读方法，提高学生的阅读能力。本套丛书在目 录部分会把每一课的策略和能力做详细的说明和备注，帮助老师和学生运用高级思维模式进行教学和学习。</div>
      <div class="teaching_methods">
        <p class="teaching_title">内容的教学</p>
        <p
          class="content"
        >教师可以朗读精彩的章节给学生听，激发学生阅读整本书的兴趣；也可以按阅读进度表，让学生自己每天阅读。少用摘抄、写读后感等陈 旧方式，而是带着学生一起梳理故事情节，弄清故事结构、人物关系。年级越低的学生，教师越要把教学重点放在内容上，协助学生了解 故事，否则学生可能读不懂。小说内容用情节梯、人物图等多种方法来教学。本套丛书，每一课教学设计都附有不同形式的学习单。</p>
      </div>
      <div class="teaching_methods">
        <p class="teaching_title">要素的教学</p>
        <p
          class="content"
        >年级高点的学生，教师则更应该带领学生在了解内容的基础上，延伸更多教学点。因为小说是读不完的，阅读小说最重要的不是让学生记 住一个故事，而是让学生从书中获得力量和丰富的情感。让学生像小评论家一样，能对小说进行文学性分析和评价性思考。围经情节、 角色、背景和主题等要素，通过提问来引导学生思考。</p>
      </div>
      <div class="teaching_methods">
        <p class="teaching_title">策略的教学</p>
        <p
          class="content"
        >阅读策路就是读者在阅读文本时所远用的方法和技能。学生们可以了解和运用这些策路：预测，调动已有知识和经验，联想，提问， 图像化，推理，找出主旨和重点，综合，理解等。策略是方法性知识。既是阅读方法，也是思考方法。本套从书在目录部分会把每一课的 策略和能力做详细的说明和备注，帮助老师和学生运用高级思维模式进行教学和学习。</p>
      </div>
    </div>
    <!-- 课程亮点盒子 -->
    <div class="curriculum_highlights">
      <div class="header">
        <p class="title">课程大纲</p>
        <p class="line"></p>
        <p class="py">COURSE OUTLINE</p>
      </div>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="一年级" name="1">
          <div class="micro_lesson">
            <ul>
              <li v-for="(item,index) in courseList[0]" :key="index">
                <a v-if="item.course_id==0" href="javascript:;">
                  <span style="color:#b5b5b5" class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/hs.png" alt>
                </a>
                <router-link v-else :to="'/playVideo?course_id='+item.course_id">
                  <span class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/wk.png" alt>
                </router-link>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="二年级" name="2">
          <div class="micro_lesson">
            <ul>
              <li v-for="(item,index) in courseList[1]" :key="index">
                <a v-if="item.course_id==0" href="javascript:;">
                  <span style="color:#b5b5b5" class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/hs.png" alt>
                </a>
                <router-link v-else :to="'/playVideo?course_id='+item.course_id">
                  <span class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/wk.png" alt>
                </router-link>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="三年级" name="3">
          <div class="micro_lesson">
            <ul>
              <li v-for="(item,index) in courseList[2]" :key="index">
                <a v-if="item.course_id==0" href="javascript:;">
                  <span style="color:#b5b5b5" class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/hs.png" alt>
                </a>
                <router-link v-else :to="'/playVideo?course_id='+item.course_id">
                  <span class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/wk.png" alt>
                </router-link>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="四年级" name="4">
          <div class="micro_lesson">
            <ul>
              <li v-for="(item,index) in courseList[3]" :key="index">
                <a v-if="item.course_id==0" href="javascript:;">
                  <span style="color:#b5b5b5" class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/hs.png" alt>
                </a>
                <router-link v-else :to="'/playVideo?course_id='+item.course_id">
                  <span class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/wk.png" alt>
                </router-link>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="五年级" name="5">
          <div class="micro_lesson">
            <ul>
              <li v-for="(item,index) in courseList[4]" :key="index">
                <a v-if="item.course_id==0" href="javascript:;">
                  <span style="color:#b5b5b5" class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/hs.png" alt>
                </a>
                <router-link v-else :to="'/playVideo?course_id='+item.course_id">
                  <span class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/wk.png" alt>
                </router-link>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="六年级" name="6">
          <div class="micro_lesson">
            <ul>
              <li v-for="(item,index) in courseList[5]" :key="index">
                <a v-if="item.course_id==0" href="javascript:;">
                  <span style="color:#b5b5b5" class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/hs.png" alt>
                </a>
                <router-link v-else :to="'/playVideo?course_id='+item.course_id">
                  <span class="micro_lesson_name">{{item.name}}</span>
                  <img class="micro_lesson_watch" src="../../statics/images/wk.png" alt>
                </router-link>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { isLogin } from "../../common/isLogin.js";
export default {
  data() {
    return {
      activeName2: "1",
      courseList: {},
      userinfo: {}
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    course_data() {
      this.$axios
        .post(
          "/serial/base-info",
          { sid: 1 },
          {
            headers: {
              userid: isLogin().userid,
              source: isLogin().source,
              token: isLogin().token
            }
          }
        )
        .then(res => {
          this.courseList = res.data.data.list;
          // console.log(res);
        });
    }
  },
  created() {
    this.course_data();
  }
};
</script>
<style scoped>
@import "../../statics/css/my.css";
</style>

