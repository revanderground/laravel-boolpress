<template>
    <section>
        <Header />

        <!-- un meccanismo per inserire gli effetti delle rotte scelte -->
        <router-view></router-view>
    </section>
</template>

<script>
import Header from '../components/Header.vue'


    export default {
    components: {
            Header,

        }
    }
</script>

<style>

</style>
