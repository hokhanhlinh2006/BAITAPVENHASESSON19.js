let thang = prompt("Nhập một tháng trong năm (1-12):");
thang = parseInt(thang); 
let ketqua;
if (thang >= 1 && thang <= 3) {
    ketqua = "Mùa xuân";
} else if (thang >= 4 && thang <= 6) {
    ketqua = "Mùa hạ";
} else if (thang >= 7 && thang <= 9) {
    ketqua = "Mùa thu";
} else if (thang >= 10 && thang <= 12) {
    ketqua = "Mùa đông";
} else {
    ketqua = "Tháng không hợp lệ";
}
document.write(ketqua);