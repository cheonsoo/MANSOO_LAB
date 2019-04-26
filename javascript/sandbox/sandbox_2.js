var MYAPP = MYAPP || {}; 
MYAPP.utils = MYAPP.utils || {};

MYAPP.utils.me = (() => { 
    
    // 비공개 프로퍼티 
    let firstname = "Cheonsoo";
    let lastname = "Park";
    let nickname = "cpark";

    let getFirstname = () => { 
        return firstname;
    }; 
    let getLastname = () => { 
        return lastname;
    };
    let getNickname = () => {
        return nickname;
    }

    // 공개 API 노출 
    let o = { getFirstname : getFirstname, getLastname : getLastname };
    return o;
})();

console.log( MYAPP.utils.me.getFirstname() );
console.log( MYAPP.utils.me.getLastname() );
console.log( MYAPP.utils.me.getNickname() );