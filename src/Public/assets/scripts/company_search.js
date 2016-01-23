var url = public_url + '/company/ajaxLoadCompanyData?iCompanyId=' + $('#company_id').val();
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
}();


function loadCompanyData(url)
{
    $.ajax
    ({
        url: url, 
        success: function(result)
        {
            $('#company_list_tbody').html(result);
            $('.view_company_details_row_class').click(function ()
            {
                window.location = public_url + '/company/company_detail/' + $(this).attr('data-company-id');
            });
        }
    });
}

$('#vCountry').on('change',function(e){
   
    var optionSelected = $("option:selected",this);
    var valueSelected = this.value;
    
    $.ajax
    ({
        url: public_url + '/company/get_states/' + valueSelected,
        success: function(result)
        {
            $('#vRegionDiv').html(result);
            
            if ($().select2){
                $('select.select2me').select2({
                    placeholder:"Select",
                    allowClear:true
                });
            }
            if(valueSelected === "222"){
                $('#vRegion').val(3537).trigger('change');
            }
        }
    });    
});
$('#company_search_button').click(function ()
{
    var url = public_url + '/company/ajaxLoadCompanyData?iCompanyId=' + $('#company_id').val();

    if ($.trim($('#postcode').val()).length !== 0)
    {
        url += '&vPostcode=' + $.trim($('#postcode').val());
        console.log( url += '&vPostcode=' + $.trim($('#postcode').val()))
    }

    if($('.select_sector').val() != "select" )
    {
         url += '&vSector=' + $('.select_sector').val();
    }

    var active_vacancies_count = 0;
    $(".active_vacancies_checkbox").each(function ()
    {
        if ($(this).is(':checked'))
        {
            url += '&vVacancyStatus' + active_vacancies_count + '=' + $(this).val();
        }
        else
        {
            url += '&vVacancyStatus' + active_vacancies_count + '=0';
        }
        active_vacancies_count++;
    });

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

