(window.webpackJsonp=window.webpackJsonp||[]).push([[27,14],{495:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("59a95ecc",content,!0,{sourceMap:!1})},497:function(t,e,r){"use strict";r(495)},498:function(t,e,r){var o=r(68)(!1);o.push([t.i,"\n.post-item[data-v-ca68d99a] {\n    padding: 0 20px 20px 0;\n}\n",""]),t.exports=o},499:function(t,e,r){"use strict";r.r(e);r(497);var o=r(31),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item border"},[r("div",{staticClass:"post-item-wrap"},[r("div",{staticClass:"post-image"},[r("b-skeleton-img")],1),t._v(" "),r("div",{staticClass:"post-item-description"},[r("b-skeleton",{attrs:{width:"65%"}}),t._v(" "),r("br"),t._v(" "),r("b-skeleton",{attrs:{width:"100%"}}),t._v(" "),r("b-skeleton",{attrs:{width:"85%"}}),t._v(" "),r("b-skeleton",{attrs:{width:"95%"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("b-skeleton",{attrs:{width:"30%"}})],1)])])}),[],!1,null,"ca68d99a",null);e.default=component.exports},526:function(t,e,r){var content=r(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("392ba8a7",content,!0,{sourceMap:!1})},549:function(t,e,r){"use strict";r(526)},550:function(t,e,r){var o=r(68)(!1);o.push([t.i,"\n.post-item-description p[data-v-2d092ee1] {\n  white-space: pre-wrap;\n  -webkit-line-clamp: unset;\n  max-height: unset;\n}\n",""]),t.exports=o},573:function(t,e,r){"use strict";r.r(e);var o=r(502),n=(r(5),r(4),r(2),r(1),r(6),r(3),r(7),r(0)),c=r(10),l=(r(37),r(88));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={fetchOnServer:!1,asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=r.slug,e.abrupt("return",{slug:o});case 3:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("promotions/http_fetchPromotionData",t.slug);case 2:t.promotion_data=t.getPromotionData;case 3:case"end":return e.stop()}}),e)})))()},watch:{slug:function(){this.$fetch()}},data:function(){return{promotion_data:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({c_promotion_name:function(){return"id"==this.$i18n.locale?this.promotion_data.promotion_name:this.promotion_data.promotion_name_eng},c_promotion_desc:function(){return"id"==this.$i18n.locale?this.promotion_data.promotion_description:this.promotion_data.promotion_description_eng}},Object(l.b)({getPromotionData:"promotions/getPromotionData"}))},f={layout:"header-light",name:"Promo",mixins:[m,o.a]},_=(r(549),r(31)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sidebar-right",attrs:{id:"page-content"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"content col-lg-8 col-sm-12 center"},[r("div",{staticClass:"single-post",attrs:{id:"blog"}},[t.$fetchState.pending?[r("skeleton-item-post")]:r("div",{staticClass:"post-item"},[r("div",{staticClass:"post-item-wrap"},[r("h2",[t._v(t._s(t.c_promotion_name))]),t._v(" "),r("div",{staticClass:"carousel dots-inside arrows-visible",attrs:{"data-items":"1","data-lightbox":"gallery"}},[t._l(t.promotion_data.detailpromotion,(function(t){return[r("a",{key:t.id,attrs:{href:t.picture_url,"data-lightbox":"gallery-image"}},[r("img",{attrs:{alt:"image",src:t.picture_url_thumb}})])]}))],2),t._v(" "),r("div",{staticClass:"post-item-description"},[r("p",[t._v(t._s(t.c_promotion_desc))])])])])],2)])])])])}),[],!1,null,"2d092ee1",null);e.default=component.exports;installComponents(component,{SkeletonItemPost:r(499).default})}}]);