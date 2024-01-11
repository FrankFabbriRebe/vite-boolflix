<script>

import { store } from '../store';

export default {
    name: 'AppCard',

    props: {
        info: Object,
    },

    data() {
        return {

            store,

            isFlipped: false,

            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png',
            }

        }
    },

    methods: {
        roundVoteAverage() {
            if (this.info.vote_average !== undefined) {
                return Math.min(5, Math.ceil(this.info.vote_average / 2));
            }
            return '';
        },

        flipCard(value) {
            this.isFlipped = value;
        },
    },

}




</script>

<template>
    <div class="card" @mouseover="flipCard(true)" @mouseout="flipCard(false)">

        <div class="front_side">
            <img :src="store.baseUrlImg + info.poster_path" alt="">
        </div>

        <div class="back_side">
            <h1>{{ info.title || info.name }}</h1>
            <h2>{{ info.original_title }}</h2>
            <img class="flag"
                :src="flags[info.original_language] ? flags[info.original_language] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png'"
                :alt="info.original_language">
            <div class="vote">
                <i v-for="star in 5" class="fa-solid fa-star"
                    :style="{ color: star <= roundVoteAverage() ? '#FFD43B' : '#ccc' }"></i>
            </div>
            <h3>{{ info.overview }}</h3>
        </div>

    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 3 - 10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    perspective: 1000px;
    height: 500px;
    /* Aggiunto per creare l'effetto di profondità */
    transform-style: preserve-3d;
    /* Aggiunto per preservare l'effetto di rotazione */
    transition: transform 0.6s;
    /* Aggiunto per rendere la transizione più fluida */
}

h1,
h2 {
    text-align: center;
}

img {
    width: 100%;
    height: 100%;
}

.flag {
    width: 10%;
    height: 5%;
}

.card:hover {
    transform: rotateY(180deg);
}

.front_side,
.back_side {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    text-align: center;
    overflow-y: auto;
}

.back_side {
    transform: rotateY(180deg);
}
</style>
