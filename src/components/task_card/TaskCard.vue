<template>
    <div>
        <div v-if="card.name">
            <p>{{card.name}}</p>
        </div>
        <div v-else>
            <input type="text" placeholder="Название карточки" v-model="card.name">
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskCard",
        props: {
            card: Object
        }
    }
</script>

<style scoped>

</style>