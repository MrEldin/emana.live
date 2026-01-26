

<template>

  

  <nav
    class="fixed z-50 supports-[backdrop-filter]:bg-white/60 bg-white/60 dark:bg-[#0F172A] w-full border-white/50 dark:border-[#374151] border-b top-0 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center gap-2 group cursor-pointer">
          <div
            class="relative w-8 h-8 flex items-center justify-center bg-white/80 border border-zinc-200/50 rounded text-emerald-600 font-mono text-xs font-medium group-hover:border-emerald-500/50 transition-colors overflow-hidden shadow-sm">
            <div
              class="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            </div>
            EM
          </div>
          <span class="font-medium text-sm tracking-tight text-zinc-900 dark:text-zinc-400 group-hover:text-emerald-600 transition-colors">emana.live</span>
        </div> 


        <div class="hidden md:flex items-center space-x-1">
          <a href="#Hero"
             class="text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2 rounded-md hover:bg-white/50 transition-all scroll-smooth">/about</a>
          <a href="#SelectedProjects"
             class="text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2 rounded-md hover:bg-white/50 transition-all scroll-smooth">/projects</a>
          <a href="#LiveTelemetry"
             class="text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2 rounded-md hover:bg-white/50 transition-all scroll-smooth">/telemetry</a>
          <a href="#Education"
             class="text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2 rounded-md hover:bg-white/50 transition-all scroll-smooth ">/background</a>
        </div> 

        <button
          @click="toggle"
          class="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 transition-colors bg-white/80 hover
           bg-green-200 dark:bg-zinc-800 text-[12px] dark:text-green-300"
          >{{ isDark ? '🌞 Light' : '🌙 Dark' }}
        </button>

        <div class="flex items-center gap-3">
          <div
            class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-50/50 backdrop-blur-sm">
                    <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
            <span class="text-[10px] font-mono font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-widest">System Online</span>
          </div>
          <button @click="scrollToContact" class="text-sm font-medium bg-zinc-900/90 dark:bg-[#1F2937] hover:bg-zinc-800 dark:hover:bg-[#374151] text-white px-4 py-2 rounded-full transition-all flex items-center gap-2 shadow-lg dark:shadow-none shadow-zinc-200/50 backdrop-blur-sm">
            <span>Contact</span>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 24 24" data-icon="lucide:message-square" data-width="14" style="stroke-width: 1.5;" class="iconify iconify--lucide"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { useDarkMode } from '@/useDarkMode'
  const { isDark, toggle } = useDarkMode()

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<style scoped>

</style>
