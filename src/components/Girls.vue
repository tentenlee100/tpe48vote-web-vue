<template>
  <div id="girls">
    <div class="container">
      <div class="row">
        <div class="order-buttons btn-group btn-group-justified">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-danger" @click="orderBySeq">
              依照編號 <span v-if="orderSeqAes == 1" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><span v-else class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            </button>
          </div>
          <div class="btn-group" role="group">

            <button type="button" class="btn btn-primary" @click="orderByToday">
              依照本日投票 <span v-if="orderTodayAes != 1" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><span v-else class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            </button>
          </div>
          <div class="btn-group" role="group">

            <button type="button" class="btn btn-success" @click="orderBytTotal">
              依照累積投票 <span v-if="orderTotalAes != 1" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><span v-else class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <template v-for="(girl , index) in girls">
          <girl :girl="girl" :index="index"></girl>
          <div v-if="index % 2 == 1" class="clearfix"></div>
        </template>
      </div>
    </div>
    <div class="float-btns">
      <button v-scroll-to="{el: 'body' , duration: 50}" type="button" class="float-btn-item btn btn-warning"><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
    </div>
    <div class="float-inputs">
      <div class="col-xs-offset-4 col-md-offset-9 col-xs-8 col-md-3">
        <div class="input-group">
          <span class="input-group-addon">快速移動</span>
          <input v-model="enterId" v-on:keyup.enter.prevent="scrollTo" class="form-control" placeholder="輸入編號">
          <span class="input-group-btn">
            <button @click="scrollTo" class="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Girl from './Girl'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "girls",
  data: () => ({
    orderSeqAes: -1,
    orderTodayAes: -1,
    orderTotalAes: -1,
    enterId: ""
  }),
  methods: {
    getJS() {
      const body = {}
      this.$http.get("https://tenten.tw/tpe48vote/api/getGirl", {
        emulateJSON: true
      }).then(response => {
        this.setDefaultGirls(response.body)
      }, response => {
        // this.scheduleLoading = false
      })
    },
    orderBySeq() {

      const girls = Array.prototype.slice.call(this.girls).sort((a,b)=>{
        if (a.seq < b.seq){
          return -this.orderSeqAes;
        }
        if (a.seq > b.seq){
          return this.orderSeqAes;
        }
        return 0;
      })
      this.updateGirls(girls)

      this.orderSeqAes = -this.orderSeqAes
      this.orderTodayAes = -1
      this.orderTotalAes = -1
    },
    orderByToday() {
      const girls = Array.prototype.slice.call(this.girls).sort((a,b)=>{
        if (a.voteToday < b.voteToday){
          return -this.orderTodayAes;
        }
        if (a.voteToday > b.voteToday){
          return this.orderTodayAes;
        }
        return 0;
      })
      this.updateGirls(girls)

      this.orderTodayAes = -this.orderTodayAes
      this.orderSeqAes = 1
      this.orderTotalAes = -1
    },
    orderBytTotal() {
      const girls =Array.prototype.slice.call(this.girls).sort((a,b)=>{
        if (a.voteCount < b.voteCount){
          return -this.orderTotalAes;
        }
        if (a.voteCount > b.voteCount){
          return this.orderTotalAes;
        }
        return 0;
      })
      this.updateGirls(girls)

      this.orderTotalAes = -this.orderTotalAes
      this.orderSeqAes = 1
      this.orderTodayAes = -1
    },
    scrollTo(e){
      document.activeElement.blur()
      setTimeout(()=>{this.$scrollTo("#day2-"+this.enterId,100,{offset:-60})});

    },
    ...mapActions([
      'updateGirls',
      'setDefaultGirls'
    ])
  },
  computed: {
    ...mapGetters([
      'girls',

    ])
  },
  created() {
    //do something after creating vue instance
    this.getJS()
  },
  components: {
    Girl
  }
}
</script>
<style scoped>
.order-buttons{
  margin-bottom: 40px;
}
.float-btn-item{
  margin-top: 10px;
  width: 40px;
  height: 40px;
  display: block;
}
.float-btns{
  position: fixed;
  z-index: 50;
  bottom: 60px;
  right: 10px;
}
.float-inputs{
  position: fixed;
  z-index: 50;
  bottom: 10px;
  right: 10px;
}
#enterIdInput{
  width: 100px;
}

</style>
