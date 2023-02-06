
let category = [ "로그인" , "비회원 예매" , "비회원 예매확인" ]

loginTab()
select_tab(0)
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
	let resizing = document.querySelector('.login_main_box')
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
						<button onclick="join_member()"> CJ ONE 회원가입하기 </button>
					</div>
				</div>
				<div class="join_member_modal">
						<div class="join_main_box">
							<div class="join_box_top">
								<div class="join_title">회원가입</div>
								<div onclick="join_cancle()" class="join_cancle">X</div>
							</div>
							<table class="join_table">
								<thead>
									<tr>
										<th colspan="2">모든 항목은 필수 입력사항입니다.</th>
									</tr>						
								</thead>
								<tbody>
									<tr>
										<td width="25%">법정생년월일(8자리)</td>
										<td width="75%" class="birth"><input type="text"></td>
									</tr>
									<tr>
										<td>휴대폰번호</td>
										<td class="phone_num">
											<select>
												<option>010</option>
												<option>011</option>
												<option>016</option>
												<option>017</option>
												<option>018</option>
												<option>019</option>
											</select>
											- <input type="text"> -
											<input type="text">
											<button type="button">인증번호받기</button>
										</td>
									</tr>
									<tr>
										<td>인증번호(4자리)</td>
										<td class="auth_num">
											<input type="text">
											<button type="button">인증확인</button>
										</td>
									</tr>
									<tr>
										<td>비밀번호(4자리)</td>
										<td class="temp_pwd"><input type="password"></td>
									</tr>
									<tr>
										<td>비밀번호확인</td>
										<td class="temp_pwd_check"><input type="password"></td>
									</tr>
									<tr>
										<td colspan="2" class="join_btn">
											<button type="button" onclick="join_cancle()"> 가입하기 </button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>				
				</div>`
				
		document.querySelector('.login_box_js').innerHTML = html;
		document.querySelector('.none_member_box').innerHTML = '';
		document.querySelector('.none_mb_tk_check').innerHTML = '';
		resizing.classList.remove('login_main_box_none_member')
	}else if( i == 1 ){
		html += `<div class="none_meber_top">
					<h3><span>STEP 1</span>개인정보 수집 및 이용동의</h3>
					<p>비회원 예매 고객께서는 먼저 개인정보 수집 및 이용 동의 정책에 동의해 주셔야 합니다.</p>
					<table>
						<thead>
							<tr>
								<th width="15%">항목</th>
								<th width="40%">이용목적</th>
								<th width="30%">보유기간</th>
								<th width="15%">동의여부</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>법정생년월일, 휴대폰번호, 비밀번호</td>
								<td>· 비회원 예매서비스 제공<br/>· 이용자식별, 요금정산, 추심, 신규서비스 개발, 접속빈도 파악 등</td>
								<td>관람 또는 취소 후 1주일 까지</td>
								<td class="agreed_td">
									<input type="radio" name="agreed" value="1" checked>동의함	<br/>
									<input type="radio" name="agreed" value="0">동의안함
								</td>
							</tr>
						</tbody>
					</table>
					<p class="notice">※ CGV 비회원 예매 서비스 제공을 위해 필요한 최소한의 개인정보이므로 입력(수집)에 동의하시지 않을 경우 서비스를 이용하실 수 없습니다.</p>
					<div class="personal_info_btn">
						<button type="button"> 개인정보처리(취급)방침전문보기 </button>
					</div>
				</div>
				<div class="none_meber_bottom">
					<h3><span>STEP 2</span>개인정보(휴대폰번호,법정생년월일,비밀번호) 입력</h3>
					<p>개인정보를 잘못 입력하시면 예매내역 확인/취소 및 티켓 발권이 어려울 수 있으니, 입력하신 정보를 다시 한번 확인해주시기 바랍니다.</p>
					<div class="personal_info_box">
						<div class="personal_info_title"> 개인정보 입력 </div>
						<table>
							<thead>
								<tr>
									<th colspan="2">모든 항목은 필수 입력사항입니다.</th>
								</tr>						
							</thead>
							<tbody>
								<tr>
									<td width="15%">법정생년월일(8자리)</td>
									<td width="85%" class="birth"><input type="text"></td>
								</tr>
								<tr>
									<td>휴대폰번호</td>
									<td class="phone_num">
										<select>
											<option>010</option>
											<option>011</option>
											<option>016</option>
											<option>017</option>
											<option>018</option>
											<option>019</option>
										</select>
										- <input type="text"> -
										<input type="text">
										<button type="button">인증번호받기</button>
									</td>
								</tr>
								<tr>
									<td>인증번호(4자리)</td>
									<td class="auth_num">
										<input type="text">
										<button type="button">인증확인</button>
									</td>
								</tr>
								<tr>
									<td>비밀번호(4자리)</td>
									<td class="temp_pwd"><input type="password"></td>
								</tr>
								<tr>
									<td>비밀번호확인</td>
									<td class="temp_pwd_check"><input type="password"></td>
								</tr>
							</tbody>
						</table>
						<button type="button" class="ticketing_btn">비회원 예매하기</button>
					</div>
					<div class="none_mb_noti_box">
						<p>비회원 <br/>예매 시<br/>참고하세요!</p>
						<ol>
							<li>위 정보 수집 및 이용에 동의하지 않을 경우, 비회원 예매 서비스를 이용하실 수 없습니다.</li>
							<li>비회원 예매 시 청소년 관람불가 영화는 예매가 제한됩니다.</li>
							<li>만 14세 미만 고객은 비회원으로 예매하실 수 없습니다.</li>
							<li>비회원 예매 결제수단은 신용카드만 가능하며 모든 제휴상품권, 쿠폰, 영화예매권 등은 회원 예매 서비스 이용 시 사용 가능합니다.</li>
							<li>ARS에서는 취소가 불가능하며, 홈페이지/모바일을 이용하여 취소 처리하실 수 있습니다.</li>
							<li>비회원 예매 및 예매 확인/취소 메뉴만 이용 가능합니다. 그 외 서비스는 회원 가입 후 이용해 주십시오.</li>
							<li>문의 사항은 CGV고객센터(1544-1122)로 문의해 주시기 바랍니다. (평일 9:00~18:00)</li>
						</ol>
					</div>
				</div>`
		document.querySelector('.none_member_box').innerHTML = html;
		document.querySelector('.login_box_js').innerHTML = '';
		document.querySelector('.none_mb_tk_check').innerHTML = '';
		resizing.classList.add('login_main_box_none_member')
	}else{
		html += `<div class="none_mb_tk_check_top">
					<h3>비회원 예매 확인</h3>
					<p class="mb_tk_check_noti">비회원으로 예매하신 고객님은 개인정보(법정생년월일, 휴대폰 번호, 비밀번호(4자리))를 입력해 주세요.</p>
					<table class="tk_check_main_table">
						<thead class="mb_tk_table_h">
							<tr>
								<th width="50%">비회원 예매확인</th>
								<th width="50%">비회원 예매 비밀번호 찾기</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td  class="info_table_td">
									<table class="tk_check_table">
										<thead class="tk_check_table_head">
											<tr>
												<th colspan="2">모든 항목은 필수 입력사항입니다.</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td width="30%">법정생년월일(8자리)</td>
												<td width="70%" class="birth"><input type="text"></td>
											</tr>
											<tr>
												<td>휴대폰번호</td>
												<td class="phone_num">
													<select>
														<option>010</option>
														<option>011</option>
														<option>016</option>
														<option>017</option>
														<option>018</option>
														<option>019</option>
													</select>
													- <input type="text"> -
													<input type="text">
												</td>
											</tr>
											<tr>
												<td>비밀번호(4자리)</td>
												<td class="temp_pwd"><input type="password"></td>
											</tr>
											<tr>
												<td colspan="2" class="table_check_btn_box">
													<button type="button">비회원 예매확인</button>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td class="pwd_find_box">
									<p>비회원 예매 시, 입력한 휴대폰 번호로 SMS인즐을 하면 비회원 예매 비밀번호를 찾으실수 있습니다.<br/></p>
									<button type="button">휴대폰 SMS인증으로 찾기</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="none_mb_noti_box">
					<p>비회원 <br/>예매 시<br/>참고하세요!</p>
					<ol>
						<li>상기 정보 수집에 동의하지 않을 경우, 비회원 예매 서비스를 이용하실 수 없습니다.</li>
						<li>비회원 예매 시 청소년 관람불가 영화는 예매가 제한됩니다.</li>
						<li>비회원 예매 결제수단은 신용카드만 가능하며 모든 제휴상품권, 쿠폰, 영화예매권 등은 회원 예매 서비스 이용 시 사용 가능합니다.</li>
						<li>모바일과 ARS에서는 취소가 불가능하며, 홈페이지를 이용하여 입력하신 로그인 정보로 취소 처리하실 수 있습니다.</li>
						<li>비회원 예매 및 비회원 예매 확인/취소 메뉴만 이용 가능합니다. 이 외에 커뮤니티, 댓글, 인정 등의 서비스는 회원 가입 후 이용 가능합니다.</li>
						<li>문의 사항은 CGV고객센터(1544-1122)로 문의해 주시기 바랍니다.</li>
						<li class="time_noti">- 운영시간 : 월~금 09:00 ~ 18:00 (이 외 시간은 자동 응답 안내 가능)</li>
					</ol>
				</div>`
		document.querySelector('.none_mb_tk_check').innerHTML = html
		document.querySelector('.login_box_js').innerHTML = '';
		document.querySelector('.none_member_box').innerHTML = '';
		resizing.classList.add('login_main_box_none_member')
	}
		
}

function join_member(){
	document.querySelector('.join_member_modal').style.display='flex'
}

function join_cancle(){
	document.querySelector('.join_member_modal').style.display='none'
}









