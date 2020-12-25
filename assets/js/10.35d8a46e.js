(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(t,a,e){"use strict";e.r(a);var n=e(6),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[t._v("#")]),t._v(" Guide")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("Basic usage of the pagination component only requires the current page,\nthe total number of pages and a handler which is called on page change.")]),t._v(" "),e("p",[t._v("The pagination component "),e("strong",[t._v("does not handle page changes by itself")]),t._v(", instead\nyou are required to provide a page change handler which should contain\nall your page changing logic (e.g. a vuex store dispatch) and eventually\nchange the current page to the passed one. In later releases, a v-model\napproach to "),e("code",[t._v("currentPage")]),t._v(" may be offered, but was opted against for the time\nbeing.")]),t._v(" "),e("p",[t._v("Thus, to get a paginator with default settings (please consult the options listing\nbelow for details), the following markup and script sections provide a starting\npoint:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sliding-pagination")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":current")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currentPage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":total")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("totalPages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@page-change")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pageChangeHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sliding-pagination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SlidingPagination "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-sliding-pagination'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in component or vue instance")]),t._v("\ncomponents"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  SlidingPagination\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    currentPage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    totalPages"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmethods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pageChangeHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("selectedPage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentPage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selectedPage\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Additionally, the CSS for the component should be made available. Please refer to\nthe "),e("a",{attrs:{href:"#styling"}},[t._v("Styles customization section")]),t._v(" below")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ariaPaginationLabel")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("'Pagination navigation'")])]),t._v(" "),e("td",[t._v("ARIA label for the whole "),e("code",[t._v("<nav>")]),t._v(" area")])]),t._v(" "),e("tr",[e("td",[t._v("ariaGotoPageLabel")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("'Go to page %page% of %total%'")])]),t._v(" "),e("td",[t._v("ARIA label for a page link that is not the current page")])]),t._v(" "),e("tr",[e("td",[t._v("ariaPreviousPageLabel")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("'Go to previous page'")])]),t._v(" "),e("td",[t._v("ARIA label for the previous page action")])]),t._v(" "),e("tr",[e("td",[t._v("ariaNextPageLabel")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("'Go to next page'")])]),t._v(" "),e("td",[t._v("ARIA label for the next page action")])]),t._v(" "),e("tr",[e("td",[t._v("ariaCurrentPageLabel")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("'Page %current of %total, current page'")])]),t._v(" "),e("td",[t._v("ARIA label for the current page")])]),t._v(" "),e("tr",[e("td",[t._v("classMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),e("td",[e("a",{attrs:{href:"#class-map"}},[t._v("default class map")])]),t._v(" "),e("td",[t._v("CSS classes used by the components")])]),t._v(" "),e("tr",[e("td",[t._v("current")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("Integer representing the current page")])]),t._v(" "),e("tr",[e("td",[t._v("total")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("Integer representing the total number of pages")])]),t._v(" "),e("tr",[e("td",[t._v("slidingEndingSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[e("code",[t._v("2")])]),t._v(" "),e("td",[t._v("Number of always listed pages on the beginning and end")])]),t._v(" "),e("tr",[e("td",[t._v("slidingWindowSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[e("code",[t._v("3")])]),t._v(" "),e("td",[t._v("Number of pages in the sliding window")])]),t._v(" "),e("tr",[e("td",[t._v("nonSlidingSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[e("code",[t._v("9")])]),t._v(" "),e("td",[t._v("Number of pages before the paginator switches to sliding mode")])]),t._v(" "),e("tr",[e("td",[t._v("pageComponent")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("'sliding-pagination-default-page'")])]),t._v(" "),e("td",[t._v("Component name (must be registered) for the page elements")])])])]),t._v(" "),e("h2",{attrs:{id:"customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),e("p",[t._v("The component offers severals customization options.")]),t._v(" "),e("h3",{attrs:{id:"aria-labels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aria-labels"}},[t._v("#")]),t._v(" ARIA labels")]),t._v(" "),e("p",[t._v("All ARIA labels can be altered and localized.")]),t._v(" "),e("p",[t._v("The labels "),e("code",[t._v("ariaGoToPageLabel")]),t._v(" and "),e("code",[t._v("ariaCurrentPageLabel")]),t._v(" support\nthe following template variables:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("%total%")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[t._v("The total number of pages")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("%page%")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[t._v("The page under the cursor")])])])]),t._v(" "),e("h3",{attrs:{id:"intervals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intervals"}},[t._v("#")]),t._v(" Intervals")]),t._v(" "),e("p",[t._v("The number of pages shown on the beginning and ending of the pager\nas well as the number of pages in the pagination window can be changed\ndynamically. The break-point from normal to sliding-window pagination\ncan also be adjusted. "),e("strong",[t._v("Please bear in mind that none of these intervals\nand none of the calculations they are used in make any assertions on\nobviously impossible configurations!")])]),t._v(" "),e("p",[e("em",[t._v("What are obviously impossible configurations?")])]),t._v(" "),e("p",[t._v("Glad you're asking! For one, the rule of thumb should be\n"),e("code",[t._v("2 * slidingEndingSize + slidingWindowSize <= total")]),t._v(".\nHowever, as there is a fallback coated as "),e("code",[t._v("nonSlidingSize")]),t._v(' you can work around\nthis "limitation" with some ingenouity on your part. Basically, don\'t do stupid things\nthat disregards principles of natural numbers.')]),t._v(" "),e("h3",{attrs:{id:"page-navigation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-navigation"}},[t._v("#")]),t._v(" Page navigation")]),t._v(" "),e("p",[t._v("The content of the previous and next page elements are customizable via the\nslots "),e("code",[t._v("previous-page")]),t._v(" and "),e("code",[t._v("next-page")]),t._v('. By default, these only contain\nthe "pretend arrows" aka « and ». The contents of these slots\nare '),e("strong",[t._v("only intended for visual use")]),t._v(". Screenreader users are presented\nthe "),e("code",[t._v("ariaPreviousPageLabel")]),t._v(" and "),e("code",[t._v("ariaNextPageLabel")]),t._v(" instead.")]),t._v(" "),e("h3",{attrs:{id:"gaps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gaps"}},[t._v("#")]),t._v(" Gaps")]),t._v(" "),e("p",[t._v("Depending on the current page, there may be a gap between the sliding window and the\nbeginning and ending pages. The gap content defaults to … but can be\ncustomized "),e("strong",[t._v("for visual use")]),t._v(" under the same conditions as the page navigation with\nthe slots "),e("code",[t._v("gap-left")]),t._v(" and "),e("code",[t._v("gap-right")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"page-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-component"}},[t._v("#")]),t._v(" Page component")]),t._v(" "),e("p",[t._v("Since actual pages are the most active element of the whole pagination deal,\nthey have been implemented with the "),e("code",[t._v('<component :is="paginationComponent">')]),t._v(" pattern.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("SlidingPaginationDefaultPage")]),t._v(" component offers guidance into how a basic\ncomponent representing page elements should look like. It's unit test can\nbe used as a basis for unit testing custom page components.")]),t._v(" "),e("p",[t._v("The page component receives the following props:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ariaPageLabel")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",[t._v("The computed ARIA page label")])]),t._v(" "),e("tr",[e("td",[t._v("isCurrent")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",[t._v("Is the page the current page")])]),t._v(" "),e("tr",[e("td",[t._v("page")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",[t._v("The page number to display")])])])]),t._v(" "),e("p",[t._v("It is by no means required to implement all properties of the default page.\nA custom pagination component can usually just be implemented as render\nfunction, e.g.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ExamplePageComponent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    page"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-component'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sliding-pagination")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pagination-component")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example-page-component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sliding-pagination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("em",[t._v("Please keep in mind that the above example is absurdly simple for demonstration purposes\nand breaks the ARIA compatibility of the whole pagination component.")])]),t._v(" "),e("h3",{attrs:{id:"styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),e("p",[t._v("The CSS classes used in the component are following the "),e("a",{attrs:{href:"http://getbem.com/introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEM"),e("OutboundLink")],1),t._v("-Methodology,\nregarding "),e("strong",[t._v("only")]),t._v(" the component itself as a block and going downward from there, thus the\ncorresponding classes to interface elements are:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Interface element")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v(".c-sliding-pagination")]),t._v(" "),e("td",[t._v("The whole component i.e. the "),e("code",[t._v("<nav>")]),t._v(" container")])]),t._v(" "),e("tr",[e("td",[t._v(".c-sliding-pagination__list")]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("<ul>")]),t._v(" containing all navigational and page elements")])]),t._v(" "),e("tr",[e("td",[t._v(".c-sliding-pagination__list-element")]),t._v(" "),e("td",[t._v("Each "),e("code",[t._v("<li>")]),t._v(" representing either a navigational or a page element")])]),t._v(" "),e("tr",[e("td",[t._v(".c-sliding-pagination__list-element--active")]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("<li>")]),t._v(" representing the current page")])]),t._v(" "),e("tr",[e("td",[t._v(".c-sliding-pagination__list-element--disabled")]),t._v(" "),e("td",[t._v("Disabled navigational elements")])]),t._v(" "),e("tr",[e("td",[t._v(".c-sliding-pagination__page")]),t._v(" "),e("td",[t._v("The page element inside an "),e("code",[t._v("<li>")]),t._v(" (typically an "),e("code",[t._v("<a>")]),t._v(")")])])])]),t._v(" "),e("p",[t._v("To get the default styling, you may either add "),e("code",[t._v("dist/style/vue-sliding-pagination.css")]),t._v(" as a\nCSS asset to your page:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~vue-sliding-pagination/dist/style/vue-sliding-pagination.css"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),e("p",[t._v("For ease of customization, the original SCSS styling files are available in the distribution package\nin the "),e("code",[t._v("dist/style")]),t._v(" subdir, allowing quick and deep customization by utilizing the exposed variables\nand re-declaring classes:")]),t._v(" "),e("div",{staticClass:"language-scss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scss"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sliding-pagination-background-primary")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$background-primary")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sliding-pagination-background-secondary")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$background-secondary")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sliding-pagination-foreground-primary")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-foreground-primary")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sliding-pagination-foreground-secondary")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-foreground-secondary")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~vue-sliding-pagination/dist/style/sliding-pagination"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".c-sliding-pagination ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5em 0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"class-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-map"}},[t._v("#")]),t._v(" Class Map")]),t._v(" "),e("p",[t._v("If you need to adjust the class names inside the component, you can pass an object to reconfigure the "),e("code",[t._v("classMap")]),t._v("\nused to determine any CSS class inside the component.")]),t._v(" "),e("p",[t._v("Here are the defaults:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"componentClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c-sliding-pagination"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"list"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c-sliding-pagination__list"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"element"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c-sliding-pagination__list-element"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"elementDisabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c-sliding-pagination__list-element--disabled"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"elementActive"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c-sliding-pagination__list-element--active"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"page"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c-sliding-pagination__page"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);