function isTextLong(text) {
    if (text.length > 10) {
        return true;
    }
    if (text.length < 10) {
        return false;
    }
}
function getSquarePerimeter(a) {
    return 4 * a;
}
function countEven(numbers) {
    var paros = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            paros++;
        }
    }
    return paros;
}
