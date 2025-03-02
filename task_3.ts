function processValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else if (typeof value === 'number') {
      return value * value;
    } else {
      return !value;
    }
}
  
// test
console.log(processValue("hello"));
console.log(processValue(5));      
console.log(processValue(true)); 

/*
Описание типа результата:
Тип результата это объединение string | number | boolean, что можно понимать как: либо string, либо number, либо boolean.
*/