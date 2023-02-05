console.log('js실행')
let personNumList = [
	{ 성인 : 1 , 어린이 : 0 , 시니어 : 0 ,  장애인 : 0 , 국가유공자 : 0 } ,
	{ 성인 : 1 , 어린이 : 1 , 시니어 : 1 ,  장애인 : 0 , 국가유공자 : 0 }
]


let Ticket_List = [

	{ 	mName : '장화신은고양이' , 
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

//주문제품목록 배열
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


// cartListArray total 계산
total_1 = 0;
cartListArray1.forEach( (o) => {
	total_1 += o.price
	
})

total_2 = 0;
cartListArray1.forEach( (o) => {
	total_2 += o.price
	
})


//주문내역 배열
let orderListArray = [
	{
		time : '2023-01-05 09:05:15' ,
		products : cartListArray1 ,
		total : total_1.toLocaleString()
	},
	
	{
		time : '2023-12-17 15:40:35' ,
		products : cartListArray2 ,
		total : total_2.toLocaleString()
	}
	
]



// js 실행시 함수실행
rList_print();

// 예매내역 출력 함수
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
								 				<div class="rCancelBtn expiredBtn">평점남기기</div>			 				
							 				</div>
							 	
							 		</div>
								
								</div>
								`
				}
						
		document.querySelector('.rListInnerHTML').innerHTML = html
		
	}
	
}