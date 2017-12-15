<template>
  <div >
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
export default {
  name: "scroll-to-member",
  data: () => ({
    enterId: ""
  }),
  methods: {
    scrollTo(e){
      document.activeElement.blur()
      setTimeout(()=>{
        this.$scrollTo("#day2-"+this.enterId,100,{offset:-60})
        this.enterId = ""
      });

    },
  }
}
</script>
<style scoped>
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
