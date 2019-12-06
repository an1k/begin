axios=require('axios')
url=process.env.BCKURL || 'http://begin-backend-git-testproject.apps.openshift-test.accenturemywizard-aaam.com.au/'
image_url='http://begin-img-back-git-testproject.apps.openshift-test.accenturemywizard-aaam.com.au/'
module.exports.getBayDetailsByID=function(id){
    return axios.post(url+"getBayDetails",{
        "bayID":id
    })
}
module.exports.getResourceDetailsByID=function(id){
    return axios.post(image_url+"getSomeDetails",{
        "bayID":id
    })
}