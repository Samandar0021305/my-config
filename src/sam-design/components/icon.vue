<template>
  <i
    class="t-icon-wrapper"
    v-if="wrapped"
    @click="handleClick"
    :class="size"
    :style="{
      border: bordered ? '' : 'none !important',
      borderRadius: radius ? '50% !important' : '',
      backgroundColor: MixinGetColor(colorBack),
      borderColor: MixinGetColor(colorBorder),
    }"
  >
    <component class="t-icon" :is="icon" :fill="MixinGetColor(colorFill)" />
  </i>
  <component
    class="t-icon"
    :class="`t-icon-${size}`"
    v-else
    :is="icon"
    @click="handleClick"
    :fill="MixinGetColor(colorFill)"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent, type PropType } from "vue";
import { TypeIconSize } from "@/utils/types";
import { MixinGetColor } from "@/utils/mixins";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<TypeIconSize>,
    default: "lg",
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  radius: {
    type: Boolean,
    default: false,
  },
  colorFill: {
    type: String,
    default: "black4",
  },
  colorBack: {
    type: String,
    default: "black8",
  },
  colorBorder: {
    type: String,
    default: "black6",
  },
  wrapped: {
    type: Boolean,
    default: false,
  },
});
const icon = defineAsyncComponent(
  () => import(`../../assets/svg/${props.name}.svg`)
);
const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  emit("click", event);
};
</script>

<style lang="scss"></style>
