(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(e,a,i){},183:function(e){e.exports=JSON.parse('{"componentClass":"c-sliding-pagination","list":"c-sliding-pagination__list","element":"c-sliding-pagination__list-element","elementDisabled":"c-sliding-pagination__list-element--disabled","elementActive":"c-sliding-pagination__list-element--active","page":"c-sliding-pagination__page"}')},184:function(e,a,i){"use strict";i(163)},189:function(e,a,i){"use strict";i.r(a);var t={name:"SlidingPaginationDefaultPage",props:{ariaPageLabel:{type:String,required:!0},isCurrent:{type:Boolean,required:!0},page:{type:Number,required:!0},pageClass:{type:String,required:!0}},computed:{currentClass(){return this.isCurrent?"c-sliding-pagination__page--current":""}},methods:{goToPage(){this.$emit("page-click",this.page)}}},n=i(6),s=Object(n.a)(t,(function(){var e=this,a=e.$createElement;return(e._self._c||a)("a",{class:e.pageClass,attrs:{href:"#","aria-label":e.ariaPageLabel},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.goToPage(e.page)}}},[e._v("\n  "+e._s(e.page)+"\n")])}),[],!1,null,null,null).exports,r=i(183);function l(e,a){const i=[];if("number"!=typeof e||"number"!=typeof a)return i;if(e>a){const i=e;e=a,a=i}for(let t=e;t<=a;t++)i.push(t);return i}var g={name:"SlidingPagination",props:{ariaPaginationLabel:{type:String,required:!1,default:"Pagination Navigation"},ariaGotoPageLabel:{type:String,required:!1,default:"Go to page %page% of %total%"},ariaPreviousPageLabel:{type:String,required:!1,default:"Go to previous page"},ariaNextPageLabel:{type:String,required:!1,default:"Go to next page"},ariaCurrentPageLabel:{type:String,required:!1,default:"Page %page% of %total%, current page"},classMap:{type:Object,required:!1,default:()=>r},current:{required:!0,type:Number},total:{required:!0,type:Number},slidingEndingSize:{required:!1,type:Number,default:2},slidingWindowSize:{required:!1,type:Number,default:3},nonSlidingSize:{required:!1,type:Number,default:9},pageComponent:{required:!1,type:String,default:"sliding-pagination-default-page"}},components:{SlidingPaginationDefaultPage:s},computed:{isSliding(){return this.total>this.nonSlidingSize},hasBeginningGap(){return!!this.isSliding&&this.lastBeginningPage+1!==this.firstWindowPage},hasEndingGap(){return!!this.isSliding&&this.lastWindowPage+1!==this.firstEndingPage},beginningPages(){return l(1,this.isSliding?this.slidingEndingSize:this.total)},lastBeginningPage(){return this.beginningPages[this.beginningPages.length-1]},endingPages(){return this.isSliding?l(this.total-this.slidingEndingSize+1,this.total):[]},firstEndingPage(){return this.endingPages[0]},slidingWindowHalf(){let e=this.slidingWindowSize/2;return this.slidingWindowSize%2==1&&(e-=.5),e},slidingWindowPages(){if(!this.isSliding)return[];const e=this.lastBeginningPage+this.slidingWindowHalf,a=this.firstEndingPage-this.slidingWindowHalf;if(this.current<=e)return l(this.lastBeginningPage+1,this.lastBeginningPage+this.slidingWindowSize);if(this.current>e&&this.current<a){let e=this.slidingWindowHalf;return this.slidingWindowSize%2==0&&(e/=2),l(-this.slidingWindowHalf+this.current,e+this.current)}return l(this.firstEndingPage-this.slidingWindowSize,this.firstEndingPage-1)},firstWindowPage(){return this.slidingWindowPages[0]},lastWindowPage(){return this.slidingWindowPages[this.slidingWindowPages.length-1]},showPreviousPageAction(){return this.total>this.nonSlidingSize},showNextPageAction(){return this.total>this.nonSlidingSize}},methods:{replaceLabelVars(e,a){return e.replace("%total%",this.total).replace("%page%",a)},isCurrentPage(e){return this.current===e},currentPageLabel(e){return this.replaceLabelVars(this.ariaCurrentPageLabel,e)},goToPage(e){this.$emit("page-change",e)},goToPageLabel(e){return this.replaceLabelVars(this.ariaGotoPageLabel,e)},pageLabel(e){return this.isCurrentPage(e)?this.currentPageLabel(e):this.goToPageLabel(e)}}},o=(i(184),{name:"SimpleExample",components:{SlidingPagination:Object(n.a)(g,(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("nav",{class:e.classMap.component,attrs:{"aria-label":e.ariaPaginationLabel}},[i("ul",{class:e.classMap.list},[e.showPreviousPageAction?i("li",{class:[e.classMap.element,1==e.current?e.classMap.elementDisabled:""]},[i("a",{class:e.classMap.page,attrs:{href:"#","aria-label":e.ariaPreviousPageLabel,disabled:1==e.current},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.goToPage(e.current-1)}}},[e._t("previous-page",[e._v("«")])],2)]):e._e(),e._l(e.beginningPages,(function(a){return i("li",{key:a,class:[e.classMap.element,e.isCurrentPage(a)?e.classMap.elementActive:""]},[i(e.pageComponent,{tag:"component",attrs:{"is-current":e.isCurrentPage(a),"aria-page-label":e.pageLabel(a),page:a,"page-class":e.classMap.page},on:{"page-click":function(i){return e.goToPage(a)}}})],1)})),e.hasBeginningGap?i("li",{class:[e.classMap.element,e.classMap.elementDisabled],attrs:{"aria-hidden":"true"}},[i("a",{class:e.classMap.page,attrs:{href:"#",disabled:""}},[e._t("gap-left",[e._v("…")])],2)]):e._e(),e._l(e.slidingWindowPages,(function(a){return i("li",{key:a,class:[e.classMap.element,e.isCurrentPage(a)?e.classMap.elementActive:""]},[i(e.pageComponent,{tag:"component",attrs:{"is-current":e.isCurrentPage(a),"aria-page-label":e.pageLabel(a),page:a,"page-class":e.classMap.page},on:{"page-click":function(i){return e.goToPage(a)}}})],1)})),e.hasEndingGap?i("li",{class:[e.classMap.element,e.classMap.elementDisabled],attrs:{"aria-hidden":"true"}},[i("a",{class:e.classMap.page,attrs:{href:"#",disabled:""}},[e._t("gap-right",[e._v("…")])],2)]):e._e(),e._l(e.endingPages,(function(a){return i("li",{key:a,class:[e.classMap.element,e.isCurrentPage(a)?e.classMap.elementActive:""]},[i(e.pageComponent,{tag:"component",attrs:{"is-current":e.isCurrentPage(a),"aria-page-label":e.pageLabel(a),page:a,"page-class":e.classMap.page},on:{"page-click":function(i){return e.goToPage(a)}}})],1)})),e.showNextPageAction?i("li",{staticClass:"c-sliding-pagination__list-element",class:[e.classMap.element,e.current==e.total?e.classMap.elementDisabled:""]},[i("a",{class:e.classMap.page,attrs:{href:"#","aria-label":e.ariaNextPageLabel,disabled:e.current==e.total},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.goToPage(e.current+1)}}},[e._t("next-page",[e._v("»")])],2)]):e._e()],2)])}),[],!1,null,null,null).exports},data:()=>({current:1,total:10}),methods:{onPageChange(e){this.current=e}}}),u=Object(n.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("sliding-pagination",{attrs:{current:this.current,total:this.total},on:{"page-change":this.onPageChange}})}),[],!1,null,null,null);a.default=u.exports}}]);