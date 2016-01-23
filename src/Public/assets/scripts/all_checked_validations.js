$(document).ready(function() 
{
    $('.all_checked').click(function ()
    {
        if($(this).attr("checked") === "checked")
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

        if($(this).attr("checked") === "checked")
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

        if($(this).attr("checked") === "checked")
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

        if($(this).attr("checked") === "checked")
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
        
    });
});