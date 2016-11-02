var nums = [1,2,3,4];

function productArray(nums){
    let len = nums.length;
    let preproducNums_1 = [];
    let preproducNums_2 = [];

    preproducNums_1[0] = 1;
    for ( let i = 1; i < len; i++ ) 
    {
        preproducNums_1[i] = preproducNums_1[i - 1] * nums[i - 1];
    }

    preproducNums_2[len - 1] = 1;
    for ( let i = len - 2; i >= 0; i-- ) 
    {
        preproducNums_2[i] = preproducNums_2[i + 1] * nums[i + 1];
    }

    for ( let i = 0; i < len; i++ ) 
    {
        nums[i] = preproducNums_1[i] * preproducNums_2[i];
    }
    return nums;
}
console.log(productArray(nums));