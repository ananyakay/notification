

var options = {
    showTop: true,
    distance: 180
  };
function runToast()
{
var condition = "{{condition}}";
if(condition == "true")
{
Metro.toast.create("{{status}}",null,2000,"secondary", options);
}
}

$(document).ready(function(){
    $(".input input[type=text]").attr("placeholder","Search...");
});
