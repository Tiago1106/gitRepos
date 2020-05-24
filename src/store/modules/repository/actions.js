export function requestDetailsRepo(repository) {
  return {
    type: "@repository/REQUEST_DETAILS_REPO",
    payload: { repository }
  }
}

export function filterRepos(dataSet) {
  return {
    type: "@repository/FILTER_REPOS",
    payload: { dataSet }
  }
}

export function goToDetails(repository) {
  return {
    type: "@repository/GO_TO_DETAILS",
    payload: { repository }
  }
}

export function backRepositories() {
  return {
    type: "@repository/BACK_REPOSITORIES",
  }
}
