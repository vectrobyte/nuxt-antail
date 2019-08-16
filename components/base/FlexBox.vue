<template>
  <div
    class="flex"
    :class="[flexDirection, flexWrap, flexAlign, flexJustify]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FlexBox',
  props: {
    direction: {
      type: String,
      default: '',
    },
    wrap: {
      type: String,
      default: '',
    },
    alignItems: {
      type: String,
      default: '',
    },
    justify: {
      type: String,
      default: '',
    },
  },
  computed: {
    flexDirection() {
      const { direction } = this;
      return direction ? `flex-${direction}` : '';
    },
    flexWrap() {
      const { wrap } = this;
      return wrap ? `flex-${wrap}` : '';
    },
    flexAlign() {
      const { alignItems } = this;
      return alignItems ? `items-${alignItems}` : '';
    },
    flexJustify() {
      const { justify } = this;
      return justify ? `justify-${justify}` : '';
    },
  },
};
</script>

<style scoped>

</style>
