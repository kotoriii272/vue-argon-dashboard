<template>
  <argon-alert v-if="ifInvalidArrange" color="danger">
    <strong>错误!</strong> {{ invalidArrange }}
  </argon-alert>
  <argon-alert v-if="submitSucceed" color="info">
    <strong>成功!</strong> 已建立教学关系
  </argon-alert>
  <argon-alert v-if="ifValidArrange" color="info"> 可行的安排 </argon-alert>
  <el-form :model="form">
    <el-form-item label="选择周次">
      <el-select
        v-model="form.weekday"
        class="m-2"
        placeholder="选择周次"
        size="large"
        @change="checkValidty"
      >
        <el-option
          v-for="item in weekdayOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="选择时间">
      <el-select
        v-model="form.timeTableNumber"
        class="m-2"
        placeholder="选择时间"
        size="large"
        @change="checkValidty"
      >
        <el-option
          v-for="item in timeTableNumberOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="选择教室">
      <el-select
        v-model="form.classroom"
        class="m-2"
        placeholder="选择教室"
        size="large"
        @change="checkValidty"
      >
        <el-option
          v-for="item in classroomOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>
  
  <script>
import axios from "axios";
import { ref } from "vue";
import { reactive } from "vue";
import { CascaderProps } from "element-plus";
import ArgonAlert from "@/components/ArgonAlert.vue";

export default {
  name: "billing-card",
  components: {
    ArgonAlert,
  },
  props: ["arrInfo", "classroomOptions"],
  data() {
    return {
      noClass: false,
      form: {
        weekday: ref(""),
        timeTableNumber: ref(""),
        classroom: ref(""),
      },

      ifInvalidArrange: false,

      invalidArrange: "",

      ifValidArrange: false,

      submitSucceed: false,

      timeTableNumberOptions: [
        {
          label: "第一节课",
          value: 1,
        },
        {
          label: "第二节课",
          value: 2,
        },
        {
          label: "第三节课",
          value: 3,
        },
        {
          label: "第四节课",
          value: 4,
        },
        {
          label: "第五节课",
          value: 5,
        },
      ],

      weekdayOptions: [
        {
          label: "星期一",
          value: 1,
        },
        {
          label: "星期二",
          value: 2,
        },
        {
          label: "星期三",
          value: 3,
        },
        {
          label: "星期四",
          value: 4,
        },
        {
          label: "星期五",
          value: 5,
        },
        {
          label: "星期六",
          value: 6,
        },
        {
          label: "星期天",
          value: 7,
        },
      ],
    };
  },
  methods: {
    checkValidty() {
      if (
        this.form.weekday != "" &&
        this.form.classroom != "" &&
        this.form.timeTableNumber != ""
      ) {
        axios({
          method: "post", //指定请求方式
          url: "http://localhost:8080/courseArrange/checkValidity", //请求接口（相对接口，后面会介绍到）
          params: {
            crid: this.form.classroom,
            weekday: this.form.weekday,
            timetableNum: this.form.timeTableNumber,
            tcid: this.arrInfo.tcid,
          },
        }).then((e) => {
          console.log(e.data.msg);
          if (e.data.msg != "true") {
            this.ifInvalidArrange = true;
            this.invalidArrange = e.data.msg;

            this.ifValidArrange = false;
          } else {
            this.ifValidArrange = true;
            this.ifInvalidArrange = false;
          }
        });
      }
    },

    onSubmit() {
      if (this.ifValidArrange) {
        axios({
          method: "post", //指定请求方式
          url: "http://localhost:8080/tchcoursemanage/addonetchcourse", //请求接口（相对接口，后面会介绍到）
          params: {
            tid: this.tid,
            mid: this.form.addTchCorMajor,
            cid: this.form.addTchCorCourse,
            classid: this.form.addTchCorClass,
            gid: this.form.addTchCorGrade,
          },
        }).then((e) => {
          if (e.data != true) {
            this.duplicateTchForOneCourse = true;
            this.duplicateTchForOneCourseName = e.data;
          } else {
            this.submitSucceed = true;
            this.duplicateTchForOneCourse = false;
          }
        });
      }
    },
  },
  mounted() {
    console.log(this.arrInfo);
    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/schoolmanage/findalldpm?page=1&limit=10", //请求接口（相对接口，后面会介绍到）
    }).then((e) => {
      // 使用此以访问数组内容
      const data = e.data.data;
      for (var i in e.data.data) {
        this.departmentOptions.push({
          value: data[i].did,
          label: data[i].dname,
        });
      }
    });
  },
};
</script>
    