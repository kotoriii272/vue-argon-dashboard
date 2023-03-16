<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="card shadow-lg mt-n6">
        <div class="card-body p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xl position-relative">
                <img
                  src="../assets/img/team-1.jpg"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                />
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1">王丽</h5>
                <p class="mb-0 font-weight-bold text-sm">本科生</p>
              </div>
            </div>
            <div
              class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Profile</p>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">学籍信息</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >姓名</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="Jesse"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >学习形式</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="普通全日制"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >入学时间</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="2019.06"
                    disabled
                  />
                </div>

                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >学历层次</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="本科"
                    disabled
                  />
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">个人信息</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >英文名</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="Jesse"
                    disabled
                  />
                </div>

                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >所属院系</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="软件工程学院"
                    disabled
                  />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >所属专业</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="软件工程"
                    disabled
                  />
                </div>
                <div class="col-md-4"></div>
              </div>
              <hr class="horizontal dark" />
              <div class="d-flex align-items-center">
                <p class="text-uppercase text-sm">About me</p>
                <argon-button
                  v-if="isdisabled"
                  color="success"
                  size="sm"
                  class="ms-auto"
                  v-on:click="changeDisable"
                  >点击修改</argon-button
                >
                <argon-button
                  v-else
                  color="success"
                  size="sm"
                  class="ms-auto"
                  @click="changeDisable"
                  >提交修改</argon-button
                >
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >个人邮箱</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    value="Jesse"
                    :disabled="isdisabled"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-profile">
            <img
              src="../assets/img/bg-profile.jpg"
              alt="Image placeholder"
              class="card-img-top"
            />
            <div class="row justify-content-center">
              <div class="col-4 col-lg-4 order-lg-2">
                <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                  <a href="javascript:;">
                    <img
                      src="../assets/img/team-1.jpg"
                      class="rounded-circle img-fluid border border-2 border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3"
            >
              <div class="d-flex justify-content-between"></div>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid text-center">
                      <span class="text-lg font-weight-bolder">3.5</span>
                      <span class="text-sm opacity-8">绩点</span>
                    </div>
                    <div class="d-grid text-center mx-4">
                      <span class="text-lg font-weight-bolder">10</span>
                      <span class="text-sm opacity-8">院校排名</span>
                    </div>
                    <div class="d-grid text-center">
                      <span class="text-lg font-weight-bolder">89</span>
                      <span class="text-sm opacity-8">已修学分</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <h5>
                  年龄
                  <span class="font-weight-light">21</span>
                </h5>
                <div class="h6 font-weight-300">
                  <i class="ni location_pin mr-2"></i>四川，成都
                </div>
                <div class="h6 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>辅导员 - 哲亮
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i
                  >辅导员邮箱：123456@cuit.edu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ProfileCard from "./components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  data() {
    return {
      showMenu: false,
      isdisabled: true,
    };
  },
  components: { ProfileCard, ArgonInput, ArgonButton },
  methods: {
    changeDisable() {
      if (this.isdisabled) {
        this.isdisabled = false;
      } else {
        this.isdisabled = true;
      }
    },
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  },
};
</script>
