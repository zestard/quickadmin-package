$(document).ready(function () {
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
    
    $('#show_week_calendar_button').click(function ()
    {
       $.ajax
        ({
            url: public_url + '/vacancy/week_calendar/' + new Date().getFullYear(),
            data: 'year=' + new Date().getFullYear()+'&iVacancyId=' + $('#iVacancyId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
});