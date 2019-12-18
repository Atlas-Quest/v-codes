<template>
<div class="relative">
  <progressive-background src="background.jpg"
                          style="height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover;width:100%;">
    <!-- <div class="scrim top-0 z-10"></div> -->
    <div slot="content"
         class="h-screen">
      <div class="w-full h-full absolute text-white z-20">
        <div class="h-full flex flex-col justify-center items-center">
          <h2 class="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase welcome">
            Welcome
          </h2>
          <h2 class="welcome-subtext">
            I'm Ness. I'm a Full Stack Web Developer.
          </h2>
        </div>
      </div>
    </div>
  </progressive-background>
</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato:100&display=swap');
</style>
<style>
.scrim {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100%;
  width: 100%;
}

.welcome {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1.5rem;
}

.welcome-subtext {
  font-size: 16px;
}
</style>
