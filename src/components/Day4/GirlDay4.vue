<template>
<div class="item col-xs-12" :id="'day2-'+ girl.seq">
  <div class="col-xs-3 col-sm-2 col-md-1">
    <div class="row">
      <img class="headshot" :src="girl.imageUrl" alt="...">
    </div>
  </div>
  <div class="col-xs-9 col-sm-10  col-md-11">
    <div class="row">
      <div class="col-xs-8">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="row">
              <h3 class="title">編號:{{ girl.seq + " " + girl.name}} </h3>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="row">
              <h3 class="title"> <small>{{girl.birth}} ({{girl.location}})</small>  </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="row">
          <a :href="url" target="_blank" class="pull-right btn btn-warning" type="button" name="button">我要投票</a>
        </div>
      </div>
    </div>

  </div>
  <div class="col-xs-12">
    <h3>{{girl.detail['2017/11/23'].key1}}</h3>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="embed-responsive embed-responsive-16by9">
        <template v-if="play">
          <div class="youtube">
            <div class="play"  v-on:click="play = false">
            </div>
            <lazy-component @load="imgError">
              <img class="youtube-img  center-blockr" @load="imgError" :src="youtubeImageUrl" alt="">
            </lazy-component>
          </div>
        </template>
        <template v-else>
          <youtube :video-id="girl.detail['2017/11/23'].key2" ref="youtube" :player-vars="playerVars"></youtube>
        </template>
      <!-- <iframe class="embed-responsive-item" :src="youtubeUrl" frameborder="0" allowfullscreen></iframe> -->
    </div>

    </div>
  </div>
  <div class="col-xs-12">
    <hr class="featurette-divider" />
  </div>
</div>

