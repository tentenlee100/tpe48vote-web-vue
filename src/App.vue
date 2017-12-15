<template>
  <div>
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'



export default {
  name: 'app',
  components: {
    Navbar,
  }
}
</script>

<style>
body{
  margin-top: 60px;
  margin-bottom: 40px;
}
</style>
