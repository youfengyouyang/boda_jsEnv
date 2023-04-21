;;
!function(){
// 创建pluginArray
// debugger
bodavm.toolsFunc.createPluginArray = function createPluginArray(){
    let pluginArray = { _boisinit:bodavm.config.isinit};
    pluginArray = Object.setPrototypeOf(pluginArray, bodavm.memory.globalobj['PluginArray'].prototype);
    bodavm.toolsFunc.setProtoAttr.call(pluginArray, "length", 0);
    return pluginArray;
}
// 添加Plugin
bodavm.toolsFunc.addPlugin = function addPlugin(plugin){
  
    let pluginArray = bodavm.memory.globalInit.pluginArray;
    if(pluginArray === undefined){
        pluginArray = bodavm.toolsFunc.createPluginArray();
    }
    let index = pluginArray.length;
    pluginArray[index] = plugin;
    Object.defineProperty(pluginArray, plugin.name, {value: plugin, writable: false, enumerable: false, configurable: true},'bobo');

    bodavm.toolsFunc.setProtoAttr.call(pluginArray, "length", index+1);
    bodavm.memory.globalInit.pluginArray = pluginArray;
    return pluginArray;
}
// 创建MimeTypeArray对象
bodavm.toolsFunc.createMimeTypeArray = function createMimeTypeArray(){
    let mimeTypeArray = { _boisinit:bodavm.config.isinit};
    mimeTypeArray = Object.setPrototypeOf(mimeTypeArray,bodavm.memory.globalobj['MimeTypeArray'].prototype);
    bodavm.toolsFunc.setProtoAttr.call(mimeTypeArray, "length", 0);
    return mimeTypeArray;
}
// 添加MimeType
bodavm.toolsFunc.addMimeType = function addMimeType(mimeType){

    let mimeTypeArray = bodavm.memory.globalInit.mimeTypeArray;
    if(mimeTypeArray === undefined){
        mimeTypeArray = bodavm.toolsFunc.createMimeTypeArray();
    }
    Object.defineProperty(mimeTypeArray,bodavm.memory.symbolProperty,{
        value:1,
        enumerable:false,
        writable:false,
        configurable:false
    },'bobo')
    let index = mimeTypeArray.length;
    let flag = true;
    for(let i=0;i<index;i++){
        if(mimeTypeArray[i].type === mimeType.type){
            flag = false;
        }
    }
    if(flag){
        mimeTypeArray[index] = mimeType;

        Object.defineProperty(mimeTypeArray, mimeType.type, {value: mimeType, writable: false, enumerable: false, configurable: true},'bobo');
     
        bodavm.toolsFunc.setProtoAttr.call(mimeTypeArray, "length", index+1);
    }
    bodavm.memory.globalInit.mimeTypeArray = mimeTypeArray;
    return mimeTypeArray;
}

// 创建MimeType
bodavm.toolsFunc.createMimeType = function createMimeType(mimeTypeJson, plugin){
    // 
    let mimeType = { _boisinit:bodavm.config.isinit};
    Object.setPrototypeOf(mimeType, bodavm.memory.globalobj['MimeType'].prototype);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "description", mimeTypeJson.description);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "suffixes", mimeTypeJson.suffixes);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "type", mimeTypeJson.type);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "enabledPlugin", plugin);
    bodavm.toolsFunc.addMimeType(mimeType);
    return mimeType;
}

// 创建plugin
bodavm.toolsPlugin.createPlugin = function createPlugin(data){
    // debugger
    let mimeTypes = data.mimeTypes;
    let plugin = { _boisinit:bodavm.config.isinit};
   
    plugin = Object.setPrototypeOf(plugin, bodavm.memory.globalobj['Plugin'].prototype);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "description", data.description);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "filename", data.filename);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "name", data.name);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "length", mimeTypes.length);
    for(let i=0; i<mimeTypes.length; i++){
        let mimeType = bodavm.toolsFunc.createMimeType(mimeTypes[i], plugin);
        plugin[i] = mimeType;
        Object.defineProperty(plugin, mimeTypes[i].type, {value: mimeType, writable: false, enumerable: false, configurable: true});
       
    }
    bodavm.toolsFunc.addPlugin(plugin);
    return plugin;
}

}()


