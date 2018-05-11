<template>
  <div class="home">
    <div class="todo-wrapper">
      <ul class="todo-list">
        <li class="list-item"
            v-for="(item,index) in list"
            :key="index">
          <p class="todo">{{item}}</p>
          <span @click="del(index)">删除</span>
        </li>
      </ul>
      <div class="footer">
        <input class="input"
               v-model="input"
               placeholder="填写todo信息"
               type="text" />
        <span @click="add">添加</span>
      </div>
    </div>
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
      let list = this.$store.state.base.list
      console.log('​-----------------------------------------------------');
      console.log('​list -> this.$store.base.list', list);
      console.log('​-----------------------------------------------------');
      return list
    }
  },
  methods: {
    add () {
      this.$store.commit('base/ADD_TODO', this.input)
      this.input = ''
    },
    del (index) {
      this.$store.commit('base/DEL_TODO', index)
    }
  },
}
</script>

<style lang="scss" scoped>
.todo-wrapper {
  width: 80%;
  margin: 16px auto;
  padding: 16px;
  border: 1px solid #999;
  box-shadow: 5px 5px 10px #ccc;
}
.list-item,
.footer {
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.todo,
.input {
  flex: 1;
  margin-right: 16px;
}
</style>
