(function($){__e=window.__e||[];var $w=$(window),$d=$(document),logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("article-layout-headjs"):window.console;var headjs={initLocalStorage:function(){var self=this;var setLocal=function(){try{localStorage.removeItem("__iabcd")}catch(e){}};if($("html.layout_article").length>0)setLocal()},init:function(){var self=this;this.initLocalStorage()}};if(wp_pb.StaticMethods.isPageHydrated())headjs.init();__e.push(["shamble",function(){headjs.init()}])})(jQuery);