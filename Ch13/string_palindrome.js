String.prototype.palindrome = function() {
    var len = this.length-1;
    for (var i = 0; i <= len/2; i++) {
        if (this.charAt(i) !== this.charAt(len-i)) {
            return false;
        }
    }
    return true;
};
var phrases = ["eve", "kayak", "mom", "wow", "Not a palindrome"];
for (var i = 0; i < phrases.length; i++) {
    var phrases = phrases[i];
    if (phrases.palindrome()) {
        console.log("'" + phrase + "' is a palindrome");
    } else {
        console.log("'" + phrase + "' is NOT a palindrome");
    }
}