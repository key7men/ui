(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[202],{"./node_modules/@storybook/addon-actions/dist/chunk-3CDXZIO2.mjs":(module,__unused_webpack_exports,__webpack_require__)=>{(module=__webpack_require__.nmd(module))&&module.hot},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_WLCP77WC_action});__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-3CDXZIO2.mjs");var v4=__webpack_require__("./node_modules/uuid-browser/v4.js"),v4_default=__webpack_require__.n(v4),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),chunk_WLCP77WC_config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if(e=a,Boolean("object"==typeof e&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function chunk_WLCP77WC_action(name,options={}){let actionOptions={...chunk_WLCP77WC_config,...options},handler=function(...args){let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=v4_default()(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/Input.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Input=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Input,_Container);var _super=_createSuper(Input);function Input(options){var _options$textStyle,_options$value,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Input),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"editing",!1),_defineProperty(_assertThisInitialized(_this),"tick",0),_defineProperty(_assertThisInitialized(_this),"activation",!1),_this.options=options,_this.bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__.X)(options.bg),_this.bg.cursor="text",_this.bg.interactive=!0;var defaultTextStyle={fill:0,align:"center"},textStyle=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.pn(null!==(_options$textStyle=options.textStyle)&&void 0!==_options$textStyle?_options$textStyle:defaultTextStyle);if(_this.inputField=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv("",textStyle),_this.inputMask=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.TC).beginFill(16777215).drawRect(_this.padding,_this.padding,_this.bg.width-2*_this.padding,_this.bg.height-2*_this.padding),_this._cursor=new _pixi_sprite__WEBPACK_IMPORTED_MODULE_3__.j(_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.WHITE),_this._cursor.tint=Number(options.textStyle.fill)||0,_this._cursor.anchor.set(.5),_this._cursor.width=2,_this._cursor.height=.8*_this.inputField.height,_this._cursor.alpha=0,_this.inputField.mask=_this.inputMask,_this._cursor.mask=_this.inputMask,_this.placeholder=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv(options.placeholder,null!=textStyle?textStyle:defaultTextStyle),_this.placeholder.visible=!!options.placeholder,_this.value=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:"",_this.addChild(_this.bg,_this.inputField,_this.placeholder,_this._cursor,_this.inputMask),_this.align(),_this.cursor="text",_this.interactive=!0,_this.on("pointertap",(function(){return _this.activation=!0})),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any){window.addEventListener("touchstart",(function(){return _this.handleActivation()}));var keyboard=document.getElementById("v-keyboard");keyboard||(keyboard=document.createElement("input"),document.body.appendChild(keyboard),keyboard.setAttribute("id","v-keyboard"),keyboard.style.opacity="0"),keyboard.oninput=function(){var value=keyboard.value,maxLength=_this.options.maxLength;maxLength&&value.length>_this.options.maxLength&&(value=value.substring(0,maxLength),keyboard.value=value),_this.value=value,_this.onChange.emit(_this.value)}}else window.addEventListener("click",(function(){_this.handleActivation(),_this.onEnter.emit(_this.value)})),window.addEventListener("keydown",(function(e){var key=e.key;"Backspace"===key?_this._delete():"Escape"===key||"Enter"===key?(_this.stopEditing(),_this.onEnter.emit(_this.value)):1===key.length&&_this._add(key)}));return _this.onEnter=new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ,_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Input,[{key:"_add",value:function _add(key){this.editing&&(this.options.maxLength&&this.value.length>=this.options.maxLength||(this.value=this.value+key,this.onChange.emit(this.value)))}},{key:"_delete",value:function _delete(){if(this.editing&&0!==this.value.length){var array=this.value.split("");array.pop(),this.value=array.join(""),this.onChange.emit(this.value)}}},{key:"_startEditing",value:function _startEditing(){if(this.tick=0,this.editing=!0,this.placeholder.visible=!1,this._cursor.alpha=1,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any){var keyboard=document.getElementById("v-keyboard");keyboard.focus(),keyboard.click(),keyboard.value=this.value}this.align()}},{key:"handleActivation",value:function handleActivation(){this.stopEditing(),this.activation&&(this._startEditing(),this.activation=!1)}},{key:"stopEditing",value:function stopEditing(){var _document$getElementB;this._cursor.alpha=0,this.editing=!1,""===this.inputField.text&&(this.placeholder.visible=!0),0===this.value.length&&(this.placeholder.visible=!0),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any&&(null===(_document$getElementB=document.getElementById("v-keyboard"))||void 0===_document$getElementB||_document$getElementB.blur()),this.align()}},{key:"update",value:function update(dt){this.editing&&(this.tick+=.1*dt,this._cursor.alpha=Math.round(.5*Math.sin(this.tick)+.5))}},{key:"align",value:function align(){var align=this.getAlign();this.inputField.anchor.set(align,.5),this.inputField.x=this.bg.width*align+(1===align?-this.padding:this.padding),this.inputField.y=this.bg.height/2,this.placeholder.anchor.set(align,.5),this.placeholder.x=this.bg.width*align+(1===align?-this.padding:this.padding),this.placeholder.y=this.bg.height/2,this._cursor.x=this.getCursorPosX(),this._cursor.y=this.inputField.y}},{key:"padding",get:function get(){return 0|this.options.padding}},{key:"getAlign",value:function getAlign(){var maxWidth=.95*this.bg.width;if(this.inputField.width+3*this.padding>maxWidth)return this.editing?1:0;switch(this.options.align){case"left":default:return 0;case"center":return.5;case"right":return 1}}},{key:"getCursorPosX",value:function getCursorPosX(){switch(this.getAlign()){case 0:return this.inputField.x+this.inputField.width;case.5:return this.inputField.x+.5*this.inputField.width;case 1:return this.inputField.x;default:return 0}}},{key:"value",get:function get(){return this.inputField.text},set:function set(text){this.inputField.text=text,0!==text.length?this.placeholder.visible=!1:this.placeholder.visible=!this.editing,this.align()}}]),Input}(_pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2)},"./src/Layout.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.d(__webpack_exports__,{Ar:()=>Layout});var Layout=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Layout,_Container);var _super=_createSuper(Layout);function Layout(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Layout),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"children",[]),_this.options=options,null!=options&&options.type&&(_this.type=options.type),null!=options&&options.children&&options.children.map((function(child){return _this.addChild(child)})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Layout,[{key:"onChildrenChange",value:function onChildrenChange(){var _this$options$horPadd,_this$options,_this$options$vertPad,_this$options2,_this$options$element,_this$options3,_this2=this,x=null!==(_this$options$horPadd=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:0,y=null!==(_this$options$vertPad=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:0,elementsMargin=null!==(_this$options$element=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0;this.children.forEach((function(child){var _this2$options$horPad,_this2$options;!_this2.type&&x+child.width>=_this2.parent.width?(y+=elementsMargin+child.height,x=null!==(_this2$options$horPad=null===(_this2$options=_this2.options)||void 0===_this2$options?void 0:_this2$options.horPadding)&&void 0!==_this2$options$horPad?_this2$options$horPad:0,child.x=x,child.y=y,_this2.h=y):(child.x=x,child.y=y);switch(_this2.type){case"horizontal":x+=elementsMargin+child.width,_this2.w=x,_this2.h=child.height;break;case"vertical":y+=elementsMargin+child.height,_this2.h=y,_this2.w=child.width;break;default:x+=elementsMargin+child.width,_this2.w=x}}))}}]),Layout}(__webpack_require__("./node_modules/@pixi/display/lib/index.mjs").W2)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},count:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:0!==args[key]&&args[key]<1?exportArgTypes[key]={control:{type:"range",min:0,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:0!==args[key]&&args[key]>-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>defaultTextStyle});var defaultTextStyle=new(__webpack_require__("./node_modules/@pixi/text/lib/index.mjs").pn)({fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:!0,dropShadowAlpha:.5,dropShadowDistance:0,dropShadowBlur:3})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>getView});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function getView(view){return"string"==typeof view?_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j.from(view):view}},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.MZ=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"MZ",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);