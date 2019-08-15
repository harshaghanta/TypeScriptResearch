function echo<T>(arg : T) : T {
    return arg;
}

//Below line should give an error
// var myString : string = echo(1);

var num  : number = echo(1);

export class List<T> {
    private data : T[];
    constructor(...elements: T[]) {
        this.data = elements;
    }
    add(element : T) {
        this.data.push(element);
    }
    remove(element : T) {
        let index = this.data.indexOf(element);
        if(index != -1) {
            this.data.splice(index,1);
        }
    }
    asArray() : T[] {
        return this.data;
    }
}

export class KeyValuePair<TKey, TValue> {
    
    constructor(private readonly key : TKey, private readonly value : TValue ) {

    }

    getKey() : TKey {
        return this.key;
    }

    getValue() : TValue {
        return this.value;
    }
}

//Usage of KeyValuePair & List can be observed in 07- Modules