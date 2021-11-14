function palindrome(str) {
    let reverse = str.split('').filter(x => x.match(/[a-z]|[0-9]/gi)).reverse('').join('').toLowerCase();
    let original = str.split('').filter(x => x.match(/[a-z]|[0-9]/gi)).join('').toLowerCase();
    return original == reverse;
    }

    palindrome("eye");
