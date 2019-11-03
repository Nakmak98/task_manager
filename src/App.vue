<template>
    <div id="app" @click="$store.dispatch('close_popups')">
        <base-popup></base-popup>
        <header><h1>Vuello</h1></header>
        <workflow></workflow>
    </div>
</template>

<script>
    import Workflow from "./components/Workflow";
    import BasePopup from "./components/base/BasePopup";
    export default {
        name: "app",
        components: {
            BasePopup,
            Workflow
        },
    };
</script>

<style lang="scss">
    :root {
        --border_radius: 5px;
        --primary-color: #00c518;
        --secondary-color: #b5b4b4;
        background: url("../public/background.jpg");
    }
    * {
        margin: 0;
        padding: 0;
    }

    html, body, #app {
        height: -webkit-fill-available;
    }
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 100%;
        height: 50px;
        background-color: #37383aa6;
        margin-bottom: 20px;
    }

    .buttons-row.space-between {
        display: flex;
        justify-content: space-between;
    }
    .buttons-row.space-evenely {
        display: flex;
        justify-content: space-evenly;
    }
</style>
