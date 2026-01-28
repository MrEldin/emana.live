<template>
    <section id="Hero" class="hero bg-white dark:bg-[#111827] overflow-hidden relative scroll-mt-16 pb-10">
        <div class="max-w-7xl mx-auto px-6  rounded-xl  relative"> 

            <div class="absolute inset-0 pointer-events-none">
                 <div class="absolute w-[160px] h-[160px] bg-green-300/30 dark:bg-green-900/30 rounded-full  -left-16 top-20 blur-md z-20"></div>
                 <div class="absolute w-[500px] h-[500px] bg-purple-300/30 dark:bg-purple-900/30 rounded-full  left-2 top-2 blur-2xl"></div> 
                 <div class="absolute w-[500px] h-[500px] bg-green-300/30 dark:bg-green-900/30 rounded-full  -right-24 top-2 blur-2xl"></div>
                
            </div>
             
            <div class="flex lg:flex-row flex-col-reverse items-center md:justify-between lg:gap-[200px] gap-20 relative pt-2 lg:pt-20  z-30"> 

                <div class="max-w-2xl lg:pt-28  flex flex-col items-center lg:items-start dark:opacity-70">
                    <div> 
                        <div class="max-w-[150px] p-1 border bg-white bg-opacity-50 dark:bg-[1F2937] bg-[blur] border-r-[#A7F3D0]">
                            <p id="text" class="max-w-[180.03px] font-family text-[#047857] dark:text-emerald-800 text-lg">> initializing_profile...</p>
                        </div>
                        <div class="md:max-w-[842.66px] max-w-sm my-4 flex flex-col lg:text-start text-center gap-4"> 

                             
                                <h1 class="lg:text-5xl md:text-4xl text-2xl font-semibold  text-[#18181B] dark:text-[#F9FAFB] lg:mr-[200px]">
                                    Hello, I'm
                                
                                    <mixed-text>Emana.</mixed-text>
                                
                                    Frontend Architect.
                                </h1>
                            

                            <h2 class="text-[#71717A] dark:text-[#D1D5DB] md:text-[16px] text-[12px] md:mr-[50px]">
                                Junior Frontend Developer with a background in law (Master’s degree) and hands-on experience through freelance projects. Specialized in building responsive, user-focused web applications using Vue.js and Tailwind CSS. Strong attention to detail, structured thinking, and responsibility developed through prior legal roles, combined with modern frontend development practices. Currently upgrading my neural network with advanced UI patterns.
                            </h2>
                        </div>
                    </div>
                    <div class="flex md:flex-row flex-col items-center gap-4 mt-8"> 
                        <button @click="downloadCV" class="bg-[#18181B] dark:bg-[#1F2937] dark:text-[#F9FAFB] grow-0 overflow-hidden rounded-3xl px-6 py-2 text-[#fff] text-[14px] flex flex-row items-center gap-2 hover:scale-105 transition-colors hover:duration-300">
                            <span>Download CV</span>
                            <img src="@/assets/arrow-download.png" />
                        </button>
                        <button @click="viewProfile" class="bg-[#fff] dark:bg-[#1F2937] dark:text-[#F9FAFB] rounded-3xl px-6 py-2 text-[#52525B] text-[14px] flex flex-row items-center gap-2 hover:bg-gradient-to-r from-green-600 via-green-300 to-green-600 dark:hover:bg-gradient-to-r dark:hover:from-[#006246] dark:hover:via-[#027554] dark:hover:to-[#006246] transition-colors hover:duration-200">
                            <span>View GitHub</span>
                            <img src="@/assets/social-network.png">
                        </button>
                    </div>

                    <div class="mt-10 bg-[#fff] dark:bg-[#111827] shadow-lg w-full rounded-lg text-[12px] p-6"> 
                        <div class="flex flex-row gap-2 border-b-[2px] border-b-[#F4F4F5] dark:border-b-[#374151] pb-2 mb-2">
                            <div class="bg-[#F87171] rounded-full w-[10px] h-[10px]"></div>
                            <div class="bg-[#FACC15] rounded-full w-[10px]"></div>
                            <div class="bg-[#34D399] rounded-full w-[10px]"></div>
                        </div>
                        <div class="flex flex-row gap-2">
                            <p class="text-[#2563EB] pr-6">current_task</p>
                            <p class="text-[#A1A1AA]"> =></p>
                            <p class="text-[#059669] pl-6">"Refactoring State Logic"</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <p class="text-[#2563EB] pr-20">uptime</p>
                            <p class="text-[#A1A1AA]"> =></p>
                            <p class="pl-20">12h 43m</p>
                        </div>
                        <div class="flex flex-row gap-2">
                            <p class="text-[#2563EB] pr-10">current_task</p>
                            <p class="text-[#A1A1AA]"> =></p>
                            <p class="pl-12">Remote / Hybrid</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg overflow-hidden shadow-lg shadow-blue-300 dark:shadow-blue-800 md:mt-20 dark:opacity-85">
                    <img src="@/assets/hero emana.PNG" title="Hero Image" class="w-[483px]"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import MixedText from './MixedText.vue';

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/emana_cv.pdf'; // Fajl iz public foldera
    link.download = 'Emana_Mujovic_CV.pdf'; 
    link.click();
}

const viewProfile = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/emana9'; // Replace with the actual GitHub profile URL
    link.target = '_blank';
    link.click();
}

</script>

<style scoped>
.font-family {
    font-family: Liberation Mono;
    font-size: 12px;
    line-height: 16px;
    font: bold;
}
</style>