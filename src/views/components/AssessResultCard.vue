<template>
  <div class="card mb-4">
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
                人数
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                学生打分
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div></div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">计算机视觉</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">软工184</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">45</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">60%</span>
                  <argon-progress color="success" :percentage="60" />
                </div>
              </td>
              <td class="align-middle">
                <el-popover placement="right" :width="400" trigger="click">
                  <template #reference>
                    <el-button style="margin-right: 16px"
                      >查看评价信息（已匿名）</el-button
                    >
                  </template>
                  <el-table :data="gridData">
                    <el-table-column width="400" property="date" label="date" />
                  </el-table>
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
import ArgonProgress from "@/components/ArgonProgress.vue";
import addTchCourseFormVue from "./addTchCourseForm.vue";

import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";
export default {
  name: "assess-table",
  components: {
    ArgonProgress,
    addTchCourseFormVue,
  },
};
</script>
  