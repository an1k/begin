function checkBay(v){
    console.log(v)
    $.post("/getBayDetails",
    {
      "bayID": v
    },
    function(data, status){
        if(status=='success'){
            console.log(data)
            $('#display').html(data.name)
            $('#displayResourceNum').html(data.resource_number)
            $('#displayOrganisation').html(data.organisation)
        }else{
            $('#display').html("There was some error fetching the data")
        }
      
    });
  }