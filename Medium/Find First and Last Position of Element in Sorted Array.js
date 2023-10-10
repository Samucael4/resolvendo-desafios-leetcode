/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/
//============================NAO CONSEGUI RESOLVER, TIVE QUE USAR CHAT GPT=============================
var searchRange = function(nums, target) {

    if(nums.length==0 && target==0){
        return [-1,-1]
    }
    if(nums.includes(target)==false){
        return [-1,-1]
    }
    if(nums.length==1 && nums.includes(target)){
        return [0,0]
    }
    if(nums.length==2 && nums[0]==nums[1]==target){
        return [0,1]
    }
    if(nums.length==2){
        if(nums[0]==target){
            return [0,0]
        }else{
            return [1,1]
        }
    }

    const result = []
    for(i=0; i<nums.length; i++){
        if(nums[i]==target){
            result.push(i)   
        } 
    }
    return result
};

const array = []

console.log(searchRange(array, 5))

//==================================VERSAO CHAT GPT==========================
var searchRange = function(nums, target) {

    const primeiro = nums.indexOf(target);
      if (primeiro === -1) {
        return [-1, -1];
      }
      
      const ultimo = nums.lastIndexOf(target);
      return [primeiro, ultimo];
    };