innity_ad_url="ps.innity.com";innity_ad_url=document.location.protocol=="https:"?"https://"+innity_ad_url+"/zone/?":"http://"+innity_ad_url+"/zone/?";innity_ad_url+="cb="+new Date().getTime();innity_append_url("zone",innity_zone);document["sync"+innity_zone]&&(innity_append_url("sync",document["sync"+innity_zone]));innity_rc("innity.iBCP")&&(innity_append_url("bcp",innity_rc("innity.iBCP")));document.write('<scr'+'ipt type="text/javascr'+'ipt" src="'+innity_ad_url+'"></scr'+'ipt>');function innity_append_url(param,value){value&&(innity_ad_url+="&"+param+"="+value);};function innity_rc(param){return(document.cookie.match('(^|; )'+param+'=([^;]*)')||0)[2];};function innity_sc(param,value){var d=document.domain;if(d!=""){var p=d.split("."),i=0,e=new Date();e.setTime(e.getTime()+365*24*60*60*1000);for(value=encodeURIComponent(value);i<p.length-1&& -1==document.cookie.indexOf(param+"="+param);){d=p.slice(-1- ++i).join("."),document.cookie=param+"="+value+";expires="+e.toUTCString()+";domain="+d+";path=/";}document.cookie=param+"="+value+";expires="+e.toUTCString()+";domain="+d+";path=/";}}