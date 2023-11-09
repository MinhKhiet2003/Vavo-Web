<?php
if (isset($_POST['dangky'])) {
    $DB_HOST = 'localhost';
    $DB_USER = 'root';
    $DB_PASS = ''; 
    $DB_NAME = 'test';

    $conn = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    
    if (!$conn) {
        die("Không thể kết nối tới cơ sở dữ liệu: " . mysqli_connect_error());
    }
    
    mysqli_query($conn, "SET NAMES 'utf8'");
    
    if (isset($_POST['userdki']) && isset($_POST['passdki'])) {
        $user = mysqli_real_escape_string($conn, $_POST['userdki']);
        $pass = $_POST['passdki'];
        
        $sql = "INSERT INTO `user`(`id_user`, `pass`) VALUES ('$user', '$pass')";            
        if (mysqli_query($conn, $sql)) {
            echo "Thêm thành công";
        } else {
            echo "Lỗi: " . mysqli_error($conn);
        }
    } else {
        echo "Lỗi: Thiếu thông tin đăng ký";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Đăng ký</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        
        .register-container {
            max-width: 400px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .register-container h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        
        .register-container label {
            display: block;
            margin-bottom: 10px;
        }
        
        .register-container input[type="text"],
        .register-container input[type="password"] {
            width: 90%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .register-container input[type="submit"] {
            width: 90%;
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .register-container input[type="submit"]:hover {
            background-color: #0056b3;
        }
        
        .login-link {
            text-align: center;
        }
        
        .login-link a {
            text-decoration: none;
            color: #007bff;
        }
    </style>
</head>
<body>
<div class="register-container">
    <h2>Đăng ký</h2>
    <form method="POST">
        <label for="username">Tên đăng nhập:</label>
        <input type="text" name="userdki" >
        <br>
        <label for="password">Mật khẩu:</label>
        <input type="password" name="passdki" >
        <br>
        <input type="submit" name ="dangky" value="Đăng ký">
    </form>
    <div class="login-link">
            <a href="dangnhap.php">Đã có tài khoản? Đăng nhập ngay!</a>
        </div>
    </div>
</body>
</html>