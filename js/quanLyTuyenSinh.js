/**
 * Khối 1: Input
 * diemChuan, khuVuc, doiTuong, diemMon1, diemMon2, diemMon3
 * 
 * Khối 2:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *  + Lấy các giá trị từ form
 *  + Nếu diemMon1 hoặc diemMon2 hoặc diemMon3 == 0 => ketQua trượt
 *  + Ngược lại tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong
 *      - Nếu tongDiem >= diemChuan => ketQua đậu
 *      - Nếu tongDiem < diemChuan => ketQua trượt
 *  + Hiển thị kết quả lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 * ketQua (đậu/trượt)
 */

var inpDiemChuan = document.getElementById("diemChuan");
var inpKhuVuc = document.getElementById("khuVuc");
var inpDoiTuong = document.getElementById("doiTuong");
var inpDiemMon1 = document.getElementById("diemMon1");
var inpDiemMon2 = document.getElementById("diemMon2");
var inpDiemMon3 = document.getElementById("diemMon3");

function tinhDiemThi() {
    var diemChuan = Number(inpDiemChuan.value);
    var khuVuc = inpKhuVuc.value;
    var doiTuong = Number(inpDoiTuong.value);
    var diemMon1 = Number(inpDiemMon1.value);
    var diemMon2 = Number(inpDiemMon2.value);
    var diemMon3 = Number(inpDiemMon3.value);
    var tongDiem = 0;

    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        return thongBao("Rất tiếc, bạn rớt do có môn bị điểm 0.");
    } 

    tongDiem = diemMon1 + diemMon2 + diemMon3 + tinhDiemKhuVuc(khuVuc) + tinhDiemDoiTuong(doiTuong);
    if (tongDiem >= diemChuan) {
        thongBao("Chúc mừng, bạn đã đậu. Tổng điểm 3 môn là: " + tongDiem)
    } else {
        thongBao("Rất tiếc, bạn đã rớt. Tổng điểm 3 môn là: " + tongDiem)
    }
}

function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc) {
        case "A":
            return 2;
        case "B":
            return 1;
        case "C":
            return .5;
        default:
            return 0;
    }
}

function tinhDiemDoiTuong(doiTuong) {
    switch (doiTuong) {
        case 1:
            return 2.5;
        case 2:
            return 1.5;
        case 3:
            return 1;
        default:
            return 0;
    }
}

function thongBao(str) {
    document.getElementById("ketQua").innerHTML = str;
}