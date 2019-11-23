<template>
    <div>
        <div v-if="!create_list_mode"
             class="create-list"
             @click="create_list_mode = true">
            Добавьте список
        </div>
        <div v-else class="task-list-creator">
            <base-input
                    v-model="name"
                    type="text"
                    placeholder="Введите название списка"
            ></base-input>
            <div class="buttons-row space-between">
                <base-button
                        title="Добавить список"
                        @click="create_list">
                </base-button>
                <base-button
                        button_type="secondary"
                        title="Отмена"
                        @click="create_list_mode = false">
                </base-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskListCreator",
        data() {
            return {
                name: null,
                create_list_mode: false,
            };
        },
        methods: {
            create_list() {
                if (this.name) {
                    this.$store.commit("create_list", {
                        name: this.name
                    });
                    this.create_list_mode = false;
                    this.name = ''
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .task-list-creator {
        width: 200px;
        padding: 10px;
        background-color: #d3d3d361;
        border-radius: var(--border_radius);
    }
    .create-list {
        width: 210px;
        background-color: #d3d3d3c7;
        cursor: pointer;
        height: 25px;
        padding-top: 3px;
        border-radius: var(--border_radius);
        text-align: center;
        &:hover {
            background-color: #afacacc7;
        }
    }
</style>