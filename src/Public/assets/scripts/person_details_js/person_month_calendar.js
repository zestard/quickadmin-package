$(document).ready(function () {    
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
    
    $('.previous_month_button').click(function ()
    {
        if(parseInt($('#current_month').val()) > 1)
        {
            var year = 0;
            var next_month = (parseInt($('#current_month').val()));
            next_month = next_month - 1;

            $.ajax
            ({
                url: public_url + '/personcalendar/month_calendar/' + (parseInt($('#current_month').val()) - 1),
                data: 'year=' + $('#current_year').val() +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val()+'&month=' + (parseInt($('#current_month').val()) - 1),
                success: function(result)
                {
                    $('#calendar_container').html(result);
                }
            });
        }
        else
        {
            var next_month = (parseInt($('#current_month').val()));
            next_month = next_month - 1;

            $.ajax
            ({
                url: public_url + '/personcalendar/month_calendar/12',
                data: 'year=' + (parseInt($('#current_year').val()) - 1) +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val()+'&month=12',
                success: function(result)
                {
                    $('#calendar_container').html(result);
                }
            });
        }
    });
    
    $('.next_month_button').click(function ()
    {   
        var year = 0;
        var next_month = (parseInt($('#current_month').val()));
        next_month = next_month + 1;
        
        if(next_month == 13)
        {
            next_month = 1;
            year = (parseInt($('#current_year').val()) + 1);
        }
        else
        {
            year = (parseInt($('#current_year').val()));
        }
        
        $.ajax
        ({
            url: public_url + '/personcalendar/month_calendar/' + next_month,
            data: 'year=' + year +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val()+'&month=' + next_month,
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
            url: public_url + '/personcalendar/year_calendar/' + (parseInt($('#current_year').val())),
            data: 'year=' + (parseInt($('#current_year').val())) +'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });
});