export function requestInfosUser(username) {
  return {
    type: "@home/REQUEST_INFOS_USER",
    payload: { username }
  }
}
export function infoUser(user) {
  return {
    type: "@home/INFO_USER",
    payload: { user }
  }
}

export function reposUser(repositories) {
  return {
    type: "@home/REPOS_USER",
    payload: { repositories }
  }
}

export function backHome() {
  return {
    type: "@home/BACK_HOME",
  }
}