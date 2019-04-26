var MYAPP = MYAPP || {}; 

MYAPP.namespace = function (ns_string) { 
    var parts = ns_string.split('.'), 
                parent = MYAPP, 
                i;
                
    // 처음에 중복되는 전역 객체명은 제거한다. 
    if (parts[0] === 'MYAPP') { 
        parts = parts.slice(1); 
    } 
    for (i = 0; i < parts.length; i += 1) { 
        if (typeof parent[parts[i]] === 'undefined') { 
            parent[parts[i]] = {}; 
        } 
        parent = parent[parts[i]]; 
    } 
    return parent; 
}; 

MYAPP.namespace('MYAPP.utilities.array'); 

MYAPP.utilities.array = (function () { 
    // 비공개 프로퍼티 
    var arr_string = '[object Array]', ops = Object.prototype.toString; // 비공개 메서드 
    var inArray = function (haystack, needle) { 
        for (var i = 0, max = haystack.length; i < max; i += 1) { 
            if (haystack[i] === needle) { 
                return i; 
            } 
        } 
        return -1; 
    }; 
    var isArray = function (a) { 
        return ops.call(a) === arr_string; 
    }; 
    // 공개 API 노출 
    return { isArray : isArray, inArray : inArray } 
}()); 

console.log(MYAPP.utilities.array.inArray(['1',3], 3)); // 1 이 기록 
console.log(MYAPP.utilities.array.isArray({'a': 1})); // false 가 기록