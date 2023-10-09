/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/
var findMedianSortedArrays = function(nums1, nums2) {
    const m =0
    const n =0
    nums1.length == m
    nums2.length == n
    const nums3 = nums1.concat(nums2)
    nums3.sort((a, b) => a - b)
    if (nums3.length%2==0){
        const meio = (nums3.length/2)-1
        const meioMaisUm = meio + 1
        const mediana = (nums3[meio] + nums3[meioMaisUm])/2
        return mediana
    }else{
        const meio= ((nums3.length +1) /2)
        const mediana = nums3[meio]
        return mediana
    }  
};
const ar1 = [1,2]
const ar2 = [3,4]
// const ar3 = ar1.concat(ar2)
// console.log(ar3.sort((a, b) => a - b))
// console.log(Array.isArray(ar3))
console.log(findMedianSortedArrays(ar1,ar2))
//===================================================versao gpt=======================================================================================
// Concatenar os dois arrays
const mergedArray = [...ar1, ...ar2];
// Ordenar o array resultante em ordem crescente
mergedArray.sort((a, b) => a - b);
// Calcular a mediana
const length = mergedArray.length;
let median;
if (length % 2 === 0) {
  // Se o tamanho do array for par, a mediana é a média dos dois valores do meio.
  const middle1 = mergedArray[length / 2 - 1];
  const middle2 = mergedArray[length / 2];
  median = (middle1 + middle2) / 2;
} else {
  // Se o tamanho do array for ímpar, a mediana é o valor do meio.
  median = mergedArray[Math.floor(length / 2)];
}