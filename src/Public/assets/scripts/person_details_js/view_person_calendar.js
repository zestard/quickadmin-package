$(document).ready(function () 
{
    $.ajax
    ({
        url: public_url + '/personcalendar/year_calendar/1',
        data: 'year=' + $('#current_year').val() +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
        success: function(result)
        {
            $('#calendar_container').html(result);
        }
    });
    
    
});