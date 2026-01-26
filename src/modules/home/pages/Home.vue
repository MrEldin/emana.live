  <template>
    <Navigation />
    <Hero />
    <SelectedProjects />
    <LiveTelemetry /> 
    <Education /> 
    <Dashboard />
    <Footer />
  </template>

  <script setup>

  import Navigation from "@/modules/home/components/Navigation.vue";
  import Hero from "../components/Hero.vue";
  import SelectedProjects from "../components/SelectedProjects.vue";
  import LiveTelemetry from "../components/LiveTelemetry.vue";
  import Education from "../components/Education.vue";
  import Dashboard from "../components/Dashboard.vue";
  import Footer from "../components/Footer.vue";
  </script>

  <style scoped>

  </style>
