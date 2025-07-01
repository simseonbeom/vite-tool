

const person = {
  name: "Alice",
  age: 25,
  job: "developer"
};



// 1. person의 타입을 Person으로 정의해보세요
type Person = typeof person;


// 2. Person의 key만 모은 타입은?
type PersonKeys = keyof Person; // "name" | "age" | "job"



// 다음 객체의 value값 만을 추출해 EditorValue의 타입을 지정해주세요.

const editorSettings = {
  theme: "light",            
  tabSize: 2,                  
  autoSave: true,             
  fontFamily: "Fira Code",    
  showLineNumbers: true      
} as const;

type EditorValue = typeof editorSettings[keyof typeof editorSettings]



// 다음 배열에서 as const와 typeof를 이용해 "red" | "green" | "blue" 타입을 만드는 코드를 완성하세요.

const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]

const selected: Color = "red";      // ✅
const errorTest: Color = "yellow";  // ❌ 오류




// 아래 액션 객체에서 type 속성이 "ADD_TODO"임을 정확하게 인식하도록 타입 단언을 적용하세요.

const action = {
  type: "ADD_TODO",
  payload: "공부하기"
};

function reducer(act:typeof action) {
  if (act.type === "ADD_TODO") {
    console.log("할 일을 추가합니다:", act.payload);
  }
}












