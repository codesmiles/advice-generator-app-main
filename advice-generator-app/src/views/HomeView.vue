<template>
  <main class="bg-[#1f2632] h-screen flex justify-center items-center text-lg  font-manrope">
    <div class=" bg-[#323A49] rounded-md w-11/12 absolute left-auto right-auto">
      <h1 className="text-[#52ffa8] text-center py-5 uppercase">
        advice #{{ adviceTitle }}
      </h1>
      <p class="text-[#cee3e9] text-center px-10 font-black"> {{ adviceDescription }}</p>
      <div>
        <img src="../assets/images/pattern-divider-mobile.svg" alt="divider" class="mx-auto mt-5"/>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const adviceTitle =ref(117);
    const adviceDescription = ref('It is easy to sit up and take notice, What is difficult is getting up and taking action.')

    return {
      adviceTitle,
      adviceDescription
    }
  },
}
</script>
