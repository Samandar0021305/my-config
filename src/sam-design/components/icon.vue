<template>
  <i
    class="s-icon-wrapper"
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
    <component class="s-icon" :is="icon" :fill="MixinGetColor(colorFill)" />
  </i>
  <component
    class="s-icon"
    :class="`s-icon-${size}`"
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
const icon = defineAsyncComponent(async () => {
  try {
    const module = await import(`../../assets/svg/${props.name}.svg`);
    return module;
  } catch (error) {
    throw error;
  }
});
const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  emit("click", event);
};
</script>

<style lang="scss">
.layout.student .t-icon-wrapper {
  border-radius: 50%;
}

.s-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &.xxl {
    width: 40px;
    height: 40px;

    .t-icon {
      width: 22px;
      height: 22px;
    }
  }

  &.xl {
    min-width: 36px;
    height: 36px;
    border-radius: 8px;

    .s-icon {
      width: 22px;
      height: 22px;
    }
  }

  &.lg {
    min-width: 32px;
    height: 32px;
    border-radius: 8px;

    .t-icon {
      width: 22px;
      height: 22px;
    }
  }

  &.md {
    min-width: 24px;
    height: 24px;
    border-radius: 4px;

    .t-icon {
      width: 18px;
      height: 18px;
    }
  }
}

.t-icon {
  display: block;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &-xl {
    width: 24px;
    height: 24px;
  }

  &-lg {
    width: 22px;
    height: 22px;
  }

  &-md {
    width: 20px;
    height: 20px;
  }

  &-sm {
    width: 18px;
    height: 18px;
  }

  &-xs {
    width: 16px;
    height: 16px;
  }
}
</style>
