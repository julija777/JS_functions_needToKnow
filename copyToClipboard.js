// 1. Copy to Clipboard
// A useful one-line JavaScript function,
// which can be used to easily copy any text to the clipboard.


const copyToClipboard = (text) => navigator.clipboard.writeText(text);

console.log (copyToClipboard('Hello World!'));

