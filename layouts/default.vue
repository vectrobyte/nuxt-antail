<template>
  <main class="main-container relative">
    <Header
      :is-logged="isLogged"
      @login="goTo('/login')"
      @register="goTo('/register')" />
    <!--    Page Content-->
    <nuxt style="padding-bottom: 80px;" />
    <!--    Page Content-->
    <Footer
      color="gray-400"
      class="absolute"
      style="height: 80px; bottom: 0" />
  </main>
</template>

<script>
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

export default {
  components: { Footer, Header },
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
  .main-container {
    min-height:100%;
    position:relative;
  }
</style>
