class AutoCreatingMap extends Map {
    constructor(factory) {
        super();
        this.factory=factory;
    }
    get(key, ...parameters) {
        if (!this.has(key)) {
            let value=this.factory(key, ...parameters);
            this.set(key,value);
            return value;
        }
        return super.get(key);
    }
}

module.exports=AutoCreatingMap;
