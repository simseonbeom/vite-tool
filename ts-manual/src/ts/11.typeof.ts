



const user = {
  name:'tiger',
  age:30,
  gender:'male',
  address:'남양주시'
}


type User = typeof user;

if(typeof user === 'string'){
  // 
}


type UserKey = keyof User



const settings = {
  theme:'dark',
  fontSize:16,
  language:'ko'
}


type SettingsKey = keyof typeof settings
// 'theme' | 'fontSize' | 'language'


// typeof 뒤에는 자바스크립트 객체가 와야 함
// keyof 뒤에는 타입스크립트 타입이 와야 함


















