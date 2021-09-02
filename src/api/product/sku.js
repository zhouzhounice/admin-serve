import request from '@/utils/request'

export default {
  // 添加SKU
  reqSaveSku(data) {
    return request({
      url: `/admin/product/saveSkuInfo`,
      method: 'POST',
      data
    })
  },

  // 获取SKU列表
  reqGetSkuList(page, limit) {
    return request({
      url: `/admin/product/list/${page}/${limit}`,
      method: 'GET'
    })
  }
}
