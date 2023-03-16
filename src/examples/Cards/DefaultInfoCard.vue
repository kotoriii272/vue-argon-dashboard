<template>
  <div class="card" style="background-color:#C176FF;">
    <div class="p-3 mx-4 text-center card-header" style="background-color:#C176FF;">
      <div
        :class="icon_bg"
        class="icon icon-lg bg-gradient-success shadow text-center border-radius-lg"
      >
      <h6 class="mb-0 text-center" style="color:azure; font-size: 35px;">公</h6>
      </div>
    </div>
    <div class="p-3 pt-0 text-center card-body">
      <h6 class="mb-0 text-center" style="color:azure">{{ title }}</h6>
      <span class="text-xs">{{ desc }}</span>
      <hr class="my-3 horizontal white" />
      <h5 class="mb-0">{{ price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "default-info-card",
  props: {
    icon_bg: {
      type: String,
      default: "bg-white",
    },
    classIcon: {
      type: String,
      required: true,
    },
    title: String,
    desc: String,
    price: String,
  },
};
</script>