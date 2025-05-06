import prescriptionService from "../service/prescriptionService"
const handleGetAllPrescription = async (req, res) => {
    try {
        const keyWord = req.query.search || "";
        const data = await prescriptionService.getAllPrescription(keyWord);
        return res.status(200).json({
            errCode: 0,
            data: data
        });
    } catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMess: e.message || 'Internal Server Error'
        });
    }
};


module.exports = {
    handleGetAllPrescription
}