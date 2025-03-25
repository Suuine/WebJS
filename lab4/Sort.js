(function(window){
    let sortApp = {};
    sortApp.swaps = 0; 
    sortApp.comapisons = 0;
    let undefinedElem  = [];

    function takeUndefinded(arr) {
        undefinedElem = arr.filter(item => item === undefined); 
        return arr.filter(item => item !== undefined);
    }
         
    sortApp.BubbleSort = function(arr, way) {
        arr = takeUndefinded(arr);

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) { 
                if (way === 'asc') {
                    if (arr[j] > arr[j + 1]) {
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                        sortApp.swaps++; 
                    }
                } else if (way === 'desc') {
                    if (arr[j] < arr[j + 1]) {
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                        sortApp.swaps++; 
                    }
                }
                sortApp.comapisons++;
            }
        }

        arr = arr.concat(undefinedElem);
        undefinedElem  = [];
        return arr;
    }
     
    sortApp.MinElementSort = function(arr, way) {
        arr = takeUndefinded(arr);

        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (way === 'asc') {
                    if (arr[j] < arr[min]) {
                        min = j;
                    }
                } else if (way === 'desc') {
                    if (arr[j] > arr[min]) {
                        min = j;
                    }
                }
                sortApp.comapisons++;
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
                sortApp.swaps++; 
            }           
        }

        arr = arr.concat(undefinedElem);
        undefinedElem  = [];
        return arr; 
    }
     
    sortApp.InsertionSort = function(arr, way) {
        arr = takeUndefinded(arr);

        for (let i = 1; i < arr.length; i++) {
            if(way === 'asc') { 
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                    sortApp.swaps++; 
                }
                arr[j + 1] = key;
            } else if(way === 'desc') { 
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] < key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                    sortApp.swaps++; 
                }
                arr[j + 1] = key;
            }
            sortApp.comapisons++;
        }

        arr = arr.concat(undefinedElem);
        undefinedElem  = [];
        return arr; 
    }
     
    sortApp.ShellSort = function(arr, way) {
        arr = takeUndefinded(arr);

        let n = arr.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
            for (let i = gap; i < n; i += 1) {
                let temp = arr[i];
                let j;
                if(way === 'asc') {
                    for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                        arr[j] = arr[j - gap];
                        sortApp.swaps++; 
                    }
                } else if(way === 'desc') { 
                    for (j = i; j >= gap && arr[j - gap] < temp; j -= gap) {
                        arr[j] = arr[j - gap];
                        sortApp.swaps++; 
                    }
                }
                arr[j] = temp;
                sortApp.comapisons++;
            }
            
        }

        arr = arr.concat(undefinedElem);
        undefinedElem  = [];
        return arr; 
    }
     
    sortApp.QuickSort = function(arr, way) {
        arr = takeUndefinded(arr); 
        
        function quickSort(arr, way) {
            if (arr.length <= 1) {
                return arr;
            } else {         
                let left = [];
                let right = [];
                let pivot = arr.pop(); 
                let length = arr.length;
                
                for (let i = 0; i < length; i++) {
                    if (way === 'asc') {
                        if (arr[i] <= pivot) {
                            left.push(arr[i]);
                        } else {
                            right.push(arr[i]);
                        }
                        sortApp.swaps++; 
                    } else if (way === 'desc') {
                        if (arr[i] >= pivot) {
                            left.push(arr[i]);
                        } else {
                            right.push(arr[i]);
                        }
                        sortApp.swaps++; 
                    }   
                    sortApp.comapisons++;                 
                }
        
                return [].concat(
                    quickSort(left, way), 
                    pivot, 
                    quickSort(right, way)
                );
            }
        }
    
        let sortedArr = quickSort(arr, way); 
        sortedArr = sortedArr.concat(undefinedElem); 
        undefinedElem = []; 
        return sortedArr;
    };
    
         
    window.sortApp = sortApp;
})(window);
