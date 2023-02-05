console.log('js실행')

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
	{ category: '지점한정메뉴' , name : '[서울지점전용]라면팩' , text : `[서울지점전용]라면팩 텍스트` , price : 14000 , img : 'img/store/서울지점전용라면팩.png' },
	{ category: '지점한정메뉴' , name : '[서울지점전용]짜장라면팩' , text : `[서울지점전용]짜장라면팩 텍스트` , price : 14000 , img : 'img/store/서울지점전용짜장라면팩.png' }
	
	
	
]

let personNumList = [ // 예매내역 [ 2건 ] 가정
	{ 성인 : 1 , 어린이 : 0 , 시니어 : 0 ,  장애인 : 0 , 국가유공자 : 0 } ,
	{ 성인 : 1 , 어린이 : 1 , 시니어 : 1 ,  장애인 : 0 , 국가유공자 : 0 }
]


let Ticket_List = [ // 예매내역 [ 2건 ] 가정 

	{ 	mName : '장화신은 고양이: 끝내주는 모험' , 
		mType: '2D' , 
		mImg : 'img/장화신은고양이.jpg' , 
		theater : 'CGVOX 서울' , 
		theaterNum : 12 , 
		date : '2/8(수)' , 
		startTime : '16:00' , endTime : '17:48' ,
		ticketType : '일반' , 
		personNum : personNumList[0] , 
		seat : 'J8' , 
		tikcetNum : '0090-0822-5212-705' , 
		state : false } ,

	{ 	mName : '아바타-물의 길' , 
		mType: '2D' , 
		mImg : 'img/아바타.jpg' , 
		theater : 'CGVOX 안산' , 
		theaterNum : 8 , 
		date : '1/5(목)' , 
		startTime : '09:20' , endTime : '12:32' ,
		ticketType : '조조' , 
		personNum : personNumList[1] , 
		seat : 'E8 , E9 , E10 ' , 
		tikcetNum : '0090-0822-5210-347' , 
		state : true }
	
]

//cartListArray -> orderListArray로 옮김 가정 [ 주문 2건 ]
let cartListArray1 = [
	{ category: '스낵' , name : '나쵸' , price : 7000 , img : 'img/store/나쵸.png' } ,
	{ category: '음료' , name : '콜라' , price : 9000 , img : 'img/store/콜라.png' } ,
	{ category: '팝콘' , name : '팝콘M' , price : 8000 , img : 'img/store/팝콘M.png' }
]

let cartListArray2 = [
	
	{ category: '음료' , name : '콜라' , price : 9000 , img : 'img/store/콜라.png' } ,
	{ category: '음료' , name : '콜라' , price : 9000 , img : 'img/store/콜라.png' } ,
	{ category: '음료' , name : '콜라' , price : 9000 , img : 'img/store/콜라.png' } ,
	{ category: '팝콘' , name : '팝콘M' , price : 8000 , img : 'img/store/팝콘M.png' },
	{ category: '팝콘' , name : '팝콘M' , price : 8000 , img : 'img/store/팝콘M.png' }
	
]


// cartListArray [ 2건 ] total 계산 가정
total_1 = 0;
cartListArray1.forEach( (o) => {
	total_1 += o.price
	
})

total_2 = 0;
cartListArray2.forEach( (o) => {
	total_2 += o.price
	
})


//주문내역 배열
let orderListArray = [
	{
		no : 13 ,
		time : '2023-02-08(수) 15:45:15' ,
		products : cartListArray1 ,
		total : total_1.toLocaleString() ,
		state : 2
		// state 0:주문확인중 , 1:조리중 , 2:조리완료 , 3:주문완료
		
	},
	
	{
		no : 7 ,
		time : '2023-01-05(목) 9:05:15' ,
		products : cartListArray2 ,
		total : total_2.toLocaleString() ,
		state : 3
		// state 0:주문확인중 , 1:조리중 , 2:조리완료 , 3:주문완료
	}
	
]



// js 실행시 함수실행
rList_print();
storeOrderList();

/*---------------------------------------------------*/
// 예매내역 출력 함수 [ js 실행시 함수 실행 ]
function rList_print(){
	console.log('rList_print 함수실행')
	html = ''
	for ( let i = 0 ; i < Ticket_List.length ; i++ ){
	let 성인 = Ticket_List[i].personNum.성인
	let 어린이 = Ticket_List[i].personNum.어린이
	let 시니어 = Ticket_List[i].personNum.시니어
	let 장애인 = Ticket_List[i].personNum.장애인
	let 국가유공자 = Ticket_List[i].personNum.국가유공자
	let personNum = ( 성인 + 어린이 + 시니어 + 장애인 + 국가유공자 )
	
	html += `
			<div class="rListDiv">
			
			
				<div class="rListWidth"> <!-- 예매내역 박스 가로길이 -->
					
											
						<div class="rListContent">
							<div class="rMovieInfo">
									<div class="rMovieInfoText">
										<div class="rMovieName">${Ticket_List[i].mName}</div>
										<div class="rMovieType">${Ticket_List[i].mType}</div>
									</div>
							</div>
									
							<div class="rMovieImg">
								<img alt="" src="${Ticket_List[i].mImg}" width="100%">
							</div>
							
						</div>
						<div class="rTheater">
							<span class="rTheaterBranch">${Ticket_List[i].theater}</span> · <span class="rTheaterNum">${Ticket_List[i].theaterNum}관</span>
						</div>
						<div class="rDate">${Ticket_List[i].date}</div>
						<div class="rTime">
							<span class="rStartTime">${Ticket_List[i].startTime}</span> <span class="rEndTime">~ ${Ticket_List[i].endTime}</span>
						</div>
						<div class="rPerson">${Ticket_List[i].ticketType} <span class="rPersonNum">${personNum}</span></div>
						<div class="rSeat">${Ticket_List[i].seat}</div>
						<div class="rNumber">예매번호: ${Ticket_List[i].tikcetNum}</div>
				`
				

				if ( Ticket_List[i].state == false ){
						html +=		`		
											<div class="rBtns">
								 				<div class="rCancelBtn">주문취소</div>			 				
							 				</div>
							 	
							 		</div>
								
								</div>
								`
				} else if ( Ticket_List[i].state == true ){
						html +=		`		
											<div class="rBtns">
								 				<div class="rCancelBtn expiredBtn">평점 남기기</div>			 				
							 				</div>
							 	
							 		</div>
								
								</div>
								`
				}
						
		document.querySelector('.rListInnerHTML').innerHTML = html
		
	}
	
}

