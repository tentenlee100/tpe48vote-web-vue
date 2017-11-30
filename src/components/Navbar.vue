<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
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
          <router-link exact-active-class="active" tag="li" to="/" v-on:click.native="click()">
            <a >目前排名</a>
          </router-link>
          <dropdown tag="li">
            <a class="dropdown-toggle" role="button">每周課程<span class="caret"></span></a>
            <template slot="dropdown">
              <router-link exact-active-class="active" tag="li" :to="{ name: 'WorkType2', query: { typeKey: '2017/11/30'}}" v-on:click.native="click()">
                <a role="button">week4 親手作料理、讓你珍惜的人填飽肚子吧！</a>
              </router-link>
              <router-link exact-active-class="active" tag="li" :to="{ name: 'WorkType2', query: { typeKey: '2017/11/23'}}" v-on:click.native="click()">
                <a role="button">week3 我的聲音魅力喚醒大家</a>
              </router-link>
              <router-link exact-active-class="active" tag="li" :to="{ name: 'WorkType1', query: { typeKey: '2017/11/14', imagePath:'work2' }}" v-on:click.native="click()">
                <a role="button">week2 我最喜歡...</a>
              </router-link>
              <router-link exact-active-class="active" tag="li" :to="{ name: 'WorkType1', query: { typeKey: '2017/11/08' ,imagePath:'work1' }}" v-on:click.native="click()">
                <a role="button">week1 我的 TPE48 宣傳海報</a>
              </router-link>
            </template>
          </dropdown>

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
methods: {
  click() {
    this.showNavbar = false
  }
},
components: {
  Dropdown,
  Navbar,
  Collapse
}
}
</script>
<style scoped>
</style>
