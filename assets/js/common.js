/**
* Template Name: common.js
* Author: inhyeok
* E-mail: ikwon@hist.co.kr
* Remark : 해당 프로젝트에서 사용하는 공통 js, css 파일을 로딩한다.
*/
(function() {
  "use strict";

//  /**
//   * Easy selector helper function
//   */
//  const select = (el, all = false) => {
//    el = el.trim()
//    if (all) {
//      return [...document.querySelectorAll(el)]
//    } else {
//      return document.querySelector(el)
//    }
//  };
  
	var common = {
		jsFileList: [

			// Vendor JS Files
			"../assets/vendor/aos/aos.js"
			, "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
			, "../assets/vendor/glightbox/js/glightbox.min.js"
			, "../assets/vendor/isotope-layout/isotope.pkgd.min.js"
			, "../assets/vendor/php-email-form/validate.js"
			, "../assets/vendor/swiper/swiper-bundle.min.js"
			, "../assets/vendor/waypoints/noframework.waypoints.js"
			, "../assets/vendor/jquery/jquery.js"

			// Template Main JS File
			, "../assets/js/main.js"

			// DataTables JS File
			, "../assets/vendor/datatables/jquery.dataTables.min.js"
			, "../assets/vendor/datatables/dataTables.bootstrap4.min.js"

			// Fullcalendar JS File
			, "../assets/vendor/fullcalendar/main.js"
		]

		, cssFileList: [

			// Vendor CSS Files
			"../assets/vendor/aos/aos.css"
			, "../assets/vendor/bootstrap/css/bootstrap.min.css"
			, "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
			, "../assets/vendor/boxicons/css/boxicons.min.css"
			, "../assets/vendor/glightbox/css/glightbox.min.css"
			, "../assets/vendor/remixicon/remixicon.css"
			, "../assets/vendor/swiper/swiper-bundle.min.css"

			// Template Main CSS File
			, "../assets/css/style.css"
			, "../assets/css/custom.css"

			// DataTables CSS File
			, "../assets/vendor/datatables/dataTables.bootstrap4.min.css"

			// Fullcalendar CSS File
			, "../assets/vendor/fullcalendar/main.css"
		]

		, etcFileList: [

			// Favicons
			"<link href='../assets/img/icon_hist.ico' rel='icon'>"
			// , "<link href='../assets/img/apple-touch-icon.png' rel='apple-touch-icon'>"

			// Google Fonts
//			, "<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' rel='stylesheet'>"
			, "<link href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap' rel='stylesheet'>"

		]
	}
  
  var jsWebpack = (common) => {
	  var loadingList = "";
	  
	//   common.jsFileList.forEach(e =>{
	// 	  loadingList += "<script type=\"text/javascript\" src=\"" +e+ "\" charset=\"UTF-8\"></script>";
	//   });
	  
	   common.cssFileList.forEach(e =>{
	 	  loadingList += "<link rel=\"stylesheet\" href=\"" +e+ "\">";
	   });
	  
	   common.etcFileList.forEach(e =>{
	 	  loadingList += e;
	   });
	  
	  document.write(loadingList);
  }
  
  jsWebpack(common);
  
  

//   <!-- Vendor CSS Files -->
//     <link href="../assets/vendor/aos/aos.css" rel="stylesheet">
//     <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
//     <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
//     <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
//     <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
//     <link href="../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
//     <link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
//     <link href="../assets/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
//     <link href="../assets/vendor/fullcalendar/main.css" rel="stylesheet">

//     <!-- Template Main CSS File -->
//     <link href="../assets/css/style.css" rel="stylesheet">
//     <link href="../assets/css/custom.css" rel="stylesheet">
  
//     <!-- Favicons -->
//     <link href="../assets/img/favicon.png" rel="icon">
//     <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  
//     <!-- Google Fonts -->
//     <link
//       href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
//       rel="stylesheet"></link>

})()