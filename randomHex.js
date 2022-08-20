// Generate Random Hex
// You can generate random hex colors using this function, 
// which is very useful for frontend projects.

const randomHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(randomHex());

