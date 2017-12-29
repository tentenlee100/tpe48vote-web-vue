<template>
  <div>
    <div class="col-xs-12">
      <a :href="data.watchUrl" target="_blank">
        <div class="title">
          <h4>{{data.vtimeString}}</h4>
          <h4>{{data.title}}</h4>
        </div>
        <h4 class="pull-right icon">
        <i class="fa fa-external-link " aria-hidden="true"></i>
        </h4>
      </a>
      <hr/>
    </div>

  </div>
</template>
<script>
export default {
  name: "live-me-cell",
  props: ['data'],
  data: () => ({

  })
}
</script>
<style scoped>
.col-xs-12{
  display: inline-block;
  cursor:pointer;
}
.title{
  display: inline-block;
}

.icon{
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>
