var time=200
var sel="bay"
function bay(){
    sel="bay"
}
function resource(){
    console.log("resource clicked")
    sel="resource"
}
function checkBay(v){
    console.log(v)
    $.post("/getBayDetails",
    {
      "bayID": v
    },
    function(data, status){
        if(status=='success'){
            console.log(data)
            $("#bay_info").fadeIn(time);
            $("#display").fadeOut(time);
            $('#displayID').html(data.id)
            $('#displayResourceNum').html(data.resource_number)
            $('#displayOrganisation').html(data.organisation)
        }else{
            $('#display').fadeIn(time);
            $("#resource_info").fadeOut(time);
            $("#bay_info").fadeOut(time);
        }
      
    });
  }

  function checkResource(v){
    console.log(v)
    $.post("/getResourceDetails",
    {
      "bayID": v
    },
    function(data, status){
        if(status=='success'){
            console.log(data)
            $("#resource_info").fadeIn(time);
            $("#bay_info").fadeOut(time);
            $("#display").fadeOut(time);
            $('#displayID').html(data.id)
            $('#displayTL').html(data.TL)
            $('#displayASE').html(data.ASE)
            $('#displaySSE').html(data.SSE)
        }else{
            $('#display').fadeIn(time);
            $("#bay_info").fadeOut(time);
            $("#resource_info").fadeOut(time);
        }
      
    });
  }



  function getStuff(v){
    console.log(sel)
    if(sel=="bay"){
        checkBay(v)
    }else{
        checkResource(v)
    }
  }