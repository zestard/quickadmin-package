$(document).ready(function()
{	
 //$('#tab_a_1').hide();

    $('#save_tab_5').click("submit", function(event)
    {
        event.preventDefault();

        $('.error').hide();

        // if($.trim($("#dDateOfBirth").val()).length === 0)
        // {
        //     showError("dDateOfBirth","required");
        // }
        // else
        // {
        //     $("#dDateOfBirth").css('border','1px solid  #e5e5e5');
        // }
        
        // if($.trim($("#vNationality").val()).length === 0)
        // {
        //     showError("vNationality","required");  
        // }
        // else
        // {
        //     $("#vNationality").css('border','1px solid  #e5e5e5');
        // }
        
        // if($.trim($("#dDate").val()).length === 0)
        // {
        //     showError("dDate","required");
        // }
        // else
        // {
        //     $("#dDate").css('border','1px solid  #e5e5e5');
        // }
        
        
        // if($.trim($("#vRefNo").val()).length === 0)
        // {
        //     showError("vRefNo","required");
        // }
        // else
        // {
        //     $("#vRefNo").css('border','1px solid #e5e5e5');
        // }
 
        // if($.trim($("#vImmigrationstatus").val()).length === 0)
        // {
        //     showError("vImmigrationstatus","required");
        // }
        // else
        // {
        //     $("#vImmigrationstatus").css('border','1px solid #e5e5e5');
        // }

         $('form').unbind('submit').submit()
        
        // if(($.trim($("#dDateOfBirth").val())).length !== 0  && 
        //    ($.trim($("#vNationality").val())).length !== 0  &&  
        //    ($.trim($("#dDate").val())).length !== 0  &&
        //    ($.trim($("#vRefNo").val())).length !== 0  &&
        //    ($.trim($("#vImmigrationstatus").val())).length !== 0)

        // {           
        //         $('form').unbind('submit').submit()
        // }
        
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
    $('.add_more_agencies_button').click(function ()            
    {
        if($('.other_agencies_text_box').length < 3)
        {
            var html_string = '<br><input type="text" name="vOtherAgenciesName[]" value="" class="form-control other_agencies_text_box" placeholder="Enter Other Agencies Name">';
            
            $('#add_more_agencies_span').append(html_string); 

            if($('.other_agencies_text_box').length === 3)
            {
                $('.add_more_agencies_button').hide();
            }
        }
    });

