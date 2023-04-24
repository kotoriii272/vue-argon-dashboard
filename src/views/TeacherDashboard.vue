<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="py-4 widget-calendar card container-fluid">
            <div class="row">
              <div class="left-col">
                <span>课次</span>
              </div>
              <div class="my-col">
                <span>周一</span>
              </div>
              <div class="my-col">
                <span>周二</span>
              </div>
              <div class="my-col">
                <span>周三</span>
              </div>
              <div class="my-col">
                <span>周四</span>
              </div>
              <div class="my-col">
                <span>周五</span>
              </div>
              <div class="my-col">
                <span>周六</span>
              </div>
              <div class="my-col">
                <span>周日</span>
              </div>
            </div>
            <hr class="horizontal dark m-0" :class="dark" />

            <div v-for="n in 5" :key="n" class="row my-1">
              <div class="left-col">第{{ n }}节</div>

              <div
                v-for="(item, index) in arrangeTable[n - 1]"
                :key="index"
                class="my-col"
              >
                <argon-snackbar
                  v-if="item != null"
                  :title="item.cname"
                  :date="'上课地点：' + item.room_code"
                  :description="'上课周数：1-' + item.cperiod + '周'"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                />
              </div>
              <hr class="horizontal dark m-0" :class="dark" />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">本学期课程</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(course, index) in courseList" :key="index">
                      <td class="w-30">
                        <div class="px-2 py-1 d-flex align-items-center">
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">课程名:</p>
                            <h6 class="mb-0 text-sm">{{ course.cname }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">学分:</p>
                          <h6 class="mb-0 text-sm">{{ course.ccredit }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">教师:</p>
                          <h6 class="mb-0 text-sm">{{ course.tname }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">课程编号:</p>
                          <h6 class="mb-0 text-sm">{{ course.cid }}</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.my-col {
  /* width: 14.27%; */
  width: 13.5%;
  border: 1px;
  border-color: black;
}
.left-col {
  /* width: 14.27%; */
  width: 5.5%;
  text-align: center;
  display: block;
  float: left;
}
</style>

<script>
import Card from "@/examples/Cards/Card.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import Carousel from "./components/Carousel.vue";
import CategoriesCard from "./components/CategoriesCard.vue";
import MiniPlayerCard from "@/views/components/CardPlayer.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import ArgonSnackbar from "@/components/ArgonSnackbar.vue";
import axios from "axios";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

export default {
  name: "dashboard-default",
  data() {
    return {
      arrangeTable: Array.from({ length: 5 }, () =>
        Array.from({ length: 7 }, () => null)
      ),
      courseList:[],
      stats: {
        money: {
          title: "高等数学",
          value: "高亮",
          percentage: "3",
          iconClass: "ni ni-money-coins",
          detail: "since yesterday",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "than last month",
        },
      },
      
    };
  },
  mounted() {
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"))["0"];
    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/courseArrange/getTeacherCourseTable", //请求接口（相对接口，后面会介绍到）

      params: {
        tid: userInfo.tid,
      },
    }).then((e) => {
      var courseTable = e.data.msg;

      this.courseList = courseTable

      console.log(courseTable);
      for (var i in courseTable) {
        console.log(i);
        this.arrangeTable[courseTable[i].timetableNum - 1][
          courseTable[i].weekday - 1
        ] = courseTable[i];
      }
      console.log(this.arrangeTable);
    });
  },
  methods: {},
  components: {
    DefaultInfoCard,
    MiniPlayerCard,
    Card,
    GradientLineChart,
    Carousel,
    CategoriesCard,
    ArgonSnackbar,
  },
};
</script>