</div>
</template>
<script>
export default {
  name: "girl-day4",
  props: ['girl'],
  data: () => ({
    play: true,
    playerVars: {
      autoplay:1 ,
      loop:1,
      playlist: this.youtubeId

    },
    imgErrorTimes: 0
  }),
  watch:{
    girl: function(e){
      console.log("girl watch",e);
      this.$set(this,'playerVars',{
        autoplay:1 ,
        loop:1 ,
        playlist: e.detail['2017/11/23'].key2
      })
      console.log("girl watch done",this.playerVars);

      }

  },
  computed: {
    youtubeId: function(){
      return this.girl.detail['2017/11/23'].key2
    },
    youtubeUrl: function() {
      // return 'https://www.youtube.com/embed/' + this.girl.detail['2017/11/23'].key2
      return 'youtube.com://' + this.girl.detail['2017/11/23'].key2
    },
    youtubeImageUrl: function() {
      // return 'https://www.youtube.com/embed/' + this.girl.detail['2017/11/23'].key2

      if (this.imgErrorTimes == 0){
        return  "https://img.youtube.com/vi/" + this.girl.detail['2017/11/23'].key2 + "/maxresdefault.jpg"
      }else if (this.imgErrorTimes == 1){
        return  "https://img.youtube.com/vi/" + this.girl.detail['2017/11/23'].key2 + "/sddefault.jpg"
      }else if (this.imgErrorTimes == 2){
        return  "https://img.youtube.com/vi/" + this.girl.detail['2017/11/23'].key2 + "/hqdefault.jpg"
      }else if (this.imgErrorTimes == 3){
        return  "https://img.youtube.com/vi/" + this.girl.detail['2017/11/23'].key2 + "/mqdefault.jpg"
      }else if (this.imgErrorTimes == 4){
        return  "https://img.youtube.com/vi/" + this.girl.detail['2017/11/23'].key2 + "/default.jpg"
      }else{
        return  "https://img.youtube.com/vi/" + this.girl.detail['2017/11/23'].key2 + "/default.jpg"
      }

    },
    url: function() {
      return 'http://tpe48.tw/auditionPersonal.html?gid=' + this.girl.seq
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.$set(this,'playerVars',{
      autoplay:1 ,
      loop:1 ,
      playlist: this.youtubeId
    })
  },
  methods: {
    imgError(e) {
      if (e.target.naturalHeight == 90 && this.imgErrorTimes <= 5){
        this.imgErrorTimes++
      }
    }
  }
}
</script>
<style  scoped>
.headshot {
  width: 80px;
  height: 80px;
  display: inline;
  margin-right: 20px;
}

.title {
  display: inline;
}

.item {
  margin-bottom: 20px;
}

.clearfix {
  margin: 5px;
}

.featurette-divider {
  margin: 10px 0;
  margin-top: 40px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}
.youtube {
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: all 200ms ease-out;
    cursor: pointer;
}

.youtube .play {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAERklEQVR4nOWbTWhcVRTHb1IJVoxGtNCNdal2JYJReC6GWuO83PM/59yUS3FRFARdFlwYP1CfiojQWt36sRCUurRIdVFXIn41lAoVdRGrG1M01YpKrWjiYmaSl8ybZJL3cd+YA//NLObd3++eO8x79z5jSq5Gw+8kov0AP8vMR5l1BtBZQM4B8ks75wCdZdYZZj5qLZ4hov2Nht9Z9vhKKSIaB/gI4M4w62KeAO6Mte4lYOq20FxrlqqOibhHmeWbvNC9ZfDX1mLae391aN6limO/gwgvAPJbWeAZuSDingdwXTBw7/0IsyaA/Fkh+KqOkD+YNfHej1QKD+y7iVlOhgLvFqFfNJvNGyuBJ+KDAF8MDd0tgS8y64OlgSdJMsysL4cG7SOHkyQZLhTee7+d2R2rAVy/S+Jd7/32ouBHAP4gNNRGQyTHc/84NhqNywZp5rvjjnnvt21aABFeCQ+RLwAf2hQ8s7sv9OCLk6AHNgQvIrvbfzKCD76g/O6cu7lf/iER/aQGgy448pExZmhdegAPhR9sObFWH1gT3lp7DaA/5bkIgJhZPgsNmz02novj+KqeApj1ubwXWe4kdyeznAgNvTpE/HQmvKqOMeuFogTUVQSRno+iaLRLAJF7uIgL9O4ubgL8aWgB7S44mNX+35YpICUiAvS9sBLkq1WzT+NFffl6AuoiApi6NT37h6sWkBIRZGkQ8YtLgyji6e1mBYTqCEBPG2Naz+0BWQgtoGoRgCzEsd9hAN1X5BfnFZASUfrSAFQNsyZ1FJASUVpHiLinDJG8U2cBZYogkrcNs5waBAGdstbeU9zdqpw0gPwwSAI6VUxHyFlDpOcHUUBBIuYNs14aZAE5RVwyzPr3/0EAEY0TyfGNjBWQvwZ +CTSbehfAH29mrID8bET0+0EUkAd8WYDOmqJ3ecsG30yr9wqRfm6Y+a1BEFDEjHfHvWmY9ck6CygHvBVr8Xhtb4ZE5HZA3y8DvBNA1TjnrmXWf+sioMwZX5V/VHXMGGMMoKdDCxCRvRWBdzKzdHEO+EisilbPyopHYqp6S9UCAsz4iojI7hUDAtyXVQgIDd6KnOoaWNkbI6FaPSuZGyMArsi7MZoloB4zviI/Nhr3X95jltwTRQmoIfgisy5ai+me67OI7fE4nrqjrqfK1t0eby0FPRB6oGVlchL3rgnfrq19RKbVBdhV9IOSwJmfmJi4vi/4ThERitwyCxVAFqydshuCX5awhQ9KtmuIWd8IDZED/nXT77rvVVv6sHRKwjYi91poqP7Dr+Y6JJ1VSZIMA3wkPNy6bX+o8Bcm0sXMdwM8Fxo0A3xORPaWBp6uPXsmbxCRD0NDL0dOANhVCXy6iAjMcjbcrMt3RITKwdMVRdFo+y5yvkL4eWZ+zHt/ZVD4dEVRNGotpst+dZZZH8k86lqn2pIvT/eqrNfn2xuyqYPZ8mv7s8pfn/8Pybm4TIjanscAAAAASUVORK5CYII=") no-repeat center center;
    background-size: 64px 64px;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: .8;
    filter: alpha(opacity=80);
    transition: all 0.2s ease-out;
}
.youtube-img {
  /*width: 100%;
  height: 100%;*/
}
.youtube .play:hover {
    opacity: 1;
    filter: alpha(opacity=100);
}
</style>
