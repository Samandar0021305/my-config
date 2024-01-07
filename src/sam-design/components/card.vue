<template>
  <div
    class="s-card"
    :style="{
      cursor: props.cursor,
      borderColor: MixinGetColor(props.colorBorder),
      backgroundColor: MixinGetColor(props.colorBack),
      padding: props.padding.map((el) => `${el}px`).join(' '),
      borderRadius: `${props.radius}px`,
      width: props.width,
      boxShadow: props.shadow
        ? `0px 2px 8px 0px rgba(${MixinGetColor('black')}, 0.10)`
        : '',
    }"
    :class="{
      absolute: props.absolute,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { MixinGetColor } from "@/utils/mixins";
const props = defineProps({
  cursor: {
    type: String,
    default: "default",
  },
  colorBorder: {
    type: String,
    default: "",
  },
  colorBack: {
    type: String,
    default: "white1",
  },
  padding: {
    type: Array,
    default: [16],
  },
  radius: {
    type: Number,
    default: 8,
  },
  width: {
    type: String,
    default: "auto",
  },
  absolute: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.s-card {
  border: 1px solid;
  &.absolute {
    position: fixed;
    left: calc(50% + (var(--aside-width) / 2));
    bottom: 24px;
    transform: translateX(-50%);
    transition: all 0.2s ease-in-out;
    z-index: 999;
  }
}
</style>
