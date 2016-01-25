$(document).ready(function() 
{
    $('.all_checked').click(function ()
    {
        if($(this).is(':checked'))
        {
            $('.person_id_checkbox').attr("checked","checked");
            $('.person_id_checkbox').prop("checked","checked");
            $('.person_id_checkbox').parent('span').addClass("checked");
        }
        else
        {
            $('.person_id_checkbox').removeAttr("checked");            
            $('.person_id_checkbox').parent('span').removeClass("checked");
        }

        if($(this).is(':checked'))
        {
            $('.company_id_checkbox').attr("checked","checked");
            $('.company_id_checkbox').prop("checked","checked");
            $('.company_id_checkbox').parent('span').addClass("checked");
        }
        else
        {
            $('.company_id_checkbox').removeAttr("checked");            
            $('.company_id_checkbox').parent('span').removeClass("checked");
        }

        if($(this).is(':checked'))
        {
            $('.vacancy_id_checkbox').attr("checked","checked");
            $('.vacancy_id_checkbox').prop("checked","checked");
            $('.vacancy_id_checkbox').parent('span').addClass("checked");
        }
        else
        {
            $('.vacancy_id_checkbox').removeAttr("checked");            
            $('.vacancy_id_checkbox').parent('span').removeClass("checked");
        }

        if($(this).is(':checked'))
        {
            $('.user_id_checkbox').attr("checked","checked");
            $('.user_id_checkbox').prop("checked","checked");
            $('.user_id_checkbox').parent('span').addClass("checked");
        }
        else
        {
            $('.user_id_checkbox').removeAttr("checked");            
            $('.user_id_checkbox').parent('span').removeClass("checked");
        }

        if($(this).is(':checked'))
        {
            $('.role_id_checkbox').attr("checked","checked");
            $('.role_id_checkbox').prop("checked","checked");
            $('.role_id_checkbox').parent('span').addClass("checked");
        }
        else
        {
            $('.role_id_checkbox').removeAttr("checked");            
            $('.role_id_checkbox').parent('span').removeClass("checked");
        }
        
    });
});