<template>
    <div class="flex flex-row gap-2 items-center text-center md:text-left"> 
                    <img :src="imgSrc" alt=""/>
                    <h2 class="text-[24px]">{{ header }}</h2>
                </div>
                <div class="text-center md:text-left">
                    <p class="text-[#71717A] text-[14px]">{{ description }}</p>
                </div>
</template>

<script setup>

    const props = defineProps({
        header: String,
        description: String,
        imgSrc: {
            type: String,
            
        },
    })  

</script>
