const convertNumberToWords = require('./convertNumberToWords');

describe('convertNumberToWords', () => {
    it('should convert numbers from 0 to 9', () => {
        expect(convertNumberToWords(0)).toBe('Zero');
        expect(convertNumberToWords(1)).toBe('One');
        expect(convertNumberToWords(9)).toBe('Nine');
    });

    it('should convert numbers from 10 to 19', () => {
        expect(convertNumberToWords(10)).toBe('Ten');
        expect(convertNumberToWords(11)).toBe('Eleven');
        expect(convertNumberToWords(19)).toBe('Nineteen');
    });

    it('should convert numbers from 20 to 99', () => {
        expect(convertNumberToWords(20)).toBe('Twenty');
        expect(convertNumberToWords(21)).toBe('Twenty One');
        expect(convertNumberToWords(99)).toBe('Ninety Nine');
    });

    it('should convert numbers from 100 to 999', () => {
        expect(convertNumberToWords(100)).toBe('One Hundred');
        expect(convertNumberToWords(101)).toBe('One Hundred One');
        expect(convertNumberToWords(999)).toBe('Nine Hundred Ninety Nine');
    });

    it('should convert numbers from 1000 to 999999', () => {
        expect(convertNumberToWords(1000)).toBe('One Thousand');
        expect(convertNumberToWords(1234)).toBe('One Thousand Two Hundred Thirty Four');
        expect(convertNumberToWords(999999)).toBe('Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine');
    });

    it('should throw an error for numbers outside of the range', () => {
        expect(() => convertNumberToWords(-1)).toThrow('Number out of range');
        expect(() => convertNumberToWords(1000000)).toThrow('Number out of range');
    });
});  