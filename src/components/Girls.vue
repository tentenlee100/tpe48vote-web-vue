<template>
<div id="girls">
  <div class="container">
    <div class="row">
      <div class="order-buttons btn-group btn-group-justified">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-danger" @click='orderBySeq' >
              依照編號 <span v-if="orderType.type == 'seq'  && orderType.asc == 1" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><span v-else class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary"  @click='orderByToday' >
              依照本日投票 <span v-if="orderType.type == 'today'  && orderType.asc == 1" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><span v-else class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            </button>

        </div>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-success"  @click='orderBytTotal' >依照累積投票 <span v-if="orderType.type == 'total'  && orderType.asc == 1" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><span v-else class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
              </button>

        </div>
      </div>
    </div>

    <div class="row">
      <div v-if="loading" class="text-center">
        <spinner class="spinner inline-block" size="medium"></spinner>
      </div>
      <template v-for="(girl , index) in girls">
          <girl :girl="girl" :index="index" @select="openMember"></girl>
          <div v-if="index % 2 == 1" class="clearfix"></div>
        </template>
    </div>
    <scroll-to-member></scroll-to-member>
    <member-info v-model="openMemberModel" :girl="selectGirl"></member-info>
  </div>
</div>
</template>
<script>
import Girl from './Girl'
import ScrollToMember from './ScrollToMember'
import MemberInfo from './personal/MemberInfo'

import {
  mapGetters,
  mapActions
} from 'vuex'
import ApiUrl from '@/config/ApiUrl'
import Spinner from 'vue-simple-spinner'

export default {
  name: "girls",
  data: () => ({
    openMemberModel: false,
    selectGirl: null,
    loading: false,
  }),
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      var obj = {
        type: this.$route.query.order,
        asc: this.$route.query.asc
      }

      this.setOrderType(obj)

    },
    openMember(girl) {
        this.selectGirl = girl
        this.openMemberModel = true
    },
    getJS() {
      const body = {}
      this.loading = true
      this.$http.get(ApiUrl.getVote, {
        emulateJSON: true
      }).then(response => {
        this.setDefaultGirls(response.body)
        this.fetchData()
        this.loading = false

      }, response => {
        // this.scheduleLoading = false
        this.loading = false

      })
    },
    orderBySeq() {

      var obj = {
        order: 'seq',
        asc: -this.orderType.asc
      }
      if (obj.order !== this.orderType.type) {
        obj.asc = 1
      }

      this.$router.replace({ path: '/' , query: obj })
    },
    orderByToday() {
      var obj = {
        order: 'today',
        asc: -this.orderType.asc
      }
      if (obj.order !== this.orderType.type) {
        obj.asc = 1
      }

      this.$router.replace({ path: '/' , query: obj })

    },
    orderBytTotal() {
      var obj = {
        order: 'total',
        asc: -this.orderType.asc
      }
      if (obj.order !== this.orderType.type) {
        obj.asc = 1
      }

      this.$router.replace({ path: '/' , query: obj })

    },
    ...mapActions([
      'updateGirls',
      'setDefaultGirls',
      'setOrderType'
    ])
  },
  computed: {
    ...mapGetters([
      'girls',
      'orderType'
    ])
  },
  created() {
    //do something after creating vue instance
    this.getJS()
    setInterval(this.getJS, 1000 * 60 * 10);

  },
  components: {
    Girl,
    ScrollToMember,
    MemberInfo,
    Spinner
  }
}
</script>
<style scoped>
.order-buttons {
  margin-bottom: 40px;
}
</style>
