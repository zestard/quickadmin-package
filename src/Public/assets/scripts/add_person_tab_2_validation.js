$(document).ready(function()
{
	 //$('#tab_a_1').hide();
    var error_counter = 0;
    $('#save_tab_2').click(function(event)
    {
        event.preventDefault();

        $('.error').hide();
	
	  
            var education_row_history_class_counter = 0;
            var education_row_length = $('.education_row_history_class').length;

            $('.education_row_history_class').each(function (index, element)
            {
                if($.trim($(this).val()).length === 0)
                {
                   // showError($(this),"required");
                }
                else
                {
                    var d_start_date = $('#dStartDate'+education_row_history_class_counter).val();
                    var d_end_date = $('#dEndDate'+education_row_history_class_counter).val();

                    if(d_start_date > d_end_date)
                    {
                        showError($('#dStartDate'+education_row_history_class_counter),"invalid");
                        showError($('#dEndDate'+education_row_history_class_counter),"invalid");
                    }
                    else
                    {
                        $('#dStartDate'+education_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#dEndDate'+education_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#tPlaceOfEducation'+education_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#tNotes'+education_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#tQualification'+education_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        
                        $('#dStartDate'+education_row_history_class_counter).removeClass('error_class');
                        $('#dEndDate'+education_row_history_class_counter).removeClass('error_class');
                        $('#tPlaceOfEducation'+education_row_history_class_counter).removeClass('error_class');
                        $('#tNotes'+education_row_history_class_counter).removeClass('error_class');
                        $('#tQualification'+education_row_history_class_counter).removeClass('error_class');

                        if(error_counter >= 0)
                        {
                            error_counter--;
                        }

                        if(index == employement_row_length-1)
                        {
                            if($('.error_class').length === 0)
                            {
                                //$('#person_education_form').submit();    
                            }                            
                        }
                    }                
                }
                education_row_history_class_counter++;
            });

            var employment_row_history_class_counter = 0;
            var employement_row_length = $('.employment_row_history_class').length;

            $('.employment_row_history_class').each(function (index, element)
            {
                if($.trim($(this).val()).length === 0)
                {
                    //showError($(this),"required");
                }
                else
                {
                    var e_start_date = $('#eStartDate'+employment_row_history_class_counter).val();
                    var e_end_date = $('#eEndDate'+employment_row_history_class_counter).val();

                    if(e_start_date > e_end_date)
                    {
                        showError($('#eStartDate'+employment_row_history_class_counter),"invalid");
                        showError($('#eEndDate'+employment_row_history_class_counter),"invalid");
                    }
                    else
                    {
                        $('#eStartDate'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#eEndDate'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#tEmployer'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#tJobTitle'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5'); 
                        $('#iSalary'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#tRoleNote'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5'); 
                        $('#tReasonForLeaving'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5');
                        $('#eJobType'+employment_row_history_class_counter).css('border','1px solid  #e5e5e5'); 

                        $('#eStartDate'+employment_row_history_class_counter).removeClass('error_class');
                        $('#eEndDate'+employment_row_history_class_counter).removeClass('error_class');
                        $('#tEmployer'+employment_row_history_class_counter).removeClass('error_class');
                        $('#tJobTitle'+employment_row_history_class_counter).removeClass('error_class');
                        $('#iSalary'+employment_row_history_class_counter).removeClass('error_class');
                        $('#tRoleNote'+employment_row_history_class_counter).removeClass('error_class');
                        $('#tReasonForLeaving'+employment_row_history_class_counter).removeClass('error_class');
                        $('#eJobType'+employment_row_history_class_counter).removeClass('error_class');
                        
                        if(error_counter < 0)
                        {
                            error_counter++;
                        }

                        if(index == employement_row_length-1)
                        {
                            if($('.error_class').length === 0)
                            {
                                $('#person_education_form').submit();    
                            }                            
                        }
                    }
                }
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
        else
        {
            $(element).after('<span class="error"> Invalid Value </span>');            
        }        
    }
});
