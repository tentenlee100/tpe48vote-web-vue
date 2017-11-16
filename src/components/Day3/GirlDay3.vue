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
    <h3>{{girl.detail['2017/11/14'].key1}}</h3>
  </div>
<div class="row">
    <div class="col-xs-12 col-sm-6">
      <a :href="image1" target="_blank">
      <img class="img-responsive" :src="image1" alt="">
      </a>
    </div>
    <div class="col-xs-12 col-sm-6">
      <a :href="image2" target="_blank">
      <img class="img-responsive" :src="image2" alt="">
    </a>
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
  name: "girl-day3",
  props: ['girl'],
  data: () => ({

  }),
  computed: {
    image1: function() {
      return 'http://tpe48.tw/img/event/2017audition/work2/' + this.girl.detail['2017/11/14'].key3.replace(".jpg", "h.jpg");
    },
    image2: function() {
      return 'http://tpe48.tw/img/event/2017audition/work2/' + this.girl.detail['2017/11/14'].key4.replace(".jpg", "h.jpg");
    },
    url: function() {
      return 'http://tpe48.tw/auditionPersonal.html?gid=' + this.girl.seq
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
</style>
