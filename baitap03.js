let tien = 23000;
let luachon = prompt("Chọn loại chuyển đổi: \n1. VND -> USD \n2. USD -> VND");
if (luachon === "1") {
    let vnd = parseFloat(prompt("Nhập số tiền VND:"));
    let usd = vnd / tien;
    document.write(`${vnd} VND = ${usd.toFixed(2)} USD`);
} else if (luachon === "2") {
    let usd = parseFloat(prompt("Nhập số tiền USD:"));
    let vnd = usd * tien;
    document.write(`${usd} USD = ${vnd} VND`);
} else {
    document.write("Lựa chọn của bạn không hợp lệ!");
}
