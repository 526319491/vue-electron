<template>
  <div class="close" @click="closewin">×</div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },	
  methods:{
	closewin(){
		console.log(123)
		window.electron.ipcRenderer.send("test")
	}
  },
  mounted() {
		// window.electron.onMessage((val) => {
		// console.log(val, "=====");
		// });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.close{
	position: fixed;
	top: 10px;
	right: 10px;
	font-size: 30px;
}
</style>
