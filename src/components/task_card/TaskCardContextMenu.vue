<template>
    <div class="context-menu">
        <div v-if="move_status" @click="$parent.move_card">Переместить</div>
        <div @click="$parent.edit_card">Редактировать</div>
        <div @click="$parent.delete_card">Удалить</div>
    </div>
</template>

<script>
    export default {
        name: "TaskCardContextMenu",
        props: {
            list_id: Number
        },
        computed: {
            move_status() {
                let next_list_id = this.list_id + 1;
                return this.$store.state.task_lists.length > next_list_id
            }
        },
    }
</script>

<style scoped lang="scss">
    .context-menu {
        position: absolute;
        background-color: white;
        padding: 10px;
        box-shadow: 0 0 10px 0;
        cursor: pointer;
        div {
            padding: 5px;
            margin: 5px 0;
            border-radius: var(--border_radius);

            &:hover {
                background-color: #aeb7b7;
            }
        }
    }
</style>