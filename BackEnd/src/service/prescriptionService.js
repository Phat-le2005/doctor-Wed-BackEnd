import { where } from "sequelize";
import { Op } from "sequelize";
import DB from "../models/index";
const getAllPrescription = async (keyWord) => {
    const data = await DB.Prescription.findAll({
        where:{
            medicineName: {
                [Op.like]: `%${keyWord}%`
            }
        }
    });
    if (!data || data.length === 0) {
        throw new Error('No Data Found');
    }
    return data;
};

module.exports = {
    getAllPrescription
};