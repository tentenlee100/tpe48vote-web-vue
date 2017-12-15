<template>
<div class="item col-xs-12" >
  <work-cell-header v-if="girl" :girl="girl" @select="select" ></work-cell-header>
  <div class="col-xs-12">
    <div class="alert alert-warning" v-if="workInfo"><h4>{{workInfo.day + "  " + workInfo.name}}</h4></div>
    <h3>{{title}}</h3>
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
import WorkCellHeader from "../WorkCellHeader"
export default {
  name: "work-type1-cell",
  props: ['girl', 'typeKey', 'path', 'workInfo'],
  data: () => ({

  }),
  methods: {
    select() {
      this.$emit('select',this.girl)
    }
  },
  computed: {
    title: function() {
      if (this.workInfo) {
        return this.workInfo.key1
      } else {
        return this.girl.key1
      }
    },
    image1: function() {
      if (this.workInfo) {
        return 'http://tpe48.tw/img/event/2017audition/' + this.path + '/' + this.workInfo.key3.replace(".jpg", "h.jpg");
      } else {
        return 'http://tpe48.tw/img/event/2017audition/' + this.path + '/' + this.girl.key3.replace(".jpg", "h.jpg");
      }
    },
    image2: function() {
      if (this.workInfo) {
        return 'http://tpe48.tw/img/event/2017audition/' + this.path + '/' + this.workInfo.key4.replace(".jpg", "h.jpg");
      } else {
        return 'http://tpe48.tw/img/event/2017audition/' + this.path + '/' + this.girl.key4.replace(".jpg", "h.jpg");
      }
    },
  },
  components: {
    WorkCellHeader
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
