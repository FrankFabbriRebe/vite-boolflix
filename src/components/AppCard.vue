<script>

import { store } from '../store';

export default {
    name: 'AppCard',

    data() {
        return {

            store,

            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png',
            }

        }
    },
}

</script>

<template>
    <div v-for="(element, i) in store.moviesArray" :key="i" class="card">
        <h1>{{ element.title }}</h1>
        <h2>{{ element.original_title }}</h2>
        <img :src="flags[element.original_language] ? flags[element.original_language] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png'"
            :alt="element.original_language">
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

img {
    width: 10%;
}
</style>
