(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3,4,17],{504:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("c7318322",content,!0,{sourceMap:!1})},505:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("c469b95a",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n(504)},511:function(t,e,n){var r=n(68)(!1);r.push([t.i,"\n.team-members .team-member .team-image img[data-v-3d152c08] {\n  width: 100% !important;\n}\n.team-desc p[data-v-3d152c08] {\n  display: block;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  overflow: hidden;\n  max-height: 10.8em; /* (Number of lines you want visible) * (line-height) */\n  line-height: 1.8em;\n  text-align: justify;\n  display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;\n}\n",""]),t.exports=r},512:function(t,e,n){"use strict";n(505)},513:function(t,e,n){var r=n(68)(!1);r.push([t.i,"\n.plan-price[data-v-279ff592] {\n  font-size: 50px !important;\n}\n",""]),t.exports=r},522:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("5398991a",content,!0,{sourceMap:!1})},529:function(t,e,n){"use strict";n.r(e);var r={props:["data"]},c=n(31),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inspiro-slider slider-fullscreen dots-creative",attrs:{id:"slider","data-fade":"true"}},t._l(t.data,(function(e){return n("div",{key:e.banner_url_thumb,staticClass:"slide kenburns",attrs:{"data-bg-image":e.banner_url_thumb}},[n("div",{staticClass:"bg-overlay"}),t._v(" "),t._m(0,!0)])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"slide-captions text-center text-light"})])}],!1,null,null,null);e.default=component.exports},530:function(t,e,n){"use strict";n.r(e);var r={props:["data"],computed:{c_facility_name:function(){return"id"==this.$i18n.locale?this.data.facility_name:this.data.facility_name_eng},c_facility_desc:function(){return"id"==this.$i18n.locale?this.data.facility_description:this.data.facility_description_eng}}},c=(n(510),n(31)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4",attrs:{"data-animate":"fadeInUp"}},[n("div",{staticClass:"team-member"},[n("div",{staticClass:"team-image"},[n("a",{attrs:{title:t.c_facility_name,"data-lightbox":"image",href:t.data.picture_url}},[n("img",{attrs:{src:t.data.picture_url_thumb,onerror:"if (this.src != '/noimage.jpeg') this.src = '/noimage.jpg';"}})])]),t._v(" "),n("div",{staticClass:"team-desc"},[n("h3",[t._v(t._s(t.c_facility_name))]),t._v(" "),n("p",[t._v(t._s(t.c_facility_desc))])])])])}),[],!1,null,"3d152c08",null);e.default=component.exports},531:function(t,e,n){"use strict";n.r(e);var r={props:["data","index"],computed:{c_room_name:function(){return"id"==this.$i18n.locale?this.data.room_name:this.data.room_name_eng},c_room_desc:function(){return"id"==this.$i18n.locale?this.data.room_description:this.data.room_description_eng},c_currency_symbol:function(){return this.$numeral.locales[this.$numeral.locale()].currency.symbol}}},c=(n(512),n(31)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-md-12 col-12",attrs:{"data-animate":"fadeInUp"}},[n("div",{staticClass:"plan",class:1==t.index?"featured":""},[n("div",{staticClass:"plan-header"},[n("h4",[t._v(t._s(t.c_room_name))]),t._v(" "),n("div",{staticClass:"plan-price"},[n("sup",[t._v(t._s(t.c_currency_symbol))]),t._v(t._s(t.$numeral(t.data.room_price).format("0a"))),n("span",[t._v("/"+t._s(t.$t("night")))])])]),t._v(" "),n("div",{staticClass:"plan-list"},[n("ul",t._l(t.data.rrmroom,(function(e){return n("li",{key:e.rrm_id},[n("i",{class:"fa "+e.roomfacility.icon_fa}),t._v(t._s(e.roomfacility.facility_name)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"plan-button"},[n("nuxt-link",{staticClass:"btn btn-light",attrs:{to:t.localePath({path:"/room/"+t.data.room_name_slug})}},[t._v(t._s(t.$t("read_more")))])],1)])])])}),[],!1,null,"279ff592",null);e.default=component.exports},539:function(t,e,n){"use strict";n(522)},540:function(t,e,n){var r=n(68)(!1);r.push([t.i,"\n.heading-home[data-v-8bfc02ce] {\n  font-size: 30px !important;\n}\n.heading-hotel[data-v-8bfc02ce] {\n  font-family: 'Sensations';\n  font-size: 100px;\n  line-height: 100px;\n}\n",""]),t.exports=r},559:function(t,e,n){"use strict";n.r(e);var r=n(503),c=n(10),o=(n(37),{name:"Home",mixins:[{data:function(){return{forceUpdate:0}},computed:{banners:function(){return this.$store.state.home.home_banners},facilities:function(){return this.$store.state.home.home_facilities},rooms:function(){return this.$store.state.home.home_rooms}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("home/http_fetchBanner");case 2:return e.next=4,t.$store.dispatch("home/http_fetchFacility");case 4:return e.next=6,t.$store.dispatch("home/http_fetchRoom");case 6:case"end":return e.stop()}}),e)})))()}},r.a]}),l=(n(539),n(31)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("slider",{attrs:{data:t.banners}}),t._v(" "),n("section",{staticClass:"p-t-100 p-b-60",attrs:{id:"welcome"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"heading-text heading-section text-center m-b-40",attrs:{"data-animate":"fadeInDown"}},[n("h2",[n("span",{staticClass:"heading-home"},[t._v(t._s(t.$t("welcome_to")))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"heading-hotel"},[t._v("The Farrel Hotel")])]),t._v(" "),n("span",{staticClass:"lead"},[t._v(t._s(t.$t("hotel_desc")))])])])]),t._v(" "),n("section",{staticClass:"p-t-20 p-b-20"},[n("div",{staticClass:"container"},[n("div",{staticClass:"heading-text heading-section text-center",attrs:{"data-animate":"fadeInUp"}},[n("h2",{staticClass:"heading-home"},[t._v(t._s(t.$t("our_facility")))])]),t._v(" "),n("div",{staticClass:"row team-members team-members-shadow m-b-40 justify-content-center"},t._l(t.facilities,(function(t){return n("home-item-facility",{key:t.id,attrs:{data:t}})})),1)])]),t._v(" "),n("section",{staticClass:"p-t-20 p-b-20"},[n("div",{staticClass:"container"},[n("div",{staticClass:"heading-text heading-section m-b-100 text-center",attrs:{"data-animate":"fadeInUp"}},[n("h2",{staticClass:"heading-home"},[t._v(t._s(t.$t("our_room")))])]),t._v(" "),n("div",{staticClass:"row pricing-table"},t._l(t.rooms,(function(t,e){return n("home-item-room",{key:t.id,attrs:{data:t,index:e}})})),1)])]),t._v(" "),n("section",{staticClass:"p-t-20 p-b-0"},[n("g-map",{attrs:{center:{lat:-7.5827345,lng:111.895429},zoom:18}})],1)],1)}),[],!1,null,"8bfc02ce",null);e.default=component.exports;installComponents(component,{Slider:n(529).default,HomeItemFacility:n(530).default,HomeItemRoom:n(531).default})}}]);