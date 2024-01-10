<script>

export default {
    name: "AppHeader"
}


</script>

<template>
    <header>
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="searc_bar">
            <input type="text" placeholder="Cerca il film/serie tv">
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
