function twoSum(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j);
                return result;
            }
        }
    }
    return result;
}
console.log(twoSum([2, 7, 11, 15], 9));
