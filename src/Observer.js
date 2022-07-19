import { def } from "./utils.js";
import defineReactive from "./defineReactive.js";

export default class Observer {
    constructor(value) {
        console.log(`执行构造器Observer ${JSON.stringify(value)}`);
        def(value, '__ob__', this, false);
        this.walk(value);
    }

    walk(value) {
        Object.keys(value).forEach((key) => {
            defineReactive(value, key);
        })
    }
}

