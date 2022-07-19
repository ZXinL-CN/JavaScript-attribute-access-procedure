import '../utils/consoleInHTML.js';
import observe from './observe.js';

// ----------------------------------------------------------------

var obj = {
    a: {
        b: {
            c: 5,
        }
    }
}

observe(obj)
console.log(obj.a.b.c);


export default {};
