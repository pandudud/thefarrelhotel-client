(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{454:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("6f536dc7",content,!0,{sourceMap:!1})},460:function(t,e,n){"use strict";n(454)},461:function(t,e,n){var c=n(63)(!1);c.push([t.i,"\n.team-members .team-member .team-image img[data-v-452820b3] {\n  width: 100% !important;\n}\n.team-desc p[data-v-452820b3] {\n  display: block;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  overflow: hidden;\n  max-height: 10.8em; /* (Number of lines you want visible) * (line-height) */\n  line-height: 1.8em;\n  text-align: justify;\n  display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;\n}\n",""]),t.exports=c},480:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{c_facility_name:function(){return"id"==this.$i18n.locale?this.data.facility_name:this.data.facility_name_eng},c_facility_desc:function(){return"id"==this.$i18n.locale?this.data.facility_description:this.data.facility_description_eng}}},l=(n(460),n(28)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4",attrs:{"data-animate":"fadeInUp"}},[n("div",{staticClass:"team-member"},[n("div",{staticClass:"team-image"},[n("a",{attrs:{title:t.c_facility_name,"data-lightbox":"image",href:t.data.picture_url}},[n("img",{attrs:{src:t.data.picture_url,onerror:"if (this.src != '/noimage.jpeg') this.src = '/noimage.jpg';"}})])]),t._v(" "),n("div",{staticClass:"team-desc"},[n("h3",[t._v(t._s(t.c_facility_name))]),t._v(" "),n("p",[t._v(t._s(t.c_facility_desc))])])])])}),[],!1,null,"452820b3",null);e.default=component.exports}}]);