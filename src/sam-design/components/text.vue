<template>
  <component
    @click="handleClick"
    :is="props.tag"
    :style="{
      color: props.color !== 'custom' ? MixinGetColor(props.color) : '',
      whiteSpace: props.wrap ? '' : 'nowrap',
      textAlign: props.center ? 'center' : '',
    }"
    :class="props.tg !== 'custom' ? 't-text-' + props.tg : 'custom'"
    class="s-text"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { MixinGetColor } from "@/utils/mixins";
const props = defineProps({
  tag: {
    type: String,
    default: "p",
  },
  color: {
    type: String,
    default: "black1",
  },
  tg: {
    type: String,
    default: "body4",
  },
  wrap: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["click"]);
const handleClick = (event: Event) => {
  emit("click", event);
};
</script>

<style lang="scss">

.s-text {
  &:not(.custom) {
    margin: 0;
    display: block;
  }
}
</style>
