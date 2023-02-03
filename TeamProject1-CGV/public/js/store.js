console.log('js실행')

let categoryList = [  '콤보' , '팝콘' , '음료' , '스낵' , '영화관람권' , '기프트카드' , '플레이존' ]

let productList = [
	
	{ category: '콤보' , name : '더블콤보' , text : `더블콤보텍스트` , price : 11000 , img : 'img/store/더블콤보.png' },
	{ category: '콤보' , name : '러브콤보' , text : `스위트콤보텍스트` , price : 12000 , img : 'img/store/러브콤보.png' },
	{ category: '콤보' , name : '핫도그콤보' , text : `스몰세트텍스트` , price : 13000 , img : 'img/store/핫도그콤보.png'	},
	{ category: '콤보' , name : '나쵸콤보' , text : `CGV콤보텍스트` , price : 14000 , img : 'img/store/나쵸콤보.png' } ,
	{ category: '콤보' , name : '맛밤콤보' , text : `CGV콤보텍스트` , price : 14000 , img : 'img/store/맛밤콤보.png' }, 
	{ category: '스낵' , name : '핫도그' , text : `핫도그텍스트` , price : 7000 , img : 'img/store/핫도그.png' } ,
	{ category: '스낵' , name : '나쵸' , text : `나쵸텍스트` , price : 7000 , img : 'img/store/나쵸.png' } ,
	{ category: '스낵' , name : '맛밤' , text : `맛밤텍스트` , price : 7000 , img : 'img/store/맛밤.png' },
	{ category: '팝콘' , name : '팝콘M' , text : `팝콘M텍스트` , price : 8000 , img : 'img/store/팝콘M.png' },
	{ category: '팝콘' , name : '팝콘L' , text : `팝콘L텍스트` , price : 9000 , img : 'img/store/팝콘L.png' },
	{ category: '음료' , name : '콜라' , text : `콜라텍스트` , price : 9000 , img : 'img/store/콜라.png' } ,
	{ category: '음료' , name : '아메리카노' , text : `아메리카노텍스트` , price : 4000 , img : 'img/store/아메리카노.png' },
	{ category: '영화관람권' , name : '영화관람권' , text : `영화관람권텍스트` , price : 14000 , img : 'img/store/영화관람권.png' },
	{ category: '기프트카드' , name : '기프트카드1' , text : `기프트카드1텍스트` , price : 14000 , img : 'img/store/기프트카드.png' },
	{ category: '기프트카드' , name : '기프트카드2' , text : `기프트카드2텍스트` , price : 14000 , img : 'img/store/기프트카드2.png' },
	{ category: '플레이존' , name : '[서울지점전용]라면팩' , text : `[서울지점전용]라면팩 텍스트` , price : 14000 , img : 'img/store/서울지점전용라면팩.png' },
	{ category: '플레이존' , name : '[서울지점전용]짜장라면팩' , text : `[서울지점전용]짜장라면팩 텍스트` , price : 14000 , img : 'img/store/서울지점전용짜장라면팩.png' }
	
	
	
]

// 객체배열
let cartListArray = []
let orderListArray = []

//객체화
let modal_wrap =  document.querySelector('.modal_wrap')

//js실행시 함수실행
category_print();
product_print(0);

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
	console.log("cartListArray")
	console.log(cartListArray)
	
	// 장바구니 추가한 제품 개수 출력
	// 총 금액 출력
	let basketNum = 0;
	let totalPrice = 0;
	for ( let c = 0 ; c < cartListArray.length ; c++ ){
		basketNum++
		let price = cartListArray[c].price;
		console.log("cartListArray[c].price")
		console.log(cartListArray[c].price)
		totalPrice += price;
	}
	console.log("basketNum" + basketNum)
	document.querySelector('.basketNum').innerHTML = basketNum;
	document.querySelector('.totalPrice').innerHTML = totalPrice.toLocaleString()+" 원";
		
}

//결제하기 버튼 누르면 결제정보 모달 출력
function modal_flex(){
	
	modal_wrap.style.display = 'flex'
}

//닫기 버튼 이벤트리스너
let close = document.querySelector('.close')
close.addEventListener('click',(e)=>{
	console.log('클로즈이벤트리스너실행')
	modal_wrap.style.display = 'none'
})