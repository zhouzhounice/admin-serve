import request from '@/utils/requestMock'

export default {
  // 获取一级分类的数据
  getChartsData() {
    return request.get(`/getChartsData`)
  }
}
