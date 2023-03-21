function test1(props) {
    console.log(`Name: ${props.name}; Surname: ${props.surname}`);
  }
  // test1({surname: "m."});
  
  function test2(props) {
    const {name, surname} = props;
    console.log(`Name: ${name}; Surname: ${surname}`);
  }
  // test2({surname: "m."});
  
  function test3(name, surname) {
    console.log(`Name: ${name}; Surname: ${surname}`);
  }
  // test3(null, 'm.')
  
  function test4({name, surname, age}) {
    console.log(`Name: ${name || "No name"}; Surname: ${surname || "No surname"}; Age: ${age || "No age"}`);
  }
  // test4({age: 23});

  let array1 = ['h', 'e', 'l', 'l', 'o'];
  let array2 = [...array1];
  console.log(array2);

  // ['h', 'e', 'l', 'l', 'o'] // вывод


  //Передача в объект Math элементов массива в качестве аргументов
let numbers = [1,2,300,-1,0,-100];
console.log(Math.min(...numbers));

  