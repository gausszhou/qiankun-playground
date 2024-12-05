import { onMounted } from "vue";

function createArray(sizeInMB = 10) {
  const sizeInBytes = sizeInMB * 1024 * 1024; // 10 * 1024 * 1024

  // 创建类型数组
  const data = new Uint8Array(sizeInBytes);

  // 填充数组（可选）
  for (let i = 0; i < data.length; i++) {
    data[i] = i % 256; // 示例：用 0-255 的数字填充
  }
  return data;
}

export function useBigArray() {
  onMounted(() => {
    const bigArray = createArray(10);  
    console.log(bigArray.length);
  })
}

