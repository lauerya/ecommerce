(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{430:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("a86a7372",content,!0,{sourceMap:!1})},431:function(t,e,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("1ff8a956",content,!0,{sourceMap:!1})},432:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("223c986f",content,!0,{sourceMap:!1})},450:function(t,e,r){"use strict";r(430)},451:function(t,e,r){var o=r(7)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-bfd7326a]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-bfd7326a]{display:none!important}}.section[data-v-bfd7326a]{margin-top:var(--spacer-base)}.carousel[data-v-bfd7326a]{margin:0 calc(var(--spacer-sm)*-1) 0 0}@media (min-width:1024px){.carousel[data-v-bfd7326a]{margin:0}}.carousel__item[data-v-bfd7326a]{margin:1.9375rem 0 2.4375rem}",""]),t.exports=o},452:function(t,e,r){"use strict";r(431)},453:function(t,e,r){var o=r(7)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-df734ebc]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-df734ebc]{display:none!important}}.title[data-v-df734ebc]{--heading-title-font-weight:var(--font-weight--semibold);--section-margin:var(--spacer-xl) 0;--section-content-margin:var(--spacer-xl) 0;--heading-title-font-size:var(--h2-font-size)}@media (min-width:1024px){.title[data-v-df734ebc]{--section-margin:var(--spacer-2xl) 0;--section-content-margin:var(--spacer-2xl) 0}}.grid[data-v-df734ebc]{display:flex;max-height:20.625rem;width:100%;justify-content:center;margin:0}@media (min-width:1024px){.grid[data-v-df734ebc]{max-height:40.625rem;max-width:60rem;margin:0 auto}}.grid__row[data-v-df734ebc]{display:flex;flex-direction:column}.grid__row+.grid__row[data-v-df734ebc]{margin-left:var(--spacer-xs)}@media (min-width:1024px){.grid__row+.grid__row[data-v-df734ebc]{margin-left:var(--spacer-sm)}}.grid__col[data-v-df734ebc]{width:10rem;height:10rem}@media (min-width:1024px){.grid__col[data-v-df734ebc]{width:29.375rem;height:29.375rem}.grid__col.small[data-v-df734ebc]{height:10rem}}.grid__col+.grid__col[data-v-df734ebc]{margin-top:var(--spacer-xs)}@media (min-width:1024px){.grid__col+.grid__col[data-v-df734ebc]{margin-top:var(--spacer-sm)}}",""]),t.exports=o},454:function(t,e,r){"use strict";r(432)},455:function(t,e,r){var o=r(7)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-6f7e855c]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-6f7e855c]{display:none!important}}.banner-app[data-v-6f7e855c]{--banner-title-margin:var(--spacer-base) 0 var(--spacer-xl) 0;--banner-padding:0 0 var(--spacer-2xl);--banner-title-font-size:var(--h1-font-size);--banner-subtitle-font-size:var(--font-size--xl);--banner-title-font-weight:var(--font-weight--semibold);--banner-subtitle-font-weight:var(--font-weight--medium);--banner-title-text-transform:capitalize;--banner-title-text-transform:none;--banner-background-size:contain;--banner-background-position:right;display:block;min-height:26.25rem;max-width:77.5rem;margin:0 auto;padding:5.625rem 31.25rem 0 5.625rem}.banner-app__call-to-action[data-v-6f7e855c]{display:flex;flex-wrap:nowrap}.banner-app__button[data-v-6f7e855c]{--image-width:10.875rem;--image-height:3.5625rem;pointer-events:visible}.banner-app__button+.banner-app__button[data-v-6f7e855c]{margin:0 0 0 var(--spacer-base)}",""]),t.exports=o},472:function(t,e,r){"use strict";var o=r(594),n=r(583),c=r(602),d=r(419),l=r(14),f={name:"RelatedProducts",setup:()=>({productGetters:l.d}),components:{SfCarousel:o.a,SfProductCard:n.a,SfSection:c.a,SfLoader:d.a},props:{title:String,products:Array,loading:Boolean}},m=(r(450),r(0)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"section",attrs:{"title-heading":t.title}},[r("SfLoader",{class:{loading:t.loading},attrs:{loading:t.loading}},[r("SfCarousel",{staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:{peek:16,breakpoints:{1023:{peek:0,perView:2}}}}},t._l(t.products,(function(e,i){return r("SfCarouselItem",{key:i,staticClass:"carousel__item"},[r("SfProductCard",{attrs:{title:t.productGetters.getName(e),image:t.productGetters.getCoverImage(e),"regular-price":t.$n(t.productGetters.getPrice(e).regular,"currency"),"special-price":t.productGetters.getPrice(e).special&&t.$n(t.productGetters.getPrice(e).special,"currency"),link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e))}})],1)})),1)],1)],1)}),[],!1,null,"bfd7326a",null);e.a=component.exports},473:function(t,e,r){"use strict";var o=r(10),n=r(602),c=r(73),d=r(53);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"InstagramFeed",components:{SfSection:n.a,SfImage:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.a)()),beforeDestroy(){Object(d.b)()}},m=(r(452),r(0)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"title",attrs:{"title-heading":"Share Your Look","subtitle-heading":"#YOURLOOK"}},[r("div",{staticClass:"grid grid-images"},[r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageAm.webp",alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageAd.webp",alt:"katherina_trn",width:470,height:470}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageBm.webp",alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageCd.webp",alt:"katherina_trn",width:470,height:160}},[t._v("katherina_trn")])],1)]),t._v(" "),r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageCm.webp",alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageBd.webp",alt:"katherina_trn",width:470,height:160}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageDm.webp",alt:"katherina_trn",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageDd.webp",alt:"katherina_trn",width:470,height:470}},[t._v("katherina_trn")])],1)])])])}),[],!1,null,"df734ebc",null);e.a=component.exports},474:function(t,e,r){"use strict";var o=r(603),n=r(73),c=r(15),d={name:"AppStoreBanner",components:{SfBanner:o.a,SfImage:n.a,SfButton:c.a}},l=(r(454),r(0)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:t._u([{key:"call-to-action",fn:function(){return[r("div",{staticClass:"banner-app__call-to-action"},[r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[r("img",{attrs:{src:"/homepage/apple.png",width:"174",height:"57"}})]),t._v(" "),r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[r("img",{attrs:{src:"/homepage/google.png",width:"174",height:"57"}})])],1)]},proxy:!0}])})}),[],!1,null,"6f7e855c",null);e.a=component.exports},504:function(t,e,r){var content=r(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("4becba91",content,!0,{sourceMap:!1})},580:function(t,e,r){"use strict";r(504)},581:function(t,e,r){var o=r(7)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-692b0682]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-692b0682]{display:none!important}}#product[data-v-692b0682]{box-sizing:border-box}@media (min-width:1024px){#product[data-v-692b0682]{max-width:1272px;margin:0 auto}}@media (min-width:1024px){.product[data-v-692b0682]{display:flex}}.product__info[data-v-692b0682]{margin:var(--spacer-sm) auto}@media (min-width:1024px){.product__info[data-v-692b0682]{max-width:32.625rem;margin:0 0 0 7.5rem}}.product__header[data-v-692b0682]{--heading-title-color:var(--c-link);--heading-title-font-weight:var(--font-weight--bold);--heading-padding:0;margin:0 var(--spacer-sm);display:flex;justify-content:space-between}@media (min-width:1024px){.product__header[data-v-692b0682]{--heading-title-font-weight:var(--font-weight--semibold);margin:0 auto}}.product__drag-icon[data-v-692b0682]{-webkit-animation:moveicon-data-v-692b0682 1s ease-in-out infinite;animation:moveicon-data-v-692b0682 1s ease-in-out infinite}.product__price-and-rating[data-v-692b0682]{margin:0 var(--spacer-sm) var(--spacer-base);align-items:center}@media (min-width:1024px){.product__price-and-rating[data-v-692b0682]{display:flex;justify-content:space-between;margin:var(--spacer-sm) 0 var(--spacer-lg) 0}}.product__rating[data-v-692b0682]{display:flex;align-items:center;justify-content:flex-end;margin:var(--spacer-xs) 0 var(--spacer-xs)}.product__count[data-v-692b0682]{font:var(--font-weight--normal) var(--font-size--sm)/1.4 var(--font-family--secondary);font:var(--count-font,var(--count-font-weight,var(--font-weight--normal)) var(--count-font-size,var(--font-size--sm))/var(--count-font-line-height,1.4) var(--count-font-family,var(--font-family--secondary)));color:var(--c-text);text-decoration:none;margin:0 0 0 var(--spacer-xs)}.product__description[data-v-692b0682]{font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--product-description-font,var(--product-description-font-weight,var(--font-weight--light)) var(--product-description-font-size,var(--font-size--base))/var(--product-description-font-line-height,1.6) var(--product-description-font-family,var(--font-family--primary)))}.product__select-size[data-v-692b0682]{margin:0 var(--spacer-sm)}@media (min-width:1024px){.product__select-size[data-v-692b0682]{margin:0}}.product__colors[data-v-692b0682]{font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--product-color-font,var(--product-color-font-weight,var(--font-weight--normal)) var(--product-color-font-size,var(--font-size--lg))/var(--product-color-font-line-height,1.6) var(--product-color-font-family,var(--font-family--secondary)));display:flex;align-items:center;margin-top:var(--spacer-xl)}.product__color-label[data-v-692b0682]{margin:0 var(--spacer-lg) 0 0}.product__color[data-v-692b0682]{margin:0 var(--spacer-2xs)}.product__add-to-cart[data-v-692b0682]{margin:var(--spacer-base) var(--spacer-sm) 0}@media (min-width:1024px){.product__add-to-cart[data-v-692b0682]{margin-top:var(--spacer-2xl)}}.product__compare[data-v-692b0682],.product__guide[data-v-692b0682],.product__save[data-v-692b0682]{display:block;margin:var(--spacer-xl) 0 var(--spacer-base) auto}.product__compare[data-v-692b0682]{margin-top:0}.product__tabs[data-v-692b0682]{margin:var(--spacer-lg) auto var(--spacer-2xl);--tabs-title-font-size:var(--font-size--lg)}@media (min-width:1024px){.product__tabs[data-v-692b0682]{margin-top:var(--spacer-2xl)}}.product__property[data-v-692b0682]{margin:var(--spacer-base) 0}.product__property__button[data-v-692b0682]{--button-font-size:var(--font-size--base)}.product__review[data-v-692b0682]{padding-bottom:24px;border-bottom:1px solid var(--c-light);margin-bottom:var(--spacer-base)}.product__additional-info[data-v-692b0682]{color:var(--c-link);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--primary);font:var(--additional-info-font,var(--additional-info-font-weight,var(--font-weight--light)) var(--additional-info-font-size,var(--font-size--sm))/var(--additional-info-font-line-height,1.6) var(--additional-info-font-family,var(--font-family--primary)))}.product__additional-info__title[data-v-692b0682]{font-weight:var(--font-weight--normal);font-size:var(--font-size--base);margin:0 0 var(--spacer-sm)}.product__additional-info__title[data-v-692b0682]:not(:first-child){margin-top:3.5rem}.product__additional-info__paragraph[data-v-692b0682]{margin:0}.product__gallery[data-v-692b0682]{flex:1}.breadcrumbs[data-v-692b0682]{margin:var(--spacer-base) auto var(--spacer-lg)}.banner-app[data-v-692b0682]{--banner-container-width:100%;--banner-title-margin:var(--spacer-base) 0 var(--spacer-xl) 0;--banner-padding:0 var(--spacer-2xl);--banner-title-font-size:var(--h1-font-size);--banner-subtitle-font-size:var(--font-size--xl);--banner-title-font-weight:var(--font-weight--semibold);--banner-subtitle-font-weight:var(--font-weight--medium);--banner-title-text-transform:capitalize;--banner-subtitle-text-transform:capitalize;display:block;min-height:26.25rem;max-width:65rem;margin:0 auto;padding:0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl)}.banner-app__call-to-action[data-v-692b0682]{--button-background:transparent;display:flex}.banner-app__button[data-v-692b0682]{--image-width:8.375rem;--image-height:2.75rem;--button-padding:0}.banner-app__button+.banner-app__button[data-v-692b0682]{margin:0 0 0 calc(var(--spacer-xl)/2)}@-webkit-keyframes moveicon-data-v-692b0682{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}@keyframes moveicon-data-v-692b0682{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}",""]),t.exports=o},598:function(t,e,r){"use strict";r.r(e);var o=r(10),n=r(6),c=(r(51),r(420)),d=r(510),l=r(235),f=r(83),m=r(137),v=r(440),_=r(411),h=r(511),y=r(590),w=r(606),x=r(13),S=r(73),k=r(603),C=r(607),O=r(608),j=r(134),z=r(512),P=r(15),I=r(473),G=r(472),B=r(1),D=r(14),$=r(474),M=r(143),A=r(11);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function H(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var F={name:"Product",transition:"fade",setup(t,e){var r=Object(B.ref)(1),{slug:o}=e.root.$route.params,{products:c,search:d}=Object(D.h)("products"),{products:l,search:f,loading:m}=Object(D.h)("relatedProducts"),{addItem:v,loading:_}=Object(D.e)(),h=Object(B.computed)((()=>D.d.getFiltered(c.value,{master:!0,attributes:e.root.$route.query})[0])),y=Object(B.computed)((()=>D.d.getDescription(h.value))),w=Object(B.computed)((()=>D.d.getDescription(h.value,!0))),x=Object(B.computed)((()=>D.d.getAttributes(c.value))),S=Object(B.computed)((()=>D.d.getSelectedVariant(c.value,e.root.$route.query))),k=Object(B.computed)((()=>D.d.getBreadcrumbs?D.d.getBreadcrumbs(h.value):t.fallbackBreadcrumbs)),C=Object(B.computed)((()=>D.d.getGallery(h.value).map((img=>({mobile:{url:img.small},desktop:{url:img.normal},big:{url:img.big},alt:h.value._name||h.value.name}))))),O=Object(B.computed)((()=>D.d.getVariantImage(h.value)||0));Object(A.f)(Object(n.a)((function*(){yield d({slug:o}),yield f({catId:123,limit:8})})));return{updateFilter:filter=>{e.root.$router.push({path:e.root.$route.path,query:H(H({},S.value),filter)})},configuration:S,product:h,productDescription:y,productDescriptionHtml:w,ActiveVariantImage:O,relatedProducts:Object(B.computed)((()=>D.d.getFiltered(l.value,{master:!0}))),relatedLoading:m,options:x,breadcrumbs:k,qty:r,addItem:v,loading:_,productGetters:D.d,productGallery:C}},components:{SfAlert:c.a,SfColor:d.a,SfProperty:l.a,SfHeading:f.a,SfPrice:m.a,SfRating:v.a,SfSelect:_.a,SfAddToCart:h.a,SfTabs:y.a,SfGallery:w.a,SfIcon:x.a,SfImage:S.a,SfBanner:k.a,SfSticky:C.a,SfReview:O.a,SfBadge:j.a,SfBreadcrumbs:z.a,SfButton:P.a,InstagramFeed:I.a,RelatedProducts:G.a,MobileStoreBanner:$.a,LazyHydrate:M.a},data:()=>({stock:5,properties:[{name:"Product Code",value:"578902-00"},{name:"Category",value:"Pants"},{name:"Material",value:"Cotton"},{name:"Country",value:"Germany"}],description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",detailsIsActive:!1,brand:"Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",careInstructions:"Do not wash!"})},T=(r(580),r(0)),component=Object(T.a)(F,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"product"}},[r("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),r("div",{staticClass:"product"},[t.productGallery.length>0?r("SfGallery",{staticClass:"product__gallery",attrs:{images:t.productGallery,current:t.ActiveVariantImage+1}}):t._e(),t._v(" "),r("div",{staticClass:"product__info"},[r("div",{staticClass:"product__header"},[r("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.productGetters.getName(t.product),level:3}}),t._v(" "),r("SfBadge",{staticClass:"sf-badge--number",class:t.productGetters.getStatus(t.product)?"color-success":"color-danger"},[t._v("\n          "+t._s(t.productGetters.getStatus(t.product)?"In stock":"Out of Stock")+"\n        ")]),t._v(" "),r("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"xxl",color:"var(--c-text-disabled)"}})],1),t._v(" "),r("div",{staticClass:"product__price-and-rating"},[r("SfPrice",{attrs:{regular:t.$n(t.productGetters.getPrice(t.product).regular,"currency"),special:t.productGetters.getPrice(t.product).special&&t.$n(t.productGetters.getPrice(t.product).special,"currency")}}),t._v(" "),r("div")],1),t._v(" "),r("div",[t.productDescription?r("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.productDescription)+"\n        ")]):t._e(),t._v(" "),r("SfButton",{staticClass:"sf-button--text desktop-only product__guide",attrs:{"data-cy":"product-btn_size-guide"}},[t._v("\n          "+t._s(t.$t("Size guide"))+"\n        ")]),t._v(" "),t.options.Size?r("SfSelect",{staticClass:"sf-select--underlined product__select-size",attrs:{"data-cy":"product-select_size",value:t.configuration.size||t.options.Size[0].value,label:"Size",required:!0},on:{input:function(e){return t.updateFilter({size:e})}}},t._l(t.options.Size,(function(e){return r("SfSelectOption",{key:e.value,attrs:{value:e.value}},[t._v("\n            "+t._s(e.value)+"\n          ")])})),1):t._e(),t._v(" "),t.options.Color&&t.options.Color.length>1?r("div",{staticClass:"product__colors desktop-only"},[r("p",{staticClass:"product__color-label"},[t._v(t._s(t.$t("Color"))+":")]),t._v(" "),t._l(t.options.Color,(function(e,i){return r("SfColor",{key:i,staticClass:"product__color",attrs:{"data-cy":"product-color_update",color:e.value,selected:t.configuration.color?t.configuration.color.value===e.value:0===i},on:{click:function(r){return t.updateFilter({color:e})}}})}))],2):t._e(),t._v(" "),r("SfAddToCart",{staticClass:"product__add-to-cart",attrs:{"data-cy":"product-cart_add",stock:t.stock,disabled:t.loading,canAddToCart:t.stock>0},on:{click:function(e){t.addItem({product:t.product,quantity:parseInt(t.qty)})}},model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfTabs",{staticClass:"product__tabs",attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"product-tab_description",title:"Description"}},[t.productDescriptionHtml?r("div",{staticClass:"product__description"},[r("div",{domProps:{innerHTML:t._s(t.productDescriptionHtml)}})]):t._e(),t._v(" "),t._l(t.properties,(function(e,i){return r("SfProperty",{key:i,staticClass:"product__property",attrs:{name:e.name,value:e.value},scopedSlots:t._u(["Category"===e.name?{key:"value",fn:function(){return[r("SfButton",{staticClass:"product__property__button sf-button--text"},[t._v("\n                  "+t._s(e.value)+"\n                ")])]},proxy:!0}:null],null,!0)})}))],2),t._v(" "),r("SfTab",{staticClass:"product__additional-info",attrs:{title:"Additional Information","data-cy":"product-tab_additional"}},[r("div",{staticClass:"product__additional-info"},[r("p",{staticClass:"product__additional-info__title"},[t._v(t._s(t.$t("Brand")))]),t._v(" "),r("p",[t._v(t._s(t.brand))]),t._v(" "),r("p",{staticClass:"product__additional-info__title"},[t._v("\n                "+t._s(t.$t("Instruction1"))+"\n              ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n                "+t._s(t.$t("Instruction2"))+"\n              ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n                "+t._s(t.$t("Instruction3"))+"\n              ")]),t._v(" "),r("p",[t._v(t._s(t.careInstructions))])])])],1)],1)],1)],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("RelatedProducts",{attrs:{products:t.relatedProducts,loading:t.relatedLoading,title:"Match it with"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("InstagramFeed")],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("MobileStoreBanner")],1)],1)}),[],!1,null,"692b0682",null);e.default=component.exports}}]);