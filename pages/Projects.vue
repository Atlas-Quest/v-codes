<template>
  <div>
    <h2 class="text-3xl">Projects</h2>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide class="bg-mint">
        <div>
          <div class="carousel-image">
            <img src="~/static/beaumonts.png" />
          </div>
          <div class="bg-white p-4">
            <h2>Beaumonts</h2>
            <p>description here</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="bg-action">
        <div>
          <div class="carousel-image">
            <img
              src="~/static/actionMarketResearch.svg"
              class="mx-auto action-image"
            />
          </div>
          <div class="bg-white p-4">
            <h2>Action Market Research</h2>
            <p>description here</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="bg-hendercare">
        <div>
          <div class="carousel-image">
            <img
              src="~/static/hendercareLogo.svg"
              class="mx-auto action-image"
            />
          </div>
          <div class="bg-white p-4">
            <h2>Hendercare</h2>
            <p>description here</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="css" scoped>
.beaumonts-card {
  width: 100px;
  height: 100px;
}

.carousel-image {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
