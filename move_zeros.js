// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


var moveZeroes = function(nums) {
    nums.sort( (a,b) => a-b);
    
    let ind = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== 0) {
            ind = index;
            break;
        }
    }

    nums = [...nums.slice(ind, nums.length), ...nums.slice(0, ind)];
    return nums;
}


const nums = [0,1,0,3,12];

console.log(moveZeroes(nums));