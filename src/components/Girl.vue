<template>
  <div class="col-xs-12 col-md-6 col-lg-6">
    <div class="media">
      <div class="media-left media-middle">
        <h1>{{index + 1}}</h1>
      </div>
      <div class="media-body">
        <h2 class="media-heading text-center">
          編號:{{ girl.seq + " " + girl.name}}
        </h2>
        <div class="media">
          <div class="media-left media-middle">
            <a :href="'http://tpe48.tw/auditionPersonal.html?gid='+ girl.seq" target="_blank">
              <img class="media-object" :src="girl.imageUrl" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4><strong>累積票數: </strong>{{girl.voteCount}}</h4>
            <h4><strong>本日票數: </strong>{{girl.voteToday}}</h4>
            <h4><strong>自我介紹: </strong>{{girl.detail["2017/11/06"].key1}}</h4>
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

  })
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
</style>
