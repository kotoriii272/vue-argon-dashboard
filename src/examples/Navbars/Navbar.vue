<template>
  <nav
    class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    :class="
      this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''
    "
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" textWhite="text-white" />

      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          
            
            <span class="d-sm-inline d-none font-weight-bold text-white">夜间模式</span>
            
            <div class="form-check form-switch ps-0 ms-2 mr-5">
            <input
              class="form-check-input mt-1 ms-auto"
              type="checkbox"
              :checked="this.$store.state.darkMode"
              @click="setDarkMode"
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: 'Signin' }"
              class="px-0 nav-link font-weight-bold text-white"
             
              @click="logout"
            >
              <i
                class="fa fa-user"
                :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-2'"
              ></i>
              <span v-if="this.$store.state.isRTL" class="d-sm-inline d-none"
                >يسجل دخول</span
              >
              <span v-else class="d-sm-inline d-none">登出</span>
            </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";
import { activateDarkMode, deactivateDarkMode } from "@/assets/js/dark-mode";
import axios from "axios";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    logout(){
      axios({
      method: "post",//指定请求方式
      url: "http://localhost:8080/systemLogout",//请求接口（相对接口，后面会介绍到）
      })
      this.$router.push({ path: "/signin" });
    },

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },
    setDarkMode() {
      if (this.$store.state.darkMode) {
        this.$store.state.darkMode = false;
        this.$store.state.sidebarType = "bg-white";
        deactivateDarkMode();
        return;
      } else {
        this.$store.state.darkMode = true;
        this.$store.state.sidebarType = "bg-default";
        activateDarkMode();
      }
    }
  },
  components: {
    Breadcrumbs
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
