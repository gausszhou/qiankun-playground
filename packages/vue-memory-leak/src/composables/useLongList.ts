import { onMounted, ref } from "vue";

function createList(count: number, callback: Function) {
  return Array.from({ length: count }).map(() => callback());
}

export function useLongList(count = 1000) {
  const longList = ref<string[]>([]);
  onMounted(() => {
    longList.value = createList(count, () => "0123456789");
  });
  return { longList }
}



