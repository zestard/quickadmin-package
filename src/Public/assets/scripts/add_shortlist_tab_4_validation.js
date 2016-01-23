$(document).ready(function()
{	
     //$('#tab_a_1').hide();
    var error_counter = 0;

    $('#save_tab_4').click(function(event)
    {
        event.preventDefault();

        $('.error').hide();

            var unsuitable_clients_row_history_class_counter = 1;
            var unsuitable_clients_row_length = $('.unsuitable_clients_row_histroy_class').length;

            $('.unsuitable_clients_row_histroy_class').each(function (index, element)
            {                               
                unsuitable_clients_row_history_class_counter++;
            });

            var willing_to_work_row_history_class_counter = 1;
            var willing_to_work_row_length = $('.willing_to_work_row_histroy_class').length;

            $('.willing_to_work_row_histroy_class').each(function (index, element)
            {               
                if(index == willing_to_work_row_length-1)
                {
                    if($('.error_class').length === 0)
                    {
                        $('#person_eligibility_form').submit();    
                    }                            
                }                        
                willing_to_work_row_history_class_counter++;
            });
    });

    function showError(element,element_error_text)
    {
        $(element).css('border','1px solid red');
                

        if(element_error_text === "required")
        {
            $(element).after('<span class="error"> This field is required </span>');
            $(element).addClass('error_class');
        }      
    }
});
