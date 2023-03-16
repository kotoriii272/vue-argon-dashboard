<template>
  <argon-alert v-if="true" color="danger">
    <strong>警告!</strong> 该系部下没有班级可供授课
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
        :disabled="depNotSelected"
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
        :disabled="depNotSelected"
        size="large"
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
        :disabled="depNotSelected"
        size="large"
      >
        <el-option
          v-for="item in gradeOptions"
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
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>




<!-- <script lang="ts" setup>
import type { CascaderProps } from "element-plus";
import axios from "axios";
import { ref } from "vue";
import { reactive } from "vue";

var form = reactive({
  addTchCorDep: "",
  addTchCorMajor: "",
  addTchCorGrade: "",
  addTchCorClass: "",
  addTchCorCourse: "",
});
let id = 0;
const props: CascaderProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node;
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map((item) => ({
        value: ++id,
        label: `Option - ${id}`,
        leaf: level >= 2,
      }));
      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
      resolve(nodes);
    }, 1000);
  },
};
</script> -->

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
  data() {
    return {
      

      form: {
        addTchCorDep: ref(""),
        addTchCorMajor: ref(""),
        addTchCorGrade: ref(""),
        addTchCorClass: ref(""),
        addTchCorCourse: ref(""),
      },

      depNotSelected: true,

      departmentOptions: [],
      departmentValue: ref(""),

      majorOptions: [],

      gradeOptions: [],

      classOptions: [],

      courseOptions: [],

      tchList: [],
      teachingCourseList: [],
    };
  },
  methods: {
    getCourse() {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/tchcoursemanage/findallcoursebymajorname?page=1&limit=1000", //请求接口（相对接口，后面会介绍到）
        params: {
          mid: this.addTchCorMajor,
        },
      }).then((e) => {
        this.courseOptions = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          this.courseOptions.push({
            value: data[i].cid,
            label: data[i].cname,
          });
        }
        console.log(this.courseOptions);
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

          if (this.gradeOptions.length != 0) {
            this.form.addTchCorMajor = this.gradeOptions[0].value;

            this.gradeSelected(this.gradeOptions[0].value);
            this.getCourse();
          }
        }
      });
    },
    // 选择了系部
    depSelected(val) {
      this.depNotSelected = false;
      console.log(val);
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

          if (this.majorOptions.length != 0) {
            this.form.addTchCorMajor = this.majorOptions[0].value;

            this.majorSelected(this.majorOptions[0].value);
          }
        }
      });
    },
  },
  mounted() {
    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/schoolmanage/findalldpm?page=1&limit=10", //请求接口（相对接口，后面会介绍到）
    }).then((e) => {
      console.log(e);

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
  