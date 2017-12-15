<template>
  <div id="girls">
    <!-- <div class="container">
    <div class="row">
    <div class="embed-responsive embed-responsive-16by9">

    <youtube :video-id="youtubeId" ref="youtube" :player-vars="playerVars"></youtube>
  </div>

</div>
</div> -->
<div class="container">
  <div class="row">
    <template v-for="(girl , index) in girls">
      <work-type2-cell :girl="girl" :typeKey="$route.query.typeKey" @select="openMember"></work-type2-cell>
    </template>
  </div>
</div>
<scroll-to-member></scroll-to-member>
<member-info v-model="openMemberModel" :girl="selectGirl"></member-info>

</div>
</template>
<script>
import WorkType2Cell from './WorkType2Cell'
import ScrollToMember from '../ScrollToMember'
import MemberInfo from '../MemberInfo'

import { mapGetters, mapActions } from 'vuex'
import ApiUrl from '@/config/ApiUrl'


export default {
  name: "day4",
  data: () => ({
    enterId:"",
    girls:[],
    playerVars: {
      loop:1,
      playlist: this.youtubeId

    },
    selectGirl:null,
    typeKey:"2017/11/08",
    openMemberModel: false,
    selectGirl: null

  }),
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData',
  },
  methods: {
    fetchData () {
      this.typeKey = this.$route.query.typeKey
      this.getGirls()
    },
    openMember(girl) {
        this.selectGirl = girl
        this.openMemberModel = true
    },
    getGirls() {
      const body = {
        day: this.$route.query.typeKey
      }
      this.$http.post(ApiUrl.getWorkDetail, body).then(response => {
        if (response.body.length == 0){
          this.$router.push("/");
          return
        }
        this.girls = response.body
      }, response => {
        // this.scheduleLoading = false
      })
    },
    scrollTo(e){
      document.activeElement.blur()
      setTimeout(()=>{this.$scrollTo("#day2-"+this.enterId,100,{offset:-60})});

    },
  },
  computed: {
    youtubeId: function(){
      if (this.selectGirl){
        if(this.selectGirl.detail.hasOwnProperty(this.$route.query.typeKey) && this.selectGirl.detail[this.$route.query.typeKey].hasOwnProperty("key2") ) {
          return this.selectGirl.detail[this.$route.query.typeKey].key2
        }
      }
      return ""

    },
  },
  created() {
    //do something after creating vue instance
    this.getGirls()
  },
  components: {
    WorkType2Cell,
    ScrollToMember,
    MemberInfo
  }
}
</script>
<style scoped>
</style>
