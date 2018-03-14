<template>
  <div>
    <div class="col-xs-12">
      <div class="row">
        <a :href="data.watchUrl" target="_blank">
            <div class="title">
              <h4>{{data.vtimeString}}</h4>
              <h4>{{data.title}}</h4>
            </div>
            <div class="pull-right">
              <h3 class="icon">
                <i class="fa fa-external-link " aria-hidden="true"></i>
              </h3>
            </div>
        </a>
        <hr/>
      </div>
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
  /* display: inline-block; */
  cursor:pointer;
}
.title{
  display: inline-block;
}
a{
  display : block;
  overflow: hidden;
}
.pull-right{
  height: 100%;
}
.icon{
  margin: 0;
  height: 100%;
  right: 5px;
  display: inline;
  vertical-align: middle;
  align-items: center;
}
i{

}
</style>
