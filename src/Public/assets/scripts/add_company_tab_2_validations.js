$(document).ready(function()
{
    $('#save_tab_2').click(function(event)
    {
       event.preventDefault();

        $('.error').hide();

        var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if($.trim($("#vAccountRef").val()).length === 0)
        {
            showError("vAccountRef","required");  
        }
        else
        {
            $("#vAccountRef").css('border','1px solid  #e5e5e5');
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
        
        
        if($.trim($("#tInvoiceAddress").val()).length === 0)
        {
            showError("tInvoiceAddress","required");  
        }
        else
        {
            $("#tInvoiceAddress").css('border','1px solid  #e5e5e5');
        }
        
        
        if($.trim($("#vPostcode").val()).length === 0)
        {
            showError("vPostcode","required");  
        }
        else
        {
            $("#vPostcode").css('border','1px solid  #e5e5e5');
        }
        
        
        if($.trim($("#vDepartments").val()).length === 0)
        {
            showError("vDepartments","required");  
        }
        else
        {
            $("#vDepartments").css('border','1px solid  #e5e5e5');
        }
        

        if(($.trim($("#vAccountRef").val())).length !== 0 &&
           ($.trim($("#tInvoiceAddress").val())).length !== 0  && 
           ($.trim($("#vPostcode").val())).length !== 0  &&  
           ($.trim($("#vDepartments").val())).length !== 0  && 
           (check_email.test($.trim($("#vEmail").val()))))
        {
            $('form').unbind().submit()
               

        }
    }); 

    function showError(element_id,element_error_text)
    {
        $("#" + element_id).css('border','1px solid red');

        if(element_error_text === "required")
            $('#' + element_id).after('<span class="error"> This field is required </span>');
        else
            $('#' + element_id).after('<span class="error"> Invalid Value </span>');
    }

    $('.fao_button').click(function ()            
    {
        if($('.fao_text').length < 3)
        {
            var html_string = '<br/><input type="text" name="vFoa[]" class="form-control fao_text">';
            $('#fao_span').append(html_string);            
            if($('.fao_text').length === 3)
            {
                $('.fao_button').hide();
            }
        }
    });

    $('.invoice_address_button').click(function ()            
    {
        if($('.invoice_address_text').length < 3)
        {
            var html_string = '<br/><input type="text" name="tInvoiceAddress[]" class="form-control invoice_address_text" >';
            $('#invoice_address_span').append(html_string);            
            if($('.invoice_address_text').length === 3)
            {
                $('.invoice_address_button').hide();
            }
        }
    });

    $('.departments_button').click(function ()            
    {
        if($('.departments_text').length < 3)
        {
            var html_string = '<br/><input type="text" name="vDepartments[]" class="form-control inputbg departments_text" placeholder="NAME">';
            $('#departments_span').append(html_string);            
            if($('.departments_text').length === 3)
            {
                $('.departments_button').hide();
            }
        }
    });
});
