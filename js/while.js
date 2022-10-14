"use strict";

(function (){

console.log('test while');

let i = 2
while (i <= 65536) {
    console.log(i)
i*=2;
}

})();