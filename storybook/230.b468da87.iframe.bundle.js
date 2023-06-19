"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[230],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/Input.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Input=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Input,_Container);var _super=_createSuper(Input);function Input(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Input),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"editing",!1),_defineProperty(_assertThisInitialized(_this),"tick",0),_defineProperty(_assertThisInitialized(_this),"activation",!1),_defineProperty(_assertThisInitialized(_this),"paddingTop",0),_defineProperty(_assertThisInitialized(_this),"paddingRight",0),_defineProperty(_assertThisInitialized(_this),"paddingBottom",0),_defineProperty(_assertThisInitialized(_this),"paddingLeft",0),_this.options=options,_this.padding=options.padding,_this.cursor="text",_this.interactive=!0,_this.on("pointertap",(function(){_this.activation=!0,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any&&_this.handleActivation()})),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any?window.addEventListener("touchstart",(function(){return _this.handleActivation()})):_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any||(window.addEventListener("click",(function(){return _this.handleActivation()})),window.addEventListener("keydown",(function(e){var key=e.key;"Backspace"===key?_this._delete():"Escape"===key||"Enter"===key?_this.stopEditing():1===key.length&&_this._add(key)}))),_this.onEnter=new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ,_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.vB.shared.add((function(delta){return _this.update(delta)})),options.bg?_this.bg=options.bg:console.error("Input: bg is not defined, please define it."),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Input,[{key:"init",value:function init(){var _options$textStyle,_options$value,options=this.options,defaultTextStyle={fill:0,align:"center"},textStyle=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.pn(null!==(_options$textStyle=options.textStyle)&&void 0!==_options$textStyle?_options$textStyle:defaultTextStyle);this.inputField=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv("",textStyle),this._cursor=new _pixi_sprite__WEBPACK_IMPORTED_MODULE_3__.j(_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.WHITE),this._cursor.tint=Number(options.textStyle.fill)||0,this._cursor.anchor.set(.5),this._cursor.width=2,this._cursor.height=.8*this.inputField.height,this._cursor.alpha=0,this.placeholder=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv(options.placeholder,null!=textStyle?textStyle:defaultTextStyle),this.placeholder.visible=!!options.placeholder,this.addChild(this.inputField,this.placeholder,this._cursor),this.value=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:"",this.align()}},{key:"bg",get:function get(){return this._bg},set:function set(bg){this._bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__.X)(bg),this._bg.cursor="text",this._bg.interactive=!0,this._bg.parent||this.addChild(this._bg),this.inputField||this.init(),this.inputMask=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.TC).beginFill(16777215).drawRect(this.paddingLeft,this.paddingTop,this._bg.width-this.paddingRight-this.paddingLeft,this._bg.height-this.paddingBottom-this.paddingTop),this.inputField.mask=this.inputMask,this._cursor.mask=this.inputMask,this.inputMask.parent||this.addChild(this.inputMask)}},{key:"_add",value:function _add(key){this.editing&&(this.options.maxLength&&this.value.length>=this.options.maxLength||(this.value=this.value+key,this.onChange.emit(this.value)))}},{key:"_delete",value:function _delete(){if(this.editing&&0!==this.value.length){var array=this.value.split("");array.pop(),this.value=array.join(""),this.onChange.emit(this.value)}}},{key:"_startEditing",value:function _startEditing(){var _this2=this;this.tick=0,this.editing=!0,this.placeholder.visible=!1,this._cursor.alpha=1,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any&&(this._keyboard=document.createElement("input"),document.body.appendChild(this._keyboard),this._keyboard.style.position="fixed",this._keyboard.style.left="-1000px",this._keyboard.oninput=function(){var value=_this2._keyboard.value,maxLength=_this2.options.maxLength;maxLength&&value.length>_this2.options.maxLength&&(value=value.substring(0,maxLength),_this2._keyboard.value=value),_this2.value=value,_this2.onChange.emit(_this2.value)},this._keyboard.focus(),this._keyboard.click(),this._keyboard.value=this.value),this.align()}},{key:"handleActivation",value:function handleActivation(){this.stopEditing(),this.activation&&(this._startEditing(),this.activation=!1)}},{key:"stopEditing",value:function stopEditing(){if(this.editing){var _this$_keyboard,_this$_keyboard2;if(this._cursor.alpha=0,this.editing=!1,""===this.inputField.text&&(this.placeholder.visible=!0),0===this.value.length&&(this.placeholder.visible=!0),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any)null===(_this$_keyboard=this._keyboard)||void 0===_this$_keyboard||_this$_keyboard.blur(),null===(_this$_keyboard2=this._keyboard)||void 0===_this$_keyboard2||_this$_keyboard2.remove(),this._keyboard=null;this.align(),this.onEnter.emit(this.value)}}},{key:"update",value:function update(dt){this.editing&&(this.tick+=.1*dt,this._cursor.alpha=Math.round(.5*Math.sin(this.tick)+.5))}},{key:"align",value:function align(){if(this._bg){var align=this.getAlign();this.inputField.anchor.set(align,.5),this.inputField.x=this._bg.width*align+(1===align?-this.paddingRight:this.paddingLeft),this.inputField.y=this._bg.height/2+this.paddingTop-this.paddingBottom,this.placeholder.anchor.set(align,.5),this.placeholder.x=this._bg.width*align+(1===align?-this.paddingRight:this.paddingLeft),this.placeholder.y=this._bg.height/2,this._cursor.x=this.getCursorPosX(),this._cursor.y=this.inputField.y}}},{key:"getAlign",value:function getAlign(){var maxWidth=.95*this._bg.width,paddings=this.paddingLeft+this.paddingRight-10;if(this.inputField.width+paddings>maxWidth)return this.editing?1:0;switch(this.options.align){case"left":default:return 0;case"center":return.5;case"right":return 1}}},{key:"getCursorPosX",value:function getCursorPosX(){switch(this.getAlign()){case 0:return this.inputField.x+this.inputField.width;case.5:return this.inputField.x+.5*this.inputField.width;case 1:return this.inputField.x;default:return 0}}},{key:"value",get:function get(){return this.inputField.text},set:function set(text){this.inputField.text=text,0!==text.length?this.placeholder.visible=!1:this.placeholder.visible=!this.editing,this.align()}},{key:"padding",get:function get(){return[this.paddingTop,this.paddingRight,this.paddingBottom,this.paddingLeft]},set:function set(value){var _value$,_ref,_value$2,_ref2,_value$3,_ref3,_ref4,_value$4;if("number"==typeof value&&(this.paddingTop=value,this.paddingRight=value,this.paddingBottom=value,this.paddingLeft=value),Array.isArray(value))this.paddingTop=null!==(_value$=value[0])&&void 0!==_value$?_value$:0,this.paddingRight=null!==(_ref=null!==(_value$2=value[1])&&void 0!==_value$2?_value$2:value[0])&&void 0!==_ref?_ref:0,this.paddingBottom=null!==(_ref2=null!==(_value$3=value[2])&&void 0!==_value$3?_value$3:value[0])&&void 0!==_ref2?_ref2:0,this.paddingLeft=null!==(_ref3=null!==(_ref4=null!==(_value$4=value[3])&&void 0!==_value$4?_value$4:value[1])&&void 0!==_ref4?_ref4:value[0])&&void 0!==_ref3?_ref3:0;else if("object"===_typeof(value)){var _value$top,_value$right,_value$bottom,_value$left;this.paddingTop=null!==(_value$top=value.top)&&void 0!==_value$top?_value$top:0,this.paddingRight=null!==(_value$right=value.right)&&void 0!==_value$right?_value$right:0,this.paddingBottom=null!==(_value$bottom=value.bottom)&&void 0!==_value$bottom?_value$bottom:0,this.paddingLeft=null!==(_value$left=value.left)&&void 0!==_value$left?_value$left:0}}}]),Input}(_pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2)},"./src/List.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.d(__webpack_exports__,{a:()=>List});var List=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(List,_Container);var _super=_createSuper(List);function List(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,List),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"children",[]),options&&_this.init(options),_this.on("added",(function(){return _this.arrangeChildren()})),_this.on("childAdded",(function(){return _this.arrangeChildren()})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(List,[{key:"init",value:function init(options){var _this2=this;this.options=options,null!=options&&options.type&&(this.type=options.type),null!=options&&options.children&&options.children.forEach((function(child){return _this2.addChild(child)}))}},{key:"type",get:function get(){return this._type},set:function set(type){this._type=type,this.arrangeChildren()}},{key:"elementsMargin",get:function get(){return this.options.elementsMargin},set:function set(margin){this.options.elementsMargin=margin,this.arrangeChildren()}},{key:"vertPadding",get:function get(){return this.options.vertPadding},set:function set(padding){this.options.vertPadding=padding,this.arrangeChildren()}},{key:"horPadding",get:function get(){return this.options.horPadding},set:function set(padding){this.options.horPadding=padding,this.arrangeChildren()}},{key:"arrangeChildren",value:function arrangeChildren(){var _this$options$horPadd,_this$options,_this$options$vertPad,_this$options2,_this$options$element,_this$options3,_this$parent,_this$options4,_this3=this,x=null!==(_this$options$horPadd=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:0,y=null!==(_this$options$vertPad=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:0,elementsMargin=null!==(_this$options$element=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0,maxWidth=null===(_this$parent=this.parent)||void 0===_this$parent?void 0:_this$parent.width;null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.horPadding&&(maxWidth-=this.options.horPadding),this.children.forEach((function(child,id){switch(_this3.type){case"vertical":child.y=y,child.x=x,y+=elementsMargin+child.height;break;case"horizontal":child.x=x,child.y=y,x+=elementsMargin+child.width;break;default:var _this3$options$horPad,_this3$options;if(child.x=x,child.y=y,child.x+child.width>=maxWidth&&id>0)y+=elementsMargin+child.height,x=null!==(_this3$options$horPad=null===(_this3$options=_this3.options)||void 0===_this3$options?void 0:_this3$options.horPadding)&&void 0!==_this3$options$horPad?_this3$options$horPad:0,child.x=x,child.y=y;x+=elementsMargin+child.width}}))}}]),List}(__webpack_require__("./node_modules/@pixi/display/lib/index.mjs").W2)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:0!==args[key]&&args[key]<1?exportArgTypes[key]={control:{type:"range",min:0,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:0!==args[key]&&args[key]>-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>getView});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function getView(view){return"string"==typeof view?_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j.from(view):view}},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.MZ=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"MZ",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);