<template>
<nav class="navbar navbar-default" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle " @click="showNavbar=!showNavbar">
          <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      <router-link to="/">
        <a class="navbar-brand">TPE48 女孩們</a>
      </router-link>
    </div>
    <collapse v-model="showNavbar" class="navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <router-link exact-active-class="active" tag="li" to="/">
          <a>目前排名</a>
        </router-link>
        <router-link exact-active-class="active" tag="li" to="/day2">
          <a>Day2 海報一覽</a>
        </router-link>
      </ul>
    </collapse>
  </div>
</nav>
</template>
<script>
import {
  Dropdown,
  Navbar,
  Collapse
} from 'uiv'
export default {
  name: "navbar",
  data: () => ({
    showNavbar: false,
    pages: [{
        url: "https://www.showroom-live.com/campaign/akb48_sr",
        name: "AKB48 Group"
      },
      {
        url: "https://www.showroom-live.com/campaign/akb48_sr",
        name: "乃木坂46"
      },
      {
        url: "https://www.showroom-live.com/campaign/keyakizaka46_sr",
        name: "櫸板46"
      },
      {
        url: "https://www.showroom-live.com/campaign/Equal_LOVE",
        name: "=LOVE"
      }
    ],
  }),
  components: {
    Dropdown,
    Navbar,
    Collapse
  }
}
</script>
<style scoped>
</style>
