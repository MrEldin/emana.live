<template>
    <span class="bg-gradient-to-r bg-clip-text text-transparent font-semibold lg:text-5xl md:text-4xl text-2xl" :class="gradient">
        <slot />
    </span>
</template>

<script setup> 

    const props = defineProps({
        gradient: {
            type: String,
            default: ' from-green-600 via-green-300 to-green-600'
        }
    })  
    
</script>

<style scoped>


</style>



