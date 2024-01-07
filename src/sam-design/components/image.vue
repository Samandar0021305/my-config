<template>
<div
    class="s-image"
    :style="{
      width: props.size,
    }"
  >
    <img
      v-if="!$slots.img"
      :src="image"
      :style="{
        borderRadius: props.radius,
      }"
    />
    <slot name="img"></slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
    size: {
    type: String,
    default: "100%",
  },
  image: {
    type: String,
    required: true,
  },
  radius: {
    type: String,
    default: "50%",
  },
})
const baseURL = import.meta.env.VITE_APP_UPLOAD_URL;

const image = computed(() => {
  if (props.image) {
    return `${baseURL}/avatar/${props.image}`;
  } else {
    return "/src/assets/images/user.png";
  }
});
</script>

<style lang="scss">
.s-image {
  position: relative;
  aspect-ratio: 1/1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  input {
    display: none;
  }

  .s-icon {
    &-wrapper {
      position: absolute;
      right: 25%;
      bottom: 25%;
      transform: translate(100%, 100%);
    }
  }
}
</style>
