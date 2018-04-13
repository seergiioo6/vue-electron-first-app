const state = {
  current: '/'
}

const mutations = {
  SET_PATH (state, {path}) {
    state.current = path
  }
}

const actions = {
  setPath ({ commit }, path) {
    // do something async
    commit('SET_PATH', {
      path
    })
  }
}

const getters = {
  getPath () {
    return state.current
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
