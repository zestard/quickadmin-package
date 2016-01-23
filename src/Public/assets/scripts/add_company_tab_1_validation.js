$(document).ready(function(){


    $('#add_tab_1').click(function(event){
       event.preventDefault();


        //$('#update_company').submit();
    
        $('.error').hide();

        if($.trim($("#vPaymentMethod").val()).length === 0)
        {
            showError("vPaymentMethod","required");
        }
        else
        {
            $("#vPaymentMethod").css('border','1px solid  #e5e5e5');
        }
        
        
        if($.trim($("#vPayType").val()).length === 0)
        {
            showError("vPayType","required");  
        }
        else
        {
            $("#vPayType").css('border','1px solid  #e5e5e5');
        }
        
        
        if($.trim($("#vTaxCode").val()).length === 0)
        {
            showError("vTaxCode","required");  
        }
        else
        {
            $("#vTaxCode").css('border','1px solid  #e5e5e5');
        }
        
        
        if($.trim($("#vVATNumber").val()).length === 0)
        {
            showError("vVATNumber","required");  
        }
        else
        {
            $("#vVATNumber").css('border','1px solid  #e5e5e5');
        }

       /* if($.trim($("#dCISVerificationDate").val()).length === 0)
        {
            showError("dCISVerificationDate","required");  
        }
        else
        {
            $("#dCISVerificationDate").css('border','1px solid  #e5e5e5');
        }*/
        
        
        if(($.trim($("#vPaymentMethod").val())).length !== 0 &&  
           ($.trim($("#vPayType").val())).length !== 0 &&  
           ($.trim($("#vTaxCode").val())).length !== 0 &&  
           ($.trim($("#vVATNumber").val())).length !== 0)
           //($.trim($("#dCISVerificationDate").val())).length !== 0)
        {
            $('form').submit();       
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