
let category = [ "로그인" , "비회원 예매" , "비회원 예매확인" ]

loginTab()
//select_tab(0)
// 1. 로그인 탭 구성 함수
function loginTab(){
	
	let html = ""
	
	for( let i=0; i<category.length; i++ ){
		
		html += `<div class="tab_box" onclick="select_tab(${i})">${category[i]}</div>`
	}
	document.querySelector('.login_tab').innerHTML = html
}


let tab = 0
// 2. 로그인 탭 선택 함수
function select_tab( i ){
	
	let tabList = document.querySelectorAll('.tab_box')
	
	for( let j=0; j<category.length; j++ ){
		if( j == i ){
			tabList[j].classList.add('tab_box_select');
		}else{
			tabList[j].classList.remove('tab_box_select');
		}
	}
	tabPrint( i )
}


// 3. 탭 선택에 따른 html 출력
function tabPrint( i ){
	
	let html = ""
	
	if( i == 0 ){
		html += `<div class="login_box">
					<p>아이디 비밀번호를 입력하신후, 로그인 버튼을 클릭해 주세요.</p>
					<div class="login_input_box">
						<input type="text">
					</div>
					<div class="login_input_box">
						<input type="text">
					</div>
					<div class="login_btn_box">
						<button type="button">로그인</button>
					</div>
					<div class="login_function_box">
						<input type="checkbox">아이디 저장
						<div class="function_link_box">
							<a href="#">아이디 찾기&gt;</a>
							<a href="#">비밀번호 찾기&gt;</a>
						</div>
					</div>
					<div class="naver_btn_box">
						<a href="https://naver.com"><img src="img/login/btn_loginNaver.jpg"></a>
					</div>
				</div>
				
				<div class="cj_one_box">
					<p><span>CJ ONE 회원이 아니신가요?</span> 회원가입하시고 다양한 혜택을 누리세요!</p>
					<div class="cj_one_btn_box">
						<a href="#">
							<button> CJ ONE 회원가입하기 </button>
						</a>
					</div>
				</div>`
	}else if( i == 1 ){
		html += ''
	}else{
		html += ''
	}
	
	document.querySelector('.login_box_js').innerHTML = html;
}





