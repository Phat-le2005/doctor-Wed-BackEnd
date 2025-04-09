import specialtyService from '../service/specialtyService'
const get_specialty = async (req, res) => {
  try {
    const departmentId = req.params.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    if (!departmentId) {
      return res.status(400).json({
        errCode: 1,
        errMess: "Thiếu departmentId",
      });
    }

    const data = await specialtyService.get_specialty(departmentId, page, limit);

    return res.status(200).json({
      errCode: 0,
      ...data,
    });
  } catch (e) {
    console.error("Server Error:", e);
    return res.status(500).json({ errCode: 1, errMess: 'Server error' });
  }
};
  
module.exports={
    get_specialty: get_specialty

}