import axios from 'axios'
import { Loading, Message } from 'element-ui';

  
export const request = ({ url, method, data }) => {
  console.log(url, method, data)
  return new Promise((resolve, reject) => {
   axios.get('http://81.70.229.157:3000/api/user/listUser',data).then((result) => {
     console.log(result)
   }).catch((err) => {
     
   });
  })
}

 // 导出自定义创建 axios 对象