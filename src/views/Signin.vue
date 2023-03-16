<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <!-- <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div> -->
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">登录</h4>
                  <p class="mb-0">输入账号密码以登录教务系统</p>
                </div>
                <div class="mt-3" v-if="loginFail">
                  <ArgomAlert color="warning">
                    <strong>登陆失败!</strong> {{ loginFailMessage }}
                  </ArgomAlert>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <argon-input
                      :value="username"
                      @getChildData="getChildData"
                      placeholder="学号"
                      name="username"
                      size="lg"
                    />
                  </div>
                  <div class="mb-3">
                    <argon-input
                      :value="password"
                      @getChildData="getChildData"
                      placeholder="密码"
                      type="password"
                      name="password"
                      size="lg"
                    />
                  </div>
                  <argon-switch id="rememberMe">记住我</argon-switch>

                  <div class="text-center">
                    <argon-button
                      class="mt-4"
                      variant="gradient"
                      color="success"
                      fullWidth
                      size="lg"
                      @click="login"
                      >登录</argon-button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
                  background-size: cover;
                "
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  "日积跬步，方以致千里"
                </h4>
                <p class="text-white position-relative">
                  Where there is a will, there is a way
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgomAlert from "@/components/ArgonAlert.vue";
const body = document.getElementsByTagName("body")[0];
import axios from "axios";

export default {
  name: "signin",
  data() {
    return {
      loginFail: false,
      loginFailMessage: "",

      username: "admin",
      password: "123456",

      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  components: {
    Navbar,
    ArgonInput,
    ArgonSwitch,
    ArgomAlert,
    ArgonButton,
  },
  setup() {},
  methods: {
    getChildData(v) {
      this[v.name] = v.value;
    },

    login(event) {
      let that = this;
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/admin/login", //请求接口（相对接口，后面会介绍到）
        
        params: {
          username: this.username,
          password: this.password,
          rememberMe: false,
          code: "1",
        },
      }).then((e) => {
        if (e.data.success) {
          
          this.$store.character = e.data.message
          console.log(e.data.message)

          this.$store.userInfo = e.data.userInfo

          that.$router.push({ path: "/dashboard-default" });
          
        } else {
          this.loginFail = true;
          this.loginFailMessage = e.data.message;
        }
      });
    },
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
