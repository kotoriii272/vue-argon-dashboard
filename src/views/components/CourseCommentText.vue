<template>
  <div>
  <text>对这节课的评分：</text><el-rate v-model="value1" />
  <argon-input size="lg" placeholder="请输入评价" />
  <argon-button color="success" size="sm" class="ms-auto" @click="changeDisable"
    >提交评价</argon-button
  >
  </div>
</template>
  
  <script>
import argonButton from "../../components/ArgonButton.vue";
import argonInput from "../../components/ArgonInput.vue";
import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";
export default {
  name: "public-class-table",
  data() {
    return {
      dialog: false,
      value1:ref(null)
    };
  },
  components: {
    ElDrawer,
    argonButton,
    argonInput,
  },
};
</script>
  