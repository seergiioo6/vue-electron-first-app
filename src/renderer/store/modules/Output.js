const state = {
  type: false,
  content: false
}

const mutations = {
  SET_OUTPUT (state, {data}) {
    state.type = data.type
    state.content = data.content
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
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

export default {
  state,
  mutations,
  actions
}
