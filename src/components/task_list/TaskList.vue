<template>
    <div class="list-container">
        <span v-if="!edit_list_mode"
              @click="edit_list_mode = true
              name = list.name">
            {{list.name}}
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="18" height="18" viewBox="0 0 18 18"
                 @click="delete_list">
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
        <div v-if="card_list">
            <task-card v-for="card in card_list" :key="card"></task-card>
        </div>
        <div v-else class="create-card" @click="create_card">
            Добавить задачу
        </div>
    </div>
</template>

<script>
    import TaskCard from "../task_card/TaskCard";

    export default {
        name: "TaskList",
        props: ['list_id'],
        components: {
            TaskCard
        },
        data() {
            return {
                card_list: null,
                name: '',
                edit_list_mode: false
            };
        },
        computed: {
            list() {
                return this.$store.getters.get_task_list(this.list_id);
            }
        },
        methods: {
            create_card() {

            },
            delete_list() {
                this.$store.commit('delete_list', this.list_id);
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
        display: flex;
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

    .create-card {
        cursor: pointer;
        padding: 3px;
        border-radius: var(--border_radius);
        background-color: #969696;
        text-align: center;

        &:hover {
            background-color: #ababab;
        }
    }
</style>