/*---------------------------------------------------*/
		
			
// 구매내역 출력 함수 [ js 실행시 함수 실행 ]
function storeOrderList(){
	let html = ''
	for ( let i = 0 ; i < orderListArray.length ; i++ ){
		console.log(orderListArray)
		console.log(orderListArray[i])
		html += `<div class="rListDiv"> <!-- store주문내역 흰바탕 -->
				 		<div class="rListWidth"> <!-- 스토어주문내역 박스 가로길이 -->
				 			<div>
				 			
				 				<div class="oNuminfo"> 
				 					<div class="oNumBox">주문번호</div> 
				 					<div class="oNum">${orderListArray[i].no}</div>
				 					<div class="oDate">${orderListArray[i].time}</div>
				 				</div>
				 				<div class="oInfo">
				 				
				 `
		// i번째 주문객체 안에 주문제품배열
		// orderListArray[i].products
		
		let orderProductName = []
		let orderProductCount = []
		let count = 0;
		let orderProductImg = []
		
		for ( let j = 0 ; j < orderListArray[i].products.length ; j++ ){
			// i번째 주문객체 안에 주문제품배열의 j번째 객체
			
			
			
			if ( orderProductName.indexOf(orderListArray[i].products[j].name)<0){
			orderProductName.push(orderListArray[i].products[j].name)
			}
			
		}

		for ( let n = 0 ; n < orderProductName.length ; n++ ){
			count = 0;
			orderListArray[i].products.forEach((o)=>{
				if ( orderProductName[n] == o.name ) {
					count++	
				} 
			})
			orderProductCount.push(count)
			
			productList.forEach( (o) => {
				if ( orderProductName[n] == o.name ) {
					orderProductImg.push(o.img)	
				} 
			})		
		
		}
			
		console.log(orderProductName)
		console.log(orderProductCount)
		console.log(orderProductImg)
		
		let orderNameCountimg = {
			
			name : orderProductName , 
			count : orderProductCount ,
			img : orderProductImg
		}
		console.log (orderNameCountimg)
			
		
		for ( let m = 0 ; m < orderNameCountimg.name.length ; m++ ){
			html +=	`				
						<div class="oinfoGroup">
			 				<div class="oInfoImg"><!-- 상품이미지 -->
			 					<img alt="" src="${orderNameCountimg.img[m]}" width="100%">
			 				</div>
			 			
			 				<div class="oinfoText"> <!-- 상품정보 -->
			 					<div> <span class="oInfoName">${orderNameCountimg.name[m]}</span> / <span>${orderNameCountimg.count[m]}개</span> </div>
			 				</div>
		 				</div>
				
						`
			}
			
			html +=		`
								</div>
				 				<div class="order_total"> 총 ${orderListArray[i].total} 원</div>
				 		`
			if ( orderListArray[i].state == 0 ){
				html +=		`
					 
							 				<div class="oBtns">
								 				<div class="cancelBtn stateColor">주문확인중</div>
												<div class="cancelBtn">주문취소</div>			 				
							 				</div>
							 				
							 			</div>
							 		</div>
								</div>
					
							`
			} else if ( orderListArray[i].state == 1 ){
				html +=		`
					 
							 				<div class="oBtns">
								 				<div class="cancelBtn stateColor">조리중</div>
												<div class="cancelBtn">주문취소불가</div>			 				
							 				</div>
							 				
							 			</div>
							 		</div>
								</div>
					
							`
			} else if ( orderListArray[i].state == 2 ){
				html +=		`
					 
							 				<div class="oBtns">
								 				<div class="cancelBtn stateColor">조리완료</div>
												<div class="cancelBtn">픽업위치</div>			 				
							 				</div>
							 				
							 			</div>
							 		</div>
								</div>
					
							`
			} else if ( orderListArray[i].state == 3 ){
				html +=		`
					 
							 				<div class="oBtns">
								 				<div class="cancelBtn stateColor">픽업완료</div>
												<div class="cancelBtn">주문상세</div>			 				
							 				</div>
							 				
							 			</div>
							 		</div>
								</div>
					
							`
			}
			
	}
	document.querySelector('.storeListInnerHTML').innerHTML = html;
	
}


