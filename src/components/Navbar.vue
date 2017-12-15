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
          <a>目前排名</a>
        </router-link>
        <dropdown tag="li">
          <a class="dropdown-toggle" role="button">每周課程<span class="caret"></span></a>
          <template slot="dropdown">
            <template v-for="work in workIndex ">
              <router-link exact-active-class="active" tag="li" :to="{ name: 'WorkType'+work.type , query: { typeKey: work.day , imagePath: work.imagePath } }" v-on:click.native="click()">
                <a role="button">{{work.name}}</a>
              </router-link>
            </template>
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
import { mapGetters, mapActions } from 'vuex'
import ApiUrl from '@/config/ApiUrl'

export default {
  name: "navbar",
  data: () => ({
    showNavbar: false,
  }),
  methods: {
    click() {
      this.showNavbar = false
    },
    getIndex() {
      const body = {}
      this.$http.get(ApiUrl.workIndex, {
        emulateJSON: true
      }).then(response => {
        this.setWorkIndex(response.body)
      }, response => {
        // this.scheduleLoading = false
      })
    },
    ...mapActions([
      'setWorkIndex',
    ])
  },
  computed: {
    ...mapGetters([
      'workIndex',
    ])
  },
  components: {
    Dropdown,
    Navbar,
    Collapse
  },
  created() {
    //do something after creating vue instance
    this.getIndex()
  }
}
</script>
<style scoped>
</style>
