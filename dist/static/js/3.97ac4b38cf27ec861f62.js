webpackJsonp([3],{DyZf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"diaries"},t._l(t.list,function(e){return i("ul",{key:e._id},[i("li",[i("router-link",{attrs:{to:"diary/"+e._id}},[i("span",[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v(" "+t._s(e.created))])])],1)])}))},staticRenderFns:[]};var s=i("VU/8")({data:function(){return{list:[]}},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{getList:function(){var t=this;this.axios.get("/post/list").then(function(e){t.list=e.data})}}},n,!1,function(t){i("gNy4")},"data-v-3992a011",null);e.default=s.exports},gNy4:function(t,e){}});
//# sourceMappingURL=3.97ac4b38cf27ec861f62.js.map