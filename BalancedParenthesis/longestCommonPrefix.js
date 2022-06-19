// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {

    let prefix = strs[0]?.length > 0 && strs[0];
    if (prefix) {
        for (var i = 0; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length - 1)
            }
        }
    }
    return prefix.length ? prefix : "";

}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
