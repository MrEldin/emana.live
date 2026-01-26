<template>
    <div> 
        <div class="mt-6 flex flex-row gap-2"> 
            <img :src="imgSrc" class="w-[18px]"/>
            <p class="text-[#71717A] text-[14px]">{{ title }}</p>
        </div>

         
            <div class="border-l-[#D7D7D7] dark:border-l-[#374151] border-l-2 pl-6 h-[143px] mt-6 relative  "> 
                <div class="rounded-xl h-[143px] flex flex-col gap-2 p-6 shadow-sm bg-white dark:bg-[#111827] bg-opacity-[60%] w-[600px]">
                    <div class="flex justify-between"> 

                        <h3 class="text-[#18181B] dark:text-[#9CA3AF] text-[16px] font-semibold">{{ header }}</h3>
                        <p> <slot name="time"></slot></p>
                        
                    </div> 

                    <div v-for="( s, i) in sections" :key="i"> 

                        
                        <p class="text-[#18181B] dark:text-[#9CA3AF] text-[12px]">{{ s.subtitle }}</p>
                        
                    </div>
                    <p class="text-[#18181B] dark:text-[#9CA3AF] text-[12px] whitespace-pre-line">{{ text }}</p>
                    
                </div>

                <div class="absolute left-[-7px] top-6 w-3 h-3  rounded-full bg-white p-[2px]"> 
                    <div class="rounded-full w-2 h-2 bg-[#D4D4D8] dark:bg-[#374151]"></div>
                </div>
            </div>

            
        
    </div>
</template>

<script setup> 



    const props = defineProps({

        title: String,
        header: String,
        sections : {
            type: Array,
            required: true,
        },
        text: String,
        description: String,
        imgSrc: {
            type: String,
            
        },
        
    })
</script>