'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Specialty',[
        { "specialtyName": "Viêm dạ dày – tá tràng", "specialtyDescription": "Đau bụng trên, buồn nôn, khó tiêu.", "departmentId": 1,"specialtyImage":"/public/Khoa/Daday/viemdaday.jpg" },
        { "specialtyName": "Trào ngược dạ dày – thực quản (GERD)", "specialtyDescription": "Ợ nóng, đau rát vùng ngực.", "departmentId": 1 ,"specialtyImage":"/public/Khoa/Daday/thuc-quan1.jpg"},
        { "specialtyName": "Viêm gan (A, B, C, D, E)", "specialtyDescription": "Vàng da, nước tiểu sẫm màu, mệt mỏi.", "departmentId": 1,"specialtyImage":"/public/Khoa/Daday/gan.jpg" },
        { "specialtyName": "Xơ gan", "specialtyDescription": "Chướng bụng, phù chân, xuất huyết tiêu hóa.", "departmentId": 1,"specialtyImage":"/public/Khoa/Daday/Viemdaday.jpg" },
        { "specialtyName": "Viêm tụy cấp/mạn", "specialtyDescription": "Đau bụng dữ dội, buồn nôn, sụt cân.", "departmentId": 1,"specialtyImage":"/public/Khoa/Daday/Tuy.jpg" },
      
        { "specialtyName": "Đái tháo đường (Type 1, Type 2)", "specialtyDescription": "Khát nước nhiều, tiểu nhiều, sụt cân.", "departmentId": 2,"specialtyImage":"/public/Khoa/NoiTiet/daithaoduong.jpg" },
        { "specialtyName": "Cường giáp", "specialtyDescription": "Run tay, nhịp tim nhanh, sụt cân dù ăn nhiều.", "departmentId": 2,"specialtyImage":"/public/Khoa/NoiTiet/cuonggiap.png" },
        { "specialtyName": "Suy giáp", "specialtyDescription": "Mệt mỏi, tăng cân, da khô, tóc rụng.", "departmentId": 2,"specialtyImage":"/public/Khoa/NoiTiet/suygiap.png" },
        { "specialtyName": "Bệnh Addison", "specialtyDescription": "Da sạm màu, huyết áp thấp, yếu cơ.", "departmentId": 2,"specialtyImage":"/public/Khoa/NoiTiet/Adisson.jpg" },
        { "specialtyName": "Hội chứng Cushing", "specialtyDescription": "Mặt tròn như mặt trăng, mỡ bụng nhiều, loãng xương.", "departmentId": 2,"specialtyImage":"/public/Khoa/NoiTiet/cushing.jpg" },
      
        { "specialtyName": "Tăng huyết áp", "specialtyDescription": "Nhức đầu, chóng mặt, chảy máu cam.", "departmentId": 3,"specialtyImage":"/public/Khoa/Timmach/tanghuyetap.png" },
        { "specialtyName": "Bệnh mạch vành", "specialtyDescription": "Đau thắt ngực, khó thở khi gắng sức.", "departmentId": 3,"specialtyImage":"/public/Khoa/Timmach/machvanh.png" },
        { "specialtyName": "Suy tim", "specialtyDescription": "Phù chân, mệt mỏi, khó thở khi nằm.", "departmentId": 3,"specialtyImage":"/public/Khoa/Timmach/suytim.jpg" },
        { "specialtyName": "Rối loạn nhịp tim", "specialtyDescription": "Tim đập nhanh, hồi hộp, ngất xỉu.", "departmentId": 3 ,"specialtyImage":"/public/Khoa/Timmach/roiloannhiptim.webp"},
      
        { "specialtyName": "Tai biến mạch máu não (Đột quỵ)", "specialtyDescription": "Yếu liệt tay chân, méo miệng, nói ngọng.", "departmentId": 4,"specialtyImage":"/public/Khoa/ThanKinh/TaiBienMachMauNao.jpg" },
        { "specialtyName": "Động kinh", "specialtyDescription": "Co giật toàn thân, mất ý thức đột ngột.", "departmentId": 4,"specialtyImage":"/public/Khoa/ThanKinh/DongKinh.webp" },
        { "specialtyName": "Đau đầu vận mạch, đau nửa đầu", "specialtyDescription": "Đau nhói một bên đầu, buồn nôn.", "departmentId": 4,"specialtyImage":"/public/Khoa/ThanKinh/daudau.jpg" },
        { "specialtyName": "Bệnh Parkinson", "specialtyDescription": "Run tay chân khi nghỉ,Cứng cơ, chậm vận động,Nét mặt ít biểu cảm.", "departmentId": 4,"specialtyImage":"/public/Khoa/ThanKinh/Parkinson.jpg" },
      
        { "specialtyName": "Viêm mũi dị ứng", "specialtyDescription": "Hắt hơi, ngứa mũi, chảy nước mũi.", "departmentId": 5,"specialtyImage":"/public/Khoa/Tai-mui-hong/Viemxoangmuidiung.png" },
        { "specialtyName": "Viêm xoang", "specialtyDescription": "Nghẹt mũi, đau vùng trán và hốc mắt.", "departmentId": 5 ,"specialtyImage":"/public/Khoa/Tai-mui-hong/Viemxoang.jpg" },
        { "specialtyName": "Viêm họng, viêm amidan", "specialtyDescription": "Đau họng, sốt, nuốt khó.", "departmentId": 5,"specialtyImage":"/public/Khoa/Tai-mui-hong/Viemhongavidam.jpg" },
        { "specialtyName": "Ù tai, điếc đột ngột", "specialtyDescription": "Nghe kém, có tiếng ù trong tai.", "departmentId": 5,"specialtyImage":"/public/Khoa/Tai-mui-hong/UTai.jpg" },
        { "specialtyName": "Viêm thanh quản", "specialtyDescription": "Khàn tiếng, mất tiếng, đau rát họng.", "departmentId": 5 ,"specialtyImage":"/public/Khoa/Tai-mui-hong/Viemthanhquan.jpg"},
      
        { "specialtyName": "Rối loạn kinh nguyệt", "specialtyDescription": "Rong kinh, trễ kinh, đau bụng kinh.", "departmentId": 6,"specialtyImage":"/public/Khoa/PhuSan/PhuSan.png" },
        { "specialtyName": "U xơ tử cung", "specialtyDescription": "Đau bụng dưới, rong kinh, chảy máu bất thường.", "departmentId": 6,"specialtyImage":"/public/Khoa/PhuSan/Uxotucung.png" },
        { "specialtyName": "Mang thai ngoài tử cung", "specialtyDescription": "Đau bụng dữ dội, xuất huyết âm đạo.", "departmentId": 6,"specialtyImage":"/public/Khoa/PhuSan/thai-ngoai-tu-cung.jpg" },
      
        { "specialtyName": "Viêm phổi, viêm phế quản", "specialtyDescription": "Ho nhiều, sốt cao, khó thở.", "departmentId": 7 ,"specialtyImage":"/public/Khoa/HoHap/viemPhequan.webp" },
        { "specialtyName": "Hen suyễn", "specialtyDescription": "Khó thở, thở khò khè, tức ngực.", "departmentId": 7  ,"specialtyImage":"/public/Khoa/HoHap/henxuyen.png"},
        { "specialtyName": "Viêm màng phổi", "specialtyDescription": "Đau ngực khi thở, khó thở.", "departmentId": 7 ,"specialtyImage":"/public/Khoa/HoHap/viemmangphoi.jpg" }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Specialty', null, {});
}
};
