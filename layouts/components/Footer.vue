<template>
  <footer
    class="w-full"
    :class="[bgColor]">
    <Container class="py-3">
      <FlexBox align-items="center">
        <NuxtLink to="/">
          <FlexBox align-items="center">
            <Avatar size="extra-small" />
            <i class="ml-2 text-medium text-medium">Name Here</i>
          </FlexBox>
        </NuxtLink>
      </FlexBox>
    </Container>
  </footer>
</template>

<script>
import Container from '~/components/elements/Container';
import FlexBox from '~/components/elements/FlexBox';
import Avatar from '~/components/elements/Avatar';

export default {
  name: 'Footer',
  components: { Avatar, FlexBox, Container },
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    bgColor() {
      const { color } = this;
      return color ? `bg-${color}` : '';
    },
  },
};
</script>

<style scoped>
  .icons-group img {
    margin: 0 0.5rem;
  }
</style>
