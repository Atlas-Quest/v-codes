<template>
<div>
  <default-header></default-header>
  <div class="lg:container p-8">
    <h2 class="font-hairline text-3xl">About</h2>
    <div class="mt-8">
      <p>Bubbly, quirky, and sharp Web Developer with a demonstrated working history in the web development and telecommunications industry. </p>
      <br>
      <p>I began my career working in call centres and have continuously sought to improve my technical skills to become a Web Developer.</p>
      <br>
      <p>My personal belief is that we never stop learning, so being in the Tech Industry has always excited me!</p>
      <br>
      <p>I care about technology and it's impact in our world.</p>
      <br>
      <p>Which is why using this technology for good is the ultimate superpower. <span><img class="inline-block h-8"
               src="~/static/superhero.png"></span></p>
    </div>
  </div>
</div>
</template>

<script>
import DefaultHeader from '~/components/header/Header'

export default {
	name: 'About',
	components: {
		DefaultHeader
	}
}
</script>
