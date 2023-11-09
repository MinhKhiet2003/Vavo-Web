<?php

session_start();
if (isset($_POST['dangnhap'])) {
    $DB_HOST = 'localhost';
    $DB_USER = 'root';
    $DB_PASS = ''; 
    $DB_NAME = 'test';

    $conn = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    
    if (!$conn) {
        die("Không thể kết nối tới cơ sở dữ liệu: " . mysqli_connect_error());
    }
    
    mysqli_query($conn, "SET NAMES 'utf8'");
    
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        
        $query = "SELECT id_user, pass FROM `user` WHERE id_user = '$username'";
        $result = mysqli_query($conn, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            print_r($row);
            echo $password;
            $hashed_password = $row['pass'];
            if ($password== $hashed_password) {

                $_SESSION['id_user'] = $row['id_user'];
                header("Location: tu_lieu.php"); 
            } else {
                echo "Lỗi: Mật khẩu không đúng";
            }
        } else {
            echo "Lỗi: Tên đăng nhập không tồn tại";
        }
    } else {
        echo "Lỗi: Thiếu thông tin đăng nhập";
    }
}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Đăng nhập</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        
        .login-container {
            max-width: 400px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .login-container h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        
        .login-container label {
            display: block;
            margin-bottom: 10px;
        }
        
        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 90%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .login-container input[type="submit"] {
            width: 90%;
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .login-container input[type="submit"]:hover {
            background-color: #0056b3;
        }
        
        .register-link {
            text-align: center;
        }
        
        .register-link a {
            text-decoration: none;
            color: #007bff;
        }
        
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Đăng nhập</h2>
        <form method="POST" action="">
        <label for="username">Tên đăng nhập:</label>
        <input type="text" name="username" required><br><br>
        <label for="password">Mật khẩu:</label>
        <input type="password" name="password" required><br><br>
        <input type="submit" name="dangnhap" value="Đăng nhập">
    </form>
        <div class="register-link">
            <a href="dangky.php">Chưa có tài khoản? Đăng ký ngay!</a>
        </div>
    </div>
</body>
</html>
