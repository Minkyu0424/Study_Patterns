const student = {
  name: "minkyu",
  age: 25,
  major: "computer",
};

const studentProxy = new Proxy(student, {});
