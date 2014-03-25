var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["*.xda-developers.com"],
  contentScriptWhen: 'ready',
  contentScript: 'while (document.getElementById("ad-billboard-bottom")) {document.getElementById("ad-billboard-bottom").parentNode.removeChild(document.getElementById("ad-billboard-bottom"));}'+
				 'while (document.getElementById("page_rightPane")) {document.getElementById("page_rightPane").parentNode.removeChild(document.getElementById("page_rightPane"));}'+
				 'while (document.getElementById("ad-one")) {document.getElementById("ad-one").parentNode.removeChild(document.getElementById("ad-one"));}'+
				 'while (document.getElementById("xda_footer")) {document.getElementById("xda_footer").parentNode.removeChild(document.getElementById("xda_footer"));}'+
				 'while (document.getElementById("xda_header_social")) {document.getElementById("xda_header_social").parentNode.removeChild(document.getElementById("xda_header_social"));}'+
				 'while (document.getElementById("xda_header_latest")) {document.getElementById("xda_header_latest").parentNode.removeChild(document.getElementById("xda_header_latest"));}'+
				 'while (document.querySelector(".threadtoolsSocial")) {document.querySelector(".threadtoolsSocial").parentNode.removeChild(document.querySelector(".threadtoolsSocial"));}'+
				 'while (document.querySelector(".posterInfo")) {document.querySelector(".posterInfo").parentNode.removeChild(document.querySelector(".posterInfo"));}'+
				 'while (document.querySelector(".postsig")) {document.querySelector(".postsig").parentNode.removeChild(document.querySelector(".postsig"));}'+
				 'while (document.querySelector("[width=\'300px\']")) {document.querySelector("[width=\'300px\']").parentNode.removeChild(document.querySelector("[width=\'300px\']"));}'+
				 'while (document.querySelector("[id^=div-gpt]")) {document.querySelector("[id^=div-gpt]").parentNode.removeChild(document.querySelector("[id^=div-gpt]"));}'+
		         ''
});

//topcontainbox