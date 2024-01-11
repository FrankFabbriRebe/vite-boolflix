<script>

// import components
import AppCard from './AppCard.vue';

export default {
    name: "AppMain",

    components: {
        AppCard
    },

}

</script>

<template>
    <div class="container">
        <AppCard />
    </div>
</template>

<style scoped>
.container {
    width: 80%;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* debug */
    /* height: 500px;
    border: 2px solid black; */
}
</style>
