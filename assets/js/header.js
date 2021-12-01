/**
* Template Name: common.js
* Author: inhyeok
* E-mail: ikwon@hist.co.kr
* Remark : 해당 프로젝트에서 사용하는 공통 js, css 파일을 로딩한다.
*/
(function() {
  "use strict";
  
const headerHtml = "<div class='container d-flex align-items-center'>"
				 + "<h1 class='logo me-auto'>"
				 + "<a href='main.html'>inno H.I</a>"
				 + "<a href='main.html' class='logo me-auto'><img src='../assets/img/innohi/innoHI_Logo_type2.png' alt='' class='img-fluid'></a>"
				 + "</h1>"
				 + "<nav id='navbar' class='navbar'>"
				 + "<ul>"
//				 + "<li><a class='nav-link scrollto active' href='main.html'>Home</a></li>"
				 + "<li class='dropdown'><a href='intro.html'><span>소개</span> <i class='bi bi-chevron-down'></i></a>"
				 	+ "<ul>"
				 		+ "<li><a href='intro.html#about'>innoH.I.소개</a></li>"
				 		+ "<li><a href='intro.html#what'>O.I 소개</a></li>"
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
				 + "<li><a class='getstarted scrollto' href='#'>협의체공간</a></li>"
				 + "</ul>"
				 + "<i class='bi bi-list mobile-nav-toggle'></i>"
				 + "</nav>"
				 + "</div>";

document.write(headerHtml);

})()