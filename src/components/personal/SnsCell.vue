<template>
  <div id="" class="col-xs-3">
    <a v-if="url" :href="url" target="_blank">
      <img v-if="logo" class="img-responsive block-center" :src="logo" alt="">
    </a>
    <div v-else class="text-center">
      <h4 >{{sns.typeName}}</h4> <h4>{{sns.snsId}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "sns-cell",
  props: ['sns'],
  data: () => ({

  }),
  computed: {
    logo: function(){
      if (this.sns.typeName == 'facebook'){
        // return "asset/facebook.png"
        return require("../../assets/facebook.png")
      }else if (this.sns.typeName == 'instagram'){
        return require("../../assets/instagram.png")
      }else if (this.sns.typeName == 'twitter'){
        return require("../../assets/twitter.png")
      }else{
        return null
      }
    },
    url: function(){
      if (this.sns.typeName == 'facebook'){
        return "https://www.facebook.com/" + this.sns.snsId
      }else if (this.sns.typeName == 'instagram'){
        return "https://www.instagram.com/" + this.sns.snsId
      }else if (this.sns.typeName == 'twitter'){
        return "https://twitter.com/" + this.sns.snsId
      }else{
        return null
      }
    }

  }
}
</script>
<style  scoped>
</style>
