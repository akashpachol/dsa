/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let m = new Map();

    for(let i of s) {
        if(m.has(i)) {
            m.set(i, m.get(i)+1 )
        } else {
            m.set(i, 1)
        }
    }

    let maxV = 0;
    let maxC = 0;

    for(const [k, v] of m) {
        if('aeiouAEIOU'.includes(k)) {
            maxV = Math.max(v, maxV)
        } else {
            maxC = Math.max(v, maxC)
        }
    }

    return maxV+maxC
};