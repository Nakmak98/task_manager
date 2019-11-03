<template>
    <div>
        <div class="create-card"
             v-if="!create_card_mode"
             @click="create_card_mode = true">
            Добавить задачу
        </div>
        <div v-else>
            <base-input
                    type="text"
                    v-model="name"
                    placeholder="Введите имя карточки"
                    @focusout="create_card"
            ></base-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskCardCreator",
        props: ['list_id'],
        data() {
            return {
                name: '',
                create_card_mode: false
            }
        },
        methods: {
            create_card() {
                if(this.name) {
                    this.$store.commit('add_card', {
                        list_id: this.list_id,
                        card: this.name
                    });
                }
                this.create_card_mode = false;
                this.name = ''
            },
        },
    }
</script>

<style lang="scss">
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