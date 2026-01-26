<template> 
    <section id="Education" class="relative scroll-mt-16 dark:bg-[#111827] pt-10">
        
        <div class="max-w-7xl mx-auto px-6 "> 

            
            <div class="mt-20 flex flex-col items-center md:items-start"> 
            <div class="absolute inset-0">
                <div class="absolute w-[500px] h-[600px] bg-blue-200/30 dark:bg-blue-900/30 rounded-full  left-6 -top-16 blur-2xl"></div>
            </div>
                <TitleBlock 
                    :img-src="picture"
                    header="Background & Education" 
                    description="Academic foundation and professional timeline.">

                </TitleBlock>
            

            <div class="flex md:flex-row flex-col gap-6" > 

                <div class="flex flex-col gap-[2px]" > 
                    
                    <EducationCard 
                    :img-src="icon"
                    title="EDUCATION" 
                    header="Additional/Technical Education"  
                    text="Frontend Development – JavaScript (ES6+), HTML5, CSS3 | Udemy 
                           Vue.js – Components, Composition API, State Management | Udemy
                           Responsive Web Design & Tailwind CSS | Udemy" > 
                    <template #time> 
                        <button class="bg-[#ECFDF5] dark:bg-[#1F2937] text-[#059669] dark:text-[#059669] text-[12px] rounded-lg p-2 border-[#CCCCCC] dark:border-[#374151] border">Current</button>
                    </template>
                     </EducationCard>
                
                <EducationCard 
                header="Formal Education"
                :sections="[ {subtitle: 'Bachelor of Laws (LL.B.)'} , {subtitle: 'Master of Laws (LL.M.)'}, ]"  
                > 
                     <template #time> 
                        <p class="text-[#A1A1AA] text-[12px]">2014-2018</p>
                        <p class="text-[#A1A1AA] text-[12px]">2018-2020</p>
                    </template>
                </EducationCard>
                
                
            </div> 
            
            <div class="flex flex-col gap-4"> 
                
                <EducationCard 

                :img-src="icon2"
                title="EXPERIENCE" 
                header="Frontend Developer - Freelance Projects" 
                :sections="[
                    {subtitle: 'HydrateTap - Web Application | Vue.js & Tailwind CSS' },
                    {subtitle: 'Prayer – Website HTML, CSS, JavaScript | Vue.js' },
                ]"
                >
                
                
                <template #time> 
                    <p class="text-[#A1A1AA] text-[12px]">2022-present</p>
                </template> 
                </EducationCard>
                
                <EducationCard  
                header="Other Professional Experience" 
                :sections="[
                    {subtitle: 'Legal Associate – Technical Inspection Company' },
                    {subtitle: 'Attorney Trainee – Law Office' },
                ]"> 
                <template #time> 
                        <p class="text-[#A1A1AA] text-[12px]">2019-2022</p>
                    </template>
                </EducationCard>
            </div>
        </div>
        </div>
    </div>
    </section>

</template>

<script setup>
import EducationCard from './EducationCard.vue';
import icon from '/src/assets/SVG.png';
import icon2 from '/src/assets/SVG (1).png';
import TitleBlock from './TitleBlock.vue';

import picture from '/src/assets/education.png';


</script>