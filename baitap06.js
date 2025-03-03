let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));
if (a === 0) {
    if (b === 0) {
        document.write(c === 0 ? "Phương trình có vô số nghiệm" : "Phương trình vô nghiệm");
    } else {
        document.write(`Phương trình có một nghiệm: x = ${-c / b}`);
    }
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        document.write("Phương trình vô nghiệm ");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.write(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write(`Phương trình có hai nghiệm phân biệt là: x1 = ${x1}; x2 = ${x2}`);
    }
}
