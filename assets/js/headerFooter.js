/**
* Template Name: headerFooter.js
* Author: inhyeok
* E-mail: ikwon@hist.co.kr
* Remark : 해당 프로젝트에서 사용하는 공통 header, footer html을 로딩한다.
*/
(function() {
  "use strict";

	const commonGrid = {

		headerHtml : "<div class='container d-flex align-items-center'>"
					+ "<h1 class='logo me-auto'>"
					+ "<a href='main.html'>inno H.I</a>"
					+ "<a href='main.html' class='logo me-auto'><img src='../assets/img/innohi/innoHI_Logo_type2.png' alt='' class='img-fluid'></a>"
					+ "</h1>"
					+ "<nav id='navbar' class='navbar'>"
					+ "<ul>"
	//				 + "<li><a class='nav-link scrollto active' href='main.html'>Home</a></li>"
					+ "<li class='dropdown'><a href='intro.html'><span>소개</span> <i class='bi bi-chevron-down'></i></a>"
						+ "<ul>"
							+ "<li><a href='intro.html#about'>INNO H.I.소개</a></li>"
							+ "<li><a href='intro.html#what'>발자취</a></li>"
							+ "<li><a href='intro.html#eco'>스타트업 생태계</a></li>"
							+ "<li><a href='intro.html#faq'>자주 묻는 질문</a></li>"
						+ "</ul>"
					+ "</li>"
					+ "<li class='dropdown'><a href='program.html'><span>프로그램</span><i class='bi bi-chevron-down'></i></a>"
						+ "<ul>"
							+ "<li class='dropdown'><a href='program.html#'><span>DFS(Deal Flow Session)</span> <i class='bi bi-chevron-down'></i></a>"
								+ "<ul>"
									+ "<li><a href='program.html#about'>DFS 란?</a></li>"
									+ "<li><a href='#'>DFS 적용 과정</a></li>"
									+ "<li><a href='#'>산업별 적용사례</a></li>"
								+ "</ul>"
							+ "</li>"
							+ "<li><a href='startup.html#'>스타트업 아카이브</a></i>"
						+ "</ul>"
					+ "</li>"
					
					+ "<li><a class='nav-link scrollto' style='display:none;' href='startup1.html'>스타트업 찾기</a></li>"
					+ "<li><a class='nav-link scrollto' href='event.html'>이벤트</a></li>"
					+ "<li class='dropdown'><a href='#'><span>커뮤니티</span> <i class='bi bi-chevron-down'></i></a>"
					+ "<ul>"
					+ "<li><a href='newsletter.html'>OI 뉴스레터</a></li>"
					+ "<li><a href='https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform'>문의 및 제안하기</a></li>"
		//			 + "<li class='dropdown'><a href='#'><span>Deep Drop Down</span> <i class='bi bi-chevron-right'></i></a>"
					+ "<ul>"
					//  + "<li><a href='#'>Deep Drop Down 1</a></li>"
					//  + "<li><a href='#'>Deep Drop Down 2</a></li>"
					//  + "<li><a href='#'>Deep Drop Down 3</a></li>"
					//  + "<li><a href='#'>Deep Drop Down 4</a></li>"
					//  + "<li><a href='#'>Deep Drop Down 5</a></li>"
					+ "</ul>"
					+ "</li>"
					//  + "<li><a href='#'>Drop Down 2</a></li>"
					//  + "<li><a href='#'>Drop Down 3</a></li>"
					//  + "<li><a href='#'>Drop Down 4</a></li>"
					+ "</ul>"
					+ "</li>"
				//	 + "<li><a class='nav-link scrollto' href='#contact'>Contact</a></li>"
					+ "<li><a class='getstarted' onClick=''>협의체공간</a></li>"
					+ "</ul>"
					+ "<i class='bi bi-list mobile-nav-toggle'></i>"
					+ "</nav>"
					+ "</div>",

		footerHtml : "<div class='footer-top'>"
					+ "<div class='container'>"
					+ "<div class='row'>"
						+ "<div class='col-lg-3 col-md-6 footer-contact'>"
						   + "<h3><img src='../assets/img/clients/hist.png' class='img-fluid' style='width: 175px;'alt=''></h3>"
						   + "<p>"
						   + "한진정보통신 주식회사<br> 대표자명: 박은호<br> 사업자등록번호: 201-81-46253 <br>서울시 강서구 공항대로 453(등촌동)"
						   + "</p>"
						   + "</div>"
						   + "<div class='col-lg-3 col-md-6 footer-links'>"
						   + "<h4>Useful Links</h4>"
						   + "<ul>"
							   + "<li><i class='bx bx-chevron-right'></i> <a href='https://www.hist.co.kr/'>회사소개</a></li>"
							   + "<li><i class='bx bx-chevron-right'></i> <a href='https://www.hist.co.kr/contact-us/'>찾아오시는길</a></li>"
							   + "<li><i class='bx bx-chevron-right'></i> <a href='https://www.hist.co.kr/contact-us/'>제휴문의</a></li>"
						   + "</ul>"
						   + "</div>"
						   + "<div class='col-lg-3 col-md-6 footer-links'>"
						   + "<h4>Our Services</h4>"
						   + "<ul>"
							   + "<li><i class='bx bx-chevron-right'></i> <a href='https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform'>문의 및 제안하기</a></li>"
							   + "<li><i class='bx bx-chevron-right'></i> <a href='#'>Web Design</a></li>"
						   + "</ul>"
						   + "</div>"
						   + "<div class='col-lg-3 col-md-6 footer-links'>"
						   + "<h4>Our Social Networks</h4>"
						   + "<p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>"
						   + "<div class='social-links mt-3'>"
							   + "<a href='#' class='twitter'><i class='bx bxl-twitter'></i></a>"
						   + "</div>"
						   + "</div>"
					   + "</div>"
					   + "</div>"
					   + "</div>"
					   + "<div class='container footer-bottom clearfix'>"
					   + "<div class='copyright'>"
					   +"Copyright &copy;2021 <strong><span>Hanjin Information Systems & Telecommunication</span></strong>. Co., Ltd. All rights Reserved."
					   +"</div>"
					+ "<div class='credits'>"
				   //	+ "Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>"
					+ "</div>"
					+ "</div>",

		headerFooterGrid: function () {
			document.querySelector("#header").insertAdjacentHTML("beforeend", commonGrid.headerHtml);
			document.querySelector("#footer").insertAdjacentHTML("beforeend", commonGrid.footerHtml);
		}
	}

	commonGrid.headerFooterGrid();
})()