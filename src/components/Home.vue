<template>
  <div class="bg-white">
    <div
      class="bg-cover bg-no-repeat pb-80 py-20 px-32"
      :style="{ backgroundImage: `url(${FirstBG})` }"
    >
      <!-- min-h-screen  min-w-screen h-[1000px] w-[1920px]  -->
      <div class="flex">
        <div class="text-white text-lg">Logo</div>
        <div class="flex ml-auto gap-10 items-center">
          <div class="text-white text-lg">About</div>
          <div class="text-white text-lg">Services</div>
          <div class="text-white text-lg">Case Studies</div>
          <div class="text-white text-lg">Testimonials</div>
          <div class="text-white text-lg">Contact</div>
          <button class="btn px-8 text-lg" @click="navigateToLogin">
            Login
          </button>
        </div>
      </div>
      <div class="flex flex-col w-1/2 mt-32 gap-10">
        <div
          class="text-white text-4xl font-semibold my-text leading-snug tracking-wide w-4/5"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </div>
        <div class="text-[#9ABFFF] my-text leading-snug tracking-wider">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </div>
      </div>
      <div class="mt-10">
        <button
          class="btn bg-white text-[#3c89ee] rounded-xl relative items-center pl-6 border-solid border-blue border-2"
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
    </div>
    <div class="flex h-screen w-screen mt-32 overflow-hidden">
      <!-- Background Image Column -->
      <div class="relative w-full h-full bg-cover bg-no-repeat">
        <div
          class="absolute top-0 left-[-10%] w-full h-full bg-cover bg-no-repeat"
          :style="{ backgroundImage: `url(${SecondBG})` }"
        ></div>
      </div>

      <!-- Content Column -->
      <div class="w-4/5 flex flex-col justify-center relative mt-32">
        <img
          :src="ThirdBG"
          alt="Side Image"
          class="h-80 absolute -top-36 -right-16"
        />
        <div class="text-start w-full px-28">
          <div class="text-[#0E77FF] flex items-center">
            <v-icon aria-hidden="true" class="rotate-90">mdi-triangle</v-icon>
            <div class="text-lg my-text font-bold ml-2">ABOUT US</div>
          </div>
          <div class="mt-5 text-3xl font-bold leading-snug tracking-wide">
            Great Digital Agency
          </div>
          <div class="mt-8 text-md my-text font-semibold">
            Our products are fully custom-made, built with the latest
            technologies and cloud-architectures.
          </div>
          <div class="mt-8 text-md my-text leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
            odio, turpis accumsan congue. Quisque blandit dui Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. In convallis porta mauris non aliquam.
          </div>
          <div class="mt-10">
            <button
              class="btn bg-white text-[#3c89ee] rounded-xl relative items-center pl-6 border-solid border-blue border-2"
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
        </div>
        <img
          :src="FourthBG"
          alt="Side Image"
          class="h-80 absolute -bottom-28 -right-32"
        />
      </div>
    </div>
    <div class="flex bg-container">
      <div class="w-4/5 flex flex-col pl-32 pt-52 pb-40">
        <div class="text-[#0E77FF] flex items-center">
          <v-icon aria-hidden="true" class="rotate-90">mdi-triangle</v-icon>
          <div class="text-lg my-text font-bold ml-2">OUR SERVICES</div>
        </div>
        <div class="mt-5 text-3xl font-semibold leading-snug w-3/5">
          Transforming your ideas into Reality
        </div>
        <div class="mt-10 flex flex-col gap-5">
          <div class="flex gap-5">
            <div
              class="bg-[#16B2FF17] text-[#0E77FF] font-semibold my-text py-3 px-5 rounded-lg"
            >
              Web Development
            </div>
            <div
              class="bg-[#16B2FF17] text-[#0E77FF] font-semibold my-text py-3 px-5 rounded-lg"
            >
              Mobile Development
            </div>
          </div>
          <div class="flex gap-5">
            <div
              class="bg-[#0E77FF] text-white font-semibold my-text py-3 px-5 rounded-lg"
            >
              UI/UX Designing
            </div>
            <div
              class="bg-[#16B2FF17] text-[#0E77FF] font-semibold my-text py-3 px-5 rounded-lg"
            >
              Branding
            </div>
          </div>
          <div class="flex gap-5">
            <div
              class="bg-[#16B2FF17] text-[#0E77FF] font-semibold my-text py-3 px-5 rounded-lg"
            >
              Cloud Technology
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-4/5 h-120 flex justify-center">
        <!-- Blue Background -->
        <div class="absolute right-0 top-0 bg-[#0E77FF] w-1/2 h-full z-0"></div>

        <!-- White Background -->
        <div
          class="absolute left-0 top-0 bg-white py-10 pl-10 shadow-custom-blue my-20 w-1/2 h-4/5 z-10 flex flex-col rounded-md"
        >
          <!-- <div class="flex items-center gap-3 w-full">
            <img :src="UiLogo" alt="Side Image" />
            <div class="my-text text-3xl font-semibold">UI/UX Designing</div>
          </div> -->
        </div>

        <!-- Text Overlay -->
        <div class="relative z-20 p-10 pl-20 top-16">
          <div class="flex items-center gap-3 w-full">
            <img :src="UiLogo" alt="Side Image" />
            <div class="my-text text-3xl font-semibold">UI/UX Designing</div>
          </div>
          <p class="mt-8 w-4/5 leading-loose">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam
            ex odio, is the turpis accu msan congue euisque blandit dui Pelle
            ntesque habitant.
          </p>
          <ul class="mt-5 space-y-8">
            <li class="flex items-center">
              <img :src="TickLg" alt="Side Image" class="mr-2" />
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
            </li>
            <li class="flex items-center">
              <img :src="TickLg" alt="Side Image" class="mr-2" />
              Lorem ipsum dolor sit amet,
            </li>
            <li class="flex items-center">
              <img :src="TickLg" alt="Side Image" class="mr-2" />
              conse ctetur adipi scing elit.
            </li>
            <li class="flex items-center">
              <img :src="TickLg" alt="Side Image" class="mr-2" />
              Lorem ipsum dolor sit amet, conse ctetur
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class=" relative bg-container p-20">
      <img
        :src="FifthBG"
        alt="Side Image"
        class="absolute h-96 -top-32 -left-20"
      />
      <div class="flex flex-col items-center gap-10 relative z-10">
        <div class="text-4xl my-text font-bold">Core Technologies</div>
        <div class="text-center w-1/2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          odio, is the turpis accumsan congue. Quisque blandit dui. Pellentesque
          habitant.
        </div>
        <div
          class="rounded-xl shadow-custom-blue flex justify-around items-center p-3 w-1/2"
        >
          <div class="text-lg font-semibold">Design</div>
          <div class="h-8 border-l-2 border-gray-500"></div>
          <div class="text-blue text-lg font-semibold">Design</div>
          <div class="h-8 border-l-2 border-gray-500"></div>
          <div class="text-lg font-semibold">Design</div>
        </div>
        <div class="mt-10 flex gap-10 justify-around">
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="ReactLg" alt="Side Image" />
          </div>
          <div
            class="border-solid p-6 rounded-md bg-[#0E77FF] flex items-center justify-center w-32 h-32"
          >
            <img :src="AWSLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="CloudLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="ReduxLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="JsLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="G10Lg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="AWSLg1" alt="Side Image" />
          </div>
        </div>
        <div class="mt-10 flex gap-10 justify-around">
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="G10Lg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="ReduxLg" alt="Side Image" />
          </div>

          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="FireLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="NodeLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="ReactLg" alt="Side Image" />
          </div>
          <div
            class="border-solid border-blue border-2 p-6 rounded-md flex items-center justify-center w-32 h-32"
          >
            <img :src="JsLg" alt="Side Image" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-cover bg-no-repeat pr-30"
      :style="{ backgroundImage: `url(${SixthBG})` }"
    >
      <img :src="TriangleImg" alt="Side Image" class="ml-20" />

      <div class="flex">
        <div class="w-1/2 ml-10 mt-48">
          <img :src="SideImg" alt="Side Image" class="" />
        </div>
        <div class="w-2/5 bg-white shadow-custom-blue mt-32 p-10 flex flex-col">
          <div class="my-text text-3xl font-semibold mt-10">
            Send Us message
          </div>
          <div class="gap-5 flex flex-col mt-10 px-6">
            <div class="my-text text-md flex flex-col">
              <input
                type="email"
                placeholder="Your Email*"
                class="border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none placeholder-black"
              />
            </div>
            <div class="my-text text-md flex flex-col">
              <input
                type="text"
                placeholder="Your Name*"
                class="border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none placeholder-black"
              />
            </div>
            <div class="my-text text-md flex flex-col">
              <input
                type="number"
                placeholder="Phone Number*"
                class="border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none placeholder-black"
              />
            </div>
            <div class="my-text text-md flex flex-col">
              <input
                type="text"
                placeholder="Subject"
                class="border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none placeholder-black"
              />
            </div>
            <div class="my-text text-md flex flex-col mt-5">
              <div class="pl-3">Your message</div>
              <input
                type="text"
                class="border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none placeholder-black"
              />
            </div>
            <div class="mt-5 flex items-center w-4/5">
              <input
                type="checkbox"
                id="exampleCheckbox"
                class="mr-2 rounded-md p-3 border-solid border-2"
              />
              <label for="exampleCheckbox" class="text-gray-700 text-sm"
                >By sending this message, you confirm that you have read and
                agreed to our privacy-policy.</label
              >
            </div>
          </div>
          <div class="mt-10 pl-4">
            <button
              class="btn bg-[#3c89ee] text-white text- rounded-xl relative items-center pl-6 border-solid"
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
        </div>
      </div>
      <div class="flex pb-20">
        <div class="flex flex-col w-2/5">
          <div class="px-10 leading-relaxed mt-20 text-white my-text">
            Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse
            cillum dolore e uis nostrud exercitation isi ut aliquip ex ea
            commodo consequat.
          </div>
          <div class="flex px-12 gap-2 mt-4">
            <div class="text-white flex text-xl rounded-full border-2 p-1">
              <v-icon aria-hidden="true" class="">mdi-facebook</v-icon>
            </div>
            <div class="text-white flex text-xl rounded-full border-2 p-1">
              <v-icon aria-hidden="true" class="">mdi-twitter</v-icon>
            </div>
            <div class="text-white flex text-xl rounded-full border-2 p-1">
              <v-icon aria-hidden="true" class="">mdi-instagram</v-icon>
            </div>
          </div>
        </div>
        <div class="w-4/5 flex gap-10 ml-20 mt-10 justify-between">
          <div class="flex flex-col gap-5">
            <div class="text-lg font-semibold text-white">
              Our Services
              <hr class="border-t-4 border-[#21B3FF] mt-2 w-1/2" />
            </div>
            <div class="text-white">Web Development</div>
            <div class="text-white">Mobile Development</div>
            <div class="text-white">Cloud Technologies</div>
            <div class="text-white">UI/UX Designs</div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="text-lg font-semibold text-white">
              Our Links
              <hr class="border-t-4 border-[#21B3FF] mt-2 w-1/2" />
            </div>
            <div class="text-white">Terms & Condition</div>
            <div class="text-white">Privacy Policy</div>
            <div class="text-white">Imprint</div>
            <div class="text-white">Legal</div>
          </div>
          <div class="flex flex-col gap-8 ml-5">
            <div class="text-lg font-semibold text-white">
              Contact Us
              <hr class="border-t-4 border-[#21B3FF] mt-2 w-1/2" />
            </div>
            <div class="text-white flex gap-4 w-4/5">
              <v-icon aria-hidden="true" class="">mdi-map-marker</v-icon>Al.
              Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.
            </div>
            <div class="text-white flex text-lg gap-4">
              <v-icon aria-hidden="true" class="">mdi-phone-outline</v-icon>00
              1800 245 453
            </div>
            <div class="text-white flex text-lg gap-4">
              <v-icon aria-hidden="true" class="">mdi-email-outline</v-icon
              >hello@inkyy.com
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#0E77FF]"></div>
    </div>
  </div>
