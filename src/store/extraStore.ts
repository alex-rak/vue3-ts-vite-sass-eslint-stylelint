import { defineStore } from "pinia";
import { ref } from "vue";

export const useExtraStore = defineStore("extra", () => {
  const extraCount = ref(0);
  const extraIncrease = () => {
    extraCount.value++;
  };
  return {
    extraCount, extraIncrease,
  };
});