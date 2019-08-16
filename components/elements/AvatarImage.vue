<template>
  <div
    class="image-wrapper"
    :class="[imageSize]">
    <Placeholder
      v-if="!revealImage"
      class="logo-image visible"
      :class="dimension" />
    <img
      :src="path"
      class="logo-image"
      :class="[dimension, {'invisible': !revealImage}]"
      alt=""
      @load="adjustImage">
  </div>
</template>

<script>
import Placeholder from '~/components/svg/Placeholder';

export default {
  name: 'AvatarImage',
  components: { Placeholder },
  props: {
    path: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    border: {
      type: String,
      default: 'primary',
    },
    imageInput: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dimension: 'auto-height',
      revealImage: false,
    };
  },
  computed: {
    imageSize() {
      return this.size ? `image-${this.size}` : '';
    },
  },
  created() {},
  mounted() {},
  methods: {
    adjustImage(e) {
      const el = e.target;
      const height = el.clientHeight;
      const width = el.clientWidth;
      this.dimension = height > width ? 'auto-height' : 'auto-width';
      // reveal image
      this.revealImage = true;
      this.$emit('load');
    },
  },
};
</script>

<style lang="scss" scoped>
  .image-wrapper {
    height: 65px;
    width: 65px;
    min-height: 65px;
    min-width: 65px;
    border-radius: 50%;
    overflow: hidden;
  }
  .image-medium {
    height: 75px;
    width: 75px;
    min-height: 75px;
    min-width: 75px;
  }
  .image-large {
    height: 90px;
    width: 90px;
    min-height: 90px;
    min-width: 90px;
  }
  .image-extra-large {
    height: 110px;
    width: 110px;
    min-height: 110px;
    min-width: 110px;
  }
  .image-small {
    height: 50px;
    width: 50px;
    min-height: 50px;
    min-width: 50px;
  }
  .auto-height {
    height: auto;
    width: inherit;
  }
  .auto-width {
    height: inherit;
    width: auto;
  }
</style>
