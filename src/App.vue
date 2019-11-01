<template>
    <div class="basic-block" id="app">
        <h1>Vuello</h1>
        <workflow></workflow>
    </div>
</template>

<script>
    import Workflow from "./components/Workflow";

    export default {
        name: "app",
        components: {
            Workflow
        }
    };
</script>

<style lang="scss">
    :root {
        --border_radius: 5px;
        --primary-color: #00c518;
        --secondary-color: #b5b4b4;
        background: url("../public/background.jpg");
    }

    .basic-block {
        display: grid;
        min-width: 300px;
    }

    .buttons-row {
        display: flex;
        justify-content: space-between;
    }
</style>
