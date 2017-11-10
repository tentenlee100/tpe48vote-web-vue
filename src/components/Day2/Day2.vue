<template>
  <div id="girls">
    <div class="container">
      <div class="row">
        <template v-for="(girl , index) in girls">
          <girl-day2 :girl="girl" :index="index"></girl-day2>
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
import GirlDay2 from './GirlDay2'
import { mapGetters, mapActions } from 'vuex'


export default {
  name: "day2",
  data: () => ({
    enterId:""
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
    scrollTo(e){
      document.activeElement.blur()
      setTimeout(()=>{this.$scrollTo("#day2-"+this.enterId)},100);

    },
    ...mapActions([
      'updateGirls',
      'setDefaultGirls',
      'resetDefaultGirls'

    ])
  },
  computed: {
    ...mapGetters([
      'girls',

    ])
  },
  created() {
    //do something after creating vue instance
    if (this.girls.length == 0){
      this.getJS()
    }else{
      this.resetDefaultGirls()
    }
  },
  components: {
    GirlDay2
  }
}
</script>
<style scoped>
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
.float-btn-item{
  margin-top: 10px;
  width: 40px;
  height: 40px;
  display: block;
}
</style>
