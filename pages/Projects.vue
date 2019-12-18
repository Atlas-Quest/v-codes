<template>
<div class="lg:pb-64">
  <h2 class="text-3xl md:text-center p-8">Projects</h2>
  <div class="md:mx-8 md:mb-64">
    <swiper :options="swiperOption"
            ref="mySwiper">
      <swiper-slide>
        <a href="https://www.samuseum.sa.gov.au/"
           target="_blank">
          <div class="relative">
            <div class="scrim absolute top-0 z-10"></div>
            <progressive-background class="carousel-image sam-image bg-black relative"
                                    src="https://img.samuseum.sa.gov.au/w-755.h-550.f-jpg/qk39g4c5h">
              <sam-logo class="text-white absolute top-4 z-20"></sam-logo>
            </progressive-background>
            <div class="p-8 absolute bottom-0 text-white z-20">
              <h2>SA Museum</h2>
              <p>
                Website for South Australia's largest collection of cultural and
                National history.
              </p>
            </div>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="bg-hendercare">
        <a href="https://www.hendercare.com.au/"
           target="_blank">
          <div class="relative">
            <div class="carousel-image">
              <progressive-img src="hendercareLogo.svg"
                               class="mx-auto action-image" />
            </div>
            <div class="p-8 absolute bottom-0">
              <h2>Hendercare</h2>
              <p>
                Internal Booking System WebApp to help manage Hendercare, an aged care and disability
                service provider.
              </p>
            </div>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="bg-beaumonts">
        <a href="https://www.beaumont-tiles.com.au/"
           target="_blank">
          <div class="relative">
            <div class="carousel-image">
              <progressive-img src="BeaumontLogo.svg" />
            </div>
            <div class=" p-8 absolute bottom-0">
              <h2>Beaumont Tiles</h2>
              <p>Website for South Australian distributor of high-end tiles.</p>
            </div>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="bg-action">
        <a href="http://www.actionresearch.com.au"
           target="_blank">
          <div class="relative">
            <div class="carousel-image">
              <progressive-img src="actionMarketResearch.svg"
                               class="mx-auto action-image" />
            </div>
            <div class="text-white p-8 absolute bottom-0">
              <h2>Action</h2>
              <p>Pamphlet style website for Action Market Research.</p>
            </div>
          </div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>
<script>
import SamLogo from '~/components/SamLogo'

export default {
	name: 'Projects',
	components: {
		SamLogo
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 2,
				spaceBetween: 40,
				breakpoints: {
					// when window width is >= 320px
					768: {
						//md
						slidesPerView: 1,
						spaceBetween: 20
					},
					// when window width is >= 480px
					1024: {
						//lg
						slidesPerView: 2,
						spaceBetween: 30
					},
					// when window width is >= 640px
					1280: {
						//xl
						slidesPerView: 2,
						spaceBetween: 30
					}
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
				// some swiper options/callbacks
				// 所有的参数同 swiper 官方 api 参数
				// ...
			}
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		}
	},
	mounted() {
		// current swiper instance
		// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
		// this.swiper.slideTo(3, 1000, false);
	}
}
</script>

<style lang="scss" scoped>
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

.sam-image {
    background-position: center;
    background-repeat: no-repeat;
}

.scrim {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 100%;
    width: 100%;
}

.swiper-pagination {
    position: unset;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .swiper-pagination-bullet {
        opacity: 1 !important;
        background-color: rgba(0, 0, 0, 0.2) !important;
    }
    .swiper-pagination-bullet-active {
        background-color: rgba(0, 0, 0, 0.7) !important;
    }
}
</style>
