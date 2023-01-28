<template>
  <div class="text-2xl font-medium">
    <span ref="text" class="typewriter-text"></span>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  mounted() {
    const text = this.$refs.text;
    const typewriter = anime.timeline({
      loop: true,
    });
    typewriter
      .add({
        targets: text,
        text: 'Hello World',
        duration: 2000,
      })
      .add({
        targets: text,
        text: 'Hello Vue',
        duration: 2000,
      });
    typewriter.play();
  },
};
</script>