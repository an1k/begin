axios=require('axios')
url=process.env.BCKURL || 'http://localhost:8082/'

module.exports.getBayDetailsByID=function(id){
    return axios.post(url+"getBayDetails",{
        "bayID":id
    })
}