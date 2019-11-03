<template>
    <div class="workflow-container">
        <div v-if="task_lists !== []"
             class="task-lists-container">
            <task-list
                    v-for="(item, index) in task_lists"
                    :key="index"
                    :list_id="index"
            >
            </task-list>
        </div>
        <task-list-creator
                @cancel-create-list="create_list_mode = false">
        </task-list-creator>
    </div>
</template>

<script>
    import TaskList from "./task_list/TaskList.vue";
    import TaskListCreator from "./task_list/TaskListCreator";

    export default {
        name: "Workflow",
        components: {
            TaskList,
            TaskListCreator
        },
        computed: {
            task_lists() {
                return this.$store.state.task_lists;
            }
        },
    }
</script>

<style scoped>
    .workflow-container {
        display: flex;
        width: 85%;
        margin: 0 auto;
    }

    .task-lists-container {
        display: inline-block;
    }
</style>