<template>
  <div :id="'day2-'+ girl.seq">
    <div class="col-xs-3 col-sm-2 col-md-1">
      <div class="row">
        <a @click="select">
          <img class="headshot" :src="girl.imageUrl" alt="...">
        </a>
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
  </div>
</template>
<script>
export default {
  name: "work-cell-header",
  props: ['girl'],
  data: () => ({

  }),
  methods: {
    select() {
      this.$emit('select')
    }
  },
  computed:{
    url: function() {
      return 'http://tpe48.tw/auditionPersonal.html?gid=' + this.girl.seq
    }
  }
}
</script>
<style scoped>
.headshot {
  width: 80px;
  height: 80px;
  display: inline;
  margin-right: 20px;
  cursor:pointer;
}

.title {
  display: inline;
}

.item {
  margin-bottom: 20px;
}
</style>
