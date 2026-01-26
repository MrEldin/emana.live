
<template>
    <section class=" scroll-mt-16 dark:bg-[#111827] pt-20"> 
        <div class="max-w-7xl mx-auto px-6"> 

            <div class="pt-1 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 rounded-xl"> 
                
            <div class="flex flex-row gap-4 rounded-xl shadow-xl p-8 dark:bg-[#0F172A] bg-gradient-to-br from-white via-white to-purple-100"> 
                <div> 
                    <button class="bg-[#F3E8FF] dark:bg-[#111827] rounded-xl flex flex-row gap-2 items-center p-2 mb-4">
                        <img src="@/assets/featured.png" />
                        <span class="text-[#9333EA] text-[12px]">FEATURED EXPERIENCE</span>
                    </button>
                    <h3 class="text-[#18181B] dark:text-[#E5E7EB] text-[30px] font-semibold">Neural Interface Dashboard</h3>
                    <p class="text-[#71717A] dark:text-[#9CA3AF] text-[16px]">A personal project exploring the intersection of data visualization and generative AI. Built with Vue.js and Tailwind CSS to create dynamic, personalized user interfaces generated in real-time.</p>
                    <div class="mt-6"> 
                        <div class="flex flex-row gap-4 items-center"> 
                            <img src="@/assets/green-mark.png" alt=""/>
                            <p class="text-[#52525B] text-[14px]">Performance</p>
                            <ScoreBar :score="98" active-color="bg-green-500" />
                            <p class="text-[#A1A1AA] text-[12px]">98/100</p>
                        </div> 

                        <div class="flex flex-row gap-4 items-center"> 
                            <img src="@/assets/purple-mark.png" alt=""/>
                            <p class="text-[#52525B] text-[14px] pr-3">Innovation</p>
                            <ScoreBar :score="92" active-color="bg-purple-500" />
                            <p class="text-[#A1A1AA] text-[12px]">92/100</p>
                        </div>
                    </div>
                </div> 
                <div> 
                    <img src="@/assets/Background+Border+Shadow+OverlayBlur.png"/>
                </div>
                
            </div>

        </div> 
    </div>
    </section>
</template> 

<script setup> 

import ScoreBar from './ScoreBar.vue';
</script>

