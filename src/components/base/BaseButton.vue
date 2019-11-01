<template>
    <div>
        <button @click="$emit('click')" :class="button_type">{{title}}</button>
    </div>
</template>

<script>
    export default {
        name: "BaseButton",
        props: {
            button_type: {
                type: String,
                default: "primary"
            },
            title: String
        }
    }
</script>

<style scoped lang="scss">
    button {
        cursor: pointer;
        border: 0;
        padding: 10px;
        border-radius: var(--border_radius);
        color: white;
    }

    .primary {
        background-color: var(--primary-color);

        &:hover {
            background-color: #0b901b;
        }
    }

    .secondary {
        background-color: var(--secondary-color);

        &:hover {
            background-color: #717171;
        }
    }
</style>