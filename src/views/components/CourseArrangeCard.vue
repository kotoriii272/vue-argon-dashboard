<template>
  <div
    class="card h-300"
    style="overflow-y: scroll; height: 750px"
    v-loading="isLoading"
  >
    <div class="row card-header pb-0">
      <h5 class="mb-0">排课管理</h5>
    </div>

    <div class="row card-header pb-0 px-3">
      <el-select
        v-model="departmentValue"
        class="m-2"
        placeholder="选择系部"
        size="large"
        @change="selectDep"
      >
        <el-option
          v-for="item in departmentOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="row mx-3 my-3" style="width: 95%">
      <h6 class="mb-0">未安排课程</h6>
    </div>

    <div class="row mx-3 my-3" style="width: 95%">
      <el-table
        :data="UnsetCourse"
        style="width: 100%"
        height="200"
        table-layout="auto"
      >
        <el-table-column prop="tname" label="教师" />
        <el-table-column prop="classname" label="班级" />
        <el-table-column prop="cname" label="课程" />
        <el-table-column prop="Operations" label="操作">
          <template #default="scope">
            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >排课</el-button
            > -->

            <el-popover placement="right" :width="400" :trigger="click" :visible="popoverShowControl[scope.$index]">
                <template #reference>
                  <el-button  @click="popoverShow(scope.$index)">
                    安排课程</el-button>
                </template>
                <template #default>
                  <AddOneArrangeFormVue :arrInfo="scope.row" :classroomOptions="classroomOptions"/>
                  <el-button @click="popoverClose(scope.$index)">Cancel</el-button>
                </template>
              </el-popover>

            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div style="width: 100%; text-align: right;">
      <div class="mx-5">
      <ArgonButton
        color="success"
        size="lg"
        class="ms-auto"
        v-on:click="submit"
        >一键自动排课</ArgonButton
      >
      </div>
    </div>

    <div class="row mx-3 my-3" style="width: 95%">
      <h6 class="mb-0">已安排课程</h6>
    </div>

    <div class="row mx-3 my-3" style="width: 95%">
      <el-table :data="SetCourse" style="width: 100%" height="200" table-layout="auto">
        <el-table-column prop="tname" label="教师" />
        <el-table-column prop="classname" label="班级" />
        <el-table-column prop="cname" label="课程" />
        <el-table-column prop="room_code" label="教室" />
        <el-table-column prop="timetableNum" label="时间" />

        <el-table-column prop="address" label="操作" />
      </el-table>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";
import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";
import addTchCourseFormVue from "./addTchCourseForm.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import AddOneArrangeFormVue from './AddOneArrangeForm.vue';


export default {
  components: { addTchCourseFormVue, ArgonButton, AddOneArrangeFormVue },
  name: "billing-card",

  data() {
    return {
      isLoading: false,

      UnsetCourse: [],
      SetCourse: [],

      popoverShowControl : [],

      classroomOptions: [],

      departmentOptions: [],
      departmentValue: ref(""),
      tchList: [],
      teachingCourseList: [],
    };
  },
  methods: {
    popoverShow(num) {
      this.popoverShowControl[num] = true;
    },
    popoverClose(num) {
      this.popoverShowControl[num] = false;
    },

    // 选择系部
    selectDep() {
      this.isLoading = true;
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/courseArrange/getUnsetCourse", //请求接口（相对接口，后面会介绍到）
        params: {
          did: this.departmentValue,
        },
      }).then((e) => {
        this.UnsetCourse = e.data.msg;
        this.isLoading = false;
      });

      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/courseArrange/getSetCourse", //请求接口（相对接口，后面会介绍到）
        params: {
          did: this.departmentValue,
        },
      }).then((e) => {
        this.SetCourse = e.data.msg;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    //添加弹出框控制数组
    this.popoverShowControl = new Array(this.tchList.length).fill(false);

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
    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/courseArrange/getUnsetCourse", //请求接口（相对接口，后面会介绍到）
    }).then((e) => {

      this.UnsetCourse = e.data.msg;
    });

    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/courseArrange/getAllClassroom", //请求接口（相对接口，后面会介绍到）
    }).then((e) => {

      
      for (var i in e.data.msg) {
        this.classroomOptions.push({
          value:e.data.msg[i].crid,
          label:e.data.msg[i].room_code
        })
      }

    });

    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/courseArrange/getSetCourse", //请求接口（相对接口，后面会介绍到）
    }).then((e) => {

      this.SetCourse = e.data.msg;
    });
  },
};
</script>
  <style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
body {
  margin: 0;
}
</style>