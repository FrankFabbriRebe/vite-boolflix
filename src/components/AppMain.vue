<script>

import { store } from '../store';

export default {
    name: "AppMain",

    data() {
        return {
            store,
        }
    },

}

</script>

<template>
    <div class="container">

        <div v-for="(element, i) in store.moviesArray" :key="i" class="card">
            <!-- debug -->
            <h1>immagine</h1>
            <!-- <img src="" alt=""> -->
        </div>

    </div>
</template>

<style scoped>
.container {
    width: 80%;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    /* debug */
    height: 500px;
    border: 2px solid black;
}

.card {
    width: calc(100% / 3 - 10px);
    /* debug */
    background-color: blue;
    height: 200px;

}
</style>
