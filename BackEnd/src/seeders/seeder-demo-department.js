'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Department', [
        {
            "departmentName": "Khoa Tiêu Hóa",
            "imageDepartment": "/public/Khoa/Daday/daday.webp",
            "departmentDescription":"🔹 Đau bụng, buồn nôn, đầy hơi, khó tiêu\n🔹 Vàng da, nước tiểu sẫm màu\n🔹 Chướng bụng, sụt cân, tiêu chảy/táo bón"
        },
        {
            "departmentName": "Khoa Nội Tiết",
            "imageDepartment": "/public/Khoa/NoiTiet/Noitiet.jpg",
            "departmentDescription":"🔹 Rối loạn cân nặng (sụt cân, tăng cân)\n🔹 Khát nước nhiều, tiểu nhiều\n🔹 Da sạm, tóc rụng, mệt mỏi, huyết áp bất thường"
        },
        {
            "departmentName": "Khoa Nội Tim Mạch",
            "imageDepartment": "/public/Khoa/Timmach/NoiTimMach.jpg",
            "departmentDescription":"🔹 Đau ngực, khó thở, chóng mặt\n🔹 Tim đập nhanh, hồi hộp, ngất xỉu\n🔹 Phù chân, huyết áp cao/thấp"
        },
        {
            "departmentName": "Khoa Thần Kinh",
            "imageDepartment": "/public/Khoa/ThanKinh/TaiBienMachMauNao.jpg",
            "departmentDescription":"🔹 Đau đầu, chóng mặt, mất ý thức đột ngột\n🔹 Yếu liệt tay chân, run tay chân\n🔹 Suy giảm trí nhớ, nói ngọng"
        },
        {
            "departmentName": "Khoa Tai – Mũi – Họng",
            "imageDepartment": "/public/Khoa/Tai-mui-hong/KhoaTaiMuiHong.jpg",
            "departmentDescription":"🔹 Nghẹt mũi, chảy nước mũi, hắt hơi\n🔹 Khàn tiếng, mất tiếng, đau họng\n🔹 Ù tai, giảm thính lực"
        },
        {
            "departmentName": "Khoa Phụ Sản",
            "imageDepartment": "/public/Khoa/PhuSan/KhoaPhusan.png",
            "departmentDescription":"🔹 Rối loạn kinh nguyệt, rong kinh, đau bụng kinh\n🔹 Đau bụng dưới, xuất huyết bất thường\n🔹 Khó có thai, sảy thai liên tục"
        },
        {
            "departmentName": "Khoa Hô Hấp",
            "imageDepartment": "/public/Khoa/HoHap/KhoaHoHap.jpg",
            "departmentDescription":"🔹 Ho kéo dài, khó thở, tức ngực\n🔹 Sốt cao, đau ngực khi thở\n🔹 Ho ra máu"
        }
    ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Department', null, {});
}
};
