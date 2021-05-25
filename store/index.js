export const state = () => ({
  register: {
    title: '',
    coverImage: '',
  },
})

export const getters = {
  getRegister() {
    return state.register
  },
}

export const mutations = {
  SET_REGISTER(state, data) {
    state.register = {
      ...state.register,
      ...data,
    }
  },
}

export const action = {
  setRegister({ commit }, data) {
    commit('SET_REGISTER', data)
  },
}
