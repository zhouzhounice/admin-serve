// /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
/*
删除属性  DELETE /admin/product/deleteAttr/{attrId}

获取某个属性  GET /admin/product/getAttrValueList/{attrId}

POST /admin/product/saveAttrInfo

*/
import request from '@/utils/request'

export default {
  // 获取商品属性列表
  getAttrCategoryList(category1Id, category2Id, category3Id) {
    return request.get(
      `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`
    )
  },
  // 添加商品属性
  // 删除某个商品属性
  deleteAttrCategory(attrId) {
    return request.delete(`/admin/product/deleteAttr/${attrId}`)
  },
  saveAttrCategory(data) {
    return request({
      url: `/admin/product/saveAttrInfo`,
      method: 'POST',
      data
    })
  }
}
