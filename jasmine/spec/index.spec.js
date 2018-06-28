describe('String Suite', function () {
    //Test to check if the string contains a vowel
    it('should contain a vowel', function () {
        var test = 'cogh';
        expect(test.hasVowel()).toBeTruthy();
    });

    //Test to check if the string converts to uppercase
    it('should return only uppercase', function () {
        var test = 'see me';
        expect(test.toUpper()).toMatch(/[A-Z]*/g);
    });

    //Test to check if the string converts to lowercase
    it('should return only lowercase', function () {
        var test = 'HELLO';
        expect(test.toLower()).toBe('hello');
        //        OR expect(test.toUpper()).toMatch(/[a-z]*/g);
    });

    //Test to check if the first character of the string converts to uppercase
    it('should change the first character to uppercase', function () {
        var test = 'hello';
        expect(test.ucFirst()).toBe('Hello');
    });

    //Test to check if the string is a question
    it('should be a question', function () {
        var test = 'e?';
        expect(test.isQuestion()).toBeTruthy();
    });

    //Test to check if the string returns an array of words in it
    it('should return an array of the words in the string', function () {
        var test = 'This is a good one';
        expect(test.words()).toEqual(['This', 'is', 'a', 'good', 'one']);
    });

    //Test to check if the number of words in the string was counted
    it('should return the number of words in the string', function () {
        var test = 'This is a good one';
        expect(test.wordCount()).toBe(5);
    });

    //Test to check if the strings are separated by comma
    it('should separate a string with comma(s)', function () {
        var test = '23456';
        expect(test.commaFormat()).toBe('23,456');
    });

    //Test to check if the strings are reversed
    it('should reverse a string', function () {
        var test = 'abcd';
        expect(test.reverseString()).toBe('dcba');
    });

    //Test to check if the strings are separated by comma in currency format
    it('should return the string separated with comma(s) in currency format', function () {
        var test = '11111.1';
        expect(test.toCurrency()).toBe('11,111.1');
    });

    //Test to check if the strings in currency format are converted to normal numbers 
    it('should return a currency string to a number', function () {
        var test = '11,111.1';
        expect(test.fromCurrency()).toBe(11111.1);
    });

    //Test to check if the string returned is a single digit
    it('should return true if the string is a single digit', function () {
        var test = '7';
        expect(test.isDigit()).toBeTruthy();
    });
});
