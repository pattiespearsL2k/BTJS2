function changeMoney() {
    var count=Number(document.getElementById("inpCount").value);
    var USD = 23500;
    if(Number.isInteger(count)){
        document.getElementById("txtMoney").innerHTML = "Số tiền cần quy đổi sang VNĐ là: " + USD * count;
    }
    else{
        document.getElementById("txtMoney").innerHTML="Vui lòng nhập đúng số lượng!"
    }
   
  
}

function Caculator() {
    var width = Number(document.getElementById("inpWidth").value);
    var length = Number(document.getElementById("inpLength").value);
    var S = width * length;
    var P = (width + length) * 2;
    document.getElementById("txtArea").innerHTML = "Diện tích hình chữ nhật là " + S;
    document.getElementById("txtPerimeter").innerHTML = "Chu vi hình chữ nhật là " + P;

}

function KySo() {
    var number = Number(document.getElementById("inpNumber").value);
    var kyso = Math.floor(number / 10) + Math.floor(number % 10);
    document.getElementById("txtNumber").innerHTML = "Tổng 2 ký số là " + kyso;
}