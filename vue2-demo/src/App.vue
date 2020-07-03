<template>
  <div>
    <h1>Vue2 {{ items.length }} Components</h1>
    <p>{{ action }} took {{time}}ms.</p>
    <button  @click="shuffle">shuffle</button>
    <ul class="col-row" v-for="item in items" :key="item.id">
      <li class="col-md-1">{{item.id}}</li>
      <li class="col-md-1">content</li>
      <li class="col-md-1">content</li>
      <li class="col-md-1">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
import {shuffle} from 'lodash'

var total = 500
var items = []
for(var i = 0; i < total; i++){
  items.push({
    id: i,
    label: String(Math.random()).slice(0, 5)
  })
  
}
let s = window.performance.now()
// Options API
export default {
  data(){
    return {
      total: total,
      time: 0,
      action: 'Render',
      items: items,
    }
  },
  mounted() {
    this.time = window.performance.now() - s
  },
  methods: {
    shuffle(){
      this.action = 'Shuffle'
      this.items = shuffle(this.items)
      let s = window.performance.now()
      this.$nextTick(()=>{
        this.time = window.performance.now() - s
      })
    }
  }
}
</script>

<style>
.col-md-1{
  padding:6px 13px;
  border:1px solid #ddd;
  flex:1;
}
.col-row{
  display:flex;
  display: -webkit-flex;
  list-style: none;
  margin:0;
  padding:0

}
.col-row:nth-child(2n) {
  background-color: #f8f8f8;
}
</style>
