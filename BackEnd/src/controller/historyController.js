import {createHistory} from "../service/historyService"
const handleCreateHistory = async (req,res) =>{
    let data = req.body
    if (!data ) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required fields",
            user: '',
        });
    }
    try {
        let message = await createHistory(data);
        return res.status(200).json({
            errCode: 0,
            errMessage: message,
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            errCode: 0,
            errMessage: "Internal server error",
            error: error.message
        });
    }
}
module.exports = {
    handleCreateHistory: handleCreateHistory,
}