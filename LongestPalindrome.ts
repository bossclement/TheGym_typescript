function isPalindrome(text) {
    return text === text.split('').reverse().join('');
}
function longestPalindrome(s) {
    let longest = s[0];
    for (let startIndex = 0; startIndex < s.length; startIndex++) {
        for (let stopIndex = startIndex + 1; stopIndex < s.length; stopIndex++) {
            let text = s.slice(startIndex, stopIndex + 1);
            if (isPalindrome(text) && text.length > longest.length) {
                longest = text;
            };
        }
    }
    return longest;
};
