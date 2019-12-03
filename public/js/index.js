function checkBay(v){
    $.post("/getBayDetails",
    {
      id: v,
      type: "bay"
    },
    function(data, status){
        if(status=='success'){
            $('#display').html(data)
        }else{
            $('#display').html("There was some error fetching the data")
        }
      
    });
  }