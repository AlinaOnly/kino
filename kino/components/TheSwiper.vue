<!--
  <template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="3"
    :effect="'creative'"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>

    <SwiperSlide v-for="slide in 10" :key="slide">
      <strong>{{ slide }}</strong>
    </SwiperSlide>
  </Swiper>
</template>-->



<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :loop="true"
  >
    <SwiperSlide v-for="text in swiperText" :key="text">
      <div class="slider">
        <h1>{{ text.author }}</h1>
        <p>{{ text.description }}</p>
        <img :src='text.image' alt="image" >
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperSlide} from 'swiper/vue'
  //import {Autoplay, Pagination} from 'swiper'
  import 'swiper/css'
  //import 'swiper/css/pagination'
  import {ref} from 'vue'

  export default {
    components: {Swiper, SwiperSlide},
    setup() {
      const swiperText = ref( [
        {
          id: 1,
          author: 'Михаил Круг',
          description: 'Что ж ты фраер сдал назад',
          image: 'https://n1s1.hsmedia.ru/c6/cb/07/c6cb075801788a8aa6743e7c1d533f59/600x600_1_3385da3571b5694b6829c4da5493ed8e@1200x1200_0xac120004_2890328431678722594.jpeg',
        },
        {
          id: 2,
          author: 'Kiop lop',
          description: 'Что ж ты фраер сдал назад',
          image: 'https://n1s1.hsmedia.ru/c6/cb/07/c6cb075801788a8aa6743e7c1d533f59/600x600_1_3385da3571b5694b6829c4da5493ed8e@1200x1200_0xac120004_2890328431678722594.jpeg',
        },
        {
          id: 3,
          author: 'foop',
          description: 'Что ж ты фраер сдал назад',
          image: 'https://n1s1.hsmedia.ru/c6/cb/07/c6cb075801788a8aa6743e7c1d533f59/600x600_1_3385da3571b5694b6829c4da5493ed8e@1200x1200_0xac120004_2890328431678722594.jpeg',
        },
      ]);

      return {swiperText}
    }
  };
</script>


