$(document).ready(function () {
    // initiate layout and plugins
    App.init();
    
    $.ajax
    ({
        url: public_url + '/vacancy/year_calendar/' + new Date().getFullYear(),
        data: 'year=' + new Date().getFullYear()+'&iVacancyId=' + $('#iVacancyId').val()+'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
        success: function(result)
        {
            $('#calendar_container').html(result);
        }
    });
});