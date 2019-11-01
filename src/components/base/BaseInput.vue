<template>
    <div>
        <input class="base-input" v-bind="$attrs"
               :type="type"
               :placeholder="placeholder"
               :text_align="text_align"
               @input="$emit('input', $event.target.value)"
               @keyup="$emit('keyup', $event.target.value)"
               @focusin="$emit('focusin', $event.target.value)"
               @focusout="$emit('focusout', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        inheritAttrs: false,
        props: {
            type: String,
            text_align: {
                type: String,
                default: "left"
            },
            required: {
                type: Boolean,
                default: false,
            },
            placeholder: {
                type: String,
            },
        },
        mounted() {
            let inputs = document.getElementsByClassName(`base-input`);
            for (let i of inputs) {
                i.focus();
                i.style.textAlign = this.text_align;
            }
        }
    }
</script>

<style scoped lang="scss">
    input {
        border: 1px solid white;
        border-radius: var(--border_radius);
        width: -webkit-fill-available;
        height: 30px;
        padding-left: 10px;
        margin-bottom: 10px;
        outline: none;

        &:focus {
            border: 1px solid #cec060;
        }
    }

    .requered-sign {
        position: relative;
        left: 5px;
        color: red;
    }
</style>