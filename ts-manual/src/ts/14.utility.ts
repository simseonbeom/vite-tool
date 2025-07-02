


/* Omit<T,K> */

type User = {
  id:number;
  name:string;
  email:string;
}

type PublicUser = Omit<User,'email'>

const user:Omit<User,'email'> = {
  id:1,
  name:'tiger'
}



/* Pick<T,K> */

const user2:Pick<User,'id'|'name'> = {
  id:2,
  name:'beom'
}



/* Partial<T> */

type User3 = {
  id:number;
  name:string;
  email:string;
  address:{
    lat:number,
    long:number
  }
}

const user3:Partial<User3> = {
  name:'seon'
}



/* Required<T> */

const user5:Required<User3> = {
  id:1,
  name:'tiger',
  email:'tiger@naver.com',
  address:{
    lat:20,
    long:33.5
  }
}



/* Readonly<T> */


const user6:Readonly<User3> = {
  id:10,
  name:'tiger',
  email:'tiger@gmail.com',
  address:{
    lat:30,
    long:30
  }
}


/* Record<K,V> */
// K들로 구성된 객체를 만들고, 각 값은 V타입으로 지정


// type Role = 'admin' | 'user' | 'guest';
// type Role = keyof typeof access;
type Role = keyof typeof access;

type RoleStatus = Record<Role,boolean>

const access = {
  admin:true,
  user:true,
  guest:false
} as const


























