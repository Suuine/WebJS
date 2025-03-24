(function(){
// Task 1
// Bubbel sort
console.log("Array for Bubble sort");

  let arr = [];
  for(let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * 100));
  }

  let fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array Bubble: ");

  arr = sortApp.BubbleSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // MinElementSort
  console.log("Array for MinElementSort");

  arr = [];
  for(let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * 100));
  }

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array MinElementSort: ");

  arr = sortApp.MinElementSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // InsertionSort
  console.log("Array for InsertionSort");

  arr = [];
  for(let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * 100));
  }

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array InsertionSort: ");

  arr = sortApp.InsertionSort(arr, 'desc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // ShellSort
  console.log("Array for ShellSort");

  arr = [];
  for(let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * 100));
  }
  
  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array ShellSort: ");

  arr = sortApp.ShellSort(arr, 'desc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // QuickSort
  console.log("Array for QuickSort");

  arr = [];
  for(let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * 100));
  }

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array QuickSort: ");

  arr = sortApp.QuickSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Pushes: " + sortApp.swaps);
  sortApp.swaps = 0;

  // with undefined elements
  // Bubbel sort
  console.log("Array for Bubble sort with undefined elements");

  arr = Array.from({ length: 100 }, () => (Math.random() > 0.8 ? undefined : Math.floor(Math.random() * 100)));

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array Bubble sort with undefined elements: ");

  arr = sortApp.BubbleSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // MinElementSort
  console.log("Array for MinElementSort with undefined elements");

  arr = Array.from({ length: 100 }, () => (Math.random() > 0.8 ? undefined : Math.floor(Math.random() * 100)));

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array MinElementSort with undefined elements: ");

  arr = sortApp.MinElementSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  //InsertionSort
  console.log("Array for InsertionSort with undefined elements");

  arr = Array.from({ length: 100 }, () => (Math.random() > 0.8 ? undefined : Math.floor(Math.random() * 100)));

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array InsertionSort with undefined elements: ");

  arr = sortApp.InsertionSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // ShellSort
  console.log("Array for ShellSort with undefined elements");

  arr = Array.from({ length: 100 }, () => (Math.random() > 0.8 ? undefined : Math.floor(Math.random() * 100)));

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array ShellSort with undefined elements: ");

  arr = sortApp.ShellSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Swaps: " + sortApp.swaps);
  sortApp.swaps = 0;

  // QuickSort
  console.log("Array for QuickSort with undefined elements");

  arr = Array.from({ length: 100 }, () => (Math.random() > 0.8 ? undefined : Math.floor(Math.random() * 100)));

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }

  console.log(fullArr);
  console.log("Sorted array QuickSort with undefined elements: ");

  arr = sortApp.QuickSort(arr, 'asc');

  fullArr = "";
  for(let i of arr){
    fullArr += i + " ";
  }
  
  console.log(fullArr);
  console.log("Pushes: " + sortApp.swaps);
  sortApp.swaps = 0;
})();