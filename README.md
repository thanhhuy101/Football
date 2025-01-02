Các trường hợp có thể xảy ra 
1. Khởi tạo cầu thủ:
+ Case hợp lệ:
  - Số áo của cầu thủ không trùng lặp
  - Defense rating được random từ 1-5
  - Mỗi cầu thủ được random 5 kỹ thuật khác nhau từ danh sách TECHNIQUES
+ Case không hợp lệ:
  - Số áo bị trùng
  - Không nhập tên
  - Thêm quá 10 cầu thủ
2. Luồng chơi chính:
+ Chọn cầu thủ bị phạt:
  - Mỗi vòng chọn 1 cầu thủ bị phạt ngẫu nhiên
  - Cầu thủ bị phạt không được tham gia vòng đó
  - Không được phạt 1 cầu thủ 2 lần trong game
+ Quá trình chuyền bóng:
  - Cầu thủ được chọn ngẫu nhiên để chuyền
  - Kỹ thuật được chọn ngẫu nhiên từ 5 kỹ thuật của cầu thủ đó
  - Kiểm tra chuyền thành công dựa trên công thức: random > (độ khó kỹ thuật - defense)
  - Nếu chuyền thất bại -> cầu thủ đó bị loại
  - Tiếp tục cho đến khi chỉ còn 1 người
3. Tính điểm:
+ Điểm = (10 - thứ tự bị phạt) + độ khó kỹ thuật
+ Trường hợp điểm cao:
  - Bị phạt muộn (thứ tự cao)
  - Sử dụng kỹ thuật khó thành công
  - Tồn tại nhiều vòng
+ Trường hợp điểm thấp:
  - Bị phạt sớm
  - Thất bại sớm
  - Chỉ dùng kỹ thuật dễ
4. Kết thúc game:
+ Game kết thúc khi:
  - Chơi đủ 10 vòng (mỗi cầu thủ bị phạt 1 lần)
  - Mỗi vòng kết thúc khi chỉ còn 1 người
+ Hiển thị kết quả:
  - Bảng xếp hạng điểm số
  - Top 3 cầu thủ được highlight
  - Biểu đồ thống kê kỹ thuật được sử dụng
