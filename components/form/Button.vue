<template>
  <AButton
    :html-type="type"
    :type="color"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :style="`${btnRadius};`"
    @click="onClick">
    <slot />
  </AButton>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    radius: {
      type: [Number, String],
      default: '',
    },
  },
  computed: {
    btnRadius() {
      const { radius } = this;
      return radius ? `border-radius: ${radius}px` : '';
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>

</style>
