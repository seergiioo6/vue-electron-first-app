const state = {
  type: false,
  content: false
}

const mutations = {
  SET_OUTPUT (state, {data}) {
    state.type = data.type
    state.content = data.content
  }
}

const actions = {
  setOutput ({ commit }, data) {
    // do something async
    commit('SET_OUTPUT', {
      data
    })
  }
}

const getters = {
  getOutput () {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
