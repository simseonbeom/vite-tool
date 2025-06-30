// 문제: 다양한 타입들이 동작할 수 있는 narrowing을 작성해주세요

function processInput(input:string | number | string[] | Error):void {

    if(typeof input === 'string'){
      console.log( input.toUpperCase() );
    }

    if(typeof input === 'number'){
      console.log( input ** 2 );
    }

    if(Array.isArray(input)){
      console.log( input.length );
    }
    
    if(input instanceof Error){
      console.log( input.message );
    }

}









