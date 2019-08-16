<template>
  <nav class="py-4">
    <Container>
      <FlexBox justify="between">
        <NuxtLink to="/">
          Icon here
        </NuxtLink>

        <FlexBox
          class="buttons-group">
          <Button
            color="primary"
            size="large"
            class="mr-2"
            @click="$emit('login')">
            Login
          </Button>

          <AButton
            type="default"
            size="large"
            @click="$emit('register')">
            Sign up
          </AButton>
        </FlexBox>
      </FlexBox>
    </Container>
  </nav>
</template>

<script>
import Button from '../../components/form/Button';
import FlexBox from '../../components/base/FlexBox';
import Container from '../../components/base/Container';

export default {
  layout: 'default',
  name: 'Header',
  components: {
    Container,
    FlexBox,
    Button,
  },
  props: {
    isLogged: {
      type: Boolean,
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
  .active-icon {
    top: 10px;
    right: 0;
    line-height: 0;
    color: #00e635;
  }
</style>
