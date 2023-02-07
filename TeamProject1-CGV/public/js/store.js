let categoryList = [  '콤보' , '팝콘' , '음료' , '스낵' , '영화관람권' , '기프트카드' , '지점한정메뉴' ]
let productList = [
	{ category: '콤보' , name : '더블콤보' , text : `콜라M2+팝콘M2` , price : 11000 , img : 'img/store/더블콤보.png' },
	{ category: '콤보' , name : '러브콤보' , text : `콜라M2+팝콘L1` , price : 12000 , img : 'img/store/러브콤보.png' },
	{ category: '콤보' , name : '핫도그콤보' , text : `콜라M2+팝콘M2+핫도그1` , price : 13000 , img : 'img/store/핫도그콤보.png'	},
	{ category: '콤보' , name : '나쵸콤보' , text : `콜라M2+팝콘M2+나쵸1` , price : 14000 , img : 'img/store/나쵸콤보.png' } ,
	{ category: '콤보' , name : '맛밤콤보' , text : `콜라M2+팝콘M2+맛밤1` , price : 14000 , img : 'img/store/맛밤콤보.png' }, 
	{ category: '스낵' , name : '핫도그' , text : `핫도그 ×1` , price : 7000 , img : 'img/store/핫도그.png' } ,
	{ category: '스낵' , name : '나쵸' , text : `나쵸 ×1` , price : 7000 , img : 'img/store/나쵸.png' } ,
	{ category: '스낵' , name : '맛밤' , text : `맛밤 ×1` , price : 5000 , img : 'img/store/맛밤.png' },
	{ category: '팝콘' , name : '팝콘M' , text : `팝콘M ×1` , price : 8000 , img : 'img/store/팝콘M.png' },
	{ category: '팝콘' , name : '팝콘L' , text : `팝콘L ×1` , price : 9000 , img : 'img/store/팝콘L.png' },
	{ category: '음료' , name : '콜라' , text : `콜라` , price : 3000 , img : 'img/store/콜라.png' } ,
	{ category: '음료' , name : '아메리카노' , text : `아메리카노` , price : 4000 , img : 'img/store/아메리카노.png' },
	{ category: '영화관람권' , name : '영화관람권' , text : `영화관람권 1매` , price : 14000 , img : 'img/store/영화관람권.png' },
	{ category: '기프트카드' , name : '기프트카드1' , text : `기프트카드 1매` , price : 14000 , img : 'img/store/기프트카드.png' },
	{ category: '기프트카드' , name : '기프트카드2' , text : `기프트카드 1매` , price : 14000 , img : 'img/store/기프트카드2.png' },
	{ category: '지점한정메뉴' , name : '[서울]라면팩' , text : `콜라M2+라면1` , price : 9000 , img : 'img/store/서울지점전용라면팩.png' },
	{ category: '지점한정메뉴' , name : '[서울]짜장라면팩' , text : `콜라M2+짜장라면1` , price : 10000 , img : 'img/store/서울지점전용짜장라면팩.png' }
]
// 객체배열
let cartListArray = []; let orderListArray = [];
//전역변수
let totalPrice = 0;
//객체화
let modal_wrap =  document.querySelector('.modal_wrap') //모달배경div
//js실행시 함수실행
category_print(); product_print(0);

function category_print(){ // 카테고리 출력 함수
	// html 선언
	html = ''
		// 객체의 카테고리 하나씩 꺼내기
	for ( let i = 0 ; i < categoryList.length ; i++ ){
		html += `
			<li class="category_li" onclick="product_print(${i})">${categoryList[i]}</li>
			`
		console.log( " i  : " + i )
	}
	// 카테고리 html출력
	document.querySelector('.categoryUl').innerHTML = html;
	
	
}

function product_print(i){ // 카테고리별 제품출력 함수
	console.log( "categoryList 인덱스 : " + i )
	
	//카테고리 전부 가져오기 돔객체화 
	let categoryLi = document.querySelectorAll('.category_li')
	console.log( categoryLi[i] )
	
	for ( let c = 0 ; c < categoryLi.length ; c++ ){
		if ( c == i ){
			categoryLi[c].classList.add('categoryliPoint');
		} else {
			categoryLi[c].classList.remove('categoryliPoint');
		}
	}
	
	
	// html 선언
	html = '';
	html2 = ``;
	html2 = categoryList[i];
	document.querySelector('.p_head').innerHTML = html2;
	// 객체 하나씩 꺼내기
	for ( let j = 0 ; j < productList.length ; j++ ){
			// j는 0부터 productList 마지막 인덱스번호까지
		if ( productList[j].category == categoryList[i]  ){
		// html 추가
		html += `
			<div class="product" onclick="cartList_print(${j})">
				<img class="product_img" alt="" src="${productList[j].img}">
				<div class="product_title">${productList[j].name}</div>
				<div class="product_text">${productList[j].text}</div>
				<div class="product_price">${productList[j].price.toLocaleString()}원</div>
			</div>
			`
		} 
	}
	// 카테고리 html출력
	document.querySelector('.productDiv').innerHTML = html;
}

