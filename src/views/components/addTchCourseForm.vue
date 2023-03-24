<template>
  <argon-alert v-if="noClass" color="danger">
    <strong>警告!</strong> 该系部/专业下没有班级可供授课
  </argon-alert>
  <argon-alert v-if="duplicateTchForOneCourse" color="danger">
    <strong>错误!</strong> 该班级的课程已有老师正在教授：{{ duplicateTchForOneCourseName }}
  </argon-alert>
  <argon-alert v-if="submitSucceed" color="info">
    <strong>成功!</strong> 已建立教学关系
  </argon-alert>
  <el-form :model="form">
    <el-form-item label="所属系部">
      <el-select
        v-model="form.addTchCorDep"
        class="m-2"
        placeholder="选择系部"
        size="large"
        @change="depSelected"
      >
        <el-option
          v-for="item in departmentOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="选择专业">
      <el-select
        v-model="form.addTchCorMajor"
        class="m-2"
        placeholder="选择专业"
        size="large"
        :disabled="infoNotAvalible[0]"
        @change="majorSelected"
      >
        <el-option
          v-for="item in majorOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="选择年级">
      <el-select
        v-model="form.addTchCorGrade"
        class="m-2"
        placeholder="选择年级"
        :disabled="infoNotAvalible[1]"
        size="large"
        @change="gradeSelected"
      >
        <el-option
          v-for="item in gradeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="选择班级">
      <el-select
        v-model="form.addTchCorClass"
        class="m-2"
        placeholder="选择班级"
        :disabled="infoNotAvalible[2]"
        size="large"
      >
        <el-option
          v-for="item in classOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="选择课程">
      <el-select
        v-model="form.addTchCorCourse"
        class="m-2"
        placeholder="选择该专业的课程"
        size="large"
      >
        <el-option
          v-for="item in courseOptions"
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
   props:["tid"],
  data() {
    return {
      
      noClass:false,
      form: {
        addTchCorDep: ref(""),
        addTchCorMajor: ref(""),
        addTchCorGrade: ref(""),
        addTchCorClass: ref(""),
        addTchCorCourse: ref(""),
      },
      
      infoNotAvalible:[true, true, true],

      depNotSelected: true,

      departmentOptions: [],
      departmentValue: ref(""),

      majorOptions: [],

      gradeOptions: [],

      classOptions: [],

      courseOptions: [],

      tchList: [],
      teachingCourseList: [],

      duplicateTchForOneCourse: false,
      duplicateTchForOneCourseName: "",

      submitSucceed:false,
    };
  },
  methods: {

    onSubmit() {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/tchcoursemanage/addonetchcourse", //请求接口（相对接口，后面会介绍到）
        params: {
          tid:this.tid,
          mid:this.form.addTchCorMajor,
          cid:this.form.addTchCorCourse,
          classid:this.form.addTchCorClass,
          gid:this.form.addTchCorGrade
        },
      }).then((e) => {
        if(e.data != true) {
          this.duplicateTchForOneCourse = true;
          this.duplicateTchForOneCourseName = e.data;
        } else {
          this.submitSucceed = true;
          this.duplicateTchForOneCourse = false;
        }
      });
    },

    getCourse() {
      
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/tchcoursemanage/findallcoursebymajorid?page=1&limit=1000", //请求接口（相对接口，后面会介绍到）
        params: {
          mid: this.form.addTchCorMajor,
        },
      }).then((e) => {
        console.log(e.data);
        this.courseOptions = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          this.courseOptions.push({
            value: data[i].cid,
            label: data[i].cname,
          });
        }
        this.form.addTchCorCourse = this.courseOptions[0].value;
      });
    },
    // 选择班级
    gradeSelected(val) {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/tchcoursemanage/findtchcourseclassname?page=1&limit=1000", //请求接口（相对接口，后面会介绍到）
        params: {
          gid: val,
        },
      }).then((e) => {
        this.classOptions = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          this.classOptions.push({
            value: data[i].classid,
            label: data[i].classname,
          });
        }
        if (this.classOptions.length != 0) {
          this.form.addTchCorClass = this.classOptions[0].value;
          this.infoNotAvalible[2] = false;
          this.noClass = false;
        } else {
            this.noClassForChoose(2)
        }
      });
    },
    // 选择了专业
    majorSelected(val) {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/schoolmanage/jlselgrade?page=1&limit=1000", //请求接口（相对接口，后面会介绍到）
        params: {
          mid: val,
        },
      }).then((e) => {
        this.gradeOptions = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          this.gradeOptions.push({
            value: data[i].gid,
            label: data[i].gname,
          });
        }
        if (this.gradeOptions.length != 0) {
            this.form.addTchCorGrade = this.gradeOptions[0].value;

            this.infoNotAvalible[1] = false;

            this.gradeSelected(this.gradeOptions[0].value);
            this.getCourse();
          } else {
            this.noClassForChoose(1)
          }
      });
    },
    // 选择了系部
    depSelected(val) {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/schoolmanage/jlselmajor?page=1&limit=1000", //请求接口（相对接口，后面会介绍到）
        params: {
          did: val,
        },
      }).then((e) => {
        this.majorOptions = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          this.majorOptions.push({
            value: data[i].mid,
            label: data[i].mname,
          });
        }
        if (this.majorOptions.length != 0) {
            this.form.addTchCorMajor = this.majorOptions[0].value;
            
            this.infoNotAvalible[0] = false;

            this.majorSelected(this.majorOptions[0].value);
          } else {
            this.noClassForChoose(0)
          }
      });
    },
    // 设置信息不可以，till是直到某个选择器都可用
    noClassForChoose(till) {
      this.noClass = true;

      for (var i = till; i < 3; i++) {
        this.infoNotAvalible[i] = true;
      }
    }
  },
  mounted() {
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
  