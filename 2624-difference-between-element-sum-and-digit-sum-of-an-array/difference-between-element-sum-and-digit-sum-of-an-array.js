/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    
    function digitSum(num) {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }
  let totalsum = 0,
        digitadd = 0;

    for (let num of nums) {
        digitadd += digitSum(num);
        totalsum += num;
    }

    return Math.abs(digitadd - totalsum);
    

};