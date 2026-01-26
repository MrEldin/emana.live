

<template>
    <section id="Contact" class="scroll-mt-16 dark:bg-[#111827] pt-20"> 
        <div class="max-w-7xl mx-auto px-6 pb-10 "> 
            <div class="flex flex-col gap-6">
                <!-- Contact Section -->
                <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-[#18181B] dark:text-[#F9FAFB] font-semibold text-[16px]">Interesting in working together?</h3>
                        <a :href="`mailto:${email}`" class="text-[#71717A] dark:text-[#D1D5DB] text-[14px] hover:text-[#18181B] dark:hover:text-[#F9FAFB] transition-colors">
                            {{ email }}
                        </a>
                    </div>
                    
                    <div class="flex flex-row gap-4"> 
                        <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer" class="text-[#71717A] dark:text-[#D1D5DB] hover:text-[#18181B] dark:hover:text-[#F9FAFB] transition-colors cursor-pointer">
                            <img src="@/assets/social-network.png" alt="GitHub" class="w-[25px]"/>
                        </a>
                        <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer" class="text-[#71717A] dark:text-[#D1D5DB] hover:text-[#18181B] dark:hover:text-[#F9FAFB] transition-colors cursor-pointer">
                            <svg class="w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a v-if="portfolio" :href="portfolio" target="_blank" rel="noopener noreferrer" class="text-[#71717A] dark:text-[#D1D5DB] hover:text-[#18181B] dark:hover:text-[#F9FAFB] transition-colors cursor-pointer">
                            <img src="@/assets/global-network.png" alt="Portfolio" class="w-[25px]"/>
                        </a>
                    </div>
                </div>
                
                <div class="flex flex-row justify-between items-center"> 
                    <p class="text-[#71717A] dark:text-[#D1D5DB] text-[14px]">Emana Mujovic | System v2.4</p>
                </div>
                <p class="text-[#A1A1AA] dark:text-[#9CA3AF] text-[12px] text-center">//Hand-coded with Tailwind CSS. AI - Enhanced.</p>
            </div>
        </div>
    </section>
</template> 

<script setup>

const email = 'emana.agovic@gmail.com' // Zameni sa svojim emailom
const github = 'https://github.com/dashboard' // Zameni sa svojim GitHub profilom
const linkedin = 'https://www.linkedin.com/in/emana-agovi%C4%87-mujovi%C4%87-1085341a6/' // Zameni sa svojim LinkedIn profilom
const portfolio = 'https://yourportfolio.com' // Zameni sa svojim portfolio sajtom (opciono)

</script>