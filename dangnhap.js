
	function checkDangnhap(){

		var a= document.getElementsById("tendangnhap");
		var b= document.getElementsById("matkhau");
		if (a=" ") {
			alert("Vui lòng nhập tên tài khoản");
			return false;	
		}
		if (b=" "){
			alert("Vui lòng nhập mật ");
			return false;
		}
		alert("Đăng nhập thành công");
		return true ;	

	}	