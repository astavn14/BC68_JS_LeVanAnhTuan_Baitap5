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
  } else {
    soTien = (soKw - 150) * 1300 + 50 * 500 + 50 * 650 + 50 * 850;
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
  if (thuNhap <= 60000000) {
    tongThuNhap = (thuNhap * 5) / 100;
  } else if (thuNhap > 60000000 && thuNhap <= 120000000) {
    tongThuNhap = (thuNhap * 10) / 100;
  } else if (thuNhap > 120000000 && thuNhap <= 210000000) {
    tongThuNhap = (thuNhap * 15) / 100;
  } else if (thuNhap > 210000000 && thuNhap <= 384000000) {
    tongThuNhap = (thuNhap * 20) / 100;
  } else if (thuNhap > 384000000 && thuNhap <= 624000000) {
    tongThuNhap = (thuNhap * 25) / 100;
  } else if (thuNhap > 624000000 && thuNhap <= 960000000) {
    tongThuNhap = (thuNhap * 30) / 100;
  } else {
    tongThuNhap = (thuNhap * 35) / 100;
  }

  thuNhapChiuThue = tongThuNhap - 4000000 - phuThuoc * 1600000;
  document.querySelector(
    ".ket-qua-3"
  ).innerHTML = `<i class="fa-solid fa-right-long"></i> Họ và tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${thuNhapChiuThue.toLocaleString(
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

  let tienMang = 0;
  if (khachHang == "nhaDan") {
    tienMang = 4.5 + 20.5 + 7.5 * soKenh;
  } else {
    if (soKetNoi <= 10) {
      tienMang = 15 + 75 + 50 * soKenh;
    } else {
      let soKetNoi = document.getElementById("soKetNoi").value * 1;
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
