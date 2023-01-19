"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[98],{"./src/stories/radio/RadioGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _RadioGroup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/RadioGroup.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={text:"Radio",textColor:"#FFFFFF",bgColor:"#F1D583",fillColor:"#82C822",width:50,height:50,padding:5,radius:25,count:3,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Radio changed")},UseGraphics=function UseGraphics(_ref){var count=_ref.count,text=_ref.text,textColor=_ref.textColor,fillColor=_ref.fillColor,bgColor=_ref.bgColor,width=_ref.width,height=_ref.height,padding=_ref.padding,radius=_ref.radius,onChange=_ref.onChange,view=new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2;bgColor=bgColor.replace("#","0x"),fillColor=fillColor.replace("#","0x");for(var items=[],i=0;i<count;i++)items.push("".concat(text," ").concat(i+1));var radioGroup=new _RadioGroup__WEBPACK_IMPORTED_MODULE_2__.E({selectedItem:0,items,type:"vertical",elementsMargin:10,style:{bg:{color:bgColor,width,height,padding,radius},checked:{color:bgColor,fillColor,width,height,padding,radius},textStyle:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_3__.B),{},{fontSize:22,fill:textColor})}});return radioGroup.onChange.connect((function(selectedItemID,selectedVal){return onChange(selectedItemID,selectedVal)})),view.addChild(radioGroup.view),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { RadioGroup } from '../../RadioGroup';\nimport { action } from '@storybook/addon-actions';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { Container } from '@pixi/display';\n\nconst args = {\n    text: 'Radio',\n    textColor: '#FFFFFF',\n    bgColor: '#F1D583',\n    fillColor: '#82C822',\n    width: 50,\n    height: 50,\n    padding: 5,\n    radius: 25,\n    count: 3,\n\n    onChange: action('Radio changed'),\n};\n\nexport const UseGraphics = ({\n    count,\n    text,\n\n    textColor,\n    fillColor,\n    bgColor,\n\n    width,\n    height,\n    padding,\n    radius,\n\n    onChange,\n}: any) =>\n{\n    const view = new Container();\n\n    bgColor = bgColor.replace('#', '0x');\n    fillColor = fillColor.replace('#', '0x');\n\n    const items = [];\n\n    for (let i = 0; i < count; i++)\n    {\n        items.push(`${text} ${i + 1}`);\n    }\n\n    // Component usage\n    const radioGroup = new RadioGroup({\n        selectedItem: 0,\n        items,\n        type: 'vertical',\n        elementsMargin: 10,\n        style: {\n            bg: {\n                color: bgColor,\n                width,\n                height,\n                padding,\n                radius,\n            },\n            checked: {\n                color: bgColor,\n                fillColor,\n                width,\n                height,\n                padding,\n                radius,\n            },\n            textStyle: {\n                ...defaultTextStyle,\n                fontSize: 22,\n                fill: textColor,\n            },\n        },\n    });\n\n    radioGroup.onChange.connect((selectedItemID: number, selectedVal: string) =>\n        onChange(selectedItemID, selectedVal),\n    );\n\n    view.addChild(radioGroup.view);\n\n    return { view, resize: () => centerElement(view) };\n};\n\nexport default {\n    title: 'Components/RadioGroup/Use Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{"use-graphics":{startLoc:{col:27,line:22},endLoc:{col:1,line:87},startBody:{col:27,line:22},endBody:{col:1,line:87}}}}},title:"Components/RadioGroup/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/RadioGroup.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_CheckBox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/CheckBox.ts"),_Layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Layout.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var RadioGroup=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(RadioGroup,_Container);var _super=_createSuper(RadioGroup);function RadioGroup(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadioGroup),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"items",[]),_this.options=options,_this.value=options.items[options.selectedItem],_this.selected=options.selectedItem,_this.view=new _Layout__WEBPACK_IMPORTED_MODULE_4__.Ar({type:options.type,elementsMargin:options.elementsMargin}),options.items.forEach((function(item,id){var unchecked="string"==typeof options.style.bg?_pixi_sprite__WEBPACK_IMPORTED_MODULE_2__.j.from(options.style.bg):_this.getGraphics(options.style.bg),checked="string"==typeof options.style.checked?_pixi_sprite__WEBPACK_IMPORTED_MODULE_2__.j.from(options.style.checked):_this.getGraphics(options.style.checked),checkBox=new _CheckBox__WEBPACK_IMPORTED_MODULE_5__.J({text:item,checked:options.selectedItem===id,style:{unchecked,checked,text:options.style.textStyle}});_this.view.addChild(checkBox),checkBox.onChange.connect((function(){return _this.selectItem(id)})),_this.items.push(checkBox),_this.view.addChild(checkBox)})),_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_3__.MZ,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(RadioGroup,[{key:"getGraphics",value:function getGraphics(_ref){var color=_ref.color,fillColor=_ref.fillColor,width=_ref.width,height=_ref.height,radius=_ref.radius,padding=_ref.padding,graphics=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__.TC).beginFill(color),isCircle=width===height&&radius>=width/2;if(isCircle?graphics.drawCircle(width/2,width/2,width/2):graphics.drawRoundedRect(0,0,width,height,radius),void 0!==fillColor){graphics.beginFill(fillColor);var center=width/2;isCircle?graphics.drawCircle(center,center,center-padding):graphics.drawRoundedRect(padding,padding,width-2*padding,height-2*padding,radius)}return graphics}},{key:"selectItem",value:function selectItem(id){this.selected=id,this.items.map((function(item){return item.checked=!1})),this.items[id].checked=!0,this.value=this.options.items[this.selected],this.onChange.emit(this.selected,this.value)}}]),RadioGroup}(_pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2)}}]);