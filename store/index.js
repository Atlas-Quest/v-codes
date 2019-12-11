import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: () => ({
			active: false
		}),
		mutations: {
			menuClosed(state) {
				state.active = false
			},
			openMenu(state) {
				state.active = true
			}
		},
	})
}

export default createStore