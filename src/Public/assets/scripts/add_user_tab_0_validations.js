$(document).ready(function()
{   
    $('#vCountry').val(222).trigger('change');
    $('#add_tab_0').click(function(event)
    {
        event.preventDefault();

        var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var check_digit = /^[0-9]+$/;

        $('.error').hide();

        if($.trim($("#vFirstName").val()).length === 0)
        {
            showError("vFirstName","required");
        }
        else
        {
            $("#vFirstName").css('border','1px solid  #e5e5e5');
        }


        if($.trim($("#vLastName").val()).length === 0)
        {
            showError("vLastName","required");  
        }
         else
        {
            $("#vLastName").css('border','1px solid  #e5e5e5');
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

        if($.trim($("#vCompany").val()).length === 0)
        {
            showError("vCompany","required");
        }
        else
        {
            $("#vCompany").css('border','1px solid  #e5e5e5');
        }

        if($.trim($("#vJobTitle").val()).length === 0)
        {
            showError("vJobTitle","required");
        }
        else
        {
            $("#vJobTitle").css('border','1px solid  #e5e5e5');
        }


        if($.trim($("#iMobilePhone").val()).length === 0)
        {
            showError("iMobilePhone","required");
        }
        else if (!check_digit.test($.trim($("#iMobilePhone").val())))
        {
            showError("iMobilePhone","invalid");
        }
        else
        {
            $("#iMobilePhone").css('border','1px solid  #e5e5e5');
        }

        if($.trim($("#vAltEmail1").val()).length === 0)
        {
            showError("vAltEmail1","required");
        }
        else if (!check_email.test($.trim($("#vAltEmail1").val())))
        {
            showError("vAltEmail1","invalid");
        }
          else 
        {
            $("#vAltEmail1").css('border','1px solid  #e5e5e5');
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


        if(($.trim($("#vFirstName").val())).length !== 0  &&  
           ($.trim($("#vLastName").val())).length !== 0  &&
           ($.trim($("#vCompany").val())).length !== 0  &&
           ($.trim($("#vJobTitle").val())).length !== 0  &&
           ($.trim($("#tAddress").val())).length !== 0  &&
           ($.trim($("#vPostcode").val())).length !== 0  &&
          
           (check_digit.test($.trim($("#iMobilePhone").val()))) &&
           (check_email.test($.trim($("#vEmail").val()))) &&
           (check_email.test($.trim($("#vAltEmail1").val()))))

        {
            //  alert('hiiii');  
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
