var nums = [0, 1, 0, 3, 12];

function numberFirst(nums){
    for( let i = 0; i < nums.length; i++ )
    {
        let num = nums[i];
        if( num === 0 )
        {
            nums.push(nums.splice(i, 1)[0]);
        }
    }
    return nums;
}
console.log(numberFirst(nums));