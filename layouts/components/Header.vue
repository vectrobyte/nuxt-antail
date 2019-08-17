<template>
  <nav class="py-5">
    <Container>
      <FlexBox
        justify="between"
        align-items="center">
        <NuxtLink to="/">
          <FlexBox align-items="center">
            <Avatar />
            <i class="ml-2 text-medium text-large">Name Here</i>
          </FlexBox>
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
import Button from '~/components/form/Button';
import Avatar from '~/components/elements/Avatar';
import FlexBox from '~/components/elements/FlexBox';
import Container from '~/components/elements/Container';

export default {
  layout: 'default',
  name: 'Header',
  components: {
    Avatar,
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
