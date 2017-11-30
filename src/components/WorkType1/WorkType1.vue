<template>
  <div id="girls">
    <div class="container">
      <div class="row">
        <template v-for="(girl , index) in girls">
          <work-type1-cell :girl="girl" :typeKey="$route.query.typeKey" :path="$route.query.imagePath" :index="index"></work-type1-cell>
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
import WorkType1Cell from './WorkType1Cell'
import { mapGetters, mapActions } from 'vuex'


export default {
  name: "day2",
  data: () => ({
    enterId:"",
    typeKey:"2017/11/08"
  }),
  watch: {
  // 如果路由有变化，会再次执行该方法
  '$route': 'fetchData'
},
  methods: {
    fetchData () {
      this.typeKey = this.$route.query.typeKey
      this.checkTypeKey()

   },
    getJS() {
      const body = {}
      this.$http.get("https://tenten.tw/tpe48vote/api/getGirl", {
        emulateJSON: true
      }).then(response => {
        this.setDefaultGirls(response.body)
        this.checkTypeKey()

      }, response => {
        // this.scheduleLoading = false
      })
    },
    scrollTo(e){
      document.activeElement.blur()
      setTimeout(()=>{this.$scrollTo("#day2-"+this.enterId,100,{offset:-60})});

    },
    checkTypeKey(){
      if (this.girls.length == 0){
        return;
      }
      if(!this.girls[0].detail.hasOwnProperty(this.$route.query.typeKey) || !this.girls[0].detail[this.$route.query.typeKey].hasOwnProperty("key2") ) {
        this.$router.push("/");

        return
      }
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
      this.checkTypeKey()

    }
    this.fetchData()
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
    WorkType1Cell
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
