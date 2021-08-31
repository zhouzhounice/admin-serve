// /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
import request from '@/utils/request'

export default {
  // 获取商品属性列表
  getAttrCategoryList(category1Id, category2Id, category3Id) {
    return request.get(
      `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`
    )
  }
}
