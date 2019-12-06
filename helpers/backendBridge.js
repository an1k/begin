axios=require('axios')
url=process.env.BCKURL || 'http://begin-backend-git-testproject.apps.openshift-test.accenturemywizard-aaam.com.au/test/'

module.exports.getBayDetailsByID=function(id){
    return axios.post(url+"getBayDetails",{
        "bayID":id
    })
}