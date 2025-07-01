


/* void type */


function sayHi(message:string):string{
  return 'hello'
}




function printHi():void{
  console.log('hello');
  
}



/* never type */

// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입
// 절대 발생하지 않는 값 / 절대 도달할 수 없는 코드 


function showError(message:string):never{
  throw new Error(message)
}



function loop ():never{
  while(true){

  }
}

/* iterator protocol */
// lazy loop => closure
// => 성능 향상 

function* gen():Generator<number, void, void>{
  let count = 0;
  while(true){
    yield ++count;
  }
}

/* 
1. yield 반환 값의 타입
2. 함수에서 반환하는 값의 타입
3. next() 메서드에 전달되는 값의 타입
*/


















