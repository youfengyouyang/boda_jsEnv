// IDBVersionChangeEvent对象
bodavm.memory.globalobj['IDBVersionChangeEvent'] = function IDBVersionChangeEvent(){this._boisinit=bodavm.config.isinit;
    if (!(this instanceof IDBVersionChangeEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IDBVersionChangeEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IDBVersionChangeEvent': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBVersionChangeEvent'], "IDBVersionChangeEvent");
bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['IDBVersionChangeEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "oldVersion", {configurable:true, enumerable:true, get:function oldVersion (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "oldVersion_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "newVersion", {configurable:true, enumerable:true, get:function newVersion (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "newVersion_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "dataLoss", {configurable:true, enumerable:true, get:function dataLoss (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "dataLoss_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('IDBVersionChangeEvent', "dataLossMessage", {configurable:true, enumerable:true, get:function dataLossMessage (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBVersionChangeEvent'].prototype, "IDBVersionChangeEvent", "dataLossMessage_get", arguments)}, set:undefined},'prototype');
