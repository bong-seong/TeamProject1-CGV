let movieList=[
	{name:'방탄소년단: 옛 투 컴 인 시네마',			img:'방탄콘서트.jpg', egg: 99, 예매율: 32.1 },
	{name:'아바타-물의 길',						img:'아바타.jpg', egg: 96, 예매율: 31.0},
	{name:'더 퍼스트 슬램덩크',					img:'슬램덩크.jpg', egg: 97, 예매율: 11.6},
	{name:'타이타닉',							img:'타이타닉.jpg', egg: 99, 예매율: 7},
	{name:'바빌론',							img:'바빌론.jpg', egg: 85, 예매율: 5.9},
	{name:'상견니',							img:'상견니.jpg', egg: 81, 예매율: 4},
	{name:'교섭',								img:'교섭.jpg', egg: 81, 예매율: 3.2},
	{name:'유령',								img:'유령.jpg', egg: 83, 예매율: 1.9},
	{name:'메간',								img:'메간.jpg', egg: 88, 예매율: 1.9},
	{name:'영웅',								img:'영웅.jpg', egg: 0, 예매율: 1.3}
]

/*
	
*/

let eventList=[
	{ img: "필름마크.jpg", title: "CGV 필름마크 100th 기념! [파코니의 방구석 어드벤처]", date: "2023.01.30~2023.02.12"},
	{ img: "TIVING.jpg", title: "CGV x TVING 월정기 혜택 [CGV PLUS]", date: "2022.12.02~2032.12.02"},
	{ img: "바빌론_필름마크.jpg", title: "[바빌론] 필름마크", date: "2023.02.01~2023.02.28"}
]

let giftList=[
	{ img: "노란카드.jpg", toptext: "PACONNIE A형", bottext:"금액충전형"},
	{ img: "분홍카드.jpg", toptext: "PACONNIE B형", bottext:"금액충전형"},
	{ img: "까만카드.jpg", toptext: "PACONNIE C형", bottext:"금액충전형"}
]

let drinkList = [
	{ img: "탄산음료(M).jpg", toptext: "탄산음료(M)", bottext:2500 },
	{ img: "아메리카노(HOT).jpg", toptext: "아메리카노(HOT)", bottext:3500 },
	{ img: "아메리카노(ICE).jpg", toptext: "아메리카노(ICE)", bottext:4000 }
]

let snackList = [
	{ img: "칠리치즈나쵸.jpg", toptext: "칠리치즈나쵸", bottext:4900 },
	{ img: "플레인핫도그.jpg", toptext: "플레인핫도그", bottext:4500 },
	{ img: "오징어(완제품).jpg", toptext: "오징어(완제품)", bottext:3500 }
]


movieChart()
function movieChart(){
	
	let html = ''
	
	movieList.forEach( (obj)=>{
		
		html += `<div class="movie_item">
					<div class="img_box">
						<img src="img/${ obj.img }">
						<div class="movie_btn_box">
							<div class="btn_box">
							 	<a href="movie_view.html"><button type="button" class="bt1">상세보기</button></a>
							 	<a href="movie_view.html"><button type="button" class="bt2">예매하기</button></a>
						 	</div>
						 </div>
					</div>
					<div class="movie_title"> ${ obj.name } </div>
						<div class="movie_info_box">
						<div class="al"> <img src="img/main_page/황금알.png"> ${ obj.egg }% </div><div> 예매율 ${ obj.예매율 }% </div>
					</div>
				</div>`
	})
	
	document.querySelector('.movie_item_box').innerHTML = html
}


eventPrint()
function eventPrint(){
	
	let html = ""
	
	eventList.forEach( (obj)=>{
		
		html += `<div class="event_item_box">
					<div class="event_item"> 
						<img src="img/event/${obj.img}">
						<div class="event_title">${obj.title}</div>
						<div class="event_time">${obj.date}</div>
					</div>
				</div>`
				
	})
	document.querySelector('.event_item_area').innerHTML = html
}

giftPrint()
function giftPrint(){
	
	let html = ""
	
	giftList.forEach( (obj)=>{
		
		html += `<a href="store.html">
					<div class="store_item">
						<div class="item_img_box">
							<img src="img/main_page/${obj.img}">
						</div>
						<div class="store_item_text">
							<div class="store_tx1">${obj.toptext}</div>
							<div class="store_tx2">${obj.bottext}</div>
						</div>
					</div>
				</a>`
				
	})
	document.querySelector('.gift_box').innerHTML = html
}

drinkPrint()
function drinkPrint(){
	
	let html = ""
	
	drinkList.forEach( (obj)=>{
		
		html += `<a href="store.html">
					<div class="store_item">
						<div class="item_img_box">
							<img src="img/main_page/${obj.img}">
						</div>
						<div class="store_item_text">
							<div class="store_tx1">${obj.toptext}</div>
							<div class="store_tx2">${obj.bottext.toLocaleString()}원</div>
						</div>
					</div>
				</a>`
				
	})
	document.querySelector('.drink_box').innerHTML = html
}

snackPrint()
function snackPrint(){
	
	let html = ""
	
	snackList.forEach( (obj)=>{
		
		html += `<a href="store.html">
					<div class="store_item">
						<div class="item_img_box">
							<img src="img/main_page/${obj.img}">
						</div>
						<div class="store_item_text">
							<div class="store_tx1">${obj.toptext}</div>
							<div class="store_tx2">${obj.bottext.toLocaleString()}원</div>
						</div>
					</div>
				</a>`
				
	})
	document.querySelector('.snack_box').innerHTML = html
}






