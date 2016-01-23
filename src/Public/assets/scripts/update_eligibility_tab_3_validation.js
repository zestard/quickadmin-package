$(document).ready(function()
{
    var error_counter = 0;
    $('#save_tab_3').click(function(event)
    {
        event.preventDefault();

        $('.error').hide();

            var employment_row_history_class_counter = 0;
            var employement_row_length = $('.employment_row_history_class').length;

            $('.employment_row_history_class').each(function (index, element)
            {   
                if(index == employement_row_length-1)
                {
                    if($('.error_class').length === 0)
                    {
                        $('#person_eligibility_form').submit();    
                    }
                }
                // if($.trim($(this).val()).length === 0)
                // {
                //     showError($(this),"required");
                // }
                // else
                // {
                //     $('#vDescription'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                //     $('#vStatus'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                //     $('#vNotes'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                //     $('#dExpiryDate'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');

                //     $('#vDescription'+employment_row_history_class_counter).removeClass('error_class');
                //     $('#vStatus'+employment_row_history_class_counter).removeClass('error_class');
                //     $('#vNotes'+employment_row_history_class_counter).removeClass('error_class');
                //     $('#dExpiryDate'+employment_row_history_class_counter).removeClass('error_class');
                    
                //     if(error_counter >= 0)
                //     {
                //         error_counter--;
                //     }

                //     if(index == employement_row_length-1)
                //     {
                //         if($('.error_class').length === 0)
                //         {
                //             $('#person_eligibility_form').submit();    
                //         }
                //     }
                // }
                employment_row_history_class_counter++;
            });
     });

    function showError(element,element_error_text)
    {
        $(element).css('border','1px solid red');
        $(element).addClass('error_class');

        if(element_error_text === "required")
        {
            $(element).after('<span class="error"> This field is required </span>');            
        }
    }
});
