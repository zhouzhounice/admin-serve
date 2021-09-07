import requestMock from '@/utils/requestMock'

export function getChartsData() {
  return requestMock({
    url: '/getChartsData',
    method: 'get'
  })
}
