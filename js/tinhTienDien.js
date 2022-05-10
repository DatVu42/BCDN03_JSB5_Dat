/**
 * Khối 1: Input
 *  name, kw
 * 
 * Khối 2: Các bước xử lý
 *  B1: Tìm các thẻ bằng id
 *  B2: Tạo hàm tính
 *      + Lấy các giá trị từ form
 *      + Nếu 0 < kw <= 50 => tienDien = kw * 500
 *      + Nếu 50 < kw <= 100 => tienDien = 50 * 500 + (kw - 50) * 650
 *      + Nếu 100 < kw <= 200 => tienDien = 50 * 500 + 50 * 650 + (kw - 100) * 850
 *      + Nếu 200 < kw <= 350 => tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100
 *      + Nếu 350 < kw => tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300
 *  B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 *  name, tienDien
 */

var inpName = document.getElementById("name");
var inpKw = document.getElementById("kw");

function tinhTienDien() {
    var name = inpName.value;
    var kw = inpKw.value;

    var donGia1 = 500;
    var donGia2 = 650;
    var donGia3 = 850;
    var donGia4 = 1100;
    var donGia5 = 1300;
    var tienDien = 0;

    if (kw <= 0) {
        alert("Số Kw không hợp lệ. Vui lòng nhập lại.");
        return document.getElementById("kw").focus();
    }

    if (kw <= 50) {
        tienDien = tinhTien(kw, donGia1);
    } else if (50 < kw && kw <= 100) {
        tienDien = tinhTien(50, donGia1) + tinhTien(kw - 50, donGia2);
    } else if (100 < kw && kw <= 200) {
        tienDien = tinhTien(50, donGia1) + tinhTien(50, donGia2) + tinhTien(kw - 100, donGia3);
    } else if (200 < kw && kw <= 350) {
        tienDien = tinhTien(50, donGia1) + tinhTien(50, donGia2) + tinhTien(100, donGia3) + tinhTien(kw - 200, donGia4);
    } else {
        tienDien = tinhTien(50, donGia1) + tinhTien(50, donGia2) + tinhTien(100, donGia3) + tinhTien(150, donGia4) + tinhTien(kw - 350, donGia5);
    }

    document.getElementById("info").innerHTML = "Tên: " + name + "; Tiền điện: " + tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'}); 
}

function tinhTien(soLuong, donGia) {
    return soLuong * donGia;
}