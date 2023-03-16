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
                      <commentForm></commentForm>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">JAVAEE</h6>
                          <p class="text-xs text-secondary mb-0">
                            授课教师：刘兆涵
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="mb-0 text-sm">1.5</h6>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-info"
                        >网上授课</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >222</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <commentForm></commentForm>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">C++软件开发</h6>
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
                      <commentForm></commentForm>
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

import PublicTable from "./components/PublicCourseTable.vue";
import argonButton from "../components/ArgonButton.vue";
import argonInput from "../components/ArgonInput.vue";
import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";
import commentForm from "./components/CourseCommentText.vue"

import ArgonInput from "../components/ArgonInput.vue";

export default {
  name: "tables",
  components: {
    ElDrawer,
    commentForm,
    PublicTable,
    argonButton,
    argonInput
},
  data() {
    return {
      dialog: true,
      stats: {
        formLabelWidth: "80px",
        titleColor: "opacity-7 text-white",
        descColor: "text-white",
        trip: {
          title: "Today's Trip",
          desc: "145 KM",
          classIcon: "text-dark ni ni-money-coins",
        },
        health: {
          title: "Battery Health",
          desc: "99 %",
          classIcon: "text-dark ni ni-controller ",
        },
        speed: {
          title: "Average Speed",
          desc: "56 Km/h",
          classIcon: "text-dark ni ni-delivery-fast",
        },
        volume: {
          title: "Music Volume",
          desc: "15/100",
          classIcon: "text-dark ni ni-note-03",
        },
      },
    };
  },
};
</script>
