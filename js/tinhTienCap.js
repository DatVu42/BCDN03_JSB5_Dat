/**
 * Khối 1: Input
 *  maKH, loaiKH, soKetNoi, soKenhCapCap
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *  + Lấy các giá trị từ form
 *  + Nếu loaiKH == "nhaDan"
 *      hoadonKH = phiXuLyHD_ND + phiDVCB_ND + soKenhCaoCap * 7.5$
 *  + Nếu loaiKH == "doanhNghiep"
 *      Nếu 0 < soKetNoi <= 10
 *          hoadonKH = phiXuLyHD_DN + phiDVCB_DN + soKenhCaoCap * 50$
 *      Nếu 10 < soKetNoi
 *          hoadonKH = phiXuLyHD_DN + phiDVCB_DN + (soKetNoi - 10) * 5$ + soKenhCaoCap_DN * 50$
 * B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 *  hoaDonKH
 */

var inpLoaiKH = document.getElementById("loaiKH");
var inpMaKH = document.getElementById("maKH");
var inpSoKenhCaoCap = document.getElementById("soKenhCaoCap");
var inpSoKetNoi = document.getElementById("soKetNoi");

function tinhHDKH() {
    var loaiKH = inpLoaiKH.value;
    var maKH = inpMaKH.value;
    var soKenhCaoCap = inpSoKenhCaoCap.value;
    var soKetNoi = inpSoKetNoi.value;

    var phiXuLyHD_ND = 4.5;
    var phiDVCB_ND = 20.5;
    var phiKenhCaoCap_ND = 7.5;

    var phiXuLyHD_DN = 15;
    var phiDVCB_DN = 75;
    var phiKenhCaoCap_DN = 50;
    var phiKetNoiThem = 5;

    var hoaDonKH =  0;

    if (loaiKH == "") {
        alert("Vui lòng chọn loại khách hàng!");
        return inpLoaiKH.focus();
    }

    if (loaiKH == "nhaDan") {
        hoaDonKH = tinhHoaDon(phiXuLyHD_ND, phiDVCB_ND, soKenhCaoCap, phiKenhCaoCap_ND);
    }

    if (loaiKH == "doanhNghiep") {
        hoaDonKH = tinhHoaDon(phiXuLyHD_DN, phiDVCB_DN, soKenhCaoCap, phiKenhCaoCap_DN, soKetNoi, phiKetNoiThem);
    }

    document.getElementById("tienCap").innerHTML = "Mã KH: " + maKH + "; Tiền cáp: " + hoaDonKH.toLocaleString('en-US', {style : 'currency', currency : 'USD'});
}

function toggleSoKetNoi() {
    inpLoaiKH.value == "doanhNghiep" ? inpSoKetNoi.classList.add("showSoKetNoi") : inpSoKetNoi.classList.remove("showSoKetNoi");
}

function tinhHoaDon(phiXuLyHD, phiDVCB, soKenhCaoCap, phiKenhCaoCap, soKetNoi, phiKetNoiThem) {
    if (soKetNoi <= 10 || soKetNoi == NaN || soKetNoi == undefined) {
        return phiXuLyHD + phiDVCB + soKenhCaoCap * phiKenhCaoCap;
    } else {
        return phiXuLyHD + phiDVCB + (soKetNoi - 10) * phiKetNoiThem + soKenhCaoCap * phiKenhCaoCap;
    }
}