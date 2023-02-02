console.log('js실행')

let categoryList = [  '콤보' , '팝콘' , '음료' , '스낵' , '영화관람권' , '기프트카드' , '플레이존' , '상품권소개' ]

let productList = [
	
	{ category: '콤보' , name : '더블콤보' , text : `더블콤보텍스트` , price : 11000 , img : 'img/store/영화관람권.jpg' },
	{ category: '콤보' , name : '스위트콤보' , text : `스위트콤보텍스트` , price : 12000 , img : 'img/store/영화관람권.jpg' },
	{ category: '콤보' , name : '스몰세트' , text : `스몰세트텍스트` , price : 13000 , img : 'img/store/영화관람권.jpg'	},
	{ category: '콤보' , name : 'CGVOX콤보' , text : `CGV콤보텍스트` , price : 14000 , img : 'img/store/영화관람권.jpg' }
	
]

category_print();
product_print(1);

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
		
		if ( productList[j].category == categoryList[i]  ){
			console.log( "categoryList[i] : " + categoryList[i] )
		// html 추가
		html += `
			<div class="product">
				<img class="product_img" alt="" src="${productList[j].img}">
				<div class="product_title">${productList[j].name}</div>
				<div class="product_text">${productList[j].text}</div>
				<div class="product_price">${productList[j].price.toLocaleString()}원</div>
			</div>
			`
					
		} else {
			html = ''
		}
	}
	
	// 카테고리 html출력
	document.querySelector('.productDiv').innerHTML = html;
	
}