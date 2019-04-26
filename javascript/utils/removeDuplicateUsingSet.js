function removeDuplicateUsingSet(arr) {
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

var arr = [1,2,3,2,2,3,4,3,2,2];

var arr_2 = removeDuplicateUsingSet( arr );

console.log(arr_2);