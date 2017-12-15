<template>
  <div class="col-xs-12 col-md-6 col-lg-6" :id="'day2-'+ girl.seq">
    <div class="media">
      <div class="media-left media-middle">
        <h1>{{index + 1}}</h1>
      </div>
      <div class="media-body">
        <div class="media-heading">
          <div class="row">
            <div class="col-xs-8">
              <h2 class="media-heading text-center">
                編號:{{ girl.seq + " " + girl.name}}
              </h2>
            </div>
            <div class="col-xs-4">
              <a :href="url" target="_blank" class="pull-right btn btn-warning" type="button" name="button">我要投票</a>
            </div>
          </div>
        </div>


        <div class="media member-data"  @click="select">
          <div class="media-left media-middle">
              <img class="media-object" :src="girl.imageUrl" alt="...">
          </div>
          <div class="media-body">
            <h4><strong>累積票數: </strong>{{girl.voteCount}}</h4>
            <h4><strong>本日票數: </strong>{{girl.voteToday}}</h4>
            <h4><strong>自我介紹: </strong>{{girl.introduce}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "girl",
  props: ['girl', 'index'],
  data: () => ({

  }),
  methods: {
    select() {
      this.$emit('select',this.girl)
    }
  },
  computed: {
    url: function() {
      return 'http://tpe48.tw/auditionPersonal.html?gid=' + this.girl.seq
    }
  }
}
</script>
<style scoped>
  .media-object{
    width: 100px;
    height: 100px;
  }
  .media{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .member-data{
    cursor:pointer;
  }
</style>
