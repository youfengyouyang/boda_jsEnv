// PerformanceEntry对象
bodavm.memory.globalobj['PerformanceEntry'] = function PerformanceEntry(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceEntry'], "PerformanceEntry");
bodavm.toolsFunc.defineProperty('PerformanceEntry', "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEntry'].prototype, "PerformanceEntry", "name_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEntry', "entryType", {configurable:true, enumerable:true, get:function entryType (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEntry'].prototype, "PerformanceEntry", "entryType_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEntry', "startTime", {configurable:true, enumerable:true, get:function startTime (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEntry'].prototype, "PerformanceEntry", "startTime_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEntry', "duration", {configurable:true, enumerable:true, get:function duration (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEntry'].prototype, "PerformanceEntry", "duration_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEntry', "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEntry'].prototype, "PerformanceEntry", "toJSON", arguments)}},'prototype');
