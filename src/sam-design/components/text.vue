<template>
  <component @click="handleClick" :is="props.tag"
  :style="{
      
    }"
  > 
  <slot></slot>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
    tag: {
    type: String,
    default: "p",
  },
  color: {
    type: String,
    default: "black1",
  },
})

const emit = defineEmits(["click"]);
const handleClick = (event: Event) => {
  emit("click", event);
};
</script>