</template>

<script>
import FirstBG from "../assets/Mask Group 4.svg";
import SecondBG from "../assets/Group 35699.svg";
import ThirdBG from "../assets/Group 35698.svg";
import FourthBG from "../assets/Group 35650.svg";
import FifthBG from "../assets/Group 35700.svg";
import SixthBG from "../assets/Path 37456.png";
import { useRouter } from "vue-router";
import ReactLg from "../assets/React-icon.svg";
import AWSLg from "../assets/Amazon_Web_Services_Logo.svg";
import CloudLg from "../assets/Mask Group 1.svg";
import ReduxLg from "../assets/redux-logo.svg";
import JsLg from "../assets/Path 37520.svg";
import G10Lg from "../assets/g10.svg";
import AWSLg1 from "../assets/Amazon_Web_Services_Logo (1).svg";
import FireLg from "../assets/_Path_3 (1).svg";
import NodeLg from "../assets/Mask Group 3 (1).svg";
import SideImg from "../assets/Group 35686.svg";
import TriangleImg from "../assets/Path 37660.svg";
import UiLogo from "../assets/Group 35621.svg";
import TickLg from "../assets/Group 35604.svg";
export default {
  setup() {
    const router = useRouter();

    const navigateToLogin = () => {
      router.push("/login");
    };
    return {
      navigateToLogin,
      FirstBG,
      // Other data...
    };
  },
  data() {
    return {
      FirstBG: FirstBG,
      SecondBG: SecondBG,
      ThirdBG: ThirdBG,
      FourthBG: FourthBG,
      FifthBG: FifthBG,
      SixthBG: SixthBG,
      ReactLg: ReactLg,
      AWSLg: AWSLg,
      CloudLg: CloudLg,
      ReduxLg: ReduxLg,
      JsLg: JsLg,
      G10Lg: G10Lg,
      AWSLg1: AWSLg1,
      FireLg: FireLg,
      NodeLg: NodeLg,
      SideImg: SideImg,
      TriangleImg: TriangleImg,
      UiLogo: UiLogo,
      TickLg: TickLg,
    };
  },
};
</script>

<style>
.my-text {
  font-family: "Poppins", sans-serif;
}
.bg-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: blue;
  opacity: 0.02;
  z-index: 1;
}
.bg-container {
  position: relative;
}
</style>
