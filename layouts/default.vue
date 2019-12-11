<template>
  <div>
    <mobile-header></mobile-header>
    <!-- <desktop-header class=""></desktop-header> -->
    <nuxt />
    <site-footer></site-footer>
  </div>
</template>

<script>
import MobileHeader from "~/components/header/mobile/Header";
import SiteFooter from "~/components/Footer";
// import DesktopHeader from "~/components/header/Header";
export default {
  name: "Layout",
  components: {
    MobileHeader,
    SiteFooter
    // DesktopHeader
  }
};
</script>

<style>
html {
  font-family: "Muli", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* scroll-behavior: smooth; */
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
