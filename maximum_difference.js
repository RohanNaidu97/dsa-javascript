var maximumDifference = function(nums) {
    let max = 0;
    let i = 0;
    let j = nums.length -1;

    while( i < j )
    {
        if(max < nums[j] - nums[i] )
        {
            max = nums[j] - nums[i];
        }

        i++;
        j--; 
    }

    return max !== 0 ? max : -1;
};


const nums = [87,68,91,86,58,63,43,98,6,40];
console.log(maximumDifference(nums));


// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

// Return the maximum difference. If no such i and j exists, return -1.

// Example 1:

// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
// Example 2:

// Input: nums = [9,4,3,2]
// Output: -1
// Explanation:
// There is no i and j such that i < j and nums[i] < nums[j].