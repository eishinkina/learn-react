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
  test4({age: 23});
  