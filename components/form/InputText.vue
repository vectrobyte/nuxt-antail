<template>
  <InputBase>
    <AInputSearch
      ref="input"
      type="text"
      :value="value"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :addon-before="title"
      :style="`${inputRadius}; ${inputWidth}`"
      :required="required"
      @change="updateInput" />
  </InputBase>
</template>

<script>
import InputBase from '../base/InputBase';

export default {
  name: 'InputText',
  components: { InputBase },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'default',
    },
    width: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
  },
  computed: {
    inputRadius() {
      const { radius } = this;
      return radius ? `border-radius: ${radius}px` : '';
    },
    inputWidth() {
      const { width } = this;
      return width ? `width: ${width}%;` : '';
    },
  },
  methods: {
    updateInput() {
      const { value } = this.$refs.input;
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped>

</style>
