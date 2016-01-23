$(document).ready(function()
{
    var error_counter = 0;

    $('#confirm_shedule').click(function(event)
    {
    	event.preventDefault();

    	$('.error').hide();

            var confirm_shedule_class_counter = 1;
            var confirm_shedule_row_length = $('.confirm_shedule_row_class').length;

            $('.confirm_shedule_row_class').each(function (index, element_id)
            {
                if($.trim($(this).val()).length === 0)
                {
                    showError($(this),"required");
                }
                else
                {
                    $('#vReferenceNo'+confirm_shedule_class_counter).css('border','1px solid #e5e5e5');
                    $('#dScheduledDate'+confirm_shedule_class_counter).css('border','1px solid #e5e5e5');
                    $('#vReferenceNo'+confirm_shedule_class_counter).removeClass('error_class');
                    $('#dScheduledDate'+confirm_shedule_class_counter).removeClass('error_class');

                    if(error_counter >= 0)
                    {
                        error_counter--;
                    }

                    if(index == confirm_shedule_row_length-1)
                    {
                        if($('.error_class').length === 0)
                        {
                            $('form').unbind().submit();
                        }
                    }
                }
                confirm_shedule_class_counter++;
            });
    });

    
    function showError(element_id,element_error_text)
    {
        $(element_id).css('border','1px solid red');
        $(element_id).addClass('error_class');

        if(element_error_text === "required")
        {
            $(element_id).after('<span class="error"> This field is required </span>');
        }
    }
});