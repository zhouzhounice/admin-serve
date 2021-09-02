// 引入发送请求的工具
import request from '@/utils/request'

export default {
  // DELETE /admin/product/baseTrademark/remove/{id} 删除BaseTrademark
  deleteTradeMark(id) {
    return request.delete(`/admin/product/baseTrademark/remove/${id}`)
  },
  // POST /admin/product/baseTrademark/save 新增BaseTrademark
  addTardeMark(trademark) {
    if (trademark.id) {
      // 里面有id则说明是修改商品信息
      return request.put(`/admin/product/baseTrademark/update`, trademark)
    } else {
      return request.post(`/admin/product/baseTrademark/save`, trademark)
    }
  },
  // PUT /admin/product/baseTrademark/update 修改BaseTrademark
  // GET /admin/product/baseTrademark/{page}/{limit} 分页列表
  getTradeMark(page, limit) {
    return request.get(`/admin/product/baseTrademark/${page}/${limit}`)
  },
  // GET /admin/product/baseTrademark/getTrademarkList
  getTrademarkList() {
    return request.get(`/admin/product/baseTrademark/getTrademarkList`)
  }
}
