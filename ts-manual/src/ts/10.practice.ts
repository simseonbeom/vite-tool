
// 타입 단언(as)을 사용해 에러를 해결해주세요.

const link = document.querySelector('a') as HTMLAnchorElement;

link.href = ''



// 타입 단언 제네릭을 사용해 에러를 해결해주세요.

const image = document.querySelector<HTMLImageElement>('img')!;

image.src = '/assets/visual.jpg'
image.alt = '작품명 : 모나리자'




// 타입 좁히기와 단언(as)를 사용해 에러를 해결해주세요.

const checkbox = document.querySelector('input[type="checkbox"]');

if(checkbox){

  (checkbox as HTMLInputElement).checked = false;
}



// 상속여부(instanceof)를 사용해 에러를 해결해주세요.

const agreement = document.querySelector('input[type="checkbox"]');

if(agreement instanceof HTMLInputElement ){
  agreement.checked = true;
}





// as const를 사용해 오류 없이 role을 정확히 비교할 수 있도록 수정해보세요.

const user = {
  role: "guest"
}as const 

// 오류: 'role'은 string으로 간주됨
if (user.role === "gest") {
  console.log("관리자입니다.");
}







