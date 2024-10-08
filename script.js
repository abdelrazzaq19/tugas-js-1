function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid positive numbers for length and width.";
        return;
    }
    const area = length * width;
    document.getElementById('result').innerHTML = `The area of the rectangle is: ${area} square units.`;
}
