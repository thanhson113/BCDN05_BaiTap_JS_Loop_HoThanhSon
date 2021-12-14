/**
 * Bài 1:
 * Khối 1: Input
 *  Vòng lặp
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: Sau mỗi lần lặp
 *  Nếu i % 2 == 0 => In ra số chẵn
 *  Nếu i % 2 != 0 => In ra số lẻ
 * B3: In kết quả
 * Khối 3: Output
 * Số chẵn và số lẻ
 */

// For loop

document.getElementById('btnKetQua').onclick = function () {
    var soChan = "";
    var soLe = ""
    for (var i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
    }
    document.getElementById("txtThongBao").innerHTML =
        "Số chẵn là: " + soChan + "<br>" + "Số lẻ là: " + soLe;
}

// While loop

document.getElementById("btnKetQua2").onclick = function () {
    var soChan2 = "";
    var soLe2 = "";
    var n = 1;

    while (n < 100) {
        if (n % 2 == 0) {
            soChan2 += " " + n;
        } else {
            soLe2 += " " + n;
        }
        n++;
    }
    document.getElementById("txtThongBao2").innerHTML =
        "Số chẵn là: " + soChan2 + "<br>" + "Số lẻ là: " + soLe2;
}
/**
 * Bài 2:
 * Khối 1: Input
 *  Vòng lặp
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: Sau mỗi lần lặp
 *  Nếu i % 3 == 0 => Đếm số chia hết cho 3
 *  
 * B3: In kết quả
 * Khối 3: Output
 * Các số chia hết cho 3 đã đếm
 */

// For loop
document.getElementById("btnDem").onclick = function () {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count++
        }
    }
    document.getElementById("txtDem").innerHTML =
        "Các số chia hết cho 3 là: " + count
}

// While loop 
document.getElementById("btnDem2").onclick = function () {
    var count = 0;
    var n = 0;
    while (n < 1000) {
        if (n % 3 == 0) {
            count++
        }
        n++;
    }
    document.getElementById("txtDem2").innerHTML =
        "Các số chia hết cho 3 là: " + count
}

/**
 * Bài 3:
 * Khối 1: Input
 *  Vòng lặp
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: Sau mỗi lần lặp
 *  Điều kiện tiếp tục vòng lặp là tổng bé hơn 10000 thì tăng biến đếm lên 1 rồi cộng tổng với biến đếm đó
 *  
 * B3: In kết quả
 * Khối 3: Output
 * Số nguyên dương nhỏ nhất
 */
document.getElementById("btnTim").onclick = function () {
    var sum = 0;
    var n = 0;

    while (sum < 10000) {
        n++;
        sum += n;
    }
    document.getElementById("txtTim").innerHTML =
        "Số nguyên dương nhỏ nhất là: " + n;
}

/**
 * Bài 4:
 * Khối 1: Input
 *  Vòng lặp
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: Sau mỗi lần lặp
 *    luyThua *= soX;
      Sum += luyThua;
 *  
 * B3: In kết quả
 * Khối 3: Output
 * Sum
 */

document.getElementById("btnSum").onclick = function () {
    var soX = Number(document.getElementById("txtNum1").value);
    var soN = Number(document.getElementById("txtNum2").value);
    var luyThua = 1;
    var Sum = 0;
    for (var i = 0; i < soN; i++) {
        luyThua *= soX;
        Sum += luyThua;
    }
    document.getElementById("txtSum").innerHTML =
        "Tổng là: " + Sum;
}

/**
 * Bài 5:
 * Khối 1: Input
 *  n
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: Sau mỗi lần lặp
 *    luyThua *= soX;
      Sum += luyThua;
 *  
 * B3: In kết quả
 * Khối 3: Output
 *  GiaiThua
 */
document.getElementById("btnGiaiThua").onclick = function () {
    var n = Number(document.getElementById("txtNumGT").value);
    var giaiThua = 1 ;
   
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    document.getElementById("txtGiaiThua").innerHTML =
        "Giai thừa tính được là: " + giaiThua;
}

/**
 * Bài 6:
 * Khối 1: Input
 *  n
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: Sau mỗi lần lặp
 *    Nếu i % 2 == 0 thì in ra thẻ div chẵn
 *    Nếu i % 2 != 0 thì in ra thẻ div lẻ
 *  
 * B3: In kết quả
 * Khối 3: Output
 *  thẻ div chẵn và lẻ
 */

document.getElementById("btnDiv").onclick = function () {
    var content = "";
    
    for (var i = 1; i <= 10; i++) {
        if(i % 2 == 0) {
            content += "<div style='background:red'>Div Chẵn</div>";
        }else{
            content += "<div style='background:yellow'>Div Lẻ</div>";
        }
    }
    console.log(content);
    document.getElementById("txtDiv").innerHTML = content;
}   

/**
 * Bài 7:
 * Khối 1: Input
 *  soNgTo
 * Khối 2: 
 * B1: Viết vòng lặp và khai báo biến
 * B2: 
 * Vòng lặp đầu tiên để kiểm tra các số nguyên tố nhỏ hơn số nhập vào
 * Vòng lặp thứ 2 kiểm tra các số có phải là số nguyên tố hay không 
 *    
 * B3: In kết quả
 * Khối 3: Output
 *  kq
 */

 document.getElementById("btntxtSnt").onclick = function () {
    var soNgTo = Number(document.getElementById("txtSnt").value)
    var kq = "";
        for (var i = 2; i <= soNgTo; i++){
            var count = 0;
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if(i % j == 0) {
                    count++;
                }
                
            }
            if(count == 0){
                kq += " " + i
                document.getElementById("txttxtSnt").innerHTML =
                "Các số nguyên tố là: " + kq
            }
        }
     
        

    
  
}  



