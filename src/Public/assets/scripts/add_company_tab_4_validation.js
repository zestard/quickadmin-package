$(document).ready(function()
{

    $('#save_tab_3').click(function(event)
    {
        event.preventDefault();

        $('.error').hide();

            var rates_and_shifts_row_history_class_counter = 0;
            var rates_and_shifts_length = $('.manual_rates_shift_text_box').length;

            $('.manual_rates_shift_text_box').each(function (index, element)
            {
                if($.trim($(this).val()).length === 0)
                {
                    showError($(this),"required");
                }
                else
                {
                    $('#vRatesShiftRefNo'+rates_and_shifts_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vLocation'+rates_and_shifts_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vEt'+rates_and_shifts_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vRatesShiftRefNo'+rates_and_shifts_row_history_class_counter).removeClass('error_class');
                    $('#vLocation'+rates_and_shifts_row_history_class_counter).removeClass('error_class');
                    $('#vEt'+rates_and_shifts_row_history_class_counter).removeClass('error_class');
                        
                    

                    if(index == rates_and_shifts_length-1)
                    {
                        if($('.error_class').length === 0)
                        {
                            //$('#rates_unsuit_agen_form').submit();    
                        }                            
                    }
                }
                rates_and_shifts_row_history_class_counter++;
            });

            var unsuitable_candidate_row_history_class_counter = 0;
            var unsuitable_candidate_length = $('.manual_unsuitable_candidate_text_box').length;

            $('.manual_unsuitable_candidate_text_box').each(function (index, element)
            {
                if($.trim($(this).val()).length === 0)
                {
                    showError($(this),"required");
                }
                else
                {
                    $('#vUnsuitableRefNo'+unsuitable_candidate_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vCandidate'+unsuitable_candidate_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vReason'+unsuitable_candidate_row_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#vUnsuitableRefNo'+unsuitable_candidate_row_history_class_counter).removeClass('error_class');
                    $('#vCandidate'+unsuitable_candidate_row_history_class_counter).removeClass('error_class');
                    $('#vReason'+unsuitable_candidate_row_history_class_counter).removeClass('error_class');
                        

                    if(index == unsuitable_candidate_length-1)
                    {
                        if($('.error_class').length === 0)
                        {
                            $('#rates_unsuit_agen_form').submit();    
                        }                            
                    }
                }
                unsuitable_candidate_row_history_class_counter++;
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
        else
        {
            $(element).after('<span class="error"> Invalid Value </span>');
        }        
    }
});


if($('.manual_rates_shift_rows').length < 6)
    {
        $('.remove_rates_shift_button').hide();
    }

    $('.add_more_rates_shift_button').click(function ()
    {
        
        if($('.manual_rates_shift_rows').length < 6)
        {   
            var rates_and_shift_row_counter = $('.manual_rates_shift_rows').length;

                var html_string = '<tr id="manual_rates_shift_row_1" class="manual_rates_shift_rows">';
                html_string += '<td>'+(rates_and_shift_row_counter+1)+'</td>';
                html_string += '<td><input type="text" id="vRatesShiftRefNo'+rates_and_shift_row_counter+'"  class="form-control manual_rates_shift_text_box" name="vRatesShiftRefNo[]"></td>';
                html_string += '<td><input type="text" id="vLocation'+rates_and_shift_row_counter+'" class="form-control manual_rates_shift_text_box" name="vLocation[]"></td>';
                html_string += '<td><input type="text" id="vEt'+rates_and_shift_row_counter+'" class="form-control manual_rates_shift_text_box"  name="vEt[]"></td>';
                html_string += '</tr>';
            
            rates_and_shift_row_counter++;

            $('#add_manual_rates_shift_tbody').append(html_string);
            
            if($('.manual_rates_shift_rows').length === 5)
            {
                $('.add_more_rates_shift_button').hide();
            }
            $('.remove_rates_shift_button').show();
        }
      
    });
  
    
    $('.remove_rates_shift_button').click(function ()
    {
        if($('.manual_rates_shift_rows').length > 1)
        {
            $('.manual_rates_shift_rows').last().remove();
        }
        
        if($('.manual_rates_shift_rows').length === 1)
        {
            $('.remove_rates_shift_button').hide();
        }
        
        if($('.manual_rates_shift_rows').length < 6)
        {
            $('.add_more_rates_shift_button').show();
        }
    });
    
    //update fency box add row functionality
    
    $('.add_more_manual_row_button').click(function ()
    {
        
        $('.add_manual_row_tbody').append($('.add_manual_row_tbody tr:last').clone());
        
    });
    
    
    $('.remove_manual_row_button').click(function ()
    {
        if ($("#add_manual_row_tbody tr").length != 1) {
     
            $('#add_manual_row_tbody tr:last').remove();
        }
    });
    
  
if($('.manual_unsuitable_candidate_rows').length < 6)
    {
        $('.remove_unsuitable_candidate_button').hide();
    }
    $('.add_more_unsuitable_candidate_button').click(function ()
    {
        if($('.manual_unsuitable_candidate_rows').length < 6)
        {   
            var unsuitable_candidate_row_counter = $('.manual_unsuitable_candidate_rows').length;
            
                var html_string = '<tr id="manual_unsuitable_candidate_row_1" class="manual_unsuitable_candidate_rows">';
                html_string += '<td>'+(unsuitable_candidate_row_counter+1)+'</td>';
                html_string += '<td><input type="text" id="vUnsuitableRefNo'+unsuitable_candidate_row_counter+'" class="form-control manual_unsuitable_candidate_text_box" name="vUnsuitableRefNo[]"></td>';
                html_string += '<td><input type="text" id="vCandidate'+unsuitable_candidate_row_counter+'" class="form-control manual_unsuitable_candidate_text_box" name="vCandidate[]"></td>';
                html_string += '<td><input type="text" id="vReason'+unsuitable_candidate_row_counter+'" class="form-control manual_unsuitable_candidate_text_box" name="vReason[]"></td>';
                html_string += '</tr>';
            
            unsuitable_candidate_row_counter++;

            $('#add_manual_unsuitable_candidate_tbody').append(html_string);
            
            if($('.manual_unsuitable_candidate_rows').length === 5)
            {
                $('.add_more_unsuitable_candidate_button').hide();
            }
            $('.remove_unsuitable_candidate_button').show();
        }
    });
    
    $('.remove_unsuitable_candidate_button').click(function ()
    {
        if($('.manual_unsuitable_candidate_rows').length > 1)
        {
            $('.manual_unsuitable_candidate_rows').last().remove();
        }
        
        if($('.manual_unsuitable_candidate_rows').length === 1)
        {
            $('.remove_unsuitable_candidate_button').hide();
        }
        
        if($('.manual_unsuitable_candidate_rows').length < 6)
        {
            $('.add_more_unsuitable_candidate_button').show();
        }
    });
    
