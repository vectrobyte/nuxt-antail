<template>
  <footer
    class="py-4 w-full"
    :class="[bgColor]">
    <Container>
      <FlexBox
        align-items="center"
        justify="between">
        Footer Area
      </FlexBox>
    </Container>
  </footer>
</template>

<script>
import Container from '../../components/base/Container';
import FlexBox from '../../components/base/FlexBox';

export default {
  name: 'Footer',
  components: { FlexBox, Container },
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
