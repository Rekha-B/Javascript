export default function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
      let minIndex = i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[minIndex]){
          minIndex = j;
        }
      }
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr;
  }

  selectionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
selectionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
