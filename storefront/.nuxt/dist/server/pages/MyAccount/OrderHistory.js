exports.ids = [9];
exports.modules = {

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("614069fe", content, true, context)
};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3fb0c45e", content, true, context)
};

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;overflow:hidden;width:auto!important;height:auto!important;z-index:0}.simplebar-mask,.simplebar-offset{position:absolute;padding:0;margin:0;left:0;top:0;bottom:0;right:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:\" \";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;z-index:-1}.simplebar-height-auto-observer,.simplebar-track{position:absolute;overflow:hidden;pointer-events:none}.simplebar-track{z-index:1;right:0;bottom:0}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:\"\";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-scrollable__content{max-height:5rem;max-height:var(--scrollable-max-height,var(--_scrollable-max-height,5rem))}.sf-scrollable__content .simplebar-scrollbar:before{width:4px;background:var(--c-gray-variant);border-radius:10px}.sf-scrollable.is-open{--scrollable-max-height:auto}.sf-scrollable__view-all{margin:var(--scrollable-button-margin,var(--spacer-sm) 0 0 0)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-tabs{display:flex;flex-wrap:wrap}.sf-tabs__title{z-index:var(--tabs-title-z-index);display:flex;display:var(--tabs-title-display,flex);box-sizing:border-box;flex:0 0 100%;flex:var(--tabs-title-flex,0 0 100%);justify-content:space-between;margin:var(--tabs-title-margin);padding:var(--tabs-title-padding,var(--spacer-sm));background:var(--tabs-title-background);border:var(--tabs-title-border,var(--tabs-title-border-style,solid) var(--tabs-title-border-color,var(--c-light)));border-width:0 0 1px;border-width:var(--tabs-title-border-width,0 0 1px 0);color:var(--tabs-title-color);transition:color .15s ease-in-out;font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--tabs-title-font,var(--tabs-title-font-weight,var(--font-weight--normal)) var(--tabs-title-font-size,var(--font-size--base))/var(--tabs-title-font-line-height,1.4) var(--tabs-title-font-family,var(--font-family--secondary)))}.sf-tabs__title.is-active{--tabs-title-border-width:0;--tabs-title-color:var(--c-primary);--chevron-color:var(--c-primary)}.sf-tabs__title.is-active+.sf-tabs__content{--tabs-content-border-width:var(--tabs-content-border-width,1px 0 0 0)}.sf-tabs__content{flex:0 0 100%;order:var(--tabs-content-order);border:var(--tabs-content-border,var(--tabs-content-border-style,solid) var(--tabs-content-border-color,var(--c-light)));border-width:0;border-width:var(--tabs-content-border-width,0);color:var(--c-text);color:var(--tabs-content-color,var(--c-text));font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--tabs-content-font,var(--tabs-content-font-weight,var(--font-weight--light)) var(--tabs-content-font-size,var(--font-size--base))/var(--tabs-content-font-line-height,1.6) var(--tabs-content-font-family,var(--font-family--primary)))}.sf-tabs__content__tab{padding:var(--tabs-content-tab-padding,var(--spacer-base) var(--spacer-sm))}.sf-tabs__chevron{display:var(--tabs-chevron-display)}@media (min-width:1024px){.sf-tabs{--tabs-title-z-index:1;--tabs-content-order:1;--tabs-title-flex:0 0 auto;--tabs-title-margin:0 var(--spacer-lg) -2px 0;--tabs-title-padding:var(--spacer-xs) 0;--tabs-title-color:var(--c-text-muted);--tabs-title-font-size:var(--h4-font-size);--tabs-content-tab-padding:var(--spacer-xl) 0;--tabs-chevron-display:none}.sf-tabs__title.is-active{--tabs-title-border-width:0 0 2px 0;--tabs-title-border-color:var(--c-text);--tabs-title-color:var(--c-text)}.sf-tabs__title.is-active+.sf-tabs__content{--tabs-content-border-width:2px 0 0 0}.sf-tabs__title:hover{--tabs-title-color:var(--c-text)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=5a2cd795&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-tabs"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=5a2cd795&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=c8b86136&
var SfTabvue_type_template_id_c8b86136_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Fragment',{staticClass:"sf-tabs__tab"},[_vm._t("title",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-tabs__title",class:{ 'is-active': _vm.isActive },attrs:{"aria-pressed":_vm.isActive.toString()},on:{"click":_vm.tabClick}},[_vm._v("\n      "+_vm._s(_vm.title)+"\n      "),_c('SfChevron',{staticClass:"sf-tabs__chevron",class:{ 'sf-chevron--right': !_vm.isActive }})],1)]},null,{ tabClick: _vm.tabClick, isActive: _vm.isActive, title: _vm.title }),_vm._v(" "),_c('div',{staticClass:"sf-tabs__content"},[(_vm.isActive)?_c('div',{staticClass:"sf-tabs__content__tab"},[(_vm.tabMaxContentHeight)?_c('SfScrollable',{attrs:{"max-content-height":_vm.tabMaxContentHeight,"show-text":_vm.tabShowText,"hide-text":_vm.tabHideText}},[_vm._t("default")],2):_vm._t("default")],2):_vm._e()])],2)}
var SfTabvue_type_template_id_c8b86136_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=c8b86136&

// EXTERNAL MODULE: external "vue-fragment"
var external_vue_fragment_ = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=6f6a7224&
var SfScrollablevue_type_template_id_6f6a7224_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-scrollable",class:{ 'is-open': !_vm.isHidden }},[_c('Simplebar',{ref:"content",staticClass:"sf-scrollable__content",style:(_vm.style)},[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("view-all",function(){return [_c('SfButton',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroll),expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{"click":function($event){_vm.isHidden = !_vm.isHidden}}},[(_vm.isHidden)?_c('span',[_vm._v(_vm._s(_vm.showText))]):_c('span',[_vm._v(_vm._s(_vm.hideText))])])]},null,{ hasScroll: _vm.hasScroll, showText: _vm.showText, hideText: _vm.hideText })],2)}
var SfScrollablevue_type_template_id_6f6a7224_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=6f6a7224&

// EXTERNAL MODULE: external "simplebar-vue"
var external_simplebar_vue_ = __webpack_require__(218);
var external_simplebar_vue_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfScrollablevue_type_script_lang_js_ = ({
  name: "SfScrollable",
  components: {
    Simplebar: external_simplebar_vue_default.a,
    SfButton: SfButton["a" /* default */]
  },
  props: {
    /*
     * Maximum height of visible content
     */
    maxContentHeight: {
      type: String,
      default: ""
    },

    /*
     * Text for button showing content
     */
    showText: {
      type: String,
      default: "Show"
    },

    /*
     * Text for button hiding content
     */
    hideText: {
      type: String,
      default: "Hide"
    }
  },

  data() {
    return {
      isHidden: true,
      hasScroll: false,
      contentEl: undefined
    };
  },

  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim() ? this.maxContentHeight : undefined
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(".simplebar-content");
      if (typeof MutationObserver === "undefined" || !this.contentEl) return;
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, {
        childList: true
      });
    });
  },

  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfScrollable_SfScrollablevue_type_script_lang_js_ = (SfScrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfScrollable_SfScrollablevue_type_script_lang_js_,
  SfScrollablevue_type_template_id_6f6a7224_render,
  SfScrollablevue_type_template_id_6f6a7224_staticRenderFns,
  false,
  injectStyles,
  null,
  "4e00b85c"
  
)

