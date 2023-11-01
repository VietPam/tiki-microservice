# I. Hướng dẫn chạy service User

## 1/ Đảm bảo cài đặt Java development Kit phiên bản 17   
Mở terminal và chạy lệnh "java --version"

*java 17.0.8 2023-07-18 LTS*

*Java(TM) SE Runtime Environment (build 17.0.8+9-LTS-211)*

*Java HotSpot(TM) 64-Bit Server VM (build 17.0.8+9-LTS-211, mixed mode, sharing)*

Nếu hiện nội dung như trên đây thì hệ điều hành đã cài đặt JDK 17

## 2/ Clone dự án về máy

## 3/ mở terminal trỏ đến path sau: "/advanced-se/user-service/jar-files"
sau đó chạy lệnh sau "java -jar user-service-5.jar"

Lưu ý rằng hãy chạy version mới nhất của service
Sau đó nếu không xuất hiện lỗi trên terminal thì dự án đã chạy thành công


# II. Hướng dẫn chạy service Product

## 1/ Cài đặt Docker Desktop

Trước tiên, bạn cần cài đặt Docker desktop, bạn có thể tìm theo keyword sau: Docker desktop download windows 11

Hãy chạy ứng dụng hello world để chắc chắn Docker Desktop đã được cài đặt thành công!

## 2/ Clone source và mở terminal

Sau khi cài đặt xong, bạn cần clone mã nguồn và mở terminal với đường dẫn như sau:  *Advanced-SE\product-service\ProductService\ProductService*

## 3/ Chạy *Docker build*

Chạy lệnh sau để build image:  *docker build -t product-service .*

Quá trình này sẽ hơi lâu, tầm 3-4p

Khi bạn thấy hình ảnh kết quả trên terminal giống như trong hình dưới, điều này có nghĩa rằng image đã được build thành công.

![](https://github.com/Trinh-Dong-Nguyen/Advanced-SE/blob/product-service/product-service/ProductService/docker-build-image.png)

## 4/ Chạy *Docker run*

Chạy lệnh sau để run container:  *docker run -d -p 5000:80 product-service*


Khi bạn thấy hình ảnh kết quả trên terminal giống như trong hình dưới, điều này có nghĩa rằng image đã được build thành công.

![](https://github.com/Trinh-Dong-Nguyen/Advanced-SE/blob/product-service/product-service/ProductService/docker-run-container.png)

## 5/ Truy cập Swagger

Để sử dụng Swagger, mở trình duyệt và truy cập vào địa chỉ sau: [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html)

Nếu bạn chưa sử dụng Swagger bao giờ, bạn có thể tìm hiểu thêm trên YouTube hoặc tài liệu hướng dẫn.


# III. Hướng dẫn chạy service Cart

## 1/ Cài đặt Docker Desktop
Trước tiên, bạn cần cài đặt Docker desktop, bạn có thể tìm theo keyword sau: Docker desktop download windows 11

## 2/ Clone source và mở terminal

Sau khi cài đặt xong, bạn cần clone mã nguồn và mở terminal với đường dẫn như sau:  *Advanced-SE\CartsService\CartsService>*

## 3/ Chạy *Docker build*

Chạy lệnh sau để build image:  *docker build -t cart-service .*

Quá trình này sẽ hơi lâu, tầm 3-4p

## 4/ Chạy *Docker run*

Chạy lệnh sau để run container:  *docker run -d -p 5197:80 cart-service*

## 5/ Truy cập Swagger

Để sử dụng Swagger, mở trình duyệt và truy cập vào địa chỉ sau: [http://localhost:5197/swagger/index.html](http://localhost:5197/swagger/index.html)
