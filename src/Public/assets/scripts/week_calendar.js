$(document).ready(function () {
    
   $('#show_day_calendar_button').click(function ()
    {
       $.ajax
        ({
            url: public_url + '/vacancy/day_calendar/' + new Date().getFullYear(),
            data: 'year=' + new Date().getFullYear()+'&iVacancyId=' + $('#iVacancyId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
    
    $('#show_year_calendar_button').click(function ()
    {
       $.ajax
        ({
            url: public_url + '/vacancy/year_calendar/' + new Date().getFullYear(),
            data: 'year=' + new Date().getFullYear()+'&iVacancyId=' + $('#iVacancyId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
    
    $('#show_month_calendar_button').click(function ()
    {
       $.ajax
        ({
            url: public_url + '/vacancy/month_calendar/' + new Date().getFullYear(),
            data: 'year=' + new Date().getFullYear()+'&iVacancyId=' + $('#iVacancyId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
});