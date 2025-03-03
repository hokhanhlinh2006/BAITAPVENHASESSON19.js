let char = prompt("Nhập vào một ký tự:");
if (char.length === 1 && /[a-zA-Z]/.test(char)) {
    document.write(`Ký tự ${char} là chữ cái`);
} else {
    document.write("Đây không phải chữ cái");
}