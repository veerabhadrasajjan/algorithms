const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

//This solution should be able to handle numbers up to 999,999. 
//If you need to handle larger numbers, you can add additional code to handle millions, billions, etc.
function convertNumberToWords(num) {
    if (num === 0) {
        return 'Zero';
    }

    if (num < 0 || num > 999999) {
        throw new Error('Number out of range');
    }

    const words = [];

    if (Math.floor(num / 1000) > 0) {
        words.push(convertNumberToWords(Math.floor(num / 1000)) + ' Thousand');
        num = num % 1000;
    }

    if (Math.floor(num / 100) > 0) {
        words.push(ones[Math.floor(num / 100)] + ' Hundred');
        num = num % 100;
    }

    if (num >= 10 && num < 20) {
        words.push(teens[num - 10]);
    } else if (num >= 20) {
        words.push(tens[Math.floor(num / 10)]);
        num = num % 10;
        if (num > 0) {
            words.push(ones[num]);
        }
    } else if (num > 0) {
        words.push(ones[num]);
    }

    return words.join(' ');
}


module.exports = convertNumberToWords;