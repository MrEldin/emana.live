<template >  
    <div class="w-full h-[6px] rounded-full bg-zinc-300 overflow-hidden"> 
            <div class="h-full rounded-xl transition-all duration-300" :class="activeColor" :style="{ width: percent + '%'}"></div>
    </div>

</template>

<script setup> 
    import { computed } from 'vue'; 

    const props = defineProps({
        score: {
            type: Number,
            required: true,
        },
        activeColor: {
            type: String,
            default: 'bg-green-500'
        }
    })

    const percent = computed(() => {
        return Math.min(100, Math.max(0, props.score)) ;
    }); 

</script>