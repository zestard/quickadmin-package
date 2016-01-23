$(document).ready(function()
{
    
    var pathArray = window.location.pathname.split( '/' );
    var temp_action = pathArray[pathArray.length-1];
    if(temp_action=="add_detail"){
        $('#vCountry').val(222).trigger('change');
    }
	$('#tab_a_1').hide();
    
    $('#save_tab_0').click(function()
    {
        var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var check_digit = /^[0-9]+$/;

        $('.error').hide();

	    if($('.eType_switch_class:checked').length === 0)
	    {         
		   showError("error_toggale_select","required");	
	    }
        else
        {
            $(".error_toggale_select").removeClass('error_class');
        }
	
        if($.trim($("#vName").val()).length === 0)
        {
            showError("vName","required");  
        }
        else
        {
            $("#vName").css('border','1px solid  #e5e5e5');
            $("#vName").removeClass('error_class');
        }

        if($.trim($("#vMiddleName").val()).length === 0)
        {
            showError("vMiddleName","required");  
        }
        else
        {
            $("#vMiddleName").css('border','1px solid  #e5e5e5');
            $("#vMiddleName").removeClass('error_class');
        }
        
        if($.trim($("#tAddress").val()).length === 0)
        {
            showError("tAddress","required");
        }
        else
        {
            $("#tAddress").css('border','1px solid  #e5e5e5');
            $("#tAddress").removeClass('error_class');
        }
        
        
        if($.trim($("#vPostcode").val()).length === 0)
        {
            showError("vPostcode","required");
        }
        else
        {
            $("#vPostcode").css('border','1px solid #e5e5e5');
            $("#vPostcode").removeClass('error_class');
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
            $("#vEmail").css('border','1px solid #e5e5e5');
            $("#vEmail").removeClass('error_class');
        }
        

        if($.trim($("#iTelphoneNumber").val()).length === 0)
        {
            showError("iTelphoneNumber","required");
        }
        else if (!check_digit.test($.trim($("#iTelphoneNumber").val())))
        {
            showError("iTelphoneNumber","invalid");
        }
         else 
        {
            $("#iTelphoneNumber").css('border','1px solid  #e5e5e5');
            $("#iTelphoneNumber").removeClass('error_class');
        }
        
        
        if($.trim($("#iMobile").val()).length === 0)
        {
            showError("iMobile","required");
        }
        else if(!check_digit.test($.trim($("#iMobile").val())))
        {
            showError("iMobile","invalid");
        }
        else
        {
            $("#iMobile").css('border','1px solid #e5e5e5');
            $("#iMobile").removeClass('error_class');
        }

        if($.trim($("#dDateRegistered").val()).length === 0)
        {
            showError("dDateRegistered","required");
        }
        else
        {
            $("#dDateRegistered").css('border','1px solid #e5e5e5');
            $("#dDateRegistered").removeClass('error_class');
        }

        if($.trim($("#datetimepicker").val()).length === 0)
        {
            showError("datetimepicker","required");
        }
        else
        {
            $("#datetimepicker").css('border','1px solid #e5e5e5');
            $("#datetimepicker").removeClass('error_class');
        }

        if($.trim($("#vSector").val()).length === 0)
        {
            showError("vSector","required");
        }
        else
        {
            $("#vSector").css('border','1px solid #e5e5e5');
            $("#vSector").removeClass('error_class');

            $("#s2id_vSector").css('border','1px solid #e5e5e5');
            $("#s2id_vSector").removeClass('error_class');            
        }

        
        if($.trim($("#contact_telephone_number0").val()).length === 0)
        {

        }
        else if (!check_digit.test($.trim($("#contact_telephone_number0").val())))
        {
            showExtraError("contact_telephone_number0","invalid");
        }
        else
        {
            $("#contact_telephone_number0").css('border','1px solid #e5e5e5');
            $("#contact_telephone_number0").removeClass('error_class');
        }

        if($.trim($("#contact_email_id0").val()).length === 0)
        {

        }
        else if (!check_email.test($.trim($("#contact_email_id0").val())))
        {
            showExtraError("contact_email_id0","invalid");
        }
        else
        {
            $("#contact_email_id0").css('border','1px solid #e5e5e5');
            $("#contact_email_id0").removeClass('error_class');
        }

        console.log($('.error_class').length);

        $('.error_class').each(function ()
        {
            console.log($(this).attr("id"));
        });
        if($('.error_class').length === 0)
        {
            $('#person_detail_form').submit();
        }
   
    });        
        

    $('.add_more_key_skills_button').click(function ()            
    {
        if($('.key_skills_text_area').length < 3)
        {
            var html_string = "<br><textarea name='vKeySkills[]' class='form-control key_skills_text_area' rows='3'></textarea>";
            $('#add_more_key_skills_span').append(html_string);
            
            if($('.key_skills_text_area').length === 3)
            {
                $('.add_more_key_skills_button').hide();
            }
        }
    });
    
    $('.add_more_relocation_area_button').click(function ()            
    {
        if($('.relocation_area_text_box').length < 3)
        {
            var html_string = '<br><input type="text" name="vRelocationArea[]" value="" class="form-control relocation_area_text_box" placeholder="Enter Relocation Area">';
            $('#add_more_relocation_area_span').append(html_string);            
            if($('.relocation_area_text_box').length === 3)
            {
                $('.add_more_relocation_area_button').hide();
            }
        }
    });
    
    $('.add_more_relocation_area_abroad_button').click(function ()            
    {
        if($('.relocation_area_abroad_text_box').length < 3)
        {
            var html_string = '<br><input type="text" name="vRelocationAbroad[]" class="form-control relocation_area_abroad_text_box" value="" placeholder="Enter Relocation Abroad">';
            $('#add_more_relocation_area_abroad_span').append(html_string);            
            if($('.relocation_area_abroad_text_box').length === 3)
            {
                $('.add_more_relocation_area_abroad_button').hide();
            }
        }
    });
    
    $('.add_more_primary_discipline_button').click(function ()            
    {
        if($('.primary_discipline_text_box').length < 3)
        {
            var html_string = '<br><input type="text" name="vPrimaryDiscipline[]" class="form-control primary_discipline_text_box" value="" placeholder="Enter Primary Discipline">';
            $('#add_more_primary_discipline_span').append(html_string);            
            if($('.primary_discipline_text_box').length === 3)
            {
                $('.add_more_primary_discipline_button').hide();
            }
        }
    });
    
    
    $('.add_more_core_skills_button').click(function ()            
    {
        if($('.core_skills_text_box').length < 3)
        {
            var html_string = '<br><input type="text" name="vCoreSkills[]" class="form-control core_skills_text_box" value="" placeholder="Enter Core Skills">';
            $('#add_more_core_skills_span').append(html_string);            
            if($('.core_skills_text_box').length === 3)
            {
                $('.add_more_core_skills_button').hide();
            }
        }
    });
    
    
    $('.add_more_qualifications_button').click(function ()            
    {
        if($('.qualifications_text_box').length < 3)
        {
            var html_string = '<br><input type="text" name="vQualifications[]" class="form-control qualifications_text_box" value="" placeholder="Enter Qualifications">';
            $('#add_more_qualifications_span').append(html_string);            
            if($('.qualifications_text_box').length === 3)
            {
                $('.add_more_qualifications_button').hide();
            }
        }
    });
    
    
    $('.add_more_notes_button').click(function ()            
    {
        if($('.notes_text_area').length < 3)
        {
            var html_string = "<br><textarea name='vNote[]' class='form-control notes_text_area' rows='3'></textarea>";            
            $('#add_more_notes_span').append(html_string);            
            if($('.notes_text_area').length === 3)
            {
                $('.add_more_notes_button').hide();
            }
        }
    });

//-- Start : Add row :Refrences -- //

    if($('.manual_contact_rows').length === 1)
    {
        $('.remove_manual_contacts_row_button').hide();
    }
   
    $('.add_more_manual_contact_row_button').click(function ()
    {
        $('.error').hide();

        var add_reference_history_class_counter = 0;
        var add_reference_row_length = $('.add_refrence').length;
        var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var check_digit = /^[0-9]+$/;

        $('.add_refrence').each(function (index,element_id)
        {
            if($.trim($(this).val()).length === 0)
            {   
                showExtraError($(this).attr('id'),"required");
            }
            else 
            {   
                if(!check_digit.test($.trim($('#contact_telephone_number'+add_reference_history_class_counter).val())))
                {
                     showExtraError('contact_telephone_number'+add_reference_history_class_counter,"");
                }
                
                if(!check_email.test($.trim($('#contact_email_id'+add_reference_history_class_counter).val())))
                {  
                    showExtraError('contact_email_id'+add_reference_history_class_counter,"");
                }

                
                else
                {
                    $('#contact_name'+add_reference_history_class_counter).css('border','1px solid  #e5e5e5');
                    $('#contact_telephone_number'+add_reference_history_class_counter).css('border','1px solid  #e5e5e5');
                    $('#contact_email_id'+add_reference_history_class_counter).css('border','1px solid  #e5e5e5');
                    $('#contact_position'+add_reference_history_class_counter).css('border','1px solid  #e5e5e5');

                    $('#contact_name'+add_reference_history_class_counter).removeClass('error_class');
                    $('#contact_telephone_number'+add_reference_history_class_counter).removeClass('error_class');
                    $('#contact_email_id'+add_reference_history_class_counter).removeClass('error_class');
                    $('#contact_position'+add_reference_history_class_counter).removeClass('error_class');
                            

                    if(index == add_reference_row_length-1)
                    {
                        if($('.error_class').length === 0)
                        {
                            //alert('hii');
                            //$('form').unbind('submit').submit()  
                        }                            
                    }
                }
            }
            add_reference_history_class_counter++;            
        });

        if($('.error_class').length === 0)
        {
            if($('.manual_contact_rows').length < 6)
            {
                var add_references_row_counter = $('.manual_contact_rows').length;;

                var html_string = '<tr id="manual_contact_row_1" class="manual_contact_rows">';

                    html_string += '<td><input type="text" id="contact_name'+add_references_row_counter+'" class="form-control manual_contact_text_box add_refrence" name="contact_name[]"></td>';

                    html_string += '<td><input type="text" id="contact_telephone_number'+add_references_row_counter+'" class="form-control manual_contact_text_box add_refrence" name="contact_telephone_number[]"></td>';

                    html_string += '<td><input type="text" id="contact_email_id'+add_references_row_counter+'" class="form-control manual_contact_text_box add_refrence" name="contact_email_id[]"></td>';

                    html_string += '<td><input type="text" id="contact_position'+add_references_row_counter+'" class="form-control manual_contact_text_box add_refrence" name="contact_position[]"></td>';

                    html_string += '</tr>';

                add_references_row_counter++;


                $('#add_manual_contacts_tbody').append(html_string);
                
                if($('.manual_contact_rows').length === 5)
                {
                   $('.add_more_manual_contact_row_button').hide();
                }
                $('.remove_manual_contacts_row_button').show();
            }
        }
    });

    $('.remove_manual_contacts_row_button').click(function ()
    {
        if($('.manual_contact_rows').length > 1)
        {
            $('.manual_contact_rows').last().remove();
        }
        
        if($('.manual_contact_rows').length === 1)
        {
            $('.remove_manual_contacts_row_button').hide();
        }
        
        if($('.manual_contact_rows').length < 6)
        {
            $('.add_more_manual_contact_row_button').show();
        }
    });

//End : Added Row : Refrences -- //

        function showError(element_id,element_error_text)
        {
            $("#" + element_id).css('border','1px solid red');
            $("#" + element_id).addClass('error_class');
            
            if(element_error_text === "invalid")
            {
                 $('#' + element_id).after('<span class="error">Invalid Value  </span>');
            }
            else
            {
                $('#' + element_id).after('<span class="error"> This field is required </span>');
               
            }
        }

        function showExtraError(element_id,element_error_text)
        {
            $("#" + element_id).css('border','1px solid red');
            $("#" + element_id).addClass('error_class');
        }

});
