<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <AssessCard />
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import MasterCard from "@/examples/Cards/MasterCard.vue";
  import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
  import PaymentCard from "./components/PaymentCard.vue";
  import InvoiceCard from "./components/InvoiceCard.vue";
  import TeacherCourseCard from "./components/TeacherCourseCard.vue";
  import AddTeacherCard from "./components/AddTeacherCard.vue";
  import AssessCard from "./components/AssessResultCard.vue";

  export default {
    name: "AssessResult",
    components: {
        AssessCard,
      MasterCard,
      DefaultInfoCard,
      PaymentCard,
      InvoiceCard,
      TeacherCourseCard,
      AddTeacherCard,
    },
    data() {
      return {
        salary: {
          classIcon: "text-white fas fa-landmark",
          title: "Salary",
          desc: "Belong Interactive",
          price: "+$2000",
        },
        paypal: {
          classIcon: "text-white fab fa-paypal",
          title: "Paypal",
          desc: "Freelance Payment",
          price: "$455.00",
        },
      };
    },
  };
  </script>
  