<template>
    <section id="SelectedProjects" class=" pt-20 relative dark:bg-[#111827] scroll-mt-16"> 
        <div class="max-w-7xl mx-auto px-6 dark:opacity-70"> 

            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute w-[500px] h-[500px] bg-orange-200/30 dark:bg-orange-900/30 rounded-full  -left-16 top-4 blur-2xl z-20"></div>
                
                <div class="absolute w-[500px] h-[500px] bg-green-200/30 dark:bg-green-900/30 rounded-full  -right-16 top-40 blur-2xl"></div>
                
            </div>
            
            <div class="flex flex-col items-center lg:items-start"> 
                <TitleBlock 
                :img-src="picture"
                header="Selected Projects" 
                description="A showcase of my recent work, highlighting diverse skills and technologies used.">
            </TitleBlock>

            

            <div class="flex lg:flex-row flex-col gap-4 mt-10"> 
                <!-- Project Cards Here -->
                <SelectedProjectsCard v-for="project in projects.slice(0, 2)" :key="project.id" v-bind="project"> 
                    
                    
                    <ProjectContent />
                    
                </SelectedProjectsCard>
                    
                 
            </div> 
            
            <div class="mt-6 flex flex-row gap-2"> 
                <img :src="imgSrc" class="w-[18px]"/>
                <p class="text-[#71717A] text-[14px] uppercase">Other Professional Experience</p>
            </div>
            
            <div class=" pt-4 flex lg:flex-row flex-col gap-4"> 
                <!-- Project Cards Here -->
                <SelectedProjectsCard v-for="project in projects2" :key="project.id" v-bind="project" :show-buttons="false">
                     
                   <ToolContent />
                   
                    
                </SelectedProjectsCard> 
                
                
                
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>



import { id } from '@formkit/i18n';
import ProjectContent from './ProjectContent.vue';
import SelectedProjectsCard from './SelectedProjectsCard.vue';
import TitleBlock from './TitleBlock.vue';
import ToolContent from './ToolContent.vue';
import picture from '/src/assets/selected-projects.png';




const projects = [
    {
        firstButtonText: "Vue.js",
        secondButtonText: "Tailwind CSS",
        header: "HydrateTap – Web Application ",
        description: "Built a responsive web application with a strong focus on clean UI and usability.\n Developed reusable Vue components and structured layouts.\n Implemented mobile-first design using Tailwind CSS.\n Translated client requirements into functional UI features through iterative feedback",
        project : "https://www.hydratetap.com/"

    },
    {
        firstButtonText: "HTML",
        secondButtonText: "CSS",
        thirdButtonText: "JavaScript",
        fourthButtonText: "Vue.js",
        header: "Prayer – Website",
        description: "Developed a responsive website based on client specifications.\n Focused on accessibility, clarity, and content structure.\nDelivered a clean, user-friendly interface optimized for different screen sizes",
        project : "https://prayerapp.me/"
    },
    
    
    
    
];

const projects2 = [
    {
        firstButtonText: "E-commerce",
        secondButtonText: "Live",
        header: "Legal Associate – Technical Inspection Company",
        description: "Worked in a regulated, process-driven environment. \n Prepared employment contracts and internal documentation.\n Ensured accuracy and consistency of business records.\n Coordinated administrative and operational tasks under deadlines."
    },
    {
        firstButtonText: "Mobile App",
        secondButtonText: "v2.1",
        header: "Attorney Trainee – Law Office",
        description: "Organized and managed legal documentation and case files.\n Worked under strict procedural deadlines.\n Communicated with clients and external institutions.\n Developed strong analytical, organizational, and responsibility skills"
    },
    
];



</script>