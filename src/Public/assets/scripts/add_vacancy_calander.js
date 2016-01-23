$(document).ready(function () {
    // initiate layout and plugins
    App.init();
    
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
});