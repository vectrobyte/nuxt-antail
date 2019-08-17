<template>
  <Container class="py-5">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-antail
      </h1>
      <h2 class="subtitle">
        Nuxt app startup created with tailwindcss utilities and ant-design-vue
        components.
      </h2>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/base/Container';
import Logo from '~/components/svg/Logo';

export default {
  name: 'HomePage',
  layout: 'default',
  components: { Logo, Container },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
