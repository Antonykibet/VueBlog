<script setup>
    defineProps(['title','description'])
</script>
<template>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
</template>
<style scoped>
    h1{
        font-size: 38px;
        font-weight: 500;
    }
    p{
        width: 90vw;
        line-height: 1.25;
    }
</style>