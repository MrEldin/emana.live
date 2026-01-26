<template>
    <div class="border-[#E7E7E7] dark:border-[#374151] border-[2px] border-opacity-[60%] rounded-xl h-[174px] py-4 px-4 relative bg-white dark:bg-[#1F2937] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] z-20 ">    


       <div class=" relative">
            <div
                class="absolute top-[153px] left-[-6px] h-[2px] bg-zinc-300 "
                :class="borderColor"
                :style="{ width: progressWidth, backgroundColor: borderColor }"
            />
        </div>

         
        <h2 class="text-[#18181B] dark:text-[#F9FAFB] font-semibold text-[16px]">{{ title }}</h2>
        <p class="text-[#71717A] dark:text-[#D1D5DB] text-[12px]">{{ description }}</p>
        <div class="absolute right-[10px] top-[8px]"> 
            <img  alt="" :src="imgSrc" class="w-12 h-12"/>
        </div>
        <div class="flex flex-row gap-2 mt-2" > 
            <i v-for="n in 5" :key="n" class="lm lm-magic-star text-[10px] " :class="n <= level ? activeColor : 'text-zinc-300'"></i>
            
        </div>
        <div class="border-t-[#f4f4f5] dark:border-t-[#374151] border-t-2 mt-3 pt-4 text-[10px]  flex justify-between items-center"> 
            <p class=""
            :class="textColor">{{ levelOfProficiency }}</p>
            <p class="text-[#A1A1AA] dark:text-[#9CA3AF]">{{ loaded }}</p>
        </div> 

        
    </div>
</template>

<script setup>

import { computed } from 'vue';

 
const props = defineProps({
    title: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
       
    },
    levelOfProficiency: {
        type: String,
        required: true,
    },
    textColor: {
        type: String,
        required: false,
        default: 'text-[#059669]'
    },
    level: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 5,
    },
    activeColor: {
        type: String,
        default: 'text-yellow-400'
    },
    loaded: {
        type: String,
        
    },
    imgSrc: {
        type: String,
        
    },
    borderLevel: {
    type: Number,
    required: true,
    validator: v => v >= 0 && v <= 5
  },
    maxLevel: {
    type: Number,
    default: 5
  },
    borderColor: {
        type: String,
        default: '#FACC15'
    }
}); 

const progressWidth = computed(() => {
  return `${(props.borderLevel / props.maxLevel) * 100}%`
})

</script>