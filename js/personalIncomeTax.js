/**
 * Khối 1: Input
 *  name
 *  income (tổng thu nhập năm)
 *  dependent (số người phụ thuộc)
 * 
 * Khối 2: Các bước xử lý
 *  B1: Tìm các thẻ bằng id
 *  B2: tạo hàm tính
 *      + Lấy các giá trị từ form
 *      + Tính thu nhập chịu thuế
 *          taxableIncome = income - 4tr - dependent * 1.6
 *      + Nếu 0 < taxableIncome <= 60tr => personalIncomeTax = taxableIncome * 0.05
 *      + Nếu 60tr < taxableIncome <= 120tr => personalIncomeTax = taxableIncome * 0.1
 *      + Nếu 120tr < taxableIncome <= 210tr => personalIncomeTax = taxableIncome * 0.15
 *      + Nếu 210tr < taxableIncome <= 384tr => personalIncomeTax = taxableIncome * 0.2
 *      + Nếu 384tr < taxableIncome <= 624tr => personalIncomeTax = taxableIncome * 0.25
 *      + Nếu 624tr < taxableIncome <= 960tr => personalIncomeTax = taxableIncome * 0.3
 *      + Nếu 960tr < taxableIncome => personalIncomeTax = taxableIncome * 0.35
 *     
 *  B3: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 *  personalIncomeTax
 */

var inpName = document.getElementById("name");
var inpIncome = document.getElementById("income");
var inpDependent = document.getElementById("dependent");

function perIncTax() {
    var name = inpName.value;
    var income = inpIncome.value;
    var dependent = inpDependent.value;

    var taxableIncome = income - 4e+6 - dependent * 1.6e+6;

    if (taxableIncome <= 0) {
        alert("Tổng thu nhập không hợp lệ, vui lòng nhập lại!");
        return document.getElementById("income").focus();
    }
    
    var personalIncomeTax = taxCal(taxableIncome);

    document.getElementById("result").innerHTML = "Họ và tên: " + name + "; Tiền thuế TNCN: " + personalIncomeTax.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
}

function taxCal(taxableIncome) {
    if (taxableIncome <= 60e+6) {
        return taxableIncome * .05;
    } else if (60e+6 < taxableIncome && taxableIncome <= 120e+6) {
        return taxableIncome * .1;
    } else if (120e+6 < taxableIncome && taxableIncome <= 210e+6) {
        return taxableIncome * .15;
    } else if (210e+6 < taxableIncome && taxableIncome <= 384e+6) {
        return taxableIncome * .2;
    } else if (384e+6 < taxableIncome && taxableIncome <= 624e+6) {
        return taxableIncome * .25;
    } else if (624e+6 < taxableIncome && taxableIncome <= 960e+6) {
        return taxableIncome * .3;
    } else {
        return taxableIncome * .35;
    }
}