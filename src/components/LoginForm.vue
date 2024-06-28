<template>
  <div class="flex bg-white h-screen w-screen overflow-hidden">
    <div class="w-3/5 relative hidden md:block">
      <img
        :src="SideImg"
        alt="Side Image"
        class="absolute md:top-[10rem] md:left-[-4rem] lg:top-[5rem] lg:left-[-5rem]"
      />
    </div>
    <div class="relative">
      <img
        :src="SideImg2"
        alt="Side Image"
        class="absolute left-10 object-cover z-0 md:hidden"
      />
      <div class="">
        <div class="relative flex flex-col my-20 px-10 py-20 gap-10 z-10">
          <div class="my-text text-2xl font-bold">
            Login to Access Dashboard
          </div>
          <form @submit.prevent="submitForm" class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
              <div class="font-bold my-text text-sm">
                Email<span class="text-red-500">*</span>
              </div>
              <input
                v-model="form.email"
                type="email"
                :class="{ 'border-red-500': errors.email }"
                @input="validateField('email')"
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:shadow-lg"
              />
              <span v-if="errors.email" class="text-red-500 text-sm">{{
                errors.email
              }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <div class="flex justify-between">
                <div class="font-bold my-text text-sm">
                  Password <span class="text-red-500">*</span>
                </div>
                <div class="my-text text-sm text-red-500">Forget Password?</div>
              </div>
              <input
                v-model="form.password"
                type="password"
                :class="{ 'border-red-500': errors.password }"
                @input="validateField('password')"
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:shadow-lg"
              />
              <span v-if="errors.password" class="text-red-500 text-sm">{{
                errors.password
              }}</span>
            </div>
            <div class=" flex justify-center">
              <button type="submit"
                class="btn bg-white text-blue text- rounded-xl relative items-center pl-6 border-solid border-[#0E77FF] hover:bg-blue hover:text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                Get Started
                <div class="relative">
                  <v-icon aria-hidden="true" class="-left-2"
                    >mdi-chevron-right</v-icon
                  >
                  <v-icon aria-hidden="true" class="absolute -left-6"
                    >mdi-chevron-right</v-icon
                  >
                </div>
              </button>
            </div>
            <!-- <div class="flex justify-center">
              <button
                type="submit"
                class="btn bg-white px-8 py-3 font-semibold text-blue rounded-full w-40 border-solid border-2 border-blue inline-flex items-center justify-center hover:bg-blue hover:text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                Login
                <v-icon aria-hidden="true" class="ml-2"
                  >mdi-chevron-right</v-icon
                >
              </button>
            </div> -->
          </form>
        </div>
      </div>
      <img
        :src="SideImg2"
        alt="Side Image"
        class="absolute bottom-20 left-0 object-cover z-0 scale-x-[-1] md:hidden"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import * as Yup from "yup";
import SideImg from "@/assets/Group 35699.svg";
import SideImg2 from "@/assets/Group 35700.svg";
import { reactive } from "vue";

export default {
  name: "Form",
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const form = reactive({
      email: "",
      password: "",
    });

    const errors = reactive({
      email: "",
      password: "",
    });

    const validateField = async (field) => {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      });

      try {
        await schema.validateAt(field, form);
        errors[field] = "";
      } catch (error) {
        errors[field] = error.message;
      }
    };

    const submitForm = async () => {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      });

      try {
        await schema.validate(form, { abortEarly: false });
        // Form is valid, proceed with submission
        console.log("Form submitted:", form);

        // Uncomment this section if you want to enable form submission
        // Create a FormData object
        // const formData = new FormData();
        // formData.append('email', form.email);
        // formData.append('password', form.password);

        // Actual form submission logic
        // const response = await fetch('https://formsubmit.co/ajax/2021ume0205@iitjammu.ac.in', {
        //   method: 'POST',
        //   body: formData,
        //   mode: 'no-cors', // This mode allows bypassing CORS policy but has limitations
        // });

        // Since we can't read the response in no-cors mode, assume success
        authStore.login({ email: form.email });
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000); // 2000 milliseconds = 2 seconds
      } catch (validationErrors) {
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      }
    };

    return { form, errors, validateField, submitForm };
  },
  data() {
    return {
      SideImg: SideImg,
      SideImg2: SideImg2,
    };
  },
};
</script>

<style scoped>
.my-text {
  font-family: "Poppins", sans-serif;
}
/* .bg-container {
  height: 100vh;
  position: relative;
  background-color: #FFFFFF;
} */
</style>
