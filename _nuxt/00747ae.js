(window.webpackJsonp=window.webpackJsonp||[]).push([[28,14],{495:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("59a95ecc",content,!0,{sourceMap:!1})},497:function(t,e,n){"use strict";n(495)},498:function(t,e,n){var r=n(68)(!1);r.push([t.i,"\n.post-item[data-v-ca68d99a] {\n    padding: 0 20px 20px 0;\n}\n",""]),t.exports=r},499:function(t,e,n){"use strict";n.r(e);n(497);var r=n(31),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item border"},[n("div",{staticClass:"post-item-wrap"},[n("div",{staticClass:"post-image"},[n("b-skeleton-img")],1),t._v(" "),n("div",{staticClass:"post-item-description"},[n("b-skeleton",{attrs:{width:"65%"}}),t._v(" "),n("br"),t._v(" "),n("b-skeleton",{attrs:{width:"100%"}}),t._v(" "),n("b-skeleton",{attrs:{width:"85%"}}),t._v(" "),n("b-skeleton",{attrs:{width:"95%"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("b-skeleton",{attrs:{width:"30%"}})],1)])])}),[],!1,null,"ca68d99a",null);e.default=component.exports},525:function(t,e,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("63d8cdae",content,!0,{sourceMap:!1})},545:function(t,e,n){"use strict";n(525)},546:function(t,e,n){var r=n(68)(!1);r.push([t.i,"\n.post-item-description p[data-v-55fce480] {\n  max-height: 100%;\n  -webkit-line-clamp: unset;\n}\nh2 .room_name[data-v-55fce480] {\n  width: 50%;\n}\nh2 .room_price[data-v-55fce480] {\n  width: 50%;\n  float: right;\n  text-align: right;\n}\n.per[data-v-55fce480] {\n  font-size: 16px;\n  color: #bdc3c7;\n}\n.single-post .post-item .post-item-description h2[data-v-55fce480] {\n  font-size: 34px;\n  letter-spacing: 0;\n  line-height: 38px;\n  margin-bottom: 12px;\n  margin-top: 8px;\n  color: #1e2022;\n}\n.heading-text.heading-line h4[data-v-55fce480] {\n  font-size: 1.8em;\n}\n.icon-box h3[data-v-55fce480] {\n  margin: unset;\n  text-align: center;\n  font-size: 12px;\n}\n@media (max-width: 600px){\n.row .col-sm-6[data-v-55fce480] {\n    width: 50%;\n}\n}\n",""]),t.exports=r},567:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(10),c=(n(37),n(88));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={fetchOnServer:!1,asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.slug,e.abrupt("return",{slug:r});case 3:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("rooms/http_fetchRoomData",t.slug);case 2:t.room_data=t.getRoomData;case 3:case"end":return e.stop()}}),e)})))()},watch:{slug:function(){this.$fetch()}},data:function(){return{room_data:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({c_room_name:function(){return"id"==this.$i18n.locale?this.room_data.room_name:this.room_data.room_name_eng},c_room_desc:function(){return"id"==this.$i18n.locale?this.room_data.room_description:this.room_data.room_description_eng}},Object(c.b)({getRoomData:"rooms/getRoomData"}))},m={layout:"header-light",name:"Room",mixins:[d,n(503).a]},f=(n(545),n(31)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-right",attrs:{id:"page-content"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"content col-lg-8 col-sm-12 center"},[n("div",{staticClass:"single-post",attrs:{id:"blog"}},[t.$fetchState.pending?[n("skeleton-item-post")]:n("div",{staticClass:"post-item"},[n("div",{staticClass:"post-item-wrap"},[n("div",{staticClass:"carousel dots-inside arrows-visible",attrs:{"data-items":"1","data-lightbox":"gallery"}},[t._l(t.room_data.detailroom,(function(t){return[n("a",{key:t.id,attrs:{href:t.picture_url,"data-lightbox":"gallery-image"}},[n("img",{attrs:{alt:"image",src:t.picture_url_thumb}})])]}))],2),t._v(" "),n("div",{staticClass:"post-item-description"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 col-sm-12"},[n("h2",[t._v(t._s(t.c_room_name))])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-sm-12",staticStyle:{"text-align":"right"}},[n("h2",[t._v(t._s(t.$numeral(t.room_data.room_price).format())),n("span",{staticClass:"per"},[t._v("/"+t._s(t.$t("night")))])])])]),t._v(" "),n("p",[t._v(t._s(t.c_room_desc))])]),t._v(" "),n("div",{staticClass:"heading-text heading-line text-center"},[n("h4",[t._v(t._s(t.$t("menuitems.facility.text")))])]),t._v(" "),n("div",{staticClass:"row center text-center justify-content-center"},t._l(t.room_data.rrmroom,(function(e){return n("div",{key:e.id,staticClass:"col-lg-4 col-sm-6"},[n("div",{staticClass:"icon-box effect medium center"},[n("div",{staticClass:"icon"},[n("a",[n("i",{staticClass:"fa",class:e.roomfacility.icon_fa})])]),t._v(" "),n("h3",[t._v(t._s(e.roomfacility.facility_name))])])])})),0)])])],2)])])])])}),[],!1,null,"55fce480",null);e.default=component.exports;installComponents(component,{SkeletonItemPost:n(499).default})}}]);