<template>
<div class="flex items-center justify-end w-full">
  <div class="mx-4">
    <nav class="stroke">
      <ul class="flex">
        <li>
          <h3>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </h3>
        </li>
        <li>
          <h3>
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </h3>
        </li>
        <li>
          <h3>
            <nuxt-link to="/projects">
              Projects
            </nuxt-link>
          </h3>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
export default {
	name: 'DesktopNav'
}
</script>

<style>
nav {
  margin: 0 auto;
}

nav ul {
  list-style: none;
  text-align: center;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  font-weight: 100;
  text-transform: uppercase;
  margin: 0 10px;
}

nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}

nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}

nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: black;
  height: 1px;
}

nav.stroke ul li a:hover:after {
  width: 100%;
}
</style>
