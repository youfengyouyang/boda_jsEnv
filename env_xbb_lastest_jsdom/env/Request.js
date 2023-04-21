// Request对象
bodavm.memory.globalobj['Request'] = function Request(){this._boisinit=bodavm.config.isinit;
    if (!(this instanceof Request)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Request': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    }; 
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Request': 1 argument required, but only 0 present.")}

    }
// Request对象
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Request'], "Request");
bodavm.toolsFunc.defineProperty('Request', "method", {configurable:true, enumerable:true, get:function method (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "method_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "url", {configurable:true, enumerable:true, get:function url (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "url_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "headers", {configurable:true, enumerable:true, get:function headers (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "headers_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "destination", {configurable:true, enumerable:true, get:function destination (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "destination_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "referrer", {configurable:true, enumerable:true, get:function referrer (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "referrer_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "referrerPolicy_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "mode", {configurable:true, enumerable:true, get:function mode (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "mode_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "credentials", {configurable:true, enumerable:true, get:function credentials (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "credentials_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "cache", {configurable:true, enumerable:true, get:function cache (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "cache_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "redirect", {configurable:true, enumerable:true, get:function redirect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "redirect_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "integrity", {configurable:true, enumerable:true, get:function integrity (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "integrity_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "keepalive", {configurable:true, enumerable:true, get:function keepalive (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "keepalive_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "signal", {configurable:true, enumerable:true, get:function signal (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "signal_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "isHistoryNavigation", {configurable:true, enumerable:true, get:function isHistoryNavigation (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "isHistoryNavigation_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "bodyUsed", {configurable:true, enumerable:true, get:function bodyUsed (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "bodyUsed_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Request', "arrayBuffer", {configurable:true, enumerable:true, writable:true, value:function arrayBuffer (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "arrayBuffer", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Request', "blob", {configurable:true, enumerable:true, writable:true, value:function blob (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "blob", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Request', "clone", {configurable:true, enumerable:true, writable:true, value:function clone (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "clone", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Request', "formData", {configurable:true, enumerable:true, writable:true, value:function formData (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "formData", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Request', "json", {configurable:true, enumerable:true, writable:true, value:function json (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "json", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Request', "text", {configurable:true, enumerable:true, writable:true, value:function text (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Request'].prototype, "Request", "text", arguments)}},'prototype');
