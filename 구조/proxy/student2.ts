const student2 = {
  name: "minkyu",
  age: 25,
  major: "computer",
};

const studentProxy2 = new Proxy(student2, {
  get: (obj, prop: string) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop: string, value) => {
    obj[prop] = value;
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    return true;
  },
  // 타입스크립트에서 Proxy 객체의 set 트랩은 반드시 boolean 값을 반환해야함
});

student2.name;
student2.age = 43;
