$(document).ready(function () {
    // initiate layout and plugins
    App.init();
    var date = new Date();
    var currentMonth = date.getMonth() + 1;
    var currentDate = date.getDate();
    var currentYear = date.getFullYear();

    $(".form_datetime").datetimepicker({
        autoclose: true,
        isRTL: App.isRTL(),
        format: "yyyy-mm-dd hh:ii",
        pickerPosition: (App.isRTL() ? "bottom-right" : "bottom-left"),
        startDate: currentYear + "-" + currentMonth + "-" + currentDate + " 10:00",
        endDate: (currentYear+1) + "-" + currentMonth + "-" + currentDate + " 10:00",
    });
    
    $('.edit_interview_row').click(function ()
    {
        $('.display_interview_controls[data-person-id="' + $(this).attr('data-person-id') + '"]').hide();
        $('.edit_interview_controls[data-person-id="' + $(this).attr('data-person-id') + '"]').show();
        $('.edit_interview_controls[data-person-id="' + $(this).attr('data-person-id') + '"]').removeClass("hide");
    });

    $('.save_interview_changes').click(function ()
    {
        var dScheduledDate = $('#dScheduledDate'+$(this).attr('data-person-id')).val();
        var eStatus = $('#eStatus'+$(this).attr('data-person-id')).val();
        var iVacancyId = $('#iVacancyId').val();
        var iPersonId = $(this).attr('data-person-id');
        
        var url = public_url + '/interview/update_interview_details';
        var data = 'dScheduledDate='+dScheduledDate+'&eStatus='+eStatus+'&iVacancyId='+iVacancyId+'&iPersonId='+$(this).attr('data-person-id');

        //$('.save_or_cancel_icon_span').hide();
        $('.spinner_span').removeClass("hide");
        $.ajax
        ({
            type: "POST",
            url: url,
            data: data,
            headers: {'X-CSRF-TOKEN': $('#_token').val()},
            success: function (data)
            {
                console.log('.assign_vacancy_slab[data-person-id="'+iPersonId+'"]');
                
                $('#display_dScheduledDate'+iPersonId).html(dScheduledDate);
                $('#display_eStatus'+iPersonId).html(eStatus);
                
                $('.spinner_span').hide();
                $('.display_interview_controls[data-person-id="' + iPersonId + '"]').show();
                $('.edit_interview_controls[data-person-id="' + iPersonId + '"]').hide();
                
                if(eStatus == "successful")
                {
                    console.log('.assign_vacancy_slab[data-person-id="'+iPersonId+'"]');
                    $('.assign_vacancy_slab[data-person-id="'+iPersonId+'"]').removeClass("hide");
                    $('.assign_vacancy_slab[data-person-id="'+iPersonId+'"]').show();                    
                }
                else
                {
                    $('.assign_vacancy_slab[data-person-id="'+iPersonId+'"]').hide();
                }
            }
        });
    });
    
    $('.cancel_edit_interview_row').click(function ()
    {
        $('.display_interview_controls[data-person-id="' + $(this).attr('data-person-id') + '"]').show();
        $('.edit_interview_controls[data-person-id="' + $(this).attr('data-person-id') + '"]').hide();
    });
    
    $('.delete_interview_row').click(function ()
    {
        var confirm = window.confirm("Do you really want to delete this scheduled interview ?");

        var iPersonId = $(this).attr('data-person-id');
        var iInterviewId = $(this).attr('data-interview-id');
        var iVacancyId = $(this).attr('data-vacancy-id');

        if(confirm)
        {
            var url = public_url + '/interview/delete_interview';
            url += '/'+iPersonId+'/'+iInterviewId+'/'+iVacancyId;
            
            var data = "";
            
            $.ajax
            ({
                type: "GET",
                url: url,
                data: data,                
                success: function (data)
                {
                    console.log(data);
		    window.location = public_url + '/interview/index/'+iVacancyId;
                }
            });
        }
    });
});
