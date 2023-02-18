const myFizzBuzz = require('./fizBuzz.js');

describe('The function fizzBuzz', (num) => {
    it('(15) should return "fizz"',() =>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('(3) should return "fizz"',() =>{
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    it('(5) should return "fizz"',() =>{
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('(1) should return "fizz"',() =>{
        expect(myFizzBuzz(1)).toBe(1);
    });
    it('("a") should return "fizz"',() =>{
        expect(myFizzBuzz("a")).toBe(false);
    });
    
})