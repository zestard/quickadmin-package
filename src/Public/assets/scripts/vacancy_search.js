var url = public_url + '/vacancy/ajaxLoadVacancyData?iVacancyId=' + $('#vacancy_id').val();
loadCompanyData(url);
    
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
}


function loadCompanyData(url)
{
    $.ajax
    ({
        url: url, 
        success: function(result)
        {
            $('#vacancy_list_tbody').html(result);
            $('.view_vacancy_details_row_class').click(function ()
            {
                window.location = public_url + '/vacancy/vacancy_detail/' + $(this).attr('data-vacancy-id');
            });
        }
    });
}


$('#vCountry').on('change', function (e) {
    var optionSelected = $("option:selected",this);
    var valueSelected = this.value;
    
    $.ajax
    ({
        url: public_url + '/vacancy/get_states/' + valueSelected, 
        success: function(result)
        {
            $('#vRegionDiv').html(result);
            
            if ($().select2) {
                $('select.select2me').select2({
                    placeholder: "Select",
                    allowClear: true
                });
            }
            if(valueSelected === "222"){
                $('#vRegion').val(3537).trigger('change');
            }
        }
    });
});

$('#vacancy_search_button').click(function ()
{

    var url = public_url + '/vacancy/ajaxLoadVacancyData?iVacancyId=' + $('#vacancy_id').val();
    var query_string_variable_counter = 0;

    if ($(".vacancy_type_radio_button.active").attr('data-value') === 'Temporary' || $(".vacancy_type_radio_button.active").attr('data-value') === 'Permanent')
    {
        query_string_variable_counter++;
        url += '&vType=' + $(".vacancy_type_radio_button.active").attr('data-value');
    }

    var iSalary  = $('#range_2').val().split(';')[0];
    var iHourlyRate = $('#range_2').val().split(';')[1];

    url += '&iSalary=' + iSalary;
    url += '&iHourlyRate=' + iHourlyRate;

    var status_counter = 0;
    $(".status_type_check_box_class").each(function ()
    {
        if ($(this).is(':checked'))
        {
            url += '&vVacancyStatus' + status_counter + '=' + $(this).val();
        }
        else
        {
            url += '&vVacancyStatus' + status_counter + '=0';
        }
        status_counter++;
    });

    var full_part_time_variable_count = 0;
    $(".full_part_time_check_box_class").each(function ()
    {
        if ($(this).is(':checked'))
        {
            url += '&vJobType' + full_part_time_variable_count + '=' + $(this).val();
        }
        else
        {
            url += '&vJobType' + full_part_time_variable_count + '=0';
        }
        full_part_time_variable_count++;
    });

    if ($.trim($('#skills_textbox').val()).length !== 0)
    {
        url += '&vCoreSkills=' + $.trim($('#skills_textbox').val());
    }

    if ($.trim($('#location_textbox').val()) !== 0)
    {
        url += '&vPostcode=' + $.trim($('#location_textbox').val());
    }
    
    if($('.select_descipline').val() != "select" )
    {
         url += '&vDiscipline=' + $('.select_descipline').val();
    }

    if($('.select_industry').val() != "select" )
    {
         url += '&vIndustry=' + $('.select_industry').val();
    }            
    loadCompanyData(url);
});

$('#search').keyup(function()
    {
        searchTable($(this).val());
    });

    
function searchTable(inputVal)
{
    var table = $('#sample_1');
    table.find('tr').each(function(index, row)
    {
        var allCells = $(row).find('td');
        if(allCells.length > 0)
        {
            var found = false;
            allCells.each(function(index, td)
            {
                var regExp = new RegExp(inputVal, 'i');
                if(regExp.test($(td).text()))
                {
                    found = true;
                    return false;
                }
            });
            if(found == true)$(row).show();else $(row).hide();
        }
    });
}
    loadCompanyData(url);


