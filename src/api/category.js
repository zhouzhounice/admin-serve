import request from '@/utils/request'
/* 
GET /admin/product/getCategory1
getCategory1

GET /admin/product/getCategory2/{category1Id}
getCategory2

GET /admin/product/getCategory3/{category2Id}
getCategory3

*/
export default {
  // 获取一级分类的数据
  getCategory1() {
    return request.get(`/admin/product/getCategory1`)
  },
  // 获取二级分类的数据 要传入一级分类的id
  getCategory2(category1Id) {
    return request.get(`/admin/product/getCategory2/${category1Id}`)
  },
  // 获取三级分类的数据 要传入二级分类的id
  getCategory3(category2Id) {
    return request.get(`/admin/product/getCategory3/${category2Id}`)
  }
}
