<template>
  <div class="card h-100">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-0">添加课程</h5>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <div class="row mb-1">
        <h6>课程名称：</h6>
        <ArgonInput
          :value="cname"
          @getChildData="getChildData"
          name="cname"
          placeholder="Type here..."
          success
        />
      </div>
      <div class="row mb-1">
        <div class="col-6">
          <h6>选择系部：</h6>
          <el-select
            v-model="poloticalValue"
            class="m-2"
            placeholder="选择..."
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
        </div>
        <div class="col-6">
          <h6>选择专业：</h6>
          <el-select
            v-model="majorValue"
            class="m-2"
            placeholder="选择..."
            size="large"
            :disabled="depNotSelected"
          >
            <el-option
              v-for="item in majorOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="row mb-1">
        <div class="col-6">
          <h6>必/选修</h6>
          <el-radio-group v-model="radio1">
            <el-radio label="必修" size="large">必修</el-radio>
            <el-radio label="选修" size="large">选修</el-radio>
          </el-radio-group>
        </div>
        <div class="col-6">
          <h6>选择课程类型：</h6>
          <el-select
            v-model="courseTypeValue"
            class="m-2"
            placeholder="选择..."
            size="large"
          >
            <el-option
              v-for="item in courseTypeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="row mb-1">
        <div class="col-4">
          <h6>学分：</h6>
          <ArgonInput
            :value="ccredit"
            @getChildData="getChildData"
            name="ccredit"
            placeholder="Type here..."
            success
          />
        </div>
        <div class="col-4">
          <h6>学时：</h6>
          <ArgonInput
            :value="cperiod"
            @getChildData="getChildData"
            name="cperiod"
            placeholder="Type here..."
            success
          />
        </div>
        <div class="col-4">
          <h6>最大人数：</h6>
          <ArgonInput
            :value="cmaxcount"
            @getChildData="getChildData"
            name="cmaxcount"
            placeholder="Type here..."
            success
          />
        </div>
      </div>

      <div class="row mb-1">
        <div class="col-8"></div>
        <div class="col-4 mt-4">
          <h6></h6>
          <ArgonButton
            full-width
            color="success"
            size="md"
            class="ms-auto"
            v-on:click="submit"
            >点击提交</ArgonButton
          >
        </div>

      </div>
    </div>
  </div>
</template>
    
    <script>
import ArgonButton from "@/components/ArgonButton.vue";
import axios from "axios";
import ArgonAlert from "@/components/ArgonAlert.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import { ref } from "vue";
import { h } from 'vue';

export default {
  name: "add-course-card",
  components: {
    ArgonButton,
    ArgonInput,
    ArgonAlert,
  },
  methods: {
    openAlert() {
        this.$notify({
          title: '提示',
          message: '已成功创建课程',
          duration: 0,
        })
      },
    // 用此同步子组件input的值和父页面的变量值
    getChildData(v) {
      this[v.name] = v.value;
    },
    submit() {
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/addcou", //请求接口（相对接口，后面会介绍到）
        params: {
          cname: this.cname,
          mid: this.majorValue,
          ccredit: this.ccredit,
          cperiod: this.cperiod,
          cmaxcount: this.cmaxcount,
          ctid: this.courseTypeValue,
          studytype: this.radio1,
          cstate:0,
        },
      }).then((e) => {
        this.openAlert();

        this.isRouterAlive = false;
        this.$nextTick(() => {
          //$nextTick() 方法传入一个回调函数，在下一次渲染页面时调用该回调
          this.isRouterAlive = true;
        });
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

        this.majorValue = this.majorOptions[0].value;

        this.depNotSelected = false;
      });
    },
  },
  mounted() {
    axios({
      method: "post", //指定请求方式
      url: "http://localhost:8080/schoolmanage/findalldpm?page=1&limit=10", //请求接口（相对接口，后面会介绍到）
    }).then((e) => {
      console.log(e);

      const data = e.data.data;
      for (var i in e.data.data) {
        this.departmentOptions.push({
          value: data[i].did,
          label: data[i].dname,
        });
      }
    });
  },
  data() {
    return {
      courseTypeValue: ref(""),
      majorValue: ref(""),
      cname: "",

      radio1: ref("1"),

      departmentValue: ref(""),
      departmentOptions: [],
      majorOptions: [],
      depNotSelected: true,

      ccredit: "",
      cmaxcount: "",
      cperiod: "",

      courseTypeOption: [
        {
          value: "1",
          label: "专业基础课",
        },
        {
          value: "2",
          label: "公共课",
        },
        {
          value: "3",
          label: "任选课",
        },
      ],
    };
  },
};
</script>
    