$(document).ready(function()
{

    $('#save_tab_0').click(function(event)
    {
        event.preventDefault();

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
            $("#vPostcode").css('border','1px solid #e5e5e5');
        }

        if($.trim($("#vJobTitle").val()).length === 0)
        {
            showError("vJobTitle","required");
        }
        else
        {
            $("#vJobTitle").css('border','1px solid #e5e5e5');
        }

        var add_reference_history_class_counter = 0;
        var add_reference_row_length = $('.employment_row_history_class').length;

            $('.employment_row_history_class').each(function (index, element)
            {
                if($.trim($(this).val()).length === 0)
                {
                    showError($(this),"required");
                }
                else
                {
                    $('#vDescription'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vStatus'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vNotes'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#dExpiryDate'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vDescription'+employment_row_history_class_counter).removeClass('error_class');
                    $('#vStatus'+employment_row_history_class_counter).removeClass('error_class');
                    $('#vNotes'+employment_row_history_class_counter).removeClass('error_class');
                    $('#dExpiryDate'+employment_row_history_class_counter).removeClass('error_class');
                        
                    if(error_counter < 0)
                    {
                        error_counter++;
                    }

                    if(index == employement_row_length-1)
                    {
                        if($('.error_class').length === 0)
                        {
                            $('#person_eligibility_form').submit();    
                        }                            
                    }
                }
                employment_row_history_class_counter++;
            });
   
        
        if(($.trim($("#vReferenceNo").val())).length !== 0  && 
           ($.trim($("#vClientName").val())).length !== 0  &&  
           ($.trim($("#tAddress").val())).length !== 0  &&
           ($.trim($("#vPostcode").val())).length !== 0  &&
           ($.trim($("#vJobTitle").val())).length !== 0)

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