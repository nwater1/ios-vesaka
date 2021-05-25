export const state = () => ({
  user: {
    title: '',
    coverImage: '',
  },
})

export const mutations = {
  add(state, data) {
    state.user = data
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  add_image(state, data) {
    state.user.coverImage = data
  },
}
