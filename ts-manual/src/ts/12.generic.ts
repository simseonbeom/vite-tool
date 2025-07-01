


// generic type 

type User<T,U> = {name:T;age:U};

const user:User<string,number> = {
  name:'tiger',
  age:30
}




function fn<T>(value:T):T{

  // value.toUpperCase()
  
  return value
}



fn(10)
fn('hello')
fn([])
fn({})


/* 
T => Type
U => Util => Unique
K => Key
V => Value
R => return type
E => Element / Error
S => 


*/


// const arr:Array<number> = [1,2,3];

function swapAtoB<T,U>(a:T,b:U):(T|U)[]{
  return [b,a]
}


swapAtoB(0,'a');
swapAtoB([],'a');


// useState<{name:string}>({name:'tiger'})



function getLength<T extends {length:number}>(arr:T):number{
  return arr.length;
}



getLength([1,2,3])
getLength(['a','b','c'])
getLength('hello')
getLength({length:10})



type Response<T> = T extends string ? {type:string;content:string} : {type:string;content:T}; 

const r1:Response<string> = {
  type:'text',
  content:'hello'
};

const r2:Response<{name:string,age?:number}> = {
  type:'json',
  content:{
    name:'tiger'
  }
};





function getById<T extends {id:number}>(item:T):number{
  return item.id
}


getById({id:10,title:'아이폰'})
getById({id:20,title:'겔럭시'})
getById({title:'맥북'})








































