### 커밋
feat : 새로운 기능 추가  
fix : 버그 수정  
docs : 문서 수정  
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우  
refactor : 코드 리펙토링  
test : 테스트 코드, 리펙토링 테스트 코드 추가  
chore : 빌드 업무 수정, 패키지 매니저 수정  

### 브랜치
기능 추가 => feature/#이슈번호   
오류 해결 => fix/#이슈번호

### 구현 시 어려웠던 점과 해결
모두 다 tailwindcss 사용법 익숙치 않아 어려움을 겪었으나 시간이 지날수록 익숙해짐.

윤주 : 검색창 구현 시 product.js 데이터에서 filter를 적용시켜 검색 결과로 출력하는 것을 구현했는데 
이 데이터를 map을 사용해 출력할 때 map을 사용하는데 약간의 에러가 나서 어려웠다.
map으로 돌리는 값을 중괄호 안에 넣어서 구현했다. 
그리고 출력된 데이터를 클릭하면 navigate를 사용해 그 상품 상세 페이지로 이동하도록 했다.

효원 :  tailwindcss material의 Drawer 컴포넌트를 사용하기 위해 tailwindcss material를 설정하는 과정에서 리액트랑 리액트 돔이랑 버전 충돌 문제가 있어서 원인을 찾는데 시간이 오래 걸렸고, 18.3.1 => 18.2.0으로 버전을 낮춰서 해결했습니다. 옵션 선택 리스트 드로워에서 기존에 추가된 동일 옵션의 상품의 경우는 수량만 변경하고, 새로운 상품의 경우는 객체를 추가해야하는 부분이 어려웠고, find 함수를 사용해 먼저 기존 상품의 존재 여부를 구하고 이에 따라 다른 값을 추가하여 해결했습니다.

준수 : pc화면으로 예쁘게 잘 나왔는데 모바일로 확인해보니 생각한대로 안 나와서 어려움을 겪었다.
swiper를 리액트에서 사용하려고 하니 pagination, navigation을 커스텀하는 것이 어려웠다

채린 : 리액트와 tailwind 문법이 익숙지 않아 어려웠고
세부 카테고리페이지에서 파라미터 값에 따라서 데이터를 필터링하여 뿌려주는 부분에서 어려움을 느낌

유정 - 장바구니 옵션 수량 수정, 삭제 선택한 총 가격 등에서 state를 변경하고
뷰에 반영하는 것에서 어려움을 겪었다. redux에서 return state 해서 생긴 문제인 것을 확인했다.
return {...state, } 과 같이 spread operator를 변경하는 것으로 해결했다
