function deleteUser(id) {
  axios.delete(`/users/${id}`);
  window.location.reload()
}
