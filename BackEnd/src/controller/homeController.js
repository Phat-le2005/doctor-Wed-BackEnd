import DB from "../models/index"
import createService from "../service/createService"
const getHomePage = async(req,res) =>{
    try{
        let data = await DB.User.findAll()
        return res.render('homePage.ejs',{
            data: JSON.stringify(data)
        })
    }catch(e){
        console.log(e)
    }
   
 
}
const getCreatePage = (req,res)=>{
        return res.render('createPage.ejs');
    
}
const postCreateUser = async(req,res)=>{
    let message = await createService.createUser(req.body)
    console.log(message)
    res.send('hello')
}
const readData = async(req,res)=>{
    let data = await createService.getAllUser()
    return res.render('displayTableData.ejs',{dataTable:data})
}
module.exports={
    getHomePage:getHomePage,
    getCreatePage:getCreatePage,
    postCreateUser:postCreateUser,
    readData: readData
}