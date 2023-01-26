<template>
  <main class="bg-[#1f2632] h-screen flex justify-center items-center text-lg  font-manrope">
    <div class=" bg-[#323A49] rounded-lg w-11/12 relative max-w-lg">
      <h1 className="text-[#52ffa8] text-center py-5 uppercase text-sm tracking-widest">
        advice #{{ adviceTitle }}
      </h1>
      <p class="text-[#cee3e9] text-center tracking-wide font-black sm:px-10"> {{ adviceDescription }}</p>
      <div class="mt-5 mb-16">
        <img :src="dividerImg" alt="divider" class="mx-auto"/>
      </div>
      <div @click="handleClick" class="bg-[#52ffa8] absolute p-4 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-[#cee3e9] hover:rotate-180 transition duration-500 ease-in-out hover:scale-110">
        <img src="../assets/images/icon-dice.svg" alt="dice">
      </div>
    </div>
    <!-- loader -->
    <div>
      <!-- <Loader/> -->
    </div>
<!--  -->
  </main>
</template>
<script>
import { onMounted, ref } from 'vue'
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import Loader from "../components/Loader.vue";
export default {
  components: {
    Loader
  },
  setup() {
    const adviceTitle =ref(117);
    const adviceDescription = ref('It is easy to sit up and take notice, What is difficult is getting up and taking action.')
    // capture window screen size
    const windowWidth = ref(window.innerWidth);

    const dividerImg = ref(dividerMobile);

    onMounted(()=> {
      if (windowWidth.value > 768) {
        dividerImg.value = dividerDesktop;
      } else {
        dividerImg.value = dividerMobile;
      }
      
      // fetch("https://api.adviceslip.com/advice")
      //   .then(res => res.json())
      //   .then(val => {
      
      //   })
      
})


    const handleClick = () => {
      // fetch("https://api.adviceslip.com/advice")
      //   .then(res => res.json())
      //   .then(val => {
      
      //   })
      adviceTitle.value = 201;
      adviceDescription.value = 'clicked'
      console.log('clicked')
      

    }

    return {
      adviceTitle,
      adviceDescription,
      dividerImg,
      windowWidth,
      handleClick,

    }
  },
}
</script>
