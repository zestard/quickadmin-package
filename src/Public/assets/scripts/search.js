var url = public_url + '/person/ajaxLoadPersonData?iVacancyId=' + $('#vacancy_id').val();
loadPersonData(url);

var Search = function () {

    // initialize the toggle switches
    var inittoggles = function () {
        jQuery('.toggleyes').toggles({
            text: {
                on: 'YES',
                off: 'NO'
            }
        });


    }

    return {
        //main function to initiate the theme
        init: function () {

            //IMPORTANT!!!: Do not modify the core handlers call order.

            //core handlers
            inittoggles(); // initialize toggle switches  
        }

    }
}();

$('.add_shortlist_class').click(function ()
{
    $('#add_shortlist_link').trigger('click');
});

$('#people_search_button').click(function ()
{

    var url = public_url + '/person/ajaxLoadPersonData?iVacancyId=' + $('#vacancy_id').val();
    var query_string_variable_counter = 0;

    if ($(".person_type_radio_button.active").attr('data-value') === 'candidate' || $(".person_type_radio_button.active").attr('data-value') === 'client')
    {
        query_string_variable_counter++;
        url += '&eType=' + $(".person_type_radio_button.active").attr('data-value');
    }

    var iMinimumSalary = $('#range_2').val().split(';')[0];
    var iMaximumSalary = $('#range_2').val().split(';')[1];

    url += '&iMinimumSalary=' + iMinimumSalary;
    url += '&iMaximumSalary=' + iMaximumSalary;

    var status_counter = 0;
    $(".status_type_check_box_class").each(function ()
    {
        if ($(this).is(':checked'))
        {
            url += '&vStatus' + status_counter + '=' + $(this).val();
        }
        else
        {
            url += '&vStatus' + status_counter + '=0';
        }
        status_counter++;
    });

    $(".right_to_work_checkbox_class").each(function ()
    {
        if ($(this).is(':checked'))
        {
            url += '&eRightToWork' + status_counter + '=Yes';
        }
        status_counter++;
    });

    var contact_counter = 0;
    $(".contacts_type_check_box_class").each(function ()
    {
        if ($(this).is(':checked'))
        {
            url += '&iUserId' + contact_counter + '=' + $(this).val();
        }
        else
        {
            url += '&iUserId' + contact_counter + '=0';
        }
        contact_counter++;
    });

    if ($.trim($('#skills_textbox').val()).length !== 0)
    {
        url += '&vKeySkills=' + $.trim($('#skills_textbox').val());
    }

    if ($.trim($('#location_textbox').val()).length !== 0)
    {
        url += '&vPostCode=' + $.trim($('#location_textbox').val());
    }

    loadPersonData(url);

});

function loadPersonData(url)
{
    $.ajax
    ({
        url: url,
        success: function (result)
        {
            $('#person_list_tbody').html(result);

            $('.view_person_details_row_class').click(function ()
            {
                window.location = public_url + '/person/detail/' + $(this).attr('data-person-id');
            });
        }
    });
}

$('#vCountry').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;

    $.ajax
            ({
                url: public_url + '/person/get_states/' + valueSelected,
                success: function (result)
                {
                    $('#vRegionDiv').html(result);

                    if ($().select2) {
                        $('select.select2me').select2({
                            placeholder: "Select",
                            allowClear: true
                        });
                    }
                    if(valueSelected === "222")
                    {
                        $('#vRegion').val(3537).trigger('change');
                    }
                }
            });
});


$('#add_shortlist_link').click(function ()
{
    var person_id_list = $.map($(':checkbox[name=person_id\\[\\]]:checked'), function (n, i) {
        return n.value;
    }).join('_');

    var vacancy_id = $('#vacancy_id').val();

    if (vacancy_id !== 0 && $.trim(person_id_list).length !== 0)
    {
        $.ajax
                ({
                    url: public_url + '/vacancy/add_to_shortlist/' + person_id_list + "/" + vacancy_id,
                    success: function (result)
                    {
                        window.location = public_url + '/vacancy';
                    }
                });
    }
});

