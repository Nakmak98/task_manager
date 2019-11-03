<template>
    <div>
        <div class="task-card"
             v-if="!card_edit_mode"
             @click.right.prevent="show">
            <span >{{card}}</span>
        </div>
        <base-input
                v-else type="text"
                v-model="name"
                @focusout="edit_card">
        </base-input>
        <task-card-context-menu
                v-if="context_menu_status"
                :list_id="list_id">
        </task-card-context-menu>
    </div>
</template>

<script>
    import TaskCardContextMenu from "./TaskCardContextMenu";

    export default {
        name: "TaskCard",
        components: {
            TaskCardContextMenu
        },
        props: {
            card_id: Number,
            list_id: Number
        },
        data() {
            return {
                name: null,
                card_edit_mode: false,
                show_context_menu: false
            }
        },
        mounted () {
            this.name = this.card
        },
        computed: {
            card() {
                return this.$store.state.cards_lists[this.list_id][this.card_id];
            },
            context_menu_status() {
                if (!this.$store.state.context_menu_status) {
                    this.show_context_menu = false;
                    return false
                } else {
                    return this.show_context_menu
                }
            }
        },
        methods: {
            show() {
                if (this.$store.state.context_menu_status) {
                    this.show_context_menu = false
                } else {
                    this.$store.commit('show_context_menu');
                    this.show_context_menu = true
                }
            },

            move_card() {
                this.$store.dispatch('move_card', {
                    card_id: this.card_id,
                    list_id: this.list_id
                });
            },
            delete_card() {
                this.$store.commit('delete_card', {
                    card_id: this.card_id,
                    list_id: this.list_id
                });
            },
            edit_card() {
                if(this.card_edit_mode && this.name) {
                    this.$store.commit('edit_card', {
                        card_id: this.card_id,
                        list_id: this.list_id,
                        card: this.name
                    });
                    this.card_edit_mode = false
                } else  {
                    this.card_edit_mode = true
                }

            }
        },
    }
</script>

<style scoped lang="scss">
    .task-card {
        cursor: pointer;
        background-color: oldlace;
        padding: 3px;
        margin-bottom: 10px;
        border-radius: var(--border_radius);

        &:hover {
            background-color: white;
        }

        span {
            padding: 7px
        }
    }
</style>