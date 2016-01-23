$(document).ready(function(){
    
    var pathArray = window.location.pathname.split( '/' );
    var temp_action = pathArray[pathArray.length-1];
    if(temp_action=="add_vacancy"){
        $('#vCountry').val(222).trigger('change');
    }
    $('#save_tab_0').click("submit", function(event){
    event.preventDefault();

        var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var check_digit = /^[0-9]+$/;

        $('.error').hide();

        if($.trim($("#vReferenceNo").val()).length === 0)
        {
            showError("vReferenceNo","required");
        }
        else
        {
            $("#vReferenceNo").css('border','1px solid  #e5e5e5');
        }


        if($.trim($("#vClientName").val()).length === 0)
        {
            showError("vClientName","required");  
        }
         else
        {
            $("#vClientName").css('border','1px solid  #e5e5e5');
        }


        if($.trim($("#tAddress").val()).length === 0)
        {
            showError("tAddress","required");
        }
         else
        {
            $("#tAddress").css('border','1px solid  #e5e5e5');
        }


        if($.trim($("#vPostcode").val()).length === 0)
        {
            showError("vPostcode","required");
        }
         else
        {
            $("#vPostcode").css('border','1px solid  #e5e5e5');
        }


        if($.trim($("#iContact").val()).length === 0)
        {
            showError("iContact","required");
        }
        else if (!check_digit.test($.trim($("#iContact").val())))
        {
            showError("iContact","invalid");
        }
         else 
        {
            $("#iContact").css('border','1px solid  #e5e5e5');
        }


       if($.trim($("#iMobile").val()).length === 0)
        {
            showError("iMobile","required");
        }
        else if (!check_digit.test($.trim($("#iMobile").val())))
        {
            showError("iMobile","invalid");
        }
        else
        {
            $("#iMobile").css('border','1px solid  #e5e5e5');
        }
        

        if($.trim($("#vEmail").val()).length === 0)
        {
            showError("vEmail","required");
        }
        else if (!check_email.test($.trim($("#vEmail").val())))
        {
            showError("vEmail","invalid");
        }
          else 
        {
            $("#vEmail").css('border','1px solid  #e5e5e5');
        }

        if($.trim($("#iSalary").val()).length === 0)
        {
            showError("iSalary","required");
        }
        else if (!check_digit.test($.trim($("#iSalary").val())))
        {
            showError("iSalary","invalid");
        }
        else
        {
            $("#iSalary").css('border','1px solid  #e5e5e5');
        }

        if($.trim($("#vCountry").val()).length === 0)
        {
            showError("vCountry","required");
        }
        else
        {
            $("#vCountry").css('border','1px solid  #e5e5e5');
        }

        if($.trim($("#vType").val()).length === 0)
        {
            showError("vType","required");
        }
        else
        {
            $("#vType").css('border','1px solid  #e5e5e5');
        }
        
        if(($.trim($("#vReferenceNo").val())).length !== 0  &&  
           ($.trim($("#vClientName").val())).length !== 0  && 
           ($.trim($("#tAddress").val())).length !== 0  &&  
           ($.trim($("#vPostcode").val())).length !== 0  &&
           ($.trim($("#vCountry").val())).length !== 0  &&
           ($.trim($("#vType").val())).length !== 0  &&

           (check_digit.test($.trim($("#iContact").val()))) &&
           (check_digit.test($.trim($("#iMobile").val()))) &&
           (check_email.test($.trim($("#vEmail").val()))) &&
           (check_digit.test($.trim($("#iSalary").val()))))

        {
                
                $('form').unbind('submit').submit()
        
        }
        
        
   

        function showError(element_id,element_error_text)
        {
            $("#" + element_id).css('border','1px solid red');

            if(element_error_text === "required")
                $('#' + element_id).after('<span class="error"> This field is required </span>');
            else
                $('#' + element_id).after('<span class="error"> Invalid Value </span>');
        }
    });

});


$('.add_more_notes_button').click(function ()            
    {
        if($('.notes_text_area').length < 3)
        {
            var html_string = "<br><textarea name='vNotes[]' class='form-control notes_text_area' rows='3'></textarea>";            
            $('#add_more_notes_span').append(html_string);            
            if($('.notes_text_area').length === 3)
            {
                $('.add_more_notes_button').hide();
            }
        }
    });