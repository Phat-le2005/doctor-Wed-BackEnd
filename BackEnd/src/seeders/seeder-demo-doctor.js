'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('doctors', [
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/0b92b6dd-a7ab-40fe-8660-29f090b60185.jpg",
            "doctorName":"Vũ Thị Mai Uyên",
            "position":"ThS.BS",
            "email":"maiUyen@gmail.com",
            "doctorPass":"",
            "phoneNumber":"0901100960",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            "introduce": "ThS BS Vũ Thị Mai Uyên nhiều năm kinh nghiệm trong khám và điều trị về Nhi khoa, Tiêu hóa, Dinh dưỡng, Nội tổng quát tại Bệnh viện Nhi đồng 1.\nHiện là Giảng viên Đại học Y Dược Thành phố Hồ Chí Minh.",
            "HocVan":"-Tốt nghiệp Bác sĩ Đa khoa và Bác sĩ Nội trú.\nThS.BS.CK1 tại Đại học Y Dược TP.HCM\n -Giảng viên Bộ môn Nhi, Đại học Y Dược TP.HCM\n -Tốt nghiệp khóa Dinh dưỡng Nhi khoa sau đại học – Đại học Y Boston.\n -Tu nghiệp tại Đại học Ludwig Maximilian University of Munich",
            "CongTac":"-Tốt nghiệp Bác sĩ Đa khoa và Bác sĩ Nội trú.\n-ThS.BS.CK1 tại Đại học Y Dược TP.HCM\n-Tốt nghiệp khóa Dinh dưỡng Nhi khoa sau đại học – Đại học Y Boston\n-Tu nghiệp tại Đại học Ludwig Maximilian University of Munich"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/66b8afcb-e3dc-4099-995c-48040df25b75.jpg",
            "doctorName":"Trần Ngọc Lưu Phương",
            "position":"BS.CKII",
            "email":"Luuduong@gmail.com",
            "doctorPass":"",
            "phoneNumber":"0924827917",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            "introduce": "BS.CK2 Trần Ngọc Lưu Phương có hơn 28 năm kinh nghiệm trong việc thăm khám và điều trị các vấn đề tiêu hóa. Khi có nhu cầu đến thăm khám, bệnh nhân vui lòng đặt lịch trước qua ứng dụng YouMed để chọn khung giờ khám phù hợp và giúp phòng khám phục vụ tốt hơn",
            "HocVan":"- Tốt nghiệp BÁC SĨ Y KHOA năm 1996 tại Đại học Y khoa Phạm Ngọc Thạch\n- Bác sĩ chuyên khoa cấp 1 chuyên ngành Nội tổng quát, đại học Y dược TPHCM (2000)\n - Bác sĩ chuyên khoa cấp 2 Chuyên khoa Tiêu hóa - Gan mật, đại học Y dược TPHCM (2013).\n - Thạc sỹ y học, Đại học Y dược TPHCM (2006).\n - Chứng chỉ nội soi tiêu hóa, Đại học Y dược TPHCM (2000).",
            "CongTac":"- Giảng viên bộ môn nội tổng quát phân môn Tiêu hóa - Gan mật, Đại học Y khoa Phạm Ngọc Thạch.\n- Nguyên Phó khoa Tiêu hóa - Gan mật, Bệnh viện Nguyễn Tri Phương.\n- Trưởng khoa Nội soi Tiêu hóa, Bệnh viện Nguyễn Tri Phương.\n- Bác sĩ khoa Nội soi, Bệnh viện đại học Y dược TPHCM.\n- Hội viên chính thức Hiệp hội các bác sĩ Tiêu hóa - Gan mật Hoa Kỳ (AGA).\n- Ủy viên Ban Chấp hành Hội Tiêu hóa Việt Nam."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/4f01e016-00cf-498c-a82e-761393de038c.jpeg",
            "doctorName":"Lâm Việt Trung",
            "position":"GS.TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Giáo sư, Tiến sĩ, Bác sĩ Lâm Việt Trung đã có hơn 20 năm kinh nghiệm trong lĩnh vực Tiêu hóa.\nLà một bác sĩ giỏi, có bề dày kinh nghiệm cũng như chuyên môn cao, GS.TS.BS Lâm Việt Trung hiện là Trưởng khoa Ngoại tiêu hóa",
            "HocVan":"Sau nhiều năm làm việc và cống hiến ở vị trí bác sĩ tiêu hóa, bác sĩ giỏi bệnh viện Chợ Rẫynày cũng đã đạt được những thành tựu nhất định. Quan trọng hơn cả đó là sự hết lòng dành cho bệnh nhân. Là người đầu tiên mổ ung thư thành công với “bác sĩ robot” ",
            "CongTac":"Với sự tâm huyết của mình, bác sĩ tiêu hóa Lâm Việt Trung hiện đang công tác tại: 1. Bệnh viện 2. Phòng khám tiêu hóa bác sĩ Lâm Việt Trung"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/579ab60d-d494-45db-8ac9-f4b9b67af637.jpg",
            "doctorName":"Võ Nguyên Trung",
            "position":"TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Võ Nguyên Trung hiện đang công tác tại Cơ sở 2 - Bệnh viện Đại học Y Dược TPHCM và giữ các chức vụ sau: \n -Trưởng Bộ môn Bệnh học lâm sàng - Khoa Điều dưỡng - Kỹ thuật y học - Đại học Y Dược TPHCM.\n-Trưởng Ban Khoa học Đào tạo - Cơ sở 2 Bệnh viện Đại học Y Dược TPHCM.",
            "HocVan":"1996 - 2002: Bác sĩ đa khoa tại Đại học Y Dược TPHCM.\n2002 - 2006: Bác sĩ nội trú tại Đại học Y Dược TPHCM.\n2008 - 2009: Thạc sĩ Y học tại Đại học Y Dược TPHCM.\n2010 - 2014: Tiến sĩ Y học tại Đại học Y khoa Shiga, Nhật Bản.",
            "CongTac":"-2002 – 2007: Bệnh viện Bình Dân.\n2007 – 2009: Bệnh viện Chợ Rẫy.\n-2009 – 2013: Đại học Y khoa Shiga, Nhật Bản.\n-2013 – 2017: Bệnh viện Chợ Rẫy.2017 – nay: Cơ sở 2 Bệnh viện Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/907d4df7-57e8-484b-b618-2580700fff61.png",
            "doctorName":"Tô Thị Tình",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Thạc sĩ - Bác sĩ nội trú Tô Thị Tình là chuyên gia trong lĩnh vực Nội tiêu hóa - gan mật và nội soi, Bác công tác tại Khoa Nội Tiêu hóa - gan mật Bệnh viện Đà Nẵng. Tốt nghiệp ThS Bs nội trú chuyên ngành nội khoa tại Đại học Y Dược Huế.\nHiện là bác sĩ tại Đại học Y Dược Thành phố Hồ Chí Minh.",
            "HocVan":"2010: Bác sĩ Đại học Y Dược Huế\n2013: Thạc sĩ Bác sĩ Nội trú Đại học Y Dược TP.HCM\n",
            "CongTac":"2013 – nay: Bệnh viện Y Dược TPHCM"
        },
    
    
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/68c2307d-18f8-4e97-9ef3-99fea20a286d.png",
            "doctorName":"Trần Quang Nam",
            "position":"GS.TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Giáo sư, Tiến sĩ, Bác sĩ Trần Quang Nam hiện đang là Trưởng khoa Nội Tiết bệnh viện Đại học Y Dược TP.HCM, Phó Trưởng Bộ môn Nội tiết tại Đại học Y Dược TP.HCM. Bác sĩ có nhiều năm kinh nghiệm trong việc chuyên khám và điều trị các bệnh như đái tháo đường, bệnh bướu cổ, bệnh nội tiết và các bệnh nội khoa.",
            "HocVan":"-2000 - nay: Đại học Y Dược TP.HCM.\n-2004 - 2016: Khoa Nội tiết Bệnh viện Nhân Dân 115\n-2016 - nay: Tổ Bộ môn Nội tiết Bệnh viện Đại học Y Dược TP.HCM",
            "CongTac":"-Năm 2015, Tiến sĩ, Bác sĩ Trần Quang Nam tham gia công trình nghiên cứu cấp TP về Nghiên cứu suy thượng thận ở bệnh nhân dùng corticoid dài hạn bằng các nghiệm pháp động (đã nghiệm thu)\n-Xuất bản sách BỆNH HỌC NGƯỜI CAO TUỔI tập 2 (NXB Y học)"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/7dc77715-11e0-45cc-b586-131567d9ab9f.jpg",
            "doctorName":"Nguyễn Lam Thi",
            "position":"BS.CKII",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "BS.CK2 Nguyễn Lam Thi hiện đang công tác tại Khoa Nội tiết – BV Nguyễn Tri Phương. Bác sĩ Lam Thi có hơn 18 năm kinh nghiệm trong ngành Nội tiết. Là một bác sĩ giỏi, có bề dày kinh nghiệm cũng như chuyên môn cao, bác sĩ Lam Thi được rất nhiều bệnh nhân yêu mến và tin tưởng đến thăm khám khi gặp các bệnh liên quan đến Nội tiết.",
            "HocVan":"Năm 2021: Tốt nghiệp Chuyên khoa II Nội tiết - Đại học Y Dược TP.HCM\nTập huấn ở Hong Kong (từ 26-28 tháng 08 năm 2012) triển khai nghiên cứu JADE DIAMOND: chương trình đa trung tâm phân nhóm ngẫu nhiên nhằm so sánh hiệu quả của Chương Trình Đánh Giá bệnh Đái Tháo Đường Liên Châu Á\n Năm 2013 đến 2015: Nghiên cứu Jade – Diamond ở Bệnh viện Nguyễn Tri Phương\nTháng 2 năm 2023 :Tham gia giảng dạy khóa học “Cập nhật các tiến bộ trong điều trị đái tháo đường” tại ĐH Y dược TP.HCM.",
            "CongTac":"2004-2006: Học chuyên khoa 1 Nội tiết.\n2007-2008: Trung tâm dinh dưỡng TPHCM\nTừ 2009 đến nay: Khoa Nội tiết – BV Nguyễn Tri Phương"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/a59c4686-41c2-41a7-bcc1-ec93ae40146d.jpg",
            "doctorName":"Nguyễn Quốc An",
            "position":"BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Tốt nghiệp bác sĩ tại trường Đại học Y dược \nCó thời gian học tập và làm việc, đào tạo chuyên sâu chuyên khoa thận – nội tiết tại Bệnh viện Nhi đồng 1 \nChuyên khám từ nhi tổng quát đến chuyên khoa thận – nội tiết như dậy thì sớm, đái tháo đường, suy giáp, cường giáp, hội chứng thận hư, tăng sản thượng thận bẩm sinh ",
            "HocVan":"-Năm 2021: Tốt nghiệp Bác sĩ Đa khoa tại trường Đại học Y dược \nNăm 2022: Được cử đi học chuyên khoa thận – nội tiết tại Bệnh viện Nhi đồng 1 TPHCM\n Đạt được nhiều chứng chỉ trong quản lý, khám và theo dõi các bệnh lý từ nhi khoa tổng quát đến chuyên khoa thận – nội tiết",
            "CongTac":"Hiện đang công tác tại khoa Nội Nội tiết tại Bệnh viện đại học y Dược"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/f2bc5e37-569d-4af3-bbfc-84f15f638bf3.jpg",
            "doctorName":"Nguyễn Quốc Sử",
            "position":"BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Nguyễn Quốc Sử được đào tạo chuyên ngành Bác sĩ Quân y hệ chính quy tại Học Viện Quân Y. Sau khi ra trường, Bác sĩ Sử công tác tại Bệnh viện Quân y 121. Là 1 Bác sĩ Quân đội, Bs luôn tận tâm chữa trị cho người bệnh. và tích cực trong nghiên cứu khoa học, cập nhật kịp thời các kiến thức mới trong điều trị.",
            "HocVan":"2013 – 2020: Học Bác sĩ đa khoa tại Học viện Quân y",
            "CongTac":"2020 – 2024: Công tác tại Khoa Nội tiết tại Bệnh viện đại học Y Dược TPHCMTPHCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/424272f7-bb78-4141-b75e-d6de09976f84.jpg",
            "doctorName":"Trần Thị Mộng Trinh",
            "position":"BS.CKI",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "BS.CK1. Trần Thị Mộng Trinh là phòng khám uy tín trong việc khám, chuẩn đoán và điều trị các bệnh nội khoa. Bên cạnh đó, thì phải nhắc đến chất lượng dịch vụ luôn khiến bệnh nhân cảm thấy an tâm, hài lòng khi đến phòng khám và có cung cấp dịch vụ bác sĩ tại nhà nếu bệnh nhân cần.",
            "HocVan":"2013 : Tốt nghiệp Đại Học Y Dược TP Hồ Chí Minh\n 2020 : Tốt nghiệp BS.CK1 Nội tiết Đại Học Y Dược TP Hồ Chí Minh",
            "CongTac":"2013 – nay : Công tác tại Bệnh Viện Đại học Y Dược TP.HCM"       
        },
    
    
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/60736948-6feb-4fd3-864d-deac77daad21.jpg",
            "doctorName":"Trần Thị Tuyết Lan",
            "position":"BS.CKII",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "ThS.BS.CK2 Trần Thị Tuyết Lan rất nổi tiếng trong chuyên khoa Nội Tim Mạch, và có nhiều năm kinh nghiệm trong việc khám chữa bệnh Nội Tim Mạch. Phòng khám của Bác Sĩ Lan là một địa chỉ khám Tim Mạch rất đáng tin cậy tại Quận 11 TP.HCM. ",
            "HocVan":"Năm 2000: Tốt nghiệp Đại Học Y Dược TP.HCM\nNăm 2012-2014: Thạc sĩ Y Khoa, Đại Học Y Khoa Phạm Ngọc Thạch, TP.HCM\n Năm 2018-2020: Chuyên khoa 2 Nội Tim Mạch, Đại Học Y Khoa Phạm Ngọc Thạch, TP.HCM\nNăm 2019: Chứng chỉ đủ trình độ sử dụng thành thạo ngôn ngữ Tiếng Anh trong khám chữa bệnh.",
            "CongTac":"Năm 2003-nay: Công tác tại Viện Tim TP.HCM."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/5f480ad3-4124-4e36-8f62-8b8e9b8a1edf.jpg",
            "doctorName":"Nguyễn Quốc Phú",
            "position":"BS.CKI",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Chuyên khoa I Nguyễn Quốc Phú là một chuyên gia y tế có nền tảng kiến thức vững chắc và kinh nghiệm thực tiễn đáng kể trong lĩnh vực tim mạch.",
            "HocVan":"Năm 2013: Đại học Y Dược \nNăm 2014: Tham gia học tập siêu âm tim và bệnh lý tim mạch (Viện tim TP HCM)\nNăm 2017: Tham gia lớp bồi dưỡng chuyên khoa chẩn đoán hình ảnh tại BV Chợ Rẫy\nNăm 2020: Tốt nghiệp chuyên khoa 1 chuyên ngành thần kinh tại ĐHYD Cần Thơ",
            "CongTac":"2013 - Nay: Bác sĩ Nguyễn Quốc Phú công tác tại Bệnh viện Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/d3a66c4a-657e-4f53-ab59-36dab85e3257.jpg",
            "doctorName":"Nguyễn Hoàng Dũng",
            "position":"BS.CKII",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "ThS.BS.CK2 Nguyễn Hoàng Dũng có nhiều năm kinh nghiệm trong lĩnh vực Hồi sức Phẫu thuật Tim. \nBác sĩ hiện đang công tác tại  bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh.",
            "HocVan":"2006: Tốt nghiệp Đại học Y Dược Tp.Hồ Chí Minh\n2012: Tốt nghiệp Chuyên khoa I Đại học Y Phạm Ngọc Thạch\n 2013-2014: Tu nghiệp tại bệnh viên Sejong-Hàn Quốc\n2019: Tốt nghiệp Chuyên khoa II Đại học Y Phạm Ngọc Thạch",
            "CongTac":"2006-Nay : Công tác tại khoa Hồi sức Phẫu Thuật Tim bệnh viện Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/8fc0573a-69c6-4e94-9615-38b0c20f9ebe.jpg",
            "doctorName":"Lê Thanh Bình",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Lê Thanh Bình có hơn 18 năm kinh nghiệm trong lĩnh vực TIM MẠCH . Là một bác sĩ giỏI, tiếp cận nhanh đến kỹ thuật tiên tiến, hiện đạI. Cùng vớI tàI năng là tấm lòng nhân áI của bác sĩ đã góp phần không nhỏ trong hành trình cứu ngườI của mình.",
            "HocVan":"Tốt nghiệp BS đa khoa: TTĐT & BD CB Y tế TP HCM, năm 2002\nTốt nghiệp Cao học Nội TQ : ĐHYD TPHCM, năm 2011\nChứng chỉ Tim mạch can thiệp: Viện Tim Tp HCM, năm 2018",
            "CongTac":"Bác sĩ thực hành luân khoa BVND 115 : 2003-2005 .\nBác sĩ điều trị khoa Tim mạch A - BVND 115: 2005-2007 \nBác sĩ điều trị khoa Hồi sức tim mạch - BVND 115: 2007-2013 \nBác sĩ điều trị khoa Tim mạch can thiệp - BVND 115: 2013-nay"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/56e828a3-e332-443f-935a-8c16fa864e76.JPG",
            "doctorName":"Trần Lê Vy",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Hiện đang là giảng viên Bộ môn Nội - Trường Đại học khoa học sức khoẻ - Đại học Quốc gia TP.HCM và Bác sĩ điều trị tại khoa Tim mạch bệnh viện Thống Nhất TP.HCM\nKinh nghiệm 4 năm trong lĩnh vực Tim mạch – Lão khoa",
            "HocVan":"2013-2019: Bác sĩ đa khoa tại Trường Đại học Y Dược thành phố Hồ Chí Minh\n2019-2022: Bác sĩ nội trú Lão khoa tại Trường Đại học Y Dược thành phố Hồ Chí Minh\n2020-2022: Thạc sĩ nội khoa tại Trường Đại học Y Dược thành phố Hồ Chí Minh",
            "CongTac":"2019-2020: Bác sĩ nội trú tại bệnh viện Nhân dân Gia Định\n2020-2021: Bác sĩ nội trú tại bệnh viện Đại học Y Dược thành phố Hồ Chí Minh\n2022-nay: Giảng viên Bộ môn Nội trường Đại học Khoa học sức khoẻ - Đại học Quốc gia thành phố Hồ Chí Minh"       
        },
    
    
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/ea21e403-5bb9-4e2c-bfce-f2b94b2a9efd.jpg",
            "doctorName":"Lê Thành Nhân",
            "position":"BS.CKI",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Lê Thành Nhân chuyên khoa thần kinh, chuyên điều trị các bệnh lý thần kinh tổng quát và chuyên sâu",
            "HocVan":"2012-2018: Bác sĩ đa khoa Đại học Y Dược Thành phố Hồ Chí Minh\n2018-2021: Bác sĩ nội trú - Thạc sĩ y khoa - Bác sĩ chuyên khoa I chuyên ngành Thần Kinh Đại Học Y Dược Thành phố Hồ Chí Minh",
            "CongTac":"2018-2021: Bác sĩ nội trú tại Bệnh viện Đại học Y Dược TP.HCM, Bệnh viện Chợ Rẫy, Bệnh viện 115.\n2022-nay: Bác sĩ điều trị khoa Nội Thần Kinh Bệnh viện Chợ Rẫy, Giảng viên Bộ môn Thần Kinh Đại học Y Dược Thành phố Hồ Chí Minh"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/89dc63ed-6704-40a3-9a7e-85757b3346ec.png",
            "doctorName":"Võ Quang Huy",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "ThS.BS Võ Quang Huy có 25 năm kinh nghiệm Hồi Sức Cấp Cứu, khám điều trị về bệnh lý nội khoa, tại Bệnh Viện Trưng Vương- Trung Tâm cấp Cứu 115. Ngoài ra Bác sĩ Võ Quang Huy còn tham gia giảng dạy hồi sức cấp cứu-Y Học Thảm Họa ",
            "HocVan":"1997 Tốt nghiệp Y Khoa \n2000-2002 Tu nghiệp Đài Loan hồi sức Cấp Cứu \n2010 Tu Nghiệp Thái Lan Y Học Thảm họa\nNghiên cứu sinh học viện Quân Y 103",
            "CongTac":"1997 làm việc tại Bệnh Viện Trưng Vương\n2013 làm Phó Giám Đốc Trung Tâm Cấp Cứu 115\n2013- Nay Quyền Giám Đốc điều hành "       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/f4153b4e-2a0b-4c52-b695-780a7b2da2f6.JPG",
            "doctorName":"Nguyễn Hoàng Minh Thảo",
            "position":"BS.CKI",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Nguyễn Hoàng Minh Thảo có hơn 5 năm công tác tại Bệnh viện Thành phố Thủ Đức, trực tiếp thăm khám và điều trị nhiều ca bệnh Thần kinh – Tổng quát với chuyên môn vững vàng cùng với sự chu đáo và tỉ mỉ nên đã được rất nhiều bệnh nhân tin tưởng và lựa chọn.",
            "HocVan":"2011 – 2017: Bác sĩ Đa khoa Đại học y khoa Phạm Ngọc Thạch\n2020 – 2022: Chuyên khoa 1 – chuyên ngành Thần Kinh Đại học Y dược Tp.HCM",
            "CongTac":"11/2017 – Nay: Bác sĩ điều trị tại Khoa Nội thần kinh Bệnh viện Thành phố Thủ Đức\n05/2022 – 11/2022: Hợp tác chuyên môn Nội tổng hợp tại Phòng khám Đa khoa Quốc tế DYM\n11/2022 – Nay: Hợp tác chuyên môn tại Khoa Nội thần kinh Bệnh viện Đa khoa Quốc tế Hoàn Mỹ Thủ Đức"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/defcee8d-cd90-4684-9cfc-c69213abe25d.jpg",
            "doctorName":"Nguyễn Thị Thùy Vân",
            "position":"BS.CKII",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Ths Bs CKII Nguyễn Thị Thùy vân có hơn 10 năm kinh nghiệm trong việc khám và điều trị chuyên nghành thần kinh Nhi, tại khoa nhiễm thần kinh nhi Bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh.",
            "HocVan":"2001-2007: Tốt nghiệp Bác Sĩ Đa khoa, Đại Học Y Dược TPHCM\n2011-2013: Tốt nghiệp Ths.Bs chuyên khoa Thần Kinh Đại Học Y Dược TPHCM\n2020-2022 Tốt nghiệp BS.CKII chuyên khoa thần kinh Nhi Đại Học Y Dược TPHCM",
            "CongTac":"2007-2011: Bác sĩ nội tổng quát, làm việc tại Bệnh Viện Quận 1\n2013- Nay: Bác sĩ Thần Kinh Nhi tại Khoa Nhiễm Thần Kinh Bệnh viện Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/69ded1c0-9b88-4d86-95ff-02b273ca5ae3.jpg",
            "doctorName":"Nguyễn Thi Hùng",
            "position":"GS.TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thi Hùng\nHơn 40 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Thần kinh.\nNhiều năm tu nghiệp và làm việc ở các trường đại học Y khoa danh tiếng ở Pháp, Mỹ, Singapore…\nBác sĩ nhận bệnh nhân từ 18 tuổi trở lên.",
            "HocVan":"Năm 1979: Tốt nghiệp Đại học Y Dược TP.HCM.\nNăm 1993: Tốt nghiệp Bác sĩ nội trú Trung tâm Y khoa Lille, Bệnh viện Roger Salengro, Pháp.\nNăm 1996: Tu nghiệp tại Đại học Y khoa Irvine, Mỹ.\nNăm 2000: Nhận danh hiệu Phó giáo sư, Tiến sĩ chuyên khoa Thần kinh, Đại học Y dược TP.HCM.",
            "CongTac":"Bác sĩ Nguyễn Thi Hùng được xem là một trong những bác sĩ có chuyên môn cao cấp trong lĩnh vực Thần kinh, ông là người tiên phong trong nhiều phương pháp điều trị mới mang tính đột phá lớn. Bác sĩ Hùng chính là bác sĩ đầu tiên ở Việt Nam phẫu thuật thành công bệnh Parkinson (2012)"       
        },
    
    
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/eb72984c-5b3b-4cc0-9ddb-3aafb1f572ac.jpg",
            "doctorName":"Dương Thị Thanh Mai",
            "position":"BS.CKII",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Chuyên khoa 2 DƯƠNG THỊ THANH MAI hiện đang công tác tại Khoa Tai - Mũi - Họng bệnh viện Chợ Rẫy với gần 20 năm kinh nghiệm trong thăm khám và chữa trị các bệnh lý về Tai - Mũi - Họng.",
            "HocVan":"2005: Tốt nghiệp chuyên khoa I tại ĐH Y Dược TP. HCM\n2013: Tốt nghiệp chuyên khoa II tại ĐH Y Dược TP.HCM",
            "CongTac":"Trên 16 năm công tác tại khoa Tai mũi họng Bệnh Viện Chợ Rẫy.\nTu nghiệp khoá phẫu thuật u bướu vùng đầu mặt cổ và các bệnh lý tai mũi họng tại ĐH y khoa Gwangju Korea.\nChuyên khám  nội soi và tư vận và điều trị phẫu thuật nội soi các bệnh lý viêm mũi xoàng, viêm tai, viêm Amidan, thanh quản..."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/116c9239-b3aa-49b7-a025-8150665b682c.jpeg",
            "doctorName":"Phạm Ngọc Chất",
            "position":"TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Tiến sĩ, Bác sĩ PHẠM NGỌC CHẤT hiện đang là Phó Trưởng Bộ môn Tai - Mũi - Họng - Đại học Y Dược TP.HCM",
            "HocVan":"1979 - 1985: Sinh viên Y Đại học Y Dược TP.HCM\n1986 - 1990: Đại học Y Dược TP.HCM, Bác sĩ nội trú - Cán bộ giảng bộ môn Tai Mũi Họng\n1991 - 1994: Đại học Y Dược TP.HCM, Tốt nghiệp Cao Học\n1999 - 2004: Đại học Y Dược TP.HCM, Tốt nghiệp Tiến sĩ Y khoa",
            "CongTac":"1999 - 2004: Tốt nghiệp Tiến sĩ Y khoa Đại học Y Dược TP.HCM\n2004 - 2008: Công tác tại bệnh viện Nhi Đồng 1 TP.HCM\n2009 - Nay: Công tác tai BV Tai Mũi Họng TP.HCM và Bệnh viện Trưng Vương, là Phó trưởng bộ môn Tai Mũi Họng Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/999ab128-e917-4f48-9eb9-f2ae940bd84b.jpg",
            "doctorName":"Huỳnh Thị Mỹ Hiền",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Thạc sĩ, Bác sĩ Huỳnh Thị Mỹ Hiền hiện đang công tác tại Bệnh viện Nhi Đồng 2\nChuyên khoa Nhi- Tai, Mũi, Họng với nhiều năm kinh nghiệm.",
            "HocVan":"Năm 2010: Tốt nghiệp Bác sĩ ở Đại học Y Dược Thành phố Hồ Chí Minh\nNăm 2014: Tốt nghiệp nội trú, Thạc sĩ Tai-Mũi-Họng ở Đại học Y Dược Thành phố Hồ Chí Minh",
            "CongTac":"2014-2019: Công tác tại Bệnh viện Đại hoc y dược TPHCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/f48931e3-7d5a-4274-bad2-d4de5818bd4a.jpg",
            "doctorName":"Nguyễn Trọng Minh",
            "position":"TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Tiến sĩ Bác sĩ Nguyễn Trọng Minh Trên 30 kinh nghiệm lĩnh vực Tai Mũi Họng\nNguyên Giảng viên tại Đại học Y dược TP. HCM, Bệnh viện Chợ Rẫy, Học viện Quân Y, Đại học Y khoa Phạm Ngọc Thạch TP. HCM",
            "HocVan":"Tiến sĩ Y học Tai mũi họng (2009)\nTu nghiệp tại Hoa Kỳ (1997, 2005); Singapore (1998, 1999)\nTốt nghiệp Thạc sĩ Y học chuyên ngành Tai mũi họng - Đại học Y Dược TP. HCM (1995 - 1997)\nTốt nghiệp Chuyên khoa I chuyên ngành Tai mũi họng (1989 - 1991)",
            "CongTac":"Giảng viên lâm sàng Y5 - Đại học Y dược TP. HCM (1999 - 2020)\nGiảng viên lớp Định hướng Chuyên khoa Tai mũi họng - Bệnh viện Chợ Rẫy (2000 - 2020)\nGiảng viên lớp Bác sĩ Quân Y - Học viện Quân Y (2007 - 2020)"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/87b9a688-54ed-4e9f-a1ad-94ceba14b15f.png",
            "doctorName":"Bạch Thiên Phương",
            "position":"BS.CKII",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "BS.CKII Bạch Thiên Phương có nhiều năm khinh nghiệm khám điều trị, Tư vấn về nhi khoa chuyên về Tai Mũi Họng.",
            "HocVan":"2002: Tốt nghiệp Bác sĩ y khoa Trường Đại Học Y Dược Thành phố Hồ Chí Minh\n2011: Tốt nghiệp Bác sĩ Chuyên khoa 1 Tai - Mũi - Họng Trường Đại Học Y khoa Phạm Ngọc Thạch\n2015: Tốt nghiệp Bác sĩ Chuyên khoa 2 Tai - Mũi - Họng Trường Đại Học Y Dược Thành phố Hồ Chí Minh",
            "CongTac":"2004-2016: Bác sĩ khoa Tai - Mũi -Họng Bệnh viện Nhi đồng 1.\n2016-2021: Bác sĩ trưởng khoa Tai - Mũi -Họng Bệnh viện Nhi đồng Thành Phố.\n2021-2022: Bác sĩ trưởng khoa Tai-Mũi-Họng Bệnh viện Quốc tế Hạnh Phúc."       
        },
    
    
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/448386e4-d503-4403-909d-b382f470670f.png",
            "doctorName":"Hồ Thị Phượng",
            "position":"BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Hồ Thị Phượng đã có trên 30 năm kinh nghiệm thăm khám và điều trị trong lĩnh vực Sản phụ khoa.",
            "HocVan":"Năm 1986: Tốt nghiệp Bác sĩ tại Trường Đại Học Y dược TP.HCM.",
            "CongTac":"Từ năm 1988 đến nay: Công tác tại Bệnh viện Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/3b0cc794-2508-4479-b0ae-c277bf98971d.jpg",
            "doctorName":"Cao Thị Hạnh Nhân",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Thạc sĩ Bác sĩ CAO THỊ HẠNH NHÂN hiện đang công tác tại bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh.",
            "HocVan":"Năm 2000 - 2006: Tốt nghiệp Bác sĩ đa khoa Đại học Y Dược TP.HCM\nNăm 2000 - 2006: Tốt nghiệp Bác sĩ đa khoa Đại học Y Dược TP.HCM\nNăm 2010 - 2012: Tốt nghiệp Thạc sĩ Đại học Y Dược TP.HCM",
            "CongTac":"Năm 2012 - 2013: Bệnh viện Từ Dũ\nNăm 2013 - 2016: Bệnh viện tỉnh Khánh Hòa\nNăm 2016 - Nay: Bệnh viện Từ Dũ"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/c015a91a-e86f-470a-a339-fd1b33e7b775.png",
            "doctorName":"Trần Kim Hoàng",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Trải qua quá trình đào tạo và công tác trong lĩnh vực Sản Phụ khoa, Thạc sĩ Bác sĩ Trần Kim Hoàng luôn tận tâm, nhiệt tình thăm khám, điều trị cho người bệnh, thân thiện, luôn vui vẻ với đồng nghiệp.",
            "HocVan":"2021: Tốt nghiệp Bác sĩ Y khoa tại trường Đại học Võ Trường Toản.\n10/09/2022: Tham dự Hội nghị khoa học thường niên chủ đề Góc nhìn mới bệnh lý phụ khoa & Thai kỳ nguy cơ cao tại Bệnh viện Hùng Vương.\n28/07/2023: Hoàn thành khóa đào tạo Đặt và tháo dụng cụ tử cung chứa Levonorgestrel tại Bệnh viện Từ Dũ.",
            "CongTac":"Hiện tại, Thạc sĩ Bác sĩ Trần Kim Hoàng đang công tác tại Bệnh viện Hùng Vương, chuyên khoa Sản Phụ khoa."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/3e883392-75d7-46fc-8938-871dde8e5117.jpg",
            "doctorName":"Phạm Thị Ngọc Dung",
            "position":"BS.CKI",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Chuyên khoa 1 Sản Phụ Khoa với nhiều năm kinh nghiệm trong lĩnh vực này, công tác bệnh viện lớn tại thành phố Hồ Chí Minh và hợp tác với các bệnh viện lớn cũng như các phòng khám uy tín khác. Luôn luôn lắng nghe, chăm sóc và tư vấn nhiệt tình, lấy bệnh nhân làm trung tâm.",
            "HocVan":"2013- 2019: Bác sĩ đa khoa.\n2022- nay: Bác sĩ Chuyên Khoa 1 Sản Phụ Khoa tại Đại học Y khoa Phạm Ngọc Thạch.\n2019- nay: Học các chứng chỉ đào tạo liên tục tại các bệnh viện đầu ngành: Từ Dũ, Hùng Vương, đại học Y Dược TPHCM, đại học Y Khoa Phạm Ngọc Thạch, đại học Y Dược Cần Thơ",
            "CongTac":"2019- nay: Hợp tác phòng khám Đa khoa Medic Tâm An.\n2019- nay: Hợp tác phòng khám Đa khoa Liên Tâm."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/abec35b2-aeaa-482e-936f-6131a5ca8a7a.jpg",
            "doctorName":"Nguyễn Trường Sa",
            "position":"Bác Sĩ",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sỹ Nguyễn Trường Sa với phương châm hành nghề: “Tư vấn tận tâm, điều trị toàn diện, chăm sóc chu đáo”.",
            "HocVan":"Năm 2010: Tốt nghiệp Bác sỹ Đa khoa tại Trường Đại học Y Dược Cần Thơ, đã học định hướng chuyên khoa tại bệnh viện Từ Dũ và sau Đại học tại Trường Đại học Y Dược Cần Thơ; Và công tác tại Bệnh viện Phụ Sản thành phố Cần Thơ cho đến nay.",
            "CongTac":"Năm 2010: Tốt nghiệp Bác sỹ Đa khoa tại Trường Đại học Y Dược TP.HCM"       
        },
    
    
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/4f0b52bc-a777-4f3c-b24f-fb78c41178e6.jpg",
            "doctorName":"Đỗ Thị Tường Oanh",
            "position":"TS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Tiến sĩ Bác sĩ Đỗ Thị Tường Oanh có nhiều năm kinh nghiệm trong việc thăm khám, điều trị Nội Hô Hấp. Cụ thể hơn, Tiến sĩ Bác sĩ Tường Oanh chuyên khám và điều trị:",
            "HocVan":"Năm 1989: Bác Sĩ Y Khoa Đại Học Y Dược TP.HCM.\nNăm 2001: Thạc sĩ, Lao và Bệnh Phổi, Đại học Y Dược TP.HCM.\nNăm 2009: Tiến sĩ, Nội Hô Hấp, Đại học Y Dược TP.HCM.",
            "CongTac":"Năm 1988-1990: Phó Đơn vị Miễn dịch lâm sàng, Bệnh Viện Truyển máu Huyết học TP.HCM.\nNăm 1990-năm 2000: Bác sĩ điều trị cấp cao, Khoa Sinh Hóa – Huyết học, Bệnh Viện Phạm Ngọc Thạch TP.HCM.\nNăm 2018: Giảng viên, Bộ môn Nội Tổng quát, Đại học Y Khoa Phạm Ngọc Thạch TP.HCM.\nNăm 2019: Bác sĩ điều trị cấp cao, Khoa Nội phổi, Bệnh Viện FV."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/efab77b7-11b6-4cf5-b36e-adcf7e5c58e0.png",
            "doctorName":"Nguyễn Thị Thu Sương",
            "position":"ThS.BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Thạc sĩ Bác sĩ Nguyễn Thị Thu Sương có hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa. Mỗi bệnh nhi đến thăm khám đều sẽ được bác sĩ chăm sóc tận tình, chu đáo. Bác sĩ ân cần, tận tụy và đầy tình yêu thương, tận tâm tư vấn và đưa ra biện pháp cho phụ huynh nhằm chăm sóc trẻ được tốt hơn.",
            "HocVan":"Tốt nghiệp Bác sĩ Đa Khoa năm 2010 tại Đại Học Y Dược, TP.HCM.\nTốt nghiệp Thạc sĩ năm 2014 tại Đại Học Y Dược, TP.HCM",
            "CongTac":"Công tác tại khoa Hô Hấp – Bệnh viện Nhi đồng 1 từ năm 2014 đến nay."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/b9c5d7de-b965-485b-abb1-a532fab5fc8a.jpg",
            "doctorName":"Vũ Thị Quyên",
            "position":"BS.CKI",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"0", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "ác sĩ Vũ Thị Quyên đã có hơn 5 năm kinh nghiệm trong lĩnh vực Nội khoa - Lao - Da liễu, chuyên sâu về khám, chuẩn đoán và điều trị các bệnh lý nội khoa thông thường; chuẩn đoán, điều trị, tư vấn bệnh lao; điều trị và theo dõi các bệnh lý da liễu - bệnh lây truyền qua đường tình dục.",
            "HocVan":"Đã hoàn thành chương trình chuyên khoa 1 Da liễu của Đại học Y dược TP Hồ Chí Minh.",
            "CongTac":"Năm 2018-2020: Bệnh viện Phổi tỉnh Nam Định.\nNăm 2020-2021: Học viên sơ bộ Da liễu Đại học Y khoa Phạm Ngọc Thạch.\nNăm 2021-2023: Học viên Chuyên khoa 1 Da liễu Đại học Y dược TP Hồ Chí Minh."       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/53aca4d3-c3c1-4948-a00a-bddcb90fa10e.jpg",
            "doctorName":"Nguyễn Thành Thái",
            "position":"BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ có hơn 4 năm kinh nghiệm khám và điều trị các bệnh về Hô hấp - Lao Bệnh phổi, Y học giấc ngủ. Bác sĩ được đào tạo chính quy ngành bác sĩ đa khoa -chuyên khoa Hô Hấp, Lao Bệnh phổi, Nội soi phế quản, Y học giấc ngủ",
            "HocVan":"2019: Tốt nghiệp đại học chính quy ngành bác sĩ đa khoa\n2020: Quản lý Hen - COPD tại BV ĐKTƯ Cần Thơ\n2022: Hoàn thành đào tạo liên kết đại học Pháp – Việt chuyên ngành Hô hấp (Diplôme Universitaire de Pneumologie) của Cộng hòa Pháp\n2022-2023: Hoàn thành các khóa đào tạo về Y học giấc ngủ của Hội giấc ngủ Việt Nam",
            "CongTac":"Công tác tại khoa hô hấp – BV Đại học Y Dược TP.HCM"       
        },
        {
            
            "doctorImage":"https://cdn.youmed.vn/photos/f2bc5e37-569d-4af3-bbfc-84f15f638bf3.jpg",
            "doctorName":"Nguyễn Quốc Sử",
            "position":"BS",
            "email":"",
            "doctorPass":"",
            "phoneNumber":"",
            "sex":"1", 
            createdAt: new Date(),
            updatedAt: new Date(),
            
            "introduce": "Bác sĩ Nguyễn Quốc Sử được đào tạo chuyên ngành Bác sĩ Quân y hệ chính quy tại Học Viện Quân Y. Sau khi ra trường, Bác sĩ Sử công tác tại Bệnh viện Quân y 121. Là 1 Bác sĩ Quân đội, Bs luôn tận tâm chữa trị cho người bệnh. và tích cực trong nghiên cứu khoa học, cập nhật kịp thời các kiến thức mới trong điều trị.",
            "HocVan":"2013 – 2020: Học Bác sĩ đa khoa tại Học viện Quân y",
            "CongTac":"2020 – 2024: Công tác tại Khoa Tim mạch – Hô hấp – Thận – Khớp – Nội tiết, Bệnh viện Quân y 121"       
        }
    ]
        
        
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('doctors', null, {});
}
};