/* harmony default export */ var SfScrollable = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SfTabvue_type_script_lang_js_ = ({
  name: "SfTab",
  components: {
    Fragment: external_vue_fragment_["Fragment"],
    SfChevron: SfChevron["a" /* default */],
    SfScrollable: SfScrollable,
    SfButton: SfButton["a" /* default */]
  },
  inject: ["tabConfig"],
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isActive: false,
      desktopMin: 1024
    };
  },

  computed: {
    tabMaxContentHeight() {
      return this.tabConfig.tabMaxContentHeight;
    },

    tabShowText() {
      return this.tabConfig.tabShowText;
    },

    tabHideText() {
      return this.tabConfig.tabHideText;
    }

  },
  methods: {
    tabClick() {
      if (!check_environment["a" /* isClient */]) return;
      const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTabvue_type_script_lang_js_ = (SfTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab.vue





/* normalize component */

var SfTab_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTabvue_type_script_lang_js_,
  SfTabvue_type_template_id_c8b86136_render,
  SfTabvue_type_template_id_c8b86136_staticRenderFns,
  false,
  null,
  null,
  "ae76cf2c"
  
)

/* harmony default export */ var SfTab = (SfTab_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_vue_default.a.component("SfTab", SfTab);
/* harmony default export */ var SfTabsvue_type_script_lang_js_ = ({
  name: "SfTabs",
  props: {
    /** Which tab should be open at the beginning  */
    openTab: {
      type: Number,
      default: 1
    },

    /** Max height of visible content  */
    tabMaxContentHeight: {
      type: String,
      default: ""
    },

    /** Text for button showing content  */
    tabShowText: {
      type: String,
      default: "show"
    },

    /** Text for button hiding content  */
    tabHideText: {
      type: String,
      default: "hide"
    }
  },

  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },

  methods: {
    toggle(id) {
      this.$children.forEach(child => {
        child._uid === id ? child.isActive = !child.isActive : child.isActive = false;
      });
    },

    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
      }
    }

  },
  provide: function () {
    const tabConfig = {};
    Object.defineProperty(tabConfig, "tabMaxContentHeight", {
      get: () => this.tabMaxContentHeight
    });
    Object.defineProperty(tabConfig, "tabShowText", {
      get: () => this.tabShowText
    });
    Object.defineProperty(tabConfig, "tabHideText", {
      get: () => this.tabHideText
    });
    return {
      tabConfig
    };
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTabs_SfTabsvue_type_script_lang_js_ = (SfTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue



function SfTabs_injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTabs_component = Object(componentNormalizer["a" /* default */])(
  SfTabs_SfTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  SfTabs_injectStyles,
  null,
  "0040ee66"
  
)

/* harmony default export */ var SfTabs = __webpack_exports__["a"] = (SfTabs_component.exports);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("637d86f6", content, true, context)
};

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("79c5d107", content, true, context)
};

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-table{box-sizing:border-box;width:100%;width:var(--table-width,100%);border:none;border-spacing:0;border-spacing:var(--table-border-spacing,0)}.sf-table__heading,.sf-table__row{box-sizing:border-box;display:flex;flex-wrap:wrap}.sf-table__heading{align-items:center;padding:var(--table-heading-padding,var(--spacer-sm) 0);background-color:transparent;background-color:var(--table-heading-background,transparent);border:var(--table-border-heading,var(--table-border-heading-style,solid) var(--table-border-heading-color,var(--c-primary)));border-width:0 0 2px;border-width:var(--table-border-heading-width,0 0 2px 0)}.sf-table__header{font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--table-header-font,var(--table-header-font-weight,var(--font-weight--normal)) var(--table-header-font-size,var(--font-size--base))/var(--table-header-font-line-height,1.4) var(--table-header-font-family,var(--font-family--secondary)));color:var(--c-text);color:var(--table-header-color,var(--c-text))}.sf-table__row{padding:var(--table-row-padding,var(--spacer-xs) 0);background-color:var(--table-row-background);box-shadow:var(--table-row-box-shadow);border:var(--table-row-border,var(--table-row-border-style,solid) var(--table-row-border-color,var(--c-light)));border-width:0 0 2px;border-width:var(--table-row-border-width,0 0 2px 0)}.sf-table__data{color:var(--c-dark-variant);color:var(--table-data-color,var(--c-dark-variant));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--table-data-font,var(--table-data-font-weight,var(--font-weight--normal)) var(--table-data-font-size,var(--font-size--base))/var(--table-data-font-line-height,1.6) var(--table-data-font-family,var(--font-family--secondary)))}.sf-table__data,.sf-table__header{box-sizing:border-box;flex:0 0 calc(100%/var(--_table-column-width));flex:var(--table-column-flex,0 0 calc(100%/var(--_table-column-width)));padding:0;padding:var(--table-column-padding,0);text-align:left;text-align:var(--table-column-text-align,left)}.sf-table__data:nth-child(2n),.sf-table__header:nth-child(2n){order:1;order:var(--_table-column-order,1)}.sf-table--no-border{--table-row-border-width:0}@media (min-width:1024px){.sf-table{--table-row-padding:var(--spacer-sm) var(--spacer-sm);--table-heading-padding:var(--spacer-sm) var(--spacer-sm);--table-heading-background:transparent;--table-column-flex:1;--_table-column-order:0;--table-header-font-weight:var(--font-weight--normal)}.sf-table--no-border{--table-row-border-width:0}.sf-table__row:hover{--table-row-box-shadow:0px 4px 11px rgba(29,31,34,0.1)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_style_index_0_id_fc23adb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_style_index_0_id_fc23adb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_style_index_0_id_fc23adb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_style_index_0_id_fc23adb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_style_index_0_id_fc23adb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1024px){.smartphone-only[data-v-fc23adb8]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-fc23adb8]{display:none!important}}.no-orders__title[data-v-fc23adb8]{margin:0 0 var(--spacer-lg) 0;font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--primary)}.no-orders__button[data-v-fc23adb8]{--button-width:100%}@media (min-width:1024px){.no-orders__button[data-v-fc23adb8]{--button-width:17,5rem}}@media (min-width:1024px){.orders__element--right[data-v-fc23adb8]{--table-column-flex:0;text-align:right}}.all-orders[data-v-fc23adb8]{--button-padding:var(--spacer-base) 0}.message[data-v-fc23adb8]{margin:0 0 var(--spacer-xl) 0;font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary)}.message__link[data-v-fc23adb8]{color:var(--c-primary);font-weight:var(--font-weight--medium);font-family:var(--font-family--primary);font-size:var(--font-size--base);text-decoration:none}.message__link[data-v-fc23adb8]:hover{color:var(--c-text)}.product__properties[data-v-fc23adb8]{margin:var(--spacer-xl) 0 0 0}.product__action[data-v-fc23adb8],.product__property[data-v-fc23adb8]{font-size:var(--font-size--sm)}.product__action[data-v-fc23adb8]{color:var(--c-gray-variant);margin:0 0 var(--spacer-sm) 0}.product__action[data-v-fc23adb8]:last-child{margin:0}.product__qty[data-v-fc23adb8]{color:var(--c-text)}.products[data-v-fc23adb8]{--table-column-flex:1}.products__name[data-v-fc23adb8]{margin-right:var(--spacer-sm)}@media (min-width:1024px){.products__name[data-v-fc23adb8]{--table-column-flex:2}}.highlighted[data-v-fc23adb8]{box-sizing:border-box;width:100%;background-color:var(--c-light);padding:var(--spacer-sm);--property-value-font-size:var(--font-size--base);--property-name-font-size:var(--font-size--base)}.highlighted[data-v-fc23adb8]:last-child{margin-bottom:0}.highlighted[data-v-fc23adb8]  .sf-property__name{white-space:nowrap}.highlighted[data-v-fc23adb8]  .sf-property__value{text-align:right}.highlighted--total[data-v-fc23adb8]{margin-bottom:var(--spacer-sm)}@media (min-width:1024px){.highlighted[data-v-fc23adb8]{padding:var(--spacer-xl);--property-name-font-size:var(--font-size--lg);--property-name-font-weight:var(--font-weight--medium);--property-value-font-size:var(--font-size--lg);--property-value-font-weight:var(--font-weight--semibold)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/OrderHistory.vue?vue&type=template&id=fc23adb8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfTabs',{attrs:{"open-tab":1}},[_c('SfTab',{attrs:{"data-cy":"order-history-tab_my-orders","title":"My orders"}},[(_vm.currentOrder)?_c('div',[_c('SfButton',{staticClass:"sf-button--text all-orders",attrs:{"data-cy":"order-history-btn_orders"},on:{"click":function($event){_vm.currentOrder = null}}},[_vm._v("All Orders")]),_vm._v(" "),_c('div',{staticClass:"highlighted highlighted--total"},[_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Order ID","value":_vm.orderGetters.getId(_vm.currentOrder)}}),_vm._v(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Date","value":_vm.orderGetters.getDate(_vm.currentOrder)}}),_vm._v(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Status","value":_vm.orderGetters.getStatus(_vm.currentOrder)}}),_vm._v(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Subtotal","value":_vm.$n(_vm.orderGetters.getSubtotalPrice(_vm.currentOrder), 'currency')}}),_vm._v(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Tax","value":_vm.$n(_vm.orderGetters.getTaxPrice(_vm.currentOrder), 'currency')}}),_vm._v(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Total","value":_vm.$n(_vm.orderGetters.getPrice(_vm.currentOrder), 'currency')}}),_vm._v(" "),_c('SfProperty',{staticClass:"sf-property--full-width property",attrs:{"name":"Status","value":_vm.orderGetters.getPaymentStatus(_vm.currentOrder)}})],1),_vm._v(" "),_c('SfTable',{staticClass:"products"},[_c('SfTableHeading',[_c('SfTableHeader',{staticClass:"products__name"},[_vm._v(_vm._s(_vm.$t('Product')))]),_vm._v(" "),_c('SfTableHeader',[_vm._v(_vm._s(_vm.$t('Quantity')))]),_vm._v(" "),_c('SfTableHeader',[_vm._v(_vm._s(_vm.$t('Price')))])],1),_vm._v(" "),_vm._l((_vm.orderGetters.getItems(_vm.currentOrder)),function(item,i){return _c('SfTableRow',{key:i},[_c('SfTableData',{staticClass:"products__name"},[_c('nuxt-link',{attrs:{"to":'/p/'+_vm.orderGetters.getItemId(item)+'/'+_vm.orderGetters.getItemSlug(item)}},[_vm._v("\n              "+_vm._s(_vm.orderGetters.getItemName(item))+"\n            ")])],1),_vm._v(" "),_c('SfTableData',[_vm._v(_vm._s(_vm.orderGetters.getItemQty(item)))]),_vm._v(" "),_c('SfTableData',[_vm._v(_vm._s(_vm.$n(_vm.orderGetters.getItemPrice(item), 'currency')))])],1)})],2)],1):_c('div',[_c('p',{staticClass:"message"},[_vm._v("\n        "+_vm._s(_vm.$t('Details and status orders'))+"\n      ")]),_vm._v(" "),(_vm.orders.length === 0)?_c('div',{staticClass:"no-orders"},[_c('p',{staticClass:"no-orders__title"},[_vm._v(_vm._s(_vm.$t('You currently have no orders')))]),_vm._v(" "),_c('SfButton',{staticClass:"no-orders__button",attrs:{"data-cy":"order-history-btn_start"}},[_vm._v(_vm._s(_vm.$t('Start shopping')))])],1):_c('SfTable',{staticClass:"orders"},[_c('SfTableHeading',[_vm._l((_vm.tableHeaders),function(tableHeader){return _c('SfTableHeader',{key:tableHeader},[_vm._v(_vm._s(tableHeader))])}),_vm._v(" "),_c('SfTableHeader',{staticClass:"orders__element--right"},[_c('span',{staticClass:"smartphone-only"},[_vm._v(_vm._s(_vm.$t('Download')))]),_vm._v(" "),_c('SfButton',{staticClass:"desktop-only sf-button--text orders__download-all",attrs:{"data-cy":"order-history-btn_download-all"},on:{"click":function($event){return _vm.downloadOrders()}}},[_vm._v("\n              "+_vm._s(_vm.$t('Download all'))+"\n            ")])],1)],2),_vm._v(" "),_vm._l((_vm.orders.data),function(order){return _c('SfTableRow',{key:_vm.orderGetters.getId(order)},[_c('SfTableData',[_vm._v("#"+_vm._s(_vm.orderGetters.getId(order)))]),_vm._v(" "),_c('SfTableData',[_vm._v(_vm._s(_vm.orderGetters.getDate(order)))]),_vm._v(" "),_c('SfTableData',[_vm._v(_vm._s(_vm.$n(_vm.orderGetters.getPrice(order), 'currency')))]),_vm._v(" "),_c('SfTableData',[_c('span',{class:_vm.getStatusTextClass(order)},[_vm._v(_vm._s(_vm.orderGetters.getStatus(order)))])]),_vm._v(" "),_c('SfTableData',{staticClass:"orders__view orders__element--right"},[_c('SfButton',{staticClass:"sf-button--text smartphone-only",attrs:{"data-cy":"order-history-btn_download"},on:{"click":function($event){return _vm.downloadOrder(order)}}},[_vm._v("\n              "+_vm._s(_vm.$t('Download'))+"\n            ")]),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--text desktop-only",attrs:{"data-cy":"order-history-btn_view"},on:{"click":function($event){_vm.currentOrder = order}}},[_vm._v("\n              "+_vm._s(_vm.$t('View details'))+"\n            ")])],1)],1)})],2)],1)]),_vm._v(" "),_c('SfTab',{attrs:{"data-cy":"order-history-tab_returns","title":"Returns"}},[_c('p',{staticClass:"message"},[_vm._v("\n      This feature is not implemented yet! Please take a look at\n      "),_c('br'),_vm._v(" "),_c('SfLink',{staticClass:"message__link",attrs:{"href":"#"}},[_vm._v("https://github.com/DivanteLtd/vue-storefront/issues")]),_vm._v("\n      for our Roadmap!\n    ")],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/MyAccount/OrderHistory.vue?vue&type=template&id=fc23adb8&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTabs/SfTabs.vue + 14 modules
var SfTabs = __webpack_require__(242);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=template&id=11b2df3a&
var SfTablevue_type_template_id_11b2df3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"sf-table"},[_vm._t("default")],2)}
var SfTablevue_type_template_id_11b2df3a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=template&id=11b2df3a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=template&id=119eeadc&
var SfTableRowvue_type_template_id_119eeadc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tbody',[_vm._ssrNode("<tr class=\"sf-table__row\">","</tr>",[_vm._t("default")],2)])}
var SfTableRowvue_type_template_id_119eeadc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=template&id=119eeadc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SfTableRowvue_type_script_lang_js_ = ({
  name: "SfTableRow",
  inject: ["table"],

  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(this.$slots.default.filter(node => node.tag).length);
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableRowvue_type_script_lang_js_ = (SfTableRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableRow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableRowvue_type_script_lang_js_,
  SfTableRowvue_type_template_id_119eeadc_render,
  SfTableRowvue_type_template_id_119eeadc_staticRenderFns,
  false,
  null,
  null,
  "3f13193f"
  
)

/* harmony default export */ var SfTableRow = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=template&id=3121b6c5&
var SfTableDatavue_type_template_id_3121b6c5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"sf-table__data"},[_vm._t("default")],2)}
var SfTableDatavue_type_template_id_3121b6c5_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=template&id=3121b6c5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfTableDatavue_type_script_lang_js_ = ({
  name: "SfTableData"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableDatavue_type_script_lang_js_ = (SfTableDatavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableData.vue





/* normalize component */

var SfTableData_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableDatavue_type_script_lang_js_,
  SfTableDatavue_type_template_id_3121b6c5_render,
  SfTableDatavue_type_template_id_3121b6c5_staticRenderFns,
  false,
  null,
  null,
  "0df7cd15"
  
)

/* harmony default export */ var SfTableData = (SfTableData_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=template&id=62c92d90&
var SfTableHeadervue_type_template_id_62c92d90_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{staticClass:"sf-table__header"},[_vm._t("default")],2)}
var SfTableHeadervue_type_template_id_62c92d90_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=template&id=62c92d90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfTableHeadervue_type_script_lang_js_ = ({
  name: "SfTableHeader"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableHeadervue_type_script_lang_js_ = (SfTableHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeader.vue





/* normalize component */

var SfTableHeader_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableHeadervue_type_script_lang_js_,
  SfTableHeadervue_type_template_id_62c92d90_render,
  SfTableHeadervue_type_template_id_62c92d90_staticRenderFns,
  false,
  null,
  null,
  "50222490"
  
)

/* harmony default export */ var SfTableHeader = (SfTableHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=template&id=38ab574a&
var SfTableHeadingvue_type_template_id_38ab574a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_vm._ssrNode("<tr class=\"sf-table__heading\">","</tr>",[_vm._t("default")],2)])}
var SfTableHeadingvue_type_template_id_38ab574a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=template&id=38ab574a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SfTableHeadingvue_type_script_lang_js_ = ({
  name: "SfTableHeading",
  inject: ["table"],

  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(this.$slots.default.filter(node => node.tag).length);
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableHeadingvue_type_script_lang_js_ = (SfTableHeadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/_internal/SfTableHeading.vue





/* normalize component */

var SfTableHeading_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfTableHeadingvue_type_script_lang_js_,
  SfTableHeadingvue_type_template_id_38ab574a_render,
  SfTableHeadingvue_type_template_id_38ab574a_staticRenderFns,
  false,
  null,
  null,
  "14924a32"
  
)

/* harmony default export */ var SfTableHeading = (SfTableHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=script&lang=js&
//
//
//
//
//





external_vue_default.a.component("SfTableRow", SfTableRow);
external_vue_default.a.component("SfTableData", SfTableData);
external_vue_default.a.component("SfTableHeader", SfTableHeader);
external_vue_default.a.component("SfTableHeading", SfTableHeading);
/* harmony default export */ var SfTablevue_type_script_lang_js_ = ({
  name: "SfTable",

  provide() {
    const table = {};
    Object.defineProperty(table, "updateColumnsCount", {
      value: this.updateColumnsCount
    });
    return {
      table
    };
  },

  methods: {
    updateColumnsCount(columnsCount) {
      this.$el.style.setProperty("--_table-column-width", Math.ceil(columnsCount / 2));
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTable_SfTablevue_type_script_lang_js_ = (SfTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTable/SfTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(294)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTable_component = Object(componentNormalizer["a" /* default */])(
  SfTable_SfTablevue_type_script_lang_js_,
  SfTablevue_type_template_id_11b2df3a_render,
  SfTablevue_type_template_id_11b2df3a_staticRenderFns,
  false,
  injectStyles,
  null,
  "179f66fe"
  
)

/* harmony default export */ var SfTable = (SfTable_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(102);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/MyAccount/OrderHistory.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var OrderHistoryvue_type_script_lang_js_ = ({
  name: 'PersonalDetails',
  components: {
    SfTabs: SfTabs["a" /* default */],
    SfTable: SfTable,
    SfButton: SfButton["a" /* default */],
    SfProperty: SfProperty["a" /* default */]
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const {
      orders,
      search
    } = Object(index_es["k" /* useUserOrders */])();
    const currentOrder = Object(composition_api_["ref"])(null);
    Object(lib_index_es["f" /* onSSR */])(async () => {
      await search();
    });
    const tableHeaders = ['Order ID', 'Payment date', 'Amount', 'Status'];

    const getStatusTextClass = order => {
      const status = index_es["c" /* orderGetters */].getStatus(order);

      switch (status) {
        case lib_index_es["a" /* AgnosticOrderStatus */].Open:
          return 'text-warning';

        case lib_index_es["a" /* AgnosticOrderStatus */].Complete:
          return 'text-success';

        default:
          return '';
      }
    };

    const downloadFile = (file, name) => {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      const url = window.URL.createObjectURL(file);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
    };

    const downloadOrders = async () => {
      downloadFile(new Blob([JSON.stringify(orders.value)], {
        type: 'application/json'
      }), 'orders.json');
    };

    const downloadOrder = async order => {
      downloadFile(new Blob([JSON.stringify(order)], {
        type: 'application/json'
      }), 'order ' + index_es["c" /* orderGetters */].getId(order) + '.json');
    };

    return {
      tableHeaders,
      orders: Object(composition_api_["computed"])(() => orders ? orders.value : []),
      getStatusTextClass,
      orderGetters: index_es["c" /* orderGetters */],
      downloadOrder,
      downloadOrders,
      currentOrder
    };
  }

});
// CONCATENATED MODULE: ./pages/MyAccount/OrderHistory.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyAccount_OrderHistoryvue_type_script_lang_js_ = (OrderHistoryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/MyAccount/OrderHistory.vue



function OrderHistory_injectStyles (context) {
  
  var style0 = __webpack_require__(296)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OrderHistory_component = Object(componentNormalizer["a" /* default */])(
  MyAccount_OrderHistoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  OrderHistory_injectStyles,
  "fc23adb8",
  "64a5dad0"
  
)

/* harmony default export */ var OrderHistory = __webpack_exports__["default"] = (OrderHistory_component.exports);

/***/ })

};;
//# sourceMappingURL=OrderHistory.js.map