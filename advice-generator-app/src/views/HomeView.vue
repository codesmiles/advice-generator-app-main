<template>
  <main
    class="bg-[#1f2632] h-screen flex justify-center items-center text-lg font-manrope"
  >
    <div class="bg-[#323A49] rounded-lg w-11/12 relative max-w-lg">
      <!-- loader -->
      <div v-show="isLoading" class="my-10 flex justify-center">
        <Loader />
      </div>
      <!--  -->
      <div v-show="!isLoading">
        <h1
          className="text-[#52ffa8] text-center py-5 uppercase text-sm tracking-widest"
        >
          advice #{{ adviceDetails.titleNumber }}
        </h1>
        <p class="text-[#cee3e9] text-center tracking-wide font-black sm:px-10">
          {{ adviceDetails.description }}
        </p>
      </div>
      <div class="mt-5 mb-16">
        <img :src="dividerImg" alt="divider" class="mx-auto" />
      </div>
      <div
        @click="handleClick"
        class="bg-[#52ffa8] absolute p-4 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-[#cee3e9] hover:rotate-180 transition duration-500 ease-in-out hover:scale-110"
      >
        <img src="../assets/images/icon-dice.svg" alt="dice" />
      </div>
    </div>
  </main>
</template>
<script>
import { ref, onMounted, reactive } from "vue";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import Loader from "../components/Loader.vue";
import axios from "axios";
export default {
  components: {
    Loader,
  },
  setup() {
    const adviceDetails = reactive({
      titleNumber: null,
      description: null,
    });
    // capture window screen size
    const windowWidth = ref(window.innerWidth);
    const isLoading = ref(false);
    const dividerImg = ref("");
    
    const fetchData = async () => {
      isLoading.value = true;
      try {
        let res = await axios.get("https://api.adviceslip.com/advice", {
          timeout: 5000,
        });
        adviceDetails.titleNumber = res.data.slip.id;
        adviceDetails.description = res.data.slip.advice;
      } catch (err) {
        if (err.code === "ECONNABORTED") {
          //you can use this to your advantage
          adviceDetails.titleNumber = 408;
          adviceDetails.description =
            "You dey look for advice when you still dey use the network of the trenches LOL";
        }
        if (err.code === "ERR_NETWORK") {
          adviceDetails.titleNumber = 502;
          adviceDetails.description =
            "Your network no dey connected boss abi na Glo you dey use?";
        }
        console.log(err);
      }
      isLoading.value = false;
    };

    // capture window screen size
    onMounted(() => {
      if (windowWidth.value > 768) {
        dividerImg.value = dividerDesktop;
      } else {
        dividerImg.value = dividerMobile;
      }

      fetchData();
    });

    const handleClick = () => {
      fetchData();
    };

    return {
      adviceDetails,
      isLoading,
      dividerImg,
      windowWidth,
      handleClick,
    };
  },
};
</script>
