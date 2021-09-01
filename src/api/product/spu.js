import request from '@/utils/request'

export default {
  // 获取SPU列表
  reqGetSpuList({ page, limit, category3Id }) {
    return request({
      url: `/admin/product/${page}/${limit}`,
      method: 'GET',
      params: {
        category3Id
      }
    })
  },

  // 获取基础销售列表
  reqGetBaseSaleAttrList() {
    return request({
      url: `/admin/product/baseSaleAttrList`,
      method: 'GET'
    })
  },

  // 添加spu
  reqSaveSpu(data) {
    return request({
      url: `/admin/product/saveSpuInfo`,
      method: 'POST',
      data
    })
  },

  // 根据spuId获取spu数据
  reqGetSpuInfo(spuId) {
    return request({
      url: `/admin/product/getSpuById/${spuId}`,
      method: 'GET'
    })
  },

  // 获取spu对应的图片列表
  reqGetSpuImageList(spuId) {
    return request({
      url: `/admin/product/spuImageList/${spuId}`,
      method: 'GET'
    })
  }
}
