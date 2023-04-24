<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <h6>评教页面</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
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
                      学分
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      授课方式
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      课程编号
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">移动软件开发</h6>
                          <p class="text-xs text-secondary mb-0">
                            授课教师：西门庆
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="mb-0 text-sm">2</h6>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success"
                        >线下授课</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >231</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <el-popover
                        placement="right"
                        :width="400"
                        trigger="click"
                      >
                        <template #reference>
                          <el-button style="margin-right: 16px"
                            >点击评分</el-button
                          >
                        </template>
                        <template #default>
                          <AppriseForm/>
                        </template>
                      </el-popover>
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
</template>

<script>
import AppriseForm from "./components/AppriseForm.vue";
import axios from "axios";
import addTchCourseFormVue from "./components/addTchCourseForm.vue";
import PublicTable from "./components/PublicCourseTable.vue";
import argonButton from "../components/ArgonButton.vue";
import argonInput from "../components/ArgonInput.vue";
import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";
import commentForm from "./components/CourseCommentText.vue";

import ArgonInput from "../components/ArgonInput.vue";

export default {
  name: "tables",
  components: {
    AppriseForm,
    ElDrawer,
    commentForm,
    PublicTable,
    argonButton,
    argonInput,
    addTchCourseFormVue,
  },
  data() {
    return {
      dialog: true,
      popoverShowControl: []
    };
  },
  mounted() {
    
  }
};
</script>
