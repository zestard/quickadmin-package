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

    $('.assigned_slab').attr('title',"Assigned Slab - Delete This");
    $('.delete_slab').attr('title',"Delete This Slab");
    $('.filled_slab').attr('title',"Assigned Slab");
    $('.existing_slab').attr('title',"Scheduled Slabs");
    $('#cancel_vacancy_schedule_button').click(function ()
    {
        window.location = public_url + '/vacancy';
    });
    
    $('.vacancy_slab').click(function ()
    {
        $(this).toggleClass("book_now");
    });
        
    $('.add_vacancy_slab').click(function ()
    {   
        $('.save_vacancy').show();
        $('.save_vacancy').removeClass("hide");
        
        $('.add_vacancy_slab').hide();
               
        $('.calender_table').show();
        $('.calender_table').removeClass("hide");
    });
    
    $('.save_vacancy').click(function ()
    {
        var date_range_slabs_for_vacancy = "";
        
        date_range_slabs_for_vacancy += $('.book_now').first().attr('data-td-date');
        date_range_slabs_for_vacancy += '|' + $('.book_now').last().attr('data-td-date');        
        date_range_slabs_for_vacancy += '|' + $('#iVacancyId').val();

        $.ajax
        ({
            url: public_url + '/vacancy/add_vacancy/' + date_range_slabs_for_vacancy,
            success: function(result)
            {
                var html_string = "<tr><td>" + $('.book_now').first().attr('data-day-name')+', ' + $('.book_now').first().attr('data-td-date') + '</td>';
                html_string += "<td>" + $('.book_now').last().attr('data-day-name')+', ' + $('.book_now').last().attr('data-td-date') + '</td>';
                        html_string += '<td><a class="btn btn-danger" style="margin-bottom: 0px;"> Remove Slab </a></td></tr>';
                $('#vacancy_slabs_table').append(html_string);                
                $('.book_now').css('background-color','grey');
                $('.book_now').css('border-color','grey');
                $('.book_now').removeClass('vacancy_slab');
                $('.book_now').addClass('already');
                $('.book_now').removeClass('book_now');
                $('.save_vacancy').hide();
                $('.add_vacancy_slab').show();
                $('.calender_table').hide();
                $('#no_slabs_row').hide();
            }
        });
    });

    $('#save_vacancy_schedule_button').click(function ()
    {
        var date_range_slabs_for_vacancy = "";
        if($('.book_now').length > 0)
        {
            var book_now_length = $('.book_now').length;
            $('.book_now').each(function (index, element)
            {
                var previous_element = ($(this).prev());
                var current_element = $(this).attr('data-td-date');
                var next_element = ($(this).next());

                if(!previous_element.hasClass('book_now'))
                {
                    // Slab Started                
                    date_range_slabs_for_vacancy = "";
                    date_range_slabs_for_vacancy += current_element;
                }

                if(!next_element.hasClass('book_now'))
                {
                    // Slab over
                    date_range_slabs_for_vacancy += '|' + current_element;
                    date_range_slabs_for_vacancy += '|' + $('#iVacancyId').val();

                    $.ajax
                    ({
                        url: public_url + '/vacancy/add_vacancy/' + date_range_slabs_for_vacancy,
                        success: function(result)
                        {
                            if (index == book_now_length - 1) 
                            {
                                window.location = public_url + '/vacancy/update_vacancy/'+$('#iVacancyId').val()+'#tab_2';
                            }
                        }
                    });
                }
            });
        }
        else
        {
           window.location = public_url + '/vacancy/update_vacancy/'+$('#iVacancyId').val()+'#tab_2';
        }
    });   
    
    var date_range_slabs_for_vacancy = "";
    $('.delete_slab').click(function ()
    {
        var current_element = $(this);
        if($(current_element).attr('data-vacancy-schedule-id') !== "")
        {            
            current_element = $(this);
            $.ajax
            ({
                url: public_url + '/vacancy/delete_vacancy_schedule/' + $(current_element).attr('data-vacancy-schedule-id'),
                success: function(result)
                {
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').attr('bgcolor',"");
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').attr('data-vacancy-schedule-id',"");
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').addClass("vacancy_slab");
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').removeClass("delete_slab");
                    $('.vacancy_slab[data-day-name="Sunday"]').attr('bgcolor',"#c5c5c5");
                    $('.vacancy_slab').click(function ()
                    {
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').toggleClass("book_now");
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').toggleClass("vacancy_slab");
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').css("background-color","blue");
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').css("color","#fff");
                    });
                }
            });
        }
    });
    
    $('.assigned_slab').click(function ()
    {
        var current_element = $(this);
        if($(current_element).attr('data-vacancy-schedule-id') !== "")
        {            
            current_element = $(this);
            $.ajax
            ({
                url: public_url + '/vacancy/delete_vacancy_schedule/' + $(current_element).attr('data-vacancy-schedule-id'),
                success: function(result)
                {
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').attr('bgcolor',"");
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').attr('data-vacancy-schedule-id',"");
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').addClass("vacancy_slab");
                    $('[data-vacancy-schedule-id='+$(current_element).attr('data-vacancy-schedule-id')+']').removeClass("assigned_slab");
                    $('.vacancy_slab[data-day-name="Sunday"]').attr('bgcolor',"#c5c5c5");
                    $('.vacancy_slab').click(function ()
                    {
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').toggleClass("book_now");
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').toggleClass("vacancy_slab");
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').css("background-color","blue");
                        $('[data-vacancy-schedule-id='+$(this).attr('data-vacancy-schedule-id')+']').css("color","#fff");
                    });
                }
            });
        }
    });
    
    $('#show_month_calendar_button').click(function ()
    {
       $.ajax
        ({
            url: public_url + '/vacancy/month_calendar/' + 1,
            data: 'year=' + (parseInt($('#current_year').val())) +'&iVacancyId=' + $('#iVacancyId').val()+'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
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
    
    $('#previous_year_button').click(function ()
    {
        $.ajax
        ({
            url: public_url + '/vacancy/year_calendar/' + (parseInt($('#current_year').val()) - 1),
            data: 'year=' + (parseInt($('#current_year').val()) - 1) +'&iVacancyId=' + $('#iVacancyId').val()+'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
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
            url: public_url + '/vacancy/year_calendar/' + (parseInt($('#current_year').val()) + 1),
            data: 'year=' + (parseInt($('#current_year').val()) + 1) +'&iVacancyId=' + $('#iVacancyId').val()+'&controller_name='+$('#controller_name').val()+'&iPersonId='+$('#iPersonId').val(),
            success: function(result)
            {
                $('#calendar_container').html(result);
            }
        });
    });

    $('#assign_vacancy_slabs_button').click(function ()
    {
        var date_range_slabs_for_vacancy = "";
        if($('.alotted_slab').length > 0)
        {
            var len = $('.alotted_slab').length;
            $('.alotted_slab').each(function (index, element)
            {
                var vacancy_schedule_id = $(this).attr('data-vacancy-schedule-id');
                var iPersonId = $('#iPersonId').val();
                var iVacancyId = $('#iVacancyId').val();

                $.ajax
                ({
                    url: public_url + '/interview/assign_person_to_vacancy_slab/1',
                    data: 'iVacancyScheduleId=' + vacancy_schedule_id + '&iPersonId=' + iPersonId + '&iVacancyId=' + iVacancyId,
                    success: function(result)
                    {
                        if (index == len - 1) {
                            window.location = public_url + '/vacancy';
                        }
                    }
                });
            });
        }
        else
        {
            window.location = public_url + '/vacancy';
        }
    });
    
    $('.existing_slab').click(function ()
    {
        $('[data-vacancy-schedule-id=' + $(this).attr("data-vacancy-schedule-id")+']').each(function ()
        {
            $(this).attr('title',"Selected to assign");
            $(this).toggleClass("alotted_slab");
            $(this).toggleClass("existing_slab");
            $(this).removeAttr("bgcolor");
        });
    });
    
    $('.alotted_slab').click(function ()
    {
        $('[data-vacancy-schedule-id=' + $(this).attr("data-vacancy-schedule-id")+']').each(function ()
        {
            $(this).attr('title',"Scheduled Slabs");
            $(this).toggleClass("existing_slab");
            $(this).toggleClass("alotted_slab");
            $(this).attr("bgcolor","green");            
        });            
    });  
    
    $('.filled_slab').click(function ()
    {
        $('[data-vacancy-schedule-id=' + $(this).attr("data-vacancy-schedule-id")+']').each(function ()
        {
            $(this).attr('title',"Assigned Slabs");
            $(this).toggleClass("existing_slab");
            $(this).toggleClass("filled_slab");
            $(this).removeAttr("bgcolor");
        });

        var vacancy_schedule_id = $(this).attr('data-vacancy-schedule-id');
        var iPersonId = 0;
        var iVacancyId = $('#iVacancyId').val();
        
        $.ajax
        ({
            url: public_url + '/interview/assign_person_to_vacancy_slab/1',
            data: 'iVacancyScheduleId=' + vacancy_schedule_id + '&iPersonId=' + iPersonId + '&iVacancyId=' + iVacancyId,
            success: function(result)
            {
                
            }
        });
    });
});