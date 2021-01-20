<template>
  <div id="app">
    APP阿
  </div>
</template>

<script>
import {request} from '../utils/request'
import axios from 'axios'
export default {
  name:'Home',
  created(){
      request({
        url:'/api/user/listUser',
        method:'get',
      })
  },
  methods:{

  }
}
</script>
