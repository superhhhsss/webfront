import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            user: null // 当前登录用户
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        logout(state) {
            state.user = null;
        }
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        currentUser: (state) => state.user
    }
});

export default store;
