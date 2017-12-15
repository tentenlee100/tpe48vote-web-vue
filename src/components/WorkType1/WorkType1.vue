<template>
  <div id="girls">
    <div class="container">
      <div class="row">
        <template v-for="(girl , index) in girls">
          <work-type1-cell :girl="girl" :typeKey="$route.query.typeKey" :path="$route.query.imagePath"  @select="openMember"></work-type1-cell>
        </template>
      </div>
    </div>
    <scroll-to-member></scroll-to-member>
    <member-info v-model="openMemberModel" :girl="selectGirl"></member-info>

  </div>
</template>
<script>
import WorkType1Cell from './WorkType1Cell'
import ScrollToMember from '../ScrollToMember'
import MemberInfo from '../MemberInfo'

import { mapGetters, mapActions } from 'vuex'
import ApiUrl from '@/config/ApiUrl'

export default {
  name: "day2",
  data: () => ({
    enterId:"",
    typeKey:"2017/11/08",
    girls:[],
    openMemberModel: false,
    selectGirl: null
  }),
  watch: {
  // 如果路由有变化，会再次执行该方法
  '$route': 'fetchData'
},
  methods: {
    fetchData () {
      this.girls = [];
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
    ...mapActions([
    ])
  },
  computed: {
    ...mapGetters([

    ])
  },
  created() {
    //do something after creating vue instance
    this.getGirls()

  },
  // beforeRouteEnter (to, from, next) {
  //
  //   console.log( to.query);
  //   this.typeKey = to.query.typeKey
  //   next();
  //   // getPost(to.params.id, (err, post) => {
  //   //   next(vm => vm.setData(err, post))
  //   // })
  // },
  components: {
    WorkType1Cell,
    ScrollToMember,
    MemberInfo
  }
}
</script>
<style scoped>
</style>
