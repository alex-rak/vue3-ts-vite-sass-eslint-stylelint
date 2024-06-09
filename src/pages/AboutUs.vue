<script setup lang="ts">
import { useMainStore } from "@store/main";
import { useExtraStore } from "@store/extraStore";
import { storeToRefs } from "pinia";

const extra = useExtraStore();
const main = useMainStore();
const { count } = storeToRefs(main);
// the increment action can just be destructured
const { increase } = main;
</script>

<template>
  <button @click="extra.extraIncrease">
    extra-count - {{ extra.extraCount }}
  </button>
  <button @click="increase">
    count - {{ count }}
  </button>
</template>