"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[17],{"./src/stories/fancyButton/FancyButtonGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),_FancyButton__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/FancyButton.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/loader.ts"),_pixi_display__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_MaskedFrame__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/MaskedFrame.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/color.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={text:"Click me!",textColor:"#FFFFFF",color:"#A5E24D",hoverColor:"#FEC230",pressedColor:"#FE6048",disabledColor:"#6E6E6E",width:350,height:350,padding:11,radius:50,iconOffsetX:0,iconOffsetY:-30,textOffsetX:0,textOffsetY:140,defaultOffsetY:0,hoverOffsetY:-1,pressedOffsetY:5,disabledOffsetY:0,anchorX:.5,anchorY:.5,animationDuration:100,disabled:!1,action:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("Button")},UseGraphics=function UseGraphics(_ref){var width=_ref.width,height=_ref.height,radius=_ref.radius,text=_ref.text,color=_ref.color,hoverColor=_ref.hoverColor,pressedColor=_ref.pressedColor,disabledColor=_ref.disabledColor,disabled=_ref.disabled,padding=_ref.padding,anchorX=_ref.anchorX,anchorY=_ref.anchorY,textColor=_ref.textColor,iconOffsetX=_ref.iconOffsetX,iconOffsetY=_ref.iconOffsetY,textOffsetX=_ref.textOffsetX,textOffsetY=_ref.textOffsetY,defaultOffsetY=_ref.defaultOffsetY,hoverOffsetY=_ref.hoverOffsetY,pressedOffsetY=_ref.pressedOffsetY,disabledOffsetY=_ref.disabledOffsetY,animationDuration=_ref.animationDuration,action=_ref.action;color=(0,_utils_color__WEBPACK_IMPORTED_MODULE_5__.Lq)(color),hoverColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_5__.Lq)(hoverColor),pressedColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_5__.Lq)(pressedColor),disabledColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_5__.Lq)(disabledColor);var view=new _pixi_display__WEBPACK_IMPORTED_MODULE_3__.W2;return(0,_utils_loader__WEBPACK_IMPORTED_MODULE_6__.M)(["avatar-01.png"]).then((function(){var fill=(0,_utils_color__WEBPACK_IMPORTED_MODULE_5__.Lq)(textColor),target=_pixi_sprite__WEBPACK_IMPORTED_MODULE_4__.j.from("avatar-01.png"),icon=new _MaskedFrame__WEBPACK_IMPORTED_MODULE_7__.O({target,mask:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(0).drawCircle(target.width/2,target.height/2,target.width/2),borderWidth:10,borderColor:fill}),button=new _FancyButton__WEBPACK_IMPORTED_MODULE_8__.s({defaultView:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(color).drawRoundedRect(0,0,width,height,radius),hoverView:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(hoverColor).drawRoundedRect(0,0,width,height,radius),pressedView:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(pressedColor).drawRoundedRect(0,0,width,height,radius),disabledView:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(disabledColor).drawRoundedRect(0,0,width,height,radius),icon,text:new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.xv(text,_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_9__.B),{},{fill})),padding,offset:{default:{y:defaultOffsetY},hover:{y:hoverOffsetY},pressed:{y:pressedOffsetY},disabled:{y:disabledOffsetY}},textOffset:{x:textOffsetX,y:textOffsetY},iconOffset:{x:iconOffsetX,y:iconOffsetY},animations:{default:{props:{scale:{x:1,y:1},y:defaultOffsetY},duration:animationDuration},hover:{props:{scale:{x:1.03,y:1.03},y:hoverOffsetY},duration:animationDuration},pressed:{props:{scale:{x:.9,y:.9},y:pressedOffsetY},duration:animationDuration}}});disabled&&(button.enabled=!1),button.anchor.set(anchorX,anchorY),button.onPress.connect((function(){return action("onPress")})),button.onDown.connect((function(){return action("onDown")})),button.onUp.connect((function(){return action("onUp")})),button.onHover.connect((function(){return action("onHover")})),button.onOut.connect((function(){return action("onOut")})),button.onUpOut.connect((function(){return action("onUpOut")})),view.addChild(button),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_10__.C)(view)})),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_10__.C)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from '@pixi/graphics';\nimport { Text } from '@pixi/text';\nimport { FancyButton } from '../../FancyButton';\nimport { action } from '@storybook/addon-actions';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { centerView } from '../../utils/helpers/resize';\nimport { preload } from '../utils/loader';\nimport { Container } from '@pixi/display';\nimport { Sprite } from '@pixi/sprite';\nimport { MaskedFrame } from '../../MaskedFrame';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    text: 'Click me!',\n    textColor: '#FFFFFF',\n    color: '#A5E24D',\n    hoverColor: '#FEC230',\n    pressedColor: '#FE6048',\n    disabledColor: '#6E6E6E',\n    width: 350,\n    height: 350,\n    padding: 11,\n    radius: 50,\n    iconOffsetX: 0,\n    iconOffsetY: -30,\n    textOffsetX: 0,\n    textOffsetY: 140,\n    defaultOffsetY: 0,\n    hoverOffsetY: -1,\n    pressedOffsetY: 5,\n    disabledOffsetY: 0,\n    anchorX: 0.5,\n    anchorY: 0.5,\n    animationDuration: 100,\n    disabled: false,\n    action: action('Button')\n};\n\nexport const UseGraphics = ({\n    width,\n    height,\n    radius,\n    text,\n    color,\n    hoverColor,\n    pressedColor,\n    disabledColor,\n    disabled,\n    padding,\n    anchorX,\n    anchorY,\n    textColor,\n    iconOffsetX,\n    iconOffsetY,\n    textOffsetX,\n    textOffsetY,\n    defaultOffsetY,\n    hoverOffsetY,\n    pressedOffsetY,\n    disabledOffsetY,\n    animationDuration,\n    action\n}: any) =>\n{\n    color = getColor(color);\n    hoverColor = getColor(hoverColor);\n    pressedColor = getColor(pressedColor);\n    disabledColor = getColor(disabledColor);\n\n    const view = new Container();\n\n    const assets = [`avatar-01.png`];\n\n    preload(assets).then(() =>\n    {\n        const fill = getColor(textColor);\n        const target = Sprite.from(`avatar-01.png`);\n\n        // Component usage !!!\n        const icon = new MaskedFrame({\n            target,\n            mask: new Graphics().beginFill(0x000000).drawCircle(target.width / 2, target.height / 2, target.width / 2),\n            borderWidth: 10,\n            borderColor: fill\n        });\n\n        // Component usage !!!\n        const button = new FancyButton({\n            defaultView: new Graphics().beginFill(color).drawRoundedRect(0, 0, width, height, radius),\n            hoverView: new Graphics().beginFill(hoverColor).drawRoundedRect(0, 0, width, height, radius),\n            pressedView: new Graphics().beginFill(pressedColor).drawRoundedRect(0, 0, width, height, radius),\n            disabledView: new Graphics().beginFill(disabledColor).drawRoundedRect(0, 0, width, height, radius),\n            icon,\n            text: new Text(text, {\n                ...defaultTextStyle,\n                fill\n            }),\n            padding,\n            offset: {\n                default: { y: defaultOffsetY },\n                hover: { y: hoverOffsetY },\n                pressed: { y: pressedOffsetY },\n                disabled: { y: disabledOffsetY }\n            },\n            textOffset: {\n                x: textOffsetX,\n                y: textOffsetY\n            },\n            iconOffset: {\n                x: iconOffsetX,\n                y: iconOffsetY\n            },\n            animations: {\n                default: {\n                    props: {\n                        scale: { x: 1, y: 1 },\n                        y: defaultOffsetY\n                    },\n                    duration: animationDuration\n                },\n                hover: {\n                    props: {\n                        scale: { x: 1.03, y: 1.03 },\n                        y: hoverOffsetY\n                    },\n                    duration: animationDuration\n                },\n                pressed: {\n                    props: {\n                        scale: { x: 0.9, y: 0.9 },\n                        y: pressedOffsetY\n                    },\n                    duration: animationDuration\n                }\n            }\n        });\n\n        if (disabled)\n        {\n            button.enabled = false;\n        }\n\n        button.anchor.set(anchorX, anchorY);\n\n        button.onPress.connect(() => action('onPress'));\n        button.onDown.connect(() => action('onDown'));\n        button.onUp.connect(() => action('onUp'));\n        button.onHover.connect(() => action('onHover'));\n        button.onOut.connect(() => action('onOut'));\n        button.onUpOut.connect(() => action('onUpOut'));\n\n        view.addChild(button);\n\n        centerView(view);\n    });\n\n    return { view, resize: () => centerView(view) };\n};\n\nexport default {\n    title: 'Components/FancyButton/Use Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-graphics":{startLoc:{col:27,line:40},endLoc:{col:1,line:159},startBody:{col:27,line:40},endBody:{col:1,line:159}}}}},title:"Components/FancyButton/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_11__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_11__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>defaultTextStyle});var defaultTextStyle=new(__webpack_require__("./node_modules/@pixi/text/lib/index.mjs").pn)({fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:!0,dropShadowAlpha:.5,dropShadowDistance:0,dropShadowBlur:3})}}]);