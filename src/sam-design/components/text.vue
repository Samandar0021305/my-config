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
@import "@/assets/scss/base/mixins/typography";

.t-text {
  &:not(.custom) {
    margin: 0;
    display: block;
  }

  &-headline1 {
    @include headline1(var(--color-black1));
  }

  &-headline2 {
    @include headline2(var(--color-black1));
  }

  &-subtitle1 {
    @include subtitle1(var(--color-black1));
  }

  &-subtitle2 {
    @include subtitle2(var(--color-black1));
  }

  &-body1 {
    @include body1(var(--color-black1));
  }

  &-body2 {
    @include body2(var(--color-black1));
  }

  &-body3 {
    @include body3(var(--color-black1));
  }

  &-body4 {
    @include body4(var(--color-black1));
  }

  &-button1 {
    @include button1(var(--color-black1));
  }

  &-button2 {
    @include button2(var(--color-black1));
  }

  &-button2 {
    @include button2(var(--color-black1));
  }

  &-caption {
    @include caption(var(--color-black1));
  }

  &-overline {
    @include overline(var(--color-black1));
  }
  &-black{
    @include headline1(var(--sider-bg));
  }
}
</style>
