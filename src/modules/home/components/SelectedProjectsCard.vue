<template> 
    <div class="rounded-lg border-2 dark:border-[#374151] !md:h-[440.25px] "> 
        <div class="bg-[#F4F4F5] dark:bg-[#1F2937]  md:h-[192px] pt-6 overflow-hidden"> 
            
            <slot />  
        </div>

        

        <div class="px-4 md:h-[246.25px]">
                <div v-if="showButtons" class="flex flex-row gap-2 mt-6"> 
                    <button v-if="firstButtonText" class="bg-[#F4F4F5] dark:bg-[#1F2937] p-1 border dark:border-[#374151] rounded-md"> 
                        <p class="text-[#52525B] text-[10px]">{{ firstButtonText }}</p>
                    </button>
                    <button v-if="secondButtonText" class="bg-[#D1FAE5] dark:bg-[#1F2937] p-1 border dark:border-[#374151] rounded-md"> 
                        <p class="text-[#047857] text-[10px]" >{{ secondButtonText }}</p>
                    </button>
                    <button v-if="thirdButtonText" class="bg-[#D1FAE5] dark:bg-[#1F2937] p-1 border dark:border-[#374151] rounded-md"> 
                        <p class="text-[#047857] text-[10px]" >{{ thirdButtonText }}</p>
                    </button>
                    <button v-if="fourthButtonText" class="bg-[#D1FAE5] dark:bg-[#1F2937] p-1 border dark:border-[#374151] rounded-md"> 
                        <p class="text-[#047857] text-[10px]" >{{ fourthButtonText }}</p>
                    </button>
                </div>
                <div class="w-full md:w-[439.33px] my-4"> 
                    <h3 class="font-semibold text-[18px] text-[#18181B] dark:text-[#F9FAFB]">{{ header }}</h3>
                    <p class="whitespace-pre-line pt-2 text-[12px] text-[#71717A] dark:text-[#D1D5DB] md:h-[100px]">{{ description }}</p>
                </div>
                <div v-if="showButtons" class="flex flex-row gap-2 text-[12px] text-[#52525B] dark:text-[#D1D5DB] mt-4 mb-4    "> 
                    
                    <button @click="viewProjects" class="flex flex-row gap-2 hover:scale-110 z-30"> 
                            <img src="@/assets/global-network.png" class="w-4" />
                            <span>Visit</span>
                        </button>
                    
                    
                    
                </div>
        </div>
    </div>

    

         
                 
        
</template>

<script setup >

    const props = defineProps({
        header: String,
        description: String,
        firstButtonText: String,
        secondButtonText: String,
        thirdButtonText: String,
        fourthButtonText: String,
        project : String,
        showButtons: {
            type: Boolean,
            default: true
        }

    })
    const viewProjects = () => {
        const link = document.createElement('a');
        link.href = props.project;
        link.target = '_blank';
        link.click();}
      
        
</script>
            