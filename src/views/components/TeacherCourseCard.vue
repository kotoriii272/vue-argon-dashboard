<template>
  <div class="card h-300" style="overflow-y: scroll; height: 750px" v-loading="isLoading">
    <div class="card-header pb-0 px-3">
      <h5 class="mb-0">教师授课管理</h5>
    </div>
    <div class="card-header pb-0 px-3">
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

    <!-- 展示教师已经在教的课的pop over -->
    <el-empty v-if="tchList.length == 0" description="请选择系部" />
    <div v-else class="card-body pt-4 p-3">
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
          v-for="(index, tch) in tchList"
          :key="index"
        >
          <div class="d-flex flex-column">
            <h6 class="mb-3 text-sm">{{ tchList[tch].tname }}</h6>
            <span class="mb-2 text-m">
              性别:
              <span class="text-dark font-weight-bold ms-sm-2">{{
                tchList[tch].tgender
              }}</span>
            </span>
            <span class="mb-2 text-m">
              电话:
              <span class="text-dark ms-sm-2 font-weight-bold">{{
                tchList[tch].tphone
              }}</span>
            </span>
            <span class="text-m">
              入职时间:
              <span class="text-dark ms-sm-2 font-weight-bold">{{
                tchList[tch].entertime
              }}</span>
            </span>
          </div>
          <div class="ms-auto text-end" style="align-items: right">
            <div style="display: flex; align-items: center">
              <el-popover placement="right" :width="600" trigger="click">
                <template #reference>
                  <el-button style="margin-right: 16px"
                    >查看教授的课程</el-button
                  >
                </template>
                <el-table :data="tchList[tch].course">
                  <el-table-column
                    width="300"
                    property="cname"
                    label="课程名"
                  />
                  <el-table-column
                    width="150"
                    property="classname"
                    label="班级名"
                  />
                  <el-table-column width="150" property="gname" label="年级" />
                </el-table>
              </el-popover>
            </div>
            <div class="mt-3" style="align-items: left">
             

              <el-popover placement="right" :width="400" :visible="popoverShowControl[tch]">
                <template #reference>
                  <el-button style="margin-right: 16px" @click="popoverShow(tch)">
                    安排课程</el-button>
                </template>
                <template #default>
                  <addTchCourseFormVue :tid="tchList[tch].tid" />
                  <el-button @click="popoverClose(tch)">Cancel</el-button>
                </template>
              </el-popover>

             
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";
import addTchCourseFormVue from "./addTchCourseForm.vue";
export default {
  components: { addTchCourseFormVue },
  name: "billing-card",
  
  data() {
    return {
      isLoading:false,

      popoverVisible:false,
      dialog: ref(false),
      drawer: false,
      formLabelWidth: "80px",
      cactiveNames: ref(["1"]),
      drawerRef: ref(),

      popoverShowControl : [],

      form: reactive({
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      }),
      dialogFormVisible: false,
      formLabelWidth: "140px",
      addTchCorDep: ref(""),
      addTchCorMajor: ref(""),
      addTchCorGrade: ref(""),
      addTchCorClass: ref(""),
      addTchCorCourse: ref(""),

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
    // 获取教师正在教授的课程
    getTeachingCourse(tid, index) {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/tchcoursemanage/findcoursebytch?page=1&limit=10", //请求接口（相对接口，后面会介绍到）
        params: {
          tid: tid,
        },
      }).then((e) => {
        var courseArray = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          courseArray.push(data[i]);
        }

        this.tchList[index].course = courseArray;
      });
    },
    // 选择系部
    selectDep() {
      this.isLoading = true;
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/tchcoursemanage/findalltch?page=1&limit=1000", //请求接口（相对接口，后面会介绍到）
        params: {
          did: this.departmentValue,
        },
      }).then((e) => {
        this.tchList = [];
        this.teachingCourseList = [];
        // 使用此以访问数组内容
        const data = e.data.data;
        for (var i in e.data.data) {
          data[i].entertime = data[i].entertime.slice(0, 10);
          this.tchList.push(data[i]);
          this.getTeachingCourse(data[i].tid, i);
        }
        
        this.popoverShowControl = new Array(this.tchList.length).fill(false);
        
        this.isLoading = false;
      });
      
    },
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