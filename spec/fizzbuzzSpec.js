describe('FizzBuzz', function() {

    it('Returns 1 if value is 1', function() {
        var result = fizzBuzz(1);
        expect(result).toEqual(1);
    })

    it('Returns 2 if value is 2', function() {
        var result = fizzBuzz(2);
        expect(result).toEqual(2);
    })

    it('Returns Fizz if multiple of three', function() {
        var result = fizzBuzz(3);
        expect(result).toEqual("Fizz");
    })

    it('Returns Buzz if multiple of five', function() {
        var result = fizzBuzz(5);
        expect(result).toEqual("Buzz");
    })

    it('Returns FizzBuzz if multiple of three and five', function() {
        var result = fizzBuzz(15);
        expect(result).toEqual("FizzBuzz");
    })

    it('Returns 0 if value is 0', function() {
        var result = fizzBuzz(0);
        expect(result).toEqual(0);
    })

})