<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ul class="todo-list">
      <li class="list-item"
          v-for="(item,index) in list"
          :key="index">
        <text class="todo">{{item}}</text>
        <span>删除</span>
      </li>
    </ul>
    <div>
      <input v-model="input"
             placeholder="填写todo信息"
             type="text" />
      <span>添加</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    list () {
      let list = this.$store.base.list
      console.log('​-----------------------------------------------------');
      console.log('​list -> this.$store.base.list', list);
      console.log('​-----------------------------------------------------');
      return list
    }
  },
}
</script>
