<template>
  <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content w-full flex flex-col p-20 bg-[#FCFCFC]">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label>
      <div class="flex justify-between">
        <div class="text-4xl my-text font-semibold">Dashboard</div>
        <div class="ml-auto mt-2">
          <div class="gap-10 flex items-center">
            <button class="btn bg-blue text-md py-1 hover:shadow-lg">
              <v-icon aria-hidden="true">mdi-plus</v-icon>Add unit
            </button>
            <div className="avatar">
              <div className="w-12 rounded-full ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="text-md font-semibold opacity-50">Andrew Johnstons</div>
          </div>
        </div>
      </div>
      <div class="text-sm font-semibold opacity-50 mb-10">
        Welcome back, Andrew
      </div>
      <div class="flex mb-20 justify-between">
        <div class="flex flex-col justify-between gap-5 pr-20">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            BALANCE
          </div>
          <div class="text-xl font-bold">$5900.00</div>
        </div>
        <div class="h-full border-l-4 border-gray-300 mx-9"></div>
        <div class="flex flex-col justify-between gap-5 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            PROFITS
          </div>
          <div class="flex gap-5">
            <div class="text-xl font-bold">$950.00</div>
            <div class="flex text-blue gap-1 text-sm">
              <v-icon aria-hidden="true" class="">mdi-triangle</v-icon>
              <div>+56%</div>
            </div>
          </div>
        </div>
        <div class="h-full border-l-4 border-gray-300 mx-9"></div>

        <div class="flex flex-col justify-between gap-5 px-15">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            LOSSES
          </div>
          <div class="flex gap-5">
            <div class="text-xl font-bold">$450.00</div>
            <div class="flex text-red gap-1 text-sm">
              <v-icon aria-hidden="true" class="">mdi-triangle-down</v-icon>
              <div>+56%</div>
            </div>
          </div>
        </div>
        <div class="h-full border-l-4 border-gray-300 mx-9"></div>

        <div class="flex flex-col justify-between gap-5 px-20">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            CURRENCIES
          </div>
          <div class="flex gap-2">
            <div
              class="flex text-blue gap-1 text-md rounded-full p-1 bg-gray-300"
            >
              <v-icon aria-hidden="true" class="">mdi-currency-btc</v-icon>
            </div>
            <div
              class="flex text-blue gap-1 text-md rounded-full p-1 bg-gray-300"
            >
              <v-icon aria-hidden="true" class="">mdi-currency-usd</v-icon>
            </div>
            <div
              class="flex text-blue gap-1 text-md rounded-full p-1 bg-gray-300"
            >
              <v-icon aria-hidden="true" class="">mdi-currency-eur</v-icon>
            </div>
            <div
              class="flex text-blue gap-1 text-md rounded-full p-1 bg-gray-300"
            >
              <v-icon aria-hidden="true" class="">mdi-currency-jpy</v-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="flex bg-white p-5 justify-between shadow-xl">
        <div class="flex flex-col justify-between items-center gap-0 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            Italy
          </div>
          <div class="flex gap-2">
            <div class="text-2xl font-bold">475</div>
            <div class="flex text-green-400 text-[10px] mt-2">
              <v-icon aria-hidden="true" class="">mdi-triangle</v-icon>
            </div>
          </div>
          <img :src="GraphImg" alt="Side Image" class="w-20" />
        </div>
        <div class="flex flex-col justify-between items-center gap-2 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            United States
          </div>
          <div class="flex gap-2">
            <div class="text-2xl font-bold">431</div>
            <div class="flex text-green-400 text-[10px] mt-2">
              <v-icon aria-hidden="true" class="">mdi-triangle</v-icon>
            </div>
          </div>
          <img :src="GraphImg" alt="Side Image" class="w-20" />
        </div>

        <div class="flex flex-col justify-between gap-2 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            Canada
          </div>
          <div class="flex gap-2">
            <div class="text-2xl font-bold">174</div>
            <div class="flex text-red-400 text-[10px] mt-2">
              <v-icon aria-hidden="true" class="">mdi-triangle-down</v-icon>
            </div>
          </div>
          <img :src="GraphImg" alt="Side Image" class="w-20" />
        </div>

        <div class="flex flex-col justify-between items-center gap-2 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            Spain
          </div>
          <div class="flex gap-2">
            <div class="text-2xl font-bold">475</div>
            <div class="flex text-green-400 text-[10px] mt-2">
              <v-icon aria-hidden="true" class="">mdi-triangle</v-icon>
            </div>
          </div>
          <img :src="GraphImg" alt="Side Image" class="w-20" />
        </div>
        <div class="flex flex-col justify-between items-center gap-2 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            Japan
          </div>
          <div class="flex gap-2">
            <div class="text-2xl font-bold">174</div>
            <div class="flex text-green-400 text-[10px] mt-2">
              <v-icon aria-hidden="true" class="">mdi-triangle</v-icon>
            </div>
          </div>
          <img :src="GraphImg" alt="Side Image" class="w-20" />
        </div>

        <div class="flex flex-col justify-between items-center gap-2 px-10">
          <div class="text-lg font-semibold opacity-50 tracking-wider">
            South Africa
          </div>
          <div class="flex gap-2">
            <div class="text-2xl font-bold">471</div>
            <div class="flex text-red-400 text-[10px] mt-2">
              <v-icon aria-hidden="true" class="">mdi-triangle-down</v-icon>
            </div>
          </div>
          <img :src="GraphImg" alt="Side Image" class="w-20" />
        </div>
      </div>
      <div class="flex gap-14 mt-20">
        <div class="w-1/2 flex flex-col gap-5">
          <div class="flex justify-between">
            <div class="text-xl font-semibold">Team Members</div>
            <div class="text-blue">View All</div>
          </div>
          <div class="flex justify-between bg-white shadow-md p-2">
            <div class="flex gap-10 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="text-[#0B2257]">Andrew Johnston</div>
            </div>
            <div
              class="bg-[#0F77FA] bg-opacity-10 rounded-xl px-4 backdrop-filter backdrop-blur-md flex items-center"
            >
              <div class="text-blue">Top Trader</div>
            </div>
          </div>
          <div class="flex justify-between bg-white shadow-md p-2">
            <div class="flex gap-10 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="text-[#0B2257]">Andrew Johnston</div>
            </div>
            <div
              class="bg-[#0F77FA] bg-opacity-10 rounded-xl px-4 backdrop-filter backdrop-blur-md flex items-center"
            >
              <div class="text-blue">Top Trader</div>
            </div>
          </div>
          <div class="flex justify-between bg-white shadow-md p-2">
            <div class="flex gap-10 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="text-[#0B2257]">Andrew Johnston</div>
            </div>
            <div
              class="bg-[#0F77FA] bg-opacity-10 rounded-xl px-4 backdrop-filter backdrop-blur-md flex items-center"
            >
              <div class="text-blue">Top Trader</div>
            </div>
          </div>
          <div class="flex justify-between bg-white shadow-md p-2">
            <div class="flex gap-10 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="text-[#0B2257]">Andrew Johnston</div>
            </div>
            <div
              class="bg-[#0F77FA] bg-opacity-10 rounded-xl px-4 backdrop-filter backdrop-blur-md flex items-center"
            >
              <div class="text-blue">Top Trader</div>
            </div>
          </div>
          <div class="flex justify-between bg-white shadow-md p-2">
            <div class="flex gap-10 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="text-[#0B2257]">Andrew Johnston</div>
            </div>
            <div
              class="bg-[#0F77FA] bg-opacity-10 rounded-xl px-4 backdrop-filter backdrop-blur-md flex items-center"
            >
              <div class="text-blue">Top Trader</div>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex flex-col gap-5">
          <div class="flex justify-between">
            <div class="text-xl font-semibold">Comparison</div>
            <div class="text-blue">View All</div>
          </div>
          <div class="flex flex-col bg-white shadow-lg p-5 gap-7">
            <div>
              <div class="flex gap-3">
                <img :src="USImg" alt="Side Image" class="h-7" />
                United States
              </div>
              <progress
                className="progress progress-primary w-full"
                value="100"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex gap-3">
                <img :src="JapanImg" alt="Side Image" class="h-7" />
                Japan
              </div>
              <progress
                className="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex gap-3">
                <img :src="SpainImg" alt="Side Image" class="h-7" />
                Spain
              </div>
              <progress
                className="progress progress-primary w-full"
                value="60"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex gap-3">
                <img :src="SAImg" alt="Side Image" class="h-7" />
                South Africa
              </div>
              <progress
                className="progress progress-primary w-full"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex gap-3">
                <img :src="CanadaImg" alt="Side Image" class="h-7" />
                Canada
              </div>
              <progress
                className="progress progress-primary w-full"
                value="30"
                max="100"
              ></progress>
            </div>
            <div>
              <div class="flex gap-3">
                <img :src="ItalyImg" alt="Side Image" class="h-7" />
                Italy
              </div>
              <progress
                className="progress progress-primary w-full"
                value="75"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul
        class="menu bg-white text-base-content min-h-full w-40 p-4 flex flex-col"
      >
        <li>
          <div
            class="flex flex-col hover:shadow-md p-5 opacity-50 hover:opacity-100 hover:text-blue"
          >
            <v-icon aria-hidden="true" size="36">mdi-view-dashboard</v-icon>
            <div>Dashboard</div>
          </div>
        </li>
        <li>
          <div
            class="flex flex-col hover:shadow-md p-5 opacity-50 hover:opacity-100 hover:text-blue"
          >
            <v-icon aria-hidden="true" size="36">mdi-poll</v-icon>
            <div>Analytics</div>
          </div>
        </li>
        <li>
          <div
            class="flex flex-col hover:shadow-md p-5 opacity-50 hover:opacity-100 hover:text-blue"
          >
            <v-icon aria-hidden="true" size="36">mdi-currency-usd</v-icon>
            <div>Trading</div>
          </div>
        </li>
        <li>
          <div
            class="flex flex-col hover:shadow-md p-5 opacity-50 hover:opacity-100 hover:text-blue"
          >
            <v-icon aria-hidden="true" size="36">mdi-bell</v-icon>
            <div>Notification</div>
          </div>
        </li>
        <li class="mt-auto">
          <div
            class="flex flex-col hover:shadow-md p-5 opacity-50 hover:opacity-100 hover:text-blue"
          >
            <v-icon aria-hidden="true" size="36">mdi-logout</v-icon>
            <div>Log Out</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ChartImg from "../assets/sound-wave.svg";
import GraphImg from "../assets/Graph.svg";
import USImg from "../assets/US.png";
import ItalyImg from "../assets/italy.png";
import JapanImg from "../assets/Japan.png";
import SpainImg from "../assets/Spain.png";
import CanadaImg from "../assets/Canada.png";
import SAImg from "../assets/SA.png";

export default {
  data() {
    return {
      ChartImg: ChartImg,
      GraphImg: GraphImg,
      USImg: USImg,
      ItalyImg: ItalyImg,
      JapanImg: JapanImg,
      SpainImg: SpainImg,
      CanadaImg: CanadaImg,
      SAImg: SAImg,
      // drawer: true,
      // rail: true,
    };
  },
};
</script>

<style>
.my-text {
  font-family: "Poppins", sans-serif;
}
</style>