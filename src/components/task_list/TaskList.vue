<template>
    <div class="list-container">
        <span v-if="!edit_list_mode"
              @click="edit_list_mode = true
              name = list.name">
            {{list.name}}
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="18" height="18" viewBox="0 0 18 18"
                 @click.stop="check_delete_list">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
            </svg>
        </span>
        <base-input
                v-if="edit_list_mode"
                v-model="name"
                type="text"
                @focusout="edit_list_name"
        >
        </base-input>
        <task-card v-for="(card, index) in cards"
                   :key="index"
                   :card_id="index"
                   :list_id="list_id">
        </task-card>
       <task-card-creator :list_id="list_id"></task-card-creator>
    </div>
</template>

<script>
    import TaskCard from "../task_card/TaskCard";
    import TaskCardCreator from "../task_card/TaskCardCreator";
    export default {
        name: "TaskList",
        props: ['list_id'],
        components: {
            TaskCard,
            TaskCardCreator
        },
        data() {
            return {
                name: '',
                edit_list_mode: false
            };
        },
        computed: {
            list() {
                return this.$store.getters.get_task_list(this.list_id);
            },
            cards() {
                return this.$store.getters.get_cards_list(this.list_id)
            }
        },
        methods: {
            check_delete_list() {
                this.$store.commit('setPopupOptions', {
                    message: 'Вы действительно хотите удалить список?',
                    show: true,
                    callback: this.delete_list,
                    args: null
                })
            },
            delete_list() {
                this.$store.dispatch('delete_list', this.list_id);
            },
            edit_list_name() {
                if (this.name !== '') {
                    this.$store.commit('edit_list', {
                        id: this.list_id,
                        name: this.name
                    });
                    this.edit_list_mode = false
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .list-container {
        display: inline-flex;
        flex-direction: column;
        padding: 10px;
        margin-right: 10px;
        width: 190px;
        background: #cccaca;
        border-radius: var(--border_radius);

        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: -webkit-fill-available;
            height: 32px;
            padding-left: 10px;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
</style>
