import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        task_lists: []
    },
    mutations: {
        create_list(state, list) {
            state.task_lists.push(list)
        },
        delete_list(state, list) {
            state.task_lists.splice(list.id, 1);
        },
        edit_list(state, list) {
            state.task_lists.splice(list.id, 1, {name: list.name});
        }
    },
    getters: {
        get_task_list: state => list_id => {
            return state.task_lists.find(item => item_id => item_id === list_id)
        }
    },
});
