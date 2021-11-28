/**
* Template Name: common.js
* Author: inhyeok
* E-mail: ikwon@hist.co.kr
* Remark : 해당 프로젝트에서 사용하는 공통 js, css 파일을 로딩한다.
*/
(function() {
  "use strict";

  var api = {
		  googleMap : function() {
			  map = new google.maps.Map(document.getElementById("map"), {
			        center: { lat: -34.397, lng: 150.644 },
			        zoom: 8,
			      });
		  }
		  
  }
  
})()