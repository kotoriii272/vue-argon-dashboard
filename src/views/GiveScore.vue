<template>
  <div class="card mb-4 mx-5 col-md-11">
    <div class="card-header pb-0">
      <h6>Projects table</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                课程名
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                班级
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                课时
              </th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(course, index) in courseList" :key="index">
              <td>
                <div class="d-flex px-2">
                  <div></div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ course.cname }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ course.classname }}</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{course.cperiod}}</span>
              </td>

              <td class="align-right">
                <el-popover placement="left" :width="700" trigger="click">
                  <template #reference>
                    <el-button style="margin-right: 16px"
                      >进行打分</el-button
                    >
                  </template>
                  <template #default>
                    
                  <GiveScoreForm :classid="course.classid" :tcid="course.tcid"/>

                </template>
                </el-popover>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
  <script>
import MasterCard from "@/examples/Cards/MasterCard.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import PaymentCard from "./components/PaymentCard.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import TeacherCourseCard from "./components/TeacherCourseCard.vue";
import AddTeacherCard from "./components/AddTeacherCard.vue";
import AssessCard from "./components/AssessResultCard.vue";
import axios from "axios";
import GiveScoreForm from "./components/GiveScoreForm.vue";

export default {
  name: "AssessResult",
  components: {
    GiveScoreForm,
    axios,
    AssessCard,
    MasterCard,
    DefaultInfoCard,
    PaymentCard,
    InvoiceCard,
    TeacherCourseCard,
    AddTeacherCard,
  },
  data() {
    return {
      courseList:[],
      
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

      this.courseList = courseTable;
      
    });
  },
};
</script>
  