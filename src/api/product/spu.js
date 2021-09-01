import request from '@/utils/request'

// 获取SPU列表
export function reqGetSpuList({ page, limit, category3Id }) {
  return request({
    url: `/admin/product/${page}/${limit}`,
    method: 'GET',
    params: {
      category3Id
    }
  })
}

// 获取基础销售列表
export function reqGetBaseSaleAttrList() {
  return request({
    url: `/admin/product/baseSaleAttrList`,
    method: 'GET'
  })
}

// 添加spu
export function reqSaveSpu(data) {
  return request({
    url: `/admin/product/saveSpuInfo`,
    method: 'POST',
    data
  })
}

// 根据spuId获取spu数据
export function reqGetSpuInfo(spuId) {
  return request({
    url: `/admin/product/getSpuById/${spuId}`,
    method: 'GET'
  })
}

// 获取spu对应的图片列表
export function reqGetSpuImageList(spuId) {
  return request({
    url: `/admin/product/spuImageList/${spuId}`,
    method: 'GET'
  })
}
