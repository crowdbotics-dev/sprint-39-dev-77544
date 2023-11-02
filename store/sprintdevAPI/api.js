import axios from "axios"
const sprintdevAPI = axios.create({
  baseURL: "https://sprint-39-dev-77544.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return sprintdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_ddddddd_list(payload) {
  return sprintdevAPI.get(`/api/v1/ddddddd/`)
}
function api_v1_ddddddd_create(payload) {
  return sprintdevAPI.post(`/api/v1/ddddddd/`, payload)
}
function api_v1_ddddddd_retrieve(payload) {
  return sprintdevAPI.get(`/api/v1/ddddddd/${payload.id}/`)
}
function api_v1_ddddddd_update(payload) {
  return sprintdevAPI.put(`/api/v1/ddddddd/${payload.id}/`, payload)
}
function api_v1_ddddddd_partial_update(payload) {
  return sprintdevAPI.patch(`/api/v1/ddddddd/${payload.id}/`, payload)
}
function api_v1_ddddddd_destroy(payload) {
  return sprintdevAPI.delete(`/api/v1/ddddddd/${payload.id}/`)
}
function api_v1_gsegsg_list(payload) {
  return sprintdevAPI.get(`/api/v1/gsegsg/`)
}
function api_v1_gsegsg_create(payload) {
  return sprintdevAPI.post(`/api/v1/gsegsg/`, payload)
}
function api_v1_gsegsg_retrieve(payload) {
  return sprintdevAPI.get(`/api/v1/gsegsg/${payload.id}/`)
}
function api_v1_gsegsg_update(payload) {
  return sprintdevAPI.put(`/api/v1/gsegsg/${payload.id}/`, payload)
}
function api_v1_gsegsg_partial_update(payload) {
  return sprintdevAPI.patch(`/api/v1/gsegsg/${payload.id}/`, payload)
}
function api_v1_gsegsg_destroy(payload) {
  return sprintdevAPI.delete(`/api/v1/gsegsg/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return sprintdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return sprintdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return sprintdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return sprintdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return sprintdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return sprintdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return sprintdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return sprintdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return sprintdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return sprintdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return sprintdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return sprintdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return sprintdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_ddddddd_list,
  api_v1_ddddddd_create,
  api_v1_ddddddd_retrieve,
  api_v1_ddddddd_update,
  api_v1_ddddddd_partial_update,
  api_v1_ddddddd_destroy,
  api_v1_gsegsg_list,
  api_v1_gsegsg_create,
  api_v1_gsegsg_retrieve,
  api_v1_gsegsg_update,
  api_v1_gsegsg_partial_update,
  api_v1_gsegsg_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
