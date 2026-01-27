<template>
    <section id="LiveTelemetry" class="relative dark:bg-[#111827] scroll-mt-16 pt-10"> 
        <div class="max-w-7xl mx-auto px-6 dark:opacity-70"> 

            <div> 
                
                <div class="absolute inset-0 pointer-events-none">
                    <div class="absolute w-[500px] h-[500px] bg-purple-200/30 rounded-full  right-64 -top-16 blur-2xl"></div>
                    <div class="absolute w-[500px] h-[500px] bg-orange-300/30 rounded-full  -right-20 -bottom-40 blur-2xl z-20"></div>
                    
                    
                
            </div>
            
        <div class="mt-20"> 

            <div class="flex flex-col items-center lg:items-start"> 

                <TitleBlock  
                :img-src="picture"
                header="Live Telemetry" 
                description="Real-time proficiency levels across key frontend technologies.">
            </TitleBlock>
        </div>
        
        <div class="mt-8 md:grid md:grid-cols-3 gap-6 flex flex-col"> 
            
            
            
            <LiveTelemetryCard 
            title="JavaScript (ES6+)"
            description="Core Architecture"
            :level="5"
            level-of-proficiency="STATUS: MASTERED"
            loaded="v.ES2024" 
            :img-src="containerImg"
            :border-level="5" /> 
            
            <LiveTelemetryCard 
            title="Vue JS"
            description="Component Logic"
            level-of-proficiency="INSTALLING UPDATE..."
            :level="4" 
            active-color="text-blue-400"
            text-color="text-[#2563EB]"
            loaded="54% LOaded"
            :img-src="containerImg1"
            :border-level="4"
            border-color="#2563EB" />
                
                <LiveTelemetryCard 
                title="CSS"
                description="Visual Engine"
                :level="4"
                active-color="text-[#06B6D4]"
                level-of-proficiency="STATUS: ADVANCED"
                loaded="Stable" 
                :img-src="containerImg2"
                :border-level="4"
                border-color="#06B6D4"/>
                
                <LiveTelemetryCard 
                title="HTML"
                description="Core Architecture"
                :level="5"
                level-of-proficiency="STATUS: MASTERED"
                loaded="v.ES2024" 
                :img-src="containerImg"
                :border-level="5"/>
                
                
                <LiveTelemetryCard 
                title="Tailwind CSS"
                description="Core Architecture"
                :level="4"
                active-color="text-[#06B6D4]"
                level-of-proficiency="STATUS: MASTERED" 
                loaded="Stable"
                :img-src="containerImg2"
                :border-level="4" 
                border-color="#06B6D4"/>
                
                <LiveTelemetryCard 
                title="AI Integration"
                description="Prompt Engineering & API"
                :level="1"
                active-color="text-purple-500"
                text-color="text-[#A855F7]"
                level-of-proficiency="INITIALIYING..."
                loaded="Learning Node Active"
                :img-src="containerImg3" 
                :border-level="1" 
                border-color="#A855F7"/>  

                <LiveTelemetryCard 
                title="REST APIs"
                description="JSON response, GET / POST request"
                :level="1"
                active-color="text-[#06B6D4]"
                text-color="text-[#06B6D4]"
                level-of-proficiency="INITIALIYING..."
                loaded="Learning Node Active"
                :img-src="containerImg3" 
                :border-level="1" 
                border-color="#06B6D4"/> 

                <LiveTelemetryCard 
                title="FETCH APIs"
                description="HTTTP Requests"
                :level="1"
                active-color="text-[#2563EB]"
                text-color="text-[#2563EB]"
                level-of-proficiency="INITIALIYING..."
                loaded="Learning Node Active"
                :img-src="containerImg3" 
                :border-level="1" 
                border-color="#2563EB"/> 

                <LiveTelemetryCard 
                title="DOM manipulation"
                description="Select elements, add class, event listeners"
                :level="2"
                active-color="text-purple-500"
                text-color="text-[#A855F7]"
                level-of-proficiency="INITIALIYING..."
                loaded="Learning Node Active"
                :img-src="containerImg3" 
                :border-level="2" 
                border-color="#A855F7"/> 

                <LiveTelemetryCard 
                title="Vuex / Pinia"
                description="State Management"
                :level="1"
                active-color="text-purple-500"
                text-color="text-[#A855F7]"
                level-of-proficiency="INITIALIYING..."
                loaded="Learning Node Active"
                :img-src="containerImg3" 
                :border-level="1" 
                border-color="#A855F7"/> 
                 
                
                
                
                    <div class="border-[#E7E7E7] dark:border-[#374151] border-dashed bg-white dark:bg-[#1F2937] bg-opacity-[40%] dark:bg-opacity-100 border-[2px] border-opacity-[60%] rounded-xl h-[174px] py-4 px-4 relative z-20 dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"> 
                        <div class="flex flex-col items-center justify-center text-center gap-2"> 
                            <div class="rounded-full bg-white dark:bg-[#374151] z-20 p-2 border-2 border-[#E7E7E7] dark:border-[#4B5563]"> 
                                <img src="@/assets/plus.png" alt=""/>
                            </div>
                            <h3 class="text-[#3F3F46] dark:text-[#F9FAFB] text-[14px] font-semibold">Future Modules</h3>
                            <p class="text-[#71717A] dark:text-[#D1D5DB] text-[12px] max-w-[200px]">Three.js, WebGL, and advanced backend patterns queued for Q4 2024.</p>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
                
                
            </div>
        </div>
    </div>
    </section>
</template>


<script setup> 
import LiveTelemetryCard from './LiveTelemetryCard.vue';
import containerImg from '@/assets/Container.png';
import containerImg1 from '@/assets/Container (1).png';
import containerImg2 from '@/assets/Container (2).png';
import containerImg3 from '@/assets/Container (3).png';
import containerImg4 from '@/assets/Container (4).png';
import TitleBlock from './TitleBlock.vue';
import picture from '/src/assets/live-telemetry.png';


</script> 


<style scoped> 


</style>