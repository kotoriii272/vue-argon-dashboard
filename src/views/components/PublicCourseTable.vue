<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>公共选修课程</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">课程名</th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >学分</th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >授课方式</th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >课程编号</th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">移动软件开发</h6>
                      <p class="text-xs text-secondary mb-0">授课教师：西门庆</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h6 class="mb-0 text-sm">2</h6>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-success">线下授课</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">231</span>
                </td>
                <td class="align-middle">
                  <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                  >选择</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">JAVAEE</h6>
                      <p class="text-xs text-secondary mb-0">授课教师：刘兆涵</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h6 class="mb-0 text-sm">1.5</h6>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-info">网上授课</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">222</span>
                </td>
                <td class="align-middle">
                  <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                  >选择</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">C++软件开发</h6>
                      <p class="text-xs text-secondary mb-0">授课教师：西门庆</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h6 class="mb-0 text-sm">2</h6>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-success">线下授课</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">231</span>
                </td>
                <td class="align-middle">
                  <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                  >选择</a>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "public-class-table",
  };
  </script>
  