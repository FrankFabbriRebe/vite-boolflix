<script>

import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <header>
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="search_bar">
            <input type="text" placeholder="Cerca il film/serie tv" v-model="store.movieSearched">
            <button>Search</button>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 20px;
}

h1 {
    color: red;
}
</style>
