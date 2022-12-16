<template>
  <div id="app">

      <LeftDiv/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


  </div>
</template>

<script>
import LeftDiv from './components/LeftDiv.vue'
// import {getCourseInfo} from '@/api/index.js'
export default {
  
  name: 'App',
  components: {
    LeftDiv
  }
}
</script>

<style scoped>
#app {
  background-color: #8ca7a2;
  width: 905px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
</style>
