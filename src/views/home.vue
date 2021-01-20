<template>
  <div id="app">
    APP阿
  </div>
</template>

<script>
import request from '../utils/request'
import axios from 'axios'
export default {
  name:'Home',
  created(){
     let response =  request({
        url:'/user/listUser',
        method:'get',
        data:{
          id:'1',
          name:'admin'
        },
         headers: {
          'Content-Type':'application/json'
        }
      })
      response.then(res=>{
        console.log(res)
      })
  },
  methods:{

  }
}
</script>
