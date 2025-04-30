import DB from "../models/index";

const getInforToUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await DB.Appointment.findAll({
                where: { userId: userId }, // hoặc { userId: userId } tùy bạn đặt tên
                include: [
                    {
                        model: DB.HoSo,
                        attributes: ['Name', 'DateOfBirth', 'phone', 'sex', 'address'],
                    },
                    {
                        model: DB.Schedule,
                        attributes: ['startTime', 'endTime'],
                        include: [
                            {
                                model: DB.Doctor,
                                attributes: ['doctorName', 'position'],
                            },
                            {
                                model: DB.Room,
                                attributes: ['roomNumber', 'floor', 'toa'],
                            },
                            {
                                model: DB.Specialty,
                                as: 'specialty', // alias đúng theo định nghĩa trong model
                                attributes: ['specialtyName', 'specialtyDescription'],
                            },
                        ]
                    }
                ],
                attributes: ['appointmentId', 'day', 'status'],
            });

            if (!data || data.length === 0) {
                return resolve({
                    errCode: 1,
                    message: "Không tìm thấy lịch hẹn nào cho người dùng này"
                });
            }

            resolve({
                errCode: 0,
                message: "Lấy thông tin lịch hẹn thành công",
                data
            });
        } catch (error) {
            console.error("Lỗi khi lấy thông tin lịch hẹn:", error);
            reject(error);
        }
    });
};

export default getInforToUser;
