<template>
  <div class="card h-100">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-0">添加教师</h5>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <argon-alert>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </argon-alert>
      <div class="row mb-1">
        <h6>教师姓名：</h6>
        <ArgonInput
          :value="tname"
          @getChildData="getChildData"
          name="tname"
          placeholder="Type here..."
          success
        />
      </div>
      <div class="row mb-1">
        <div class="col-5">
          <h6>政治面貌：</h6>
          <el-select
            v-model="poloticalValue"
            class="m-2"
            placeholder="选择..."
            size="large"
          >
            <el-option
              v-for="item in politicalOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="col-5">
          <h6>所属系部：</h6>
          <el-select
            v-model="departmentValue"
            class="m-2"
            placeholder="选择..."
            size="large"
          >
            <el-option
              v-for="item in departmentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="row mb-1">
        <h6>身份证号：</h6>
        <ArgonInput
          :value="tcardid"
          @getChildData="getChildData"
          name="tcardid"
          placeholder="Type here..."
          success
        />
      </div>
      <div class="row mb-1">
        <div class="col-4">
          <h6>性别：</h6>
          <el-radio-group v-model="radio1" class="ml-4">
            <el-radio label="男" size="large">男</el-radio>
            <el-radio label="女" size="large">女</el-radio>
          </el-radio-group>
        </div>
        <div class="col-8">
          <h6>手机号</h6>
          <ArgonInput
            :value="tphone"
            @getChildData="getChildData"
            name="tphone"
            placeholder="Type here..."
            success
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-4">
          <h6>入职时间</h6>
          <el-date-picker
            v-model="dateValue"
            type="date"
            placeholder="Select date and time"
          />
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-8">
          <h6>家庭住址</h6>
          <ArgonInput
            :value="taddress"
            @getChildData="getChildData"
            name="taddress"
            placeholder="Type here..."
            success
          />
        </div>
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
export default {
  name: "transaction-card",
  components: {
    ArgonButton,
    ArgonInput,
    ArgonAlert
  },
  methods: {
    // 用此同步子组件input的值和父页面的变量值
    getChildData(v) {
      this[v.name] = v.value;
    },
    submit() {
    //   console.log({
    //     tname: this.tname,
    //     pid: this.poloticalValue,
    //     tnation: "汉族",
    //     did: this.departmentValue,
    //     tcardid: this.tcardid,
    //     tgender: this.radio1,
    //     birthday:
    //       this.tcardid.slice(6, 10) +
    //       "-" +
    //       this.tcardid.slice(10, 12) +
    //       "-" +
    //       this.tcardid.slice(12, 14),
    //     tphone: this.tphone,
    //     tertime: this.dateValue,
    //     taddress: this.taddress,
    //   });
      axios({
        method: "post", //指定请求方式
        url: "http://localhost:8080/addTeacher", //请求接口（相对接口，后面会介绍到）
        params: {
          tname: this.tname,
          pid: this.poloticalValue,
          tnation: "汉族",
          did: this.departmentValue,
          tcardid: this.tcardid,
          tgender: this.radio1,
          birthday:
            this.tcardid.slice(6, 10) +
            "-" +
            this.tcardid.slice(10, 12) +
            "-" +
            this.tcardid.slice(12, 14),
          tphone: this.tphone,
          tertime: this.dateValue,
          taddress: this.taddress,
        },
      }).then((e) => {
        this.tname = "";
        this.poloticalValue = "";
        this.departmentValue = "";
        this.tcardid = "";
        this.radio1 = "";
        this.tcardid = "";
        this.tphone = "";
        this.dateValue = "";
        this.taddress = "";
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
      tname: "",
      tcardid: "",
      tphone: "",
      taddress: "",
      poloticalValue: ref(""),
      radio1: ref("1"),
      dateValue: ref(""),
      departmentValue: ref(""),
      departmentOptions: [],
      politicalOptions: [
        {
          value: "1",
          label: "中共党员",
        },
        {
          value: "2",
          label: "中共预备党员",
        },
        {
          value: "3",
          label: "民革党员",
        },
        {
          value: "4",
          label: "民盟党员",
        },
        {
          value: "5",
          label: "民建会员",
        },
        {
          value: "6",
          label: "民进会员",
        },
        {
          value: "7",
          label: "农工党党员",
        },
        {
          value: "8",
          label: "致公党会员",
        },
        {
          value: "9",
          label: "九三学社社员",
        },
        {
          value: "10",
          label: "台盟盟员",
        },
        {
          value: "11",
          label: "无党派人士",
        },
        {
          value: "12",
          label: "群众",
        },
      ],
    };
  },
};
</script>
  