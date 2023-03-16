<template>
    <div class="py-4 container-fluid">
      <div class="row">
        
        <div class="col-lg-12">
          <div class="row">
            <div class="py-4 widget-calendar card container-fluid">
              <div class="row">
                <div class="my-col">
                  <span>周</span>
                </div>
                <div class="my-col">
                  <span>周二</span>
                </div>
                <div class="my-col">
                  <span>周三</span>
                </div>
                <div class="my-col ">
                  <span>周四</span>
                </div>
                <div class="my-col ">
                  <span>周五</span>
                </div>
                <div class="my-col ">
                  <span>周六</span>
                </div>
                <div class="my-col ">
                  <span>周日</span>
                </div>
              </div>
              <hr class="horizontal dark m-0" :class="dark" />
              <div class="row mt-2">
                <div class="my-col">
                </div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
              </div>
              
              <div class="row mt-2">
                <div class="my-col"><argon-snackbar
                  title="线性代数"
                  date="上课地点：1103"
                  description="上课周数：1-15周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                />
                </div>
                <div class="my-col"></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="线性代数"
                  date="上课地点：1103"
                  description="上课周数：1-15周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="微电子学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
              </div>
              <div class="row mt-2">
                <div class="my-col">
                </div>
                <div class="my-col"><argon-snackbar
                  title="体育（羽毛球）"
                  date="上课地点：网球场"
                  description="上课周数：1-13周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"><argon-snackbar
                  title="JAVAEE"
                  date="上课地点：1102"
                  description="上课周数：1-8周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="大学英语"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
              </div>
              <div class="row mt-2">
                <div class="my-col"><argon-snackbar
                  title="职业教育"
                  date="上课地点：1402"
                  description="上课周数：8-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                />
                </div>
                <div class="my-col"></div>
                <div class="my-col"></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
              </div>
              <div class="row mt-2">
                <div class="my-col">
                </div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
                <div class="my-col"></div>
                <div class="my-col"><argon-snackbar
                  title="高等数学"
                  date="上课地点：4015"
                  description="上课周数：1-11周"
                  :icon="{ component: 'ni ni-check-bold', color: 'white' }"
                  color="success"
                /></div>
              </div>
            </div>
          </div>
          
          
  
  
          <div class="row mt-4">
            <div class="col-12">
              <div class="card">
                <div class="p-3 pb-0 card-header">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-2">本学期课程</h6>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center">
                    <tbody>
                      <tr v-for="(sale, index) in sales" :key="index">
                        <td class="w-30">
                          <div class="px-2 py-1 d-flex align-items-center">
                            
                            <div class="ms-4">
                              <p class="mb-0 text-xs font-weight-bold">课程名:</p>
                              <h6 class="mb-0 text-sm">{{ sale.country }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="mb-0 text-xs font-weight-bold">学分:</p>
                            <h6 class="mb-0 text-sm">{{ sale.sales }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="mb-0 text-xs font-weight-bold">教师:</p>
                            <h6 class="mb-0 text-sm">{{ sale.value }}</h6>
                          </div>
                        </td>
                        <td class="text-sm align-middle">
                          <div class="text-center col">
                            <p class="mb-0 text-xs font-weight-bold">课程编号:</p>
                            <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                          </div>
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
    </div>
  </template>
  
  
  <style scoped>
  .my-col {
  /* width: 14.27%; */
  width: 14.2857%;
  }
  </style>
  
  <script>
  import Card from "@/examples/Cards/Card.vue";
  import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
  import Carousel from "./components/Carousel.vue";
  import CategoriesCard from "./components/CategoriesCard.vue";
  import MiniPlayerCard from "@/views/components/CardPlayer.vue"; 
  import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue"; 
  import ArgonSnackbar from "@/components/ArgonSnackbar.vue";
  
  import US from "@/assets/img/icons/flags/US.png";
  import DE from "@/assets/img/icons/flags/DE.png";
  import GB from "@/assets/img/icons/flags/GB.png";
  import BR from "@/assets/img/icons/flags/BR.png";
  
  export default {
    name: "TeacherDashboard",
    data() {
      return {
        stats: {
          money: {
            title: "高等数学",
            value: "高亮",
            percentage: "3",
            iconClass: "ni ni-money-coins",
            detail: "since yesterday",
            iconBackground: "bg-gradient-primary",
          },
          users: {
            title: "Today's Users",
            value: "2,300",
            percentage: "+3%",
            iconClass: "ni ni-world",
            iconBackground: "bg-gradient-danger",
            detail: "since last week",
          },
          clients: {
            title: "New Clients",
            value: "+3,462",
            percentage: "-2%",
            iconClass: "ni ni-paper-diploma",
            percentageColor: "text-danger",
            iconBackground: "bg-gradient-success",
            detail: "since last quarter",
          },
          sales: {
            title: "Sales",
            value: "$103,430",
            percentage: "+5%",
            iconClass: "ni ni-cart",
            iconBackground: "bg-gradient-warning",
            detail: "than last month",
          },
        },
        sales: {
          us: {
            country: "高等数学",
            sales: 3,
            value: "高亮",
            bounce: "1",
            flag: US,
          },
          germany: {
            country: "线性代数",
            sales: 2,
            value: "张杰",
            bounce: "2",
            flag: DE,
          },
          britain: {
            country: "微观电路",
            sales: 1.5,
            value: "强结",
            bounce: "3",
            flag: GB,
          },
          brasil: {
            country: "职业教育",
            sales: 2,
            value: "青航",
            bounce: "4",
            flag: BR,
          }
        },
      };
    },
    mounted: function(){
      
    },
    methods:{
      
    },
    components: {
      DefaultInfoCard,
      MiniPlayerCard,
      Card,
      GradientLineChart,
      Carousel,
      CategoriesCard,
      ArgonSnackbar
    },
  };
  </script>
  