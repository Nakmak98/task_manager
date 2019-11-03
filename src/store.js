import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const popup_default_options = {
    message: '',
    placeholder: '',
    input_field: false,
    input_value: null,
    show: false,
    callback: null,
    args: null
};

export default new Vuex.Store({
    state: {
        task_lists: [],
        cards_lists: [],
        context_menu_status: false,
        popup: popup_default_options
    },
    mutations: {
        create_list(state, list) {
            state.task_lists.push(list);
            state.cards_lists.push([])
        },
        delete_list(state, list) {
            state.task_lists.splice(list.id, 1);
        },
        edit_list(state, list) {
            state.task_lists.splice(list.id, 1, {name: list.name});
        },

        add_card(state, payload) {
            state.cards_lists[payload.list_id].push(payload.card)
        },
        edit_card(state, payload) {
            state.cards_lists[payload.list_id].splice(payload.card_id, 1, payload.card)
        },
        delete_card(state, payload) {
            state.cards_lists[payload.list_id].splice(payload.card_id, 1)
        },

        show_context_menu(state) {
            state.context_menu_status = true
        },
        close_context_menu(state) {
            state.context_menu_status = false
        },

        setPopupOptions(state, data) {
            state.popup = data
        },
        setPopupInputValue(state, data) {
            state.popup.value = data
        },
        deletePopupOptions(state) {
            state.popup = popup_default_options
        },
    },
    getters: {
        get_task_list: state => list_id => state.task_lists[list_id],
        get_cards_list: state => list_id => state.cards_lists[list_id],
        get_card: state => param => state.cards_lists[param.list_id][param.card_id]
    },
    actions: {
        move_card({getters, commit}, payload) {
            const card = getters.get_card(payload);
            commit('delete_card', payload);
            payload.list_id += 1;
            payload.card = card;
            commit('add_card', payload)
        },
        close_popups({state, commit}) {
            if(state.context_menu_status){
                commit('close_context_menu');
            }
            // commit('close_popup');
        }
    }
});
