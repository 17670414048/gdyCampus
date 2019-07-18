<template>
  <div id="login_box">
    <div class="banner"></div>
    <div class="shared_reading_garden">
      <p class="title">让阅读成为一种习惯</p>
      <p class="py">MAKE READING A HABIT</p>
      <!-- <a class="come" href="#">进入共读园</a> -->
    </div>
    <div class="login">
      <input v-model="username" autofocus class="username" type="text" placeholder="请输入用户名">
      <input @keyup.enter="login" v-model="password" class="password" type="password" placeholder="请输入密码">
      <div class="remember_password">
        <img class="left dg" src="../../statics/images/duigou.png" alt>
        <span class="jzmm left">记住密码</span>
        <p @click="login" class="go_login right">
          <img src="../../statics/images/login.png" alt>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        this.$message({
          message: "账号或密码不能为空",
          type: "warning"
        });
        return;
      }
      this.$axios
        .post("/user/passwd-login", {
          source: "WebCampus",
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data.result == 400) {
            this.$message.error(response.data.message);
            this.username = "";
            this.password = "";
            return;
          }
          if (response.data.result == 0) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            // console.log(response.data.data.user);
            let LoginObj = {
              userid: response.data.data.user.id,
              source: response.data.data.source,
              token: response.data.data.token
            };
            localStorage.setItem("userinfo", JSON.stringify(LoginObj));
            this.$router.push("/pageHome");
          } else {
            this.$message.error(response.data.message);
            return;
          }
        });
    }
  }
};
</script>
<style scoped>
@import "../../statics/css/login.css";
</style>
