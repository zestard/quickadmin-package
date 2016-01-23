$(document).ready(function()
{
	$('.sendbt').click(function(event)
    {
    	event.preventDefault();
    	
    	$('.error').hide();

    	if($.trim($("#select_email").val()).length === 0)
        {
            showError("select_email","required");  
        }
        else
        {
            $("#select_email").css('border','0px solid  #e5e5e5');

        }

        if($.trim($("#subject").val()).length === 0)
        {
            showError("subject","required");  
        }
        else
        {
            $("#subject").css('border','0px solid  #e5e5e5');
        }


        if(($.trim($("#select_email").val())).length !== 0 &&
           ($.trim($("#subject").val())).length !== 0)
        {
           $('.sendbt').unbind().click();
        }
      
    });

    $('.discard').click(function()

    {
        var url = public_url + '/message';

         $.ajax
        ({
            type: "GET",
            url: url,
           //data: data,
            success: function ()
            {
              //window.location  = url;
              $('.mail-body').css('display','none');
            }
        });
    });

        function showError(element_id,element_error_text)
        {
            $("#" + element_id).css('border','1px solid red');
            
            if(element_error_text === "required")
            {
                 $('#' + element_id).after('<span class="error" style="color:red">This field is required </span>');
            }
            
        }
   

});