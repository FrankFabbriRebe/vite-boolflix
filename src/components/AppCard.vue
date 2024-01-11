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
        <h1>{{ element.title }}</h1>
        <h2>{{ element.original_title }}</h2>
        <h3>{{ element.original_language }}</h3>
        <h4>{{ element.vote_average }}</h4>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 3 - 10px);
    /* debug */
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1,
h2 {
    text-align: center;
}
</style>
