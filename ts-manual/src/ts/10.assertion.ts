




// const input = document.querySelector<HTMLInputElement>('#textField')!;
// const input = document.querySelector('#textField') as HTMLInputElement;
// const app = document.querySelector('#app') as HTMLDivElement;
// const input = document.querySelector<HTMLInputElement>('#textField');
const input = document.querySelector('#textField');


if(input){
  (input as HTMLInputElement).value
}





const personA:{
  readonly name:string;
  readonly age:number;
} = {
  name:'tiger',
  age:30
}



const personB = {
  name:'tiger',
  age:30
} as const



// personB.name


















