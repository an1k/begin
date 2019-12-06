function checkBay(v){
    console.log(v)
    $.post("/getBayDetails",
    {
      "bayID": v
    },
    function(data, status){
        if(status=='success'){
            console.log(data)
            $("#bay_info").fadeIn(3000);
            $("#display").fadeOut(3000);
            $('#displayID').html(data.id)
            $('#displayResourceNum').html(data.resource_number)
            $('#displayOrganisation').html(data.organisation)
        }else{
            $('#display').fadeIn(3000);
            
            $("#bay_info").fadeOut(3000);
        }
      
    });
  }