// 제품을 클릭하면 장바구니에 담기는 함수
function cartList_print(j){
	//장바구니에 제품 담기
	let html = '';
	console.log( ' cartList_print 함수 실행')
	html += `
			<div class="basket_product">
				<img class="imgDiv" alt="" src="${productList[j].img}">
				<div class="basket_pinfo">
					<div class="binfo_title">${productList[j].name}</div>
					<div class="binfo_price">${productList[j].price.toLocaleString()}원</div>
				</div>
			</div>
			`
	document.querySelector('.basket_bottom').innerHTML += html;
	cartListArray.push(productList[j])
	
	// 장바구니 추가한 제품 개수 출력
	// 총 금액 출력
	cartCount_Total();
}

// 장바구니 추가한 제품 개수 출력
// 총 금액 출력
function cartCount_Total(){
	
	let basketNum = 0;
	totalPrice = 0;
	for ( let c = 0 ; c < cartListArray.length ; c++ ){
		basketNum++
		let price = cartListArray[c].price;
		totalPrice += price;
	}
	document.querySelector('.basketNum').innerHTML = basketNum;
	document.querySelector('.totalPrice').innerHTML = totalPrice.toLocaleString()+" 원";
}

//결제하기 버튼 누르면 [ 1.orderList에 cartList배열 push / 2. 결제정보 모달 출력 / 
function order(){
	
	// 유효성검사
	if ( cartListArray.length < 1 ){ alert("장바구니가 비어있습니다."); return; }
	
	// 1.orderList에 cartList객체배열 push
	let order = {
		time : new Date() ,
		products : cartListArray ,
		total : totalPrice.toLocaleString()
	}
	orderListArray.push(order)
	console.log("orderListArray")
	console.log(orderListArray)
	
	// 2. 숨겼던 모달 나타나기
	modal_wrap.style.display = 'flex'
	
	// 3. 모달에 orderList내의 결제내역 출력
	let html = '';
	html += `
				<tr> <th>극장명</th> <td>CGVOX</td> </tr>
			`	
	html += `
					<tr> <th class="tableLine2">제품명</th> <td class="tableLine2">
				`
	/*------------------------------------------------------------*/
	// 제품이름,주문개수  html에 추가
	
	for ( let o = 0 ; o < productList.length ; o++ ){
		if ( count(o) != 0 ){
		html += productList[o].name + 'x' + count(o) + '개 <br>'
		}
	}
	function count(o){
		let count = 0;
			for ( let i = 0 ; i < orderListArray[0].products.length ; i++){
				if ( productList[o].name == orderListArray[0].products[i].name){
					count++ 
				}
			}
			return count;
	}
	
	html += `</td> </tr>`
	/*------------------------------------------------------------*/
	//주문시간  html에 추가
	new Date().getHours()
	new Date().getMinutes()
	new Date().getSeconds()
	let year = orderListArray[0].time.getFullYear()
	let month = orderListArray[0].time.getMonth()+1
	let date = orderListArray[0].time.getDate()
	let hours = orderListArray[0].time.getHours()
	let minutes = orderListArray[0].time.getMinutes()
	let seconds = orderListArray[0].time.getSeconds()
		
	html += `<tr> <th>결제시간</th> <td>`
	html += year+"년"+month+"월"+date+"일 "+hours+"시"+minutes+"분"+seconds+"초"
	html += `</td> </tr>`
	/*------------------------------------------------------------*/
	// 총금액 html에 추가
	html += `<tr> <th>결제금액</th> <td>${orderListArray[0].total}원</td> </tr>`
	/*------------------------------------------------------------*/
	// html 출력
	document.querySelector('.ordertable').innerHTML = html;
	cartListArray = []
	orderListArray = []
	product_print(0);
	
	//장바구니 비우기
	document.querySelector('.basket_bottom').innerHTML = ''
	
	// 장바구니 추가한 제품 개수 출력
	// 장바구니 총 금액 출력
	cartCount_Total();
}

//닫기 버튼 이벤트리스너
let close = document.querySelector('.close')
close.addEventListener('click',(e)=>{
	console.log('클로즈이벤트리스너실행')
	modal_wrap.style.display = 'none'
})

let cancel = document.querySelector('.cancel')
cancel.addEventListener('click',(e)=>{
   console.log('클로즈이벤트리스너실행')
   modal_wrap.style.display = 'none'
})