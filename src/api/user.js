import request from '@/utils/request'

export function login(data) {
  return request({
    // POST /admin/acl/index/login
    url: '/admin/acl/index/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // GET /admin/acl/index/info
    url: '/admin/acl/index/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    // POST /admin/acl/index/logout
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}
