document.getElementById("ketQua").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = document.getElementById("chonKhuVuc").value * 1;
  let doiTuong = document.getElementById("chonDoiTuong").value * 1;
  let diem1 = document.getElementById("diemMon1").value * 1;
  let diem2 = document.getElementById("diemMon2").value * 1;
  let diem3 = document.getElementById("diemMon3").value * 1;
  if (diem1 != 0 && diem2 != 0 && diem3 != 0) {
    tongKet = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    if (tongKet >= diemChuan) {
      document.querySelector(
        ".ket-qua"
      ).innerHTML = `<i class="fa-solid fa-right-long"></i> Chúc mừng bạn đã đậu tốt nghiệp !!! Tổng điểm của bạn là: ${tongKet}`;
    } else {
      document.querySelector(
        ".ket-qua"
      ).innerHTML = `<i class="fa-solid fa-right-long"></i> Rất tiếc bạn đã không đậu tốt nghiệp !!! Tổng điểm của bạn là: ${tongKet}`;
    }
  } else {
    document.querySelector(
      ".ket-qua"
    ).innerHTML = `<i class="fa-solid fa-right-long"></i> Rất tiếc bạn đã không đậu tốt nghiệp do có điểm liệt`;
  }
};

document.getElementById("tinh").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("KW").value * 1;
  let soTien = 0;
  if (soKw > 0 && soKw <= 50) {
    soTien = soKw * 500;
  } else if (soKw > 50 && soKw <= 100) {
    soTien = (soKw - 50) * 650 + 50 * 500;
  } else if (soKw > 100 && soKw <= 200) {
    soTien = (soKw - 100) * 850 + 50 * 500 + 50 * 650;
  } else if (soKw > 200 && soKw <= 350) {
    soTien = (soKw - 200) * 1100 + 50 * 500 + 50 * 650 + 100 * 850;
  } else {
    soTien = (soKw - 350) * 1300 + 150 * 1100 + 50 * 500 + 50 * 650 + 100 * 850;
  }
  soTien = soTien.toLocaleString("vi", { currency: "VND", style: "currency" });
  document.querySelector(
    ".ket-qua-2"
  ).innerHTML = `<i class="fa-solid fa-right-long"></i> Họ và tên: ${hoTen}, Tổng tiền điện: ${soTien}`;
};

document.getElementById("tienThue").onclick = function () {
  let hoTen = document.getElementById("hoTen2").value;
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let phuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  let tongThuNhap = 0;
  let thuNhapChiuThue = 0;
  thuNhapChiuThue = thuNhap - 4000000 - phuThuoc * 1600000;
  if (thuNhapChiuThue <= 60000000) {
    tongThuNhap = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    tongThuNhap = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    tongThuNhap = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    tongThuNhap = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    tongThuNhap = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    tongThuNhap = thuNhapChiuThue * 0.3;
  } else {
    tongThuNhap = thuNhapChiuThue * 0.35;
  }
  document.querySelector(
    ".ket-qua-3"
  ).innerHTML = `<i class="fa-solid fa-right-long"></i> Họ và tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tongThuNhap.toLocaleString(
    "vi",
    { currency: "VND", style: "currency" }
  )}`;
};

function loaiKH() {
  let khachHang = document.getElementById("chonLoaiKH").value;
  if (khachHang == "doanhNghiep") {
    document.getElementById(
      "addOn"
    ).innerHTML = `<div class="mb-3" style="block>
                    <label for="" class="form-label"></label>
                    <input
                      type="number"
                      class="form-control"
                      name=""
                      id="soKetNoi"
                      aria-describedby="helpId"
                      placeholder="Số kết nối"
                    />
                  </div>`;
  } else {
    document.getElementById("addOn").innerHTML = ``;
  }
}

document.getElementById("tinhTienCap").onclick = function () {
  let hoTen = document.getElementById("maKH").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let khachHang = document.getElementById("chonLoaiKH").value;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let tienMang = 0;
  if (khachHang == "nhaDan") {
    tienMang = 4.5 + 20.5 + 7.5 * soKenh;
  } else {
    if (soKetNoi <= 10) {
      tienMang = 15 + 75 + 50 * soKenh;
    } else {
      tienMang = 15 + 75 + 5 * soKetNoi + 50 * soKenh;
    }
  }
  document.querySelector(
    ".ket-qua-4"
  ).innerHTML = `<i class="fa-solid fa-right-long"></i> Mã khách hàng: ${hoTen}, Tiền cáp: ${tienMang.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )}`;
};
