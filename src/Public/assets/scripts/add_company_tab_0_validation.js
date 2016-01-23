$(document).ready(function(){

    var pathArray = window.location.pathname.split( '/' );
    var temp_action = pathArray[pathArray.length-1];
    if(temp_action=="add_company")
    {
        $('#vCountry').val(222).trigger('change');
    }
    
    $('#next_tab_0').click(function()
    {

        var check_phon_num = /^[0-9]+$/
	    var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        $('.error').hide();


        if($.trim($("#vName").val()).length === 0)
        {
            showError("vName","required");
        }
        else
        {
            $("#vName").css('border','1px solid  #e5e5e5');
            $("#vName").removeClass('error_class');
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
            $("#vPostcode").css('border','1px solid  #e5e5e5');
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
            $("#vEmail").css('border','1px solid  #e5e5e5');
            $("#vEmail").removeClass('error_class');
        }

        if($.trim($("#iTelphoneNumber").val()).length === 0)
        {
            showError("iTelphoneNumber","required");
        }
        else if (!check_phon_num.test($.trim($("#iTelphoneNumber").val())))
        {
            showError("iTelphoneNumber","invalid");
        }
         else 
        {
            $("#iTelphoneNumber").css('border','1px solid  #e5e5e5');
            $("#iTelphoneNumber").removeClass('error_class');
        }

         if($.trim($("#dDateRegistered").val()).length === 0)
        {
            showError("dDateRegistered","required");
        }
         else
        {
            $("#dDateRegistered").css('border','1px solid  #e5e5e5');
            $("#dDateRegistered").removeClass('error_class');
        }

        if($.trim($("#vCountry").val()).length === 0)
        {
            showError("vCountry","required");
        }
         else
        {
            $("#vCountry").css('border','1px solid  #e5e5e5');
            $("#vCountry").removeClass('error_class');
        }

        if($.trim($("#contact_telephone_number0").val()).length === 0)
        {

        }
        else if (!check_phon_num.test($.trim($("#contact_telephone_number0").val())))
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

        //console.log($('.error_class').length);

        $('.error_class').each(function ()
        {
            console.log($(this).attr("id"));
        });

        if($('.error_class').length === 0)
        {
           $("#add_info").attr('data-toggle', 'tab');
           $("#add_info").attr('href', '#tab_1');
           $("#add_info").click();
        }
   
    });  

    $('.add_more_notes_button').click(function ()            
    {
        if($('.notes_text_area').length < 3)
        {
            var html_string = "<br><textarea name='vNotes[]' class='form-control notes_text_area' rows='3'></textarea>";            
            $('#add_more_notes_span').append(html_string);            
            if($('.notes_text_area').length === 3)
            {
                $('.add_more_notes_button').hide();
            }
        }
    });

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
                showExtraError($(this).attr('id'),"");
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

                    html_string += '<td><select class= "form-control manual_contact_text_box add_refrence" name="contact_position[]"><option>Influencer</option><option>Decision Maker</option></select></td>';

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
