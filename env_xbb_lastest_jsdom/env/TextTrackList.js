// TextTrackList对象
bodavm.memory.globalobj['TextTrackList'] = function TextTrackList(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextTrackList'], "TextTrackList");
bodavm.memory.globalobj['TextTrackList'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['TextTrackList'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('TextTrackList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TextTrackList', "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "onchange_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('TextTrackList', "onaddtrack", {configurable:true, enumerable:true, get:function onaddtrack (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "onaddtrack_get", arguments)}, set:function onaddtrack (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "onaddtrack_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('TextTrackList', "onremovetrack", {configurable:true, enumerable:true, get:function onremovetrack (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "onremovetrack_get", arguments)}, set:function onremovetrack (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "onremovetrack_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('TextTrackList', "getTrackById", {configurable:true, enumerable:true, writable:true, value:function getTrackById (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackList'].prototype, "TextTrackList", "getTrackById", arguments)}},'prototype');
