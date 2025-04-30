import getInforToUser from '../service/phieuKhamBenhService';

const getAppointmentDetail = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await getInforToUser(id);
        res.status(200).json(result);
    } catch (error) {
        console.error("Lỗi khi lấy thông tin lịch hẹn:", error);
        res.status(500).json({
            errCode: -1,
            message: "Lỗi server"
        });
    }
};

export { getAppointmentDetail };