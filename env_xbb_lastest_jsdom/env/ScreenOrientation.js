// ScreenOrientation对象
bodavm.memory.globalobj['ScreenOrientation'] = function ScreenOrientation(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ScreenOrientation'], "ScreenOrientation");
bodavm.memory.globalobj['ScreenOrientation'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['ScreenOrientation'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('ScreenOrientation', "angle", {configurable:true, enumerable:true, get:function angle (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenOrientation'].prototype, "ScreenOrientation", "angle_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ScreenOrientation', "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenOrientation'].prototype, "ScreenOrientation", "type_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ScreenOrientation', "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenOrientation'].prototype, "ScreenOrientation", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenOrientation'].prototype, "ScreenOrientation", "onchange_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('ScreenOrientation', "lock", {configurable:true, enumerable:true, writable:true, value:function lock (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenOrientation'].prototype, "ScreenOrientation", "lock", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('ScreenOrientation', "unlock", {configurable:true, enumerable:true, writable:true, value:function unlock (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenOrientation'].prototype, "ScreenOrientation", "unlock", arguments)}},'prototype');
