$(document).ready(function () {
    //$('[data-toggle="popover"]').popover();
    
    $('[data-toggle="popover"]').popover({ 
        trigger: "manual" , 
        html: true, 
        animation:false
    })
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    })
    .on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
    });
    
    $('#show_month_calendar_button').click(function ()
    {
       $.ajax
        ({
            url: public_url + '/personcalendar/month_calendar/1',
            data: 'year=' + $('#current_year').val() +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val()+'&month=1',
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
    
    $('#previous_year_button').click(function ()
    {
        $.ajax
        ({
            url: public_url + '/personcalendar/year_calendar/' + (parseInt($('#current_year').val()) - 1),
            data: 'year=' + (parseInt($('#current_year').val()) - 1) +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
    
    $('#next_year_button').click(function ()
    {        
        $.ajax
        ({
            url: public_url + '/personcalendar/year_calendar/' + (parseInt($('#current_year').val()) + 1),
            data: 'year=' + (parseInt($('#current_year').val()) + 1) +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
});