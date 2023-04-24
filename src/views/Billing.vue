<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-8">
        <GradeTable />
      </div>
      <div class="col-4">
        <div class="card card-profile">
            <img
              src="../assets/img/bg-profile.jpg"
              alt="Image placeholder"
              class="card-img-top"
            />
            <div class="row justify-content-center">
              <div class="col-4 col-lg-4 order-lg-2">
                <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                  <a href="javascript:;">
                    <img
                      src="../assets/img/team-1.jpg"
                      class="rounded-circle img-fluid border border-2 border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3"
            >
              <div class="d-flex justify-content-between"></div>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid text-center">
                      <span class="text-lg font-weight-bolder">3.5</span>
                      <span class="text-sm opacity-8">绩点</span>
                    </div>
                    <div class="d-grid text-center mx-4">
                      <span class="text-lg font-weight-bolder">10</span>
                      <span class="text-sm opacity-8">院校排名</span>
                    </div>
                    <div class="d-grid text-center">
                      <span class="text-lg font-weight-bolder">89</span>
                      <span class="text-sm opacity-8">已修学分</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <h5>
                  年龄
                  <span class="font-weight-light">21</span>
                </h5>
                <div class="h6 font-weight-300">
                  <i class="ni location_pin mr-2"></i>四川，成都
                </div>
                <div class="h6 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>辅导员 - 哲亮
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i
                  >辅导员邮箱：123456@cuit.edu
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import GradeTable from "./components/GradeTable.vue";
import PublicTable from "./components/PublicCourseTable.vue";

export default {
  name: "tables",
  components: {
    GradeTable,
    PublicTable,
  },
  data() {
    return {
      
    };
  },
};
</script>
