<script>

import { store } from '../store';

export default {
    name: 'AppCard',

    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <div v-for="(element, i) in store.moviesArray" :key="i" class="card">
        <!-- <h1>immagine</h1> -->
        <img :src="element.poster_path" alt="">
        <h1>{{ element.original_title }}</h1>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 3 - 10px);
    /* debug */
    background-color: blue;
    height: 200px;

}
</style>
