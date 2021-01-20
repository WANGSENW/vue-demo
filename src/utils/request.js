import axios from 'axios'
import { Loading, Message } from 'element-ui';

  
export const request = ({ url, method, data }) => {
  return new Promise((resolve, reject) => {
   axios.get(url,data).then((result) => {
     console.log(result)
   }).catch((err) => {
     
   });
  })
}

 // 导出自定义创建 axios 对象