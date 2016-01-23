$(document).ready(function() 
{
    $("#remove_more_key_skill_row").hide();
    $("#add_row_key_skill").hide();

    $(".add_more_key_skill_row").click(function () 
    {        
        var html_string = "<tr id='key_skill_tr'>";          
        html_string += "<td>";
        html_string += "</td>";
        html_string += "<td>";
        html_string += "<input type='text' id='vCoreSkillName' name='vCoreSkillName[]' class='form-control pull-left' placeholder='Add Key Skill'/>";
        html_string += "</td>";
        html_string += "</tr>";
            
        $('#key_skill_add_tr').append(html_string);

        $('#remove_more_key_skill_row').show();
        $("#add_row_key_skill").show();
    });
    
    $("#remove_more_key_skill_row").click(function () 
    {  
        if($('#key_skill_tr').length === 0)
        {
            $("#remove_more_key_skill_row").hide();
            $("#add_row_key_skill").hide();
        }
        else
        {
            $('#key_skill_tr').remove();
        }
        
    });

    $("#remove_more_industries_row").hide();
    $("#add_row_industries").hide();

    $(".add_more_industries_row").click(function () 
    {
        var html_string = "<tr id='industry_tr'>";  
        
        html_string += "<td>";
        html_string += "</td>";
        html_string += "<td>";
        html_string += "<input type='text' name='vIndustryName[]' class='form-control ' placeholder='Add Industry Name'/>";
        html_string += "</td>";
        html_string += "</tr>";
            
        $('#industries_add_tr').append(html_string);

        $("#remove_more_industries_row").show();
        $("#add_row_industries").show();
  
    });

    $("#remove_more_industries_row").click(function () 
    {  
        if($('#industry_tr').length === 0)
        {
            $("#remove_more_industries_row").hide();
            $("#add_row_industries").hide();
        }
        else
        {
            $('#industry_tr').remove();
        }
        
    });
  
    $("#remove_more_sectors_row").hide();
    $("#add_row_sector").hide();
    
    $(".add_more_key_sector_row").click(function () 
    {
        var html_string = "<tr id='sector_tr'>";  
        
        html_string += "<td>";
        html_string += "</td>";
        html_string += "<td>";
        html_string += "<input type='text' name='vSectorName[]' class='form-control pull-left' placeholder='Add Sector Name'/>";
        html_string += "</td>";
        html_string += "</tr>";
            
        $('#sector_add_tr').append(html_string);

        $("#remove_more_sectors_row").show();
        $("#add_row_sector").show();
    });

    $("#remove_more_sectors_row").click(function () 
    {  
        if($('#sector_tr').length === 0)
        {
            $("#remove_more_sectors_row").hide();
            $("#add_row_sector").hide();
        }
        else
        {
            $('#sector_tr').remove();
        }
    });

    $('.edit_key_skill_row').click(function ()
    {
        $('.display_key_skill_data[key_skill-id="' + $(this).attr('key_skill-id') + '"]').hide();
        $('.edit_key_skill_control[key_skill-id="' + $(this).attr('key_skill-id') + '"]').show();
        $('.edit_key_skill_control[key_skill-id="' + $(this).attr('key_skill-id') + '"]').removeClass("hide");
    });

//Start : Update and Delete Record : Key Skill Table //
    $('.save_key_skill_changes').click(function ()
    {
        var key_skill_name = $('#vCoreSkillName[key_skill-id="'+$(this).attr('key_skill-id')+'"]').val();
        var key_skill_id = $(this).attr('key_skill-id');
        
        var url = public_url + '/cms/update_key_skill/1';
        var data = 'key_skill_name='+key_skill_name+'&key_skill_id='+key_skill_id;

        $('.key_skill_spinner_span').removeClass("hide");
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            { 
                console.log(data);
                $('#display_key_skill'+key_skill_id).html(key_skill_name);                
                $('.key_skill_spinner_span').hide();
                $('.display_key_skill_data[key_skill-id="' + key_skill_id + '"]').show();
                $('.edit_key_skill_control[key_skill-id="' + key_skill_id + '"]').hide();                
            }
        });
    });
    
    $('.cancel_key_skill_row').click(function ()
    {
        $('.display_key_skill_data[key_skill-id="' + $(this).attr('key_skill-id') + '"]').show();
        $('.edit_key_skill_control[key_skill-id="' + $(this).attr('key_skill-id') + '"]').hide();
    });
    
    $('.delete_key_skill_row').click(function ()
    {
        var confirm = window.confirm("Do you really want to delete this Key Skill ?");

        var key_skill_id = $(this).attr('key_skill-id');

        if(confirm)
        {
            var url = public_url + '/cms/delete_key_skill';
            url += '/'+key_skill_id;
            
            var data = "";
            
            $.ajax
            ({
                type: "GET",
                url: url,
                data: data,                
                success: function (data)
                {
                    console.log(data);
                    window.location = public_url + '/cms';
                }
            });
        }
    });
//End : Update and Delete Record : Key Skill Table //

//Start : Update and Delete Record : Industry Table //
    $('.edit_industry_row').click(function ()
    {
        $('.display_industry_data[industry-id="' + $(this).attr('industry-id') + '"]').hide();
        $('.edit_industry_control[industry-id="' + $(this).attr('industry-id') + '"]').show();
        $('.edit_industry_control[industry-id="' + $(this).attr('industry-id') + '"]').removeClass("hide");
    });

    $('.save_industry_changes').click(function ()
    {
        var industry_name = $('#vIndustryName[industry-id="'+$(this).attr('industry-id')+'"]').val();
        var industry_id = $(this).attr('industry-id');
        
        var url = public_url + '/cms/update_industry/1';
        var data = 'industry_name='+industry_name+'&industry_id='+industry_id;

        $('.industry_spinner_span').removeClass("hide");
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            { 
                console.log(data);
                $('#display_industry'+industry_id).html(industry_name);                
                $('.industry_spinner_span').hide();
                $('.display_industry_data[industry-id="' + industry_id + '"]').show();
                $('.edit_industry_control[industry-id="' + industry_id + '"]').hide();                
            }
        });
    });
    
    $('.cancel_industry_row').click(function ()
    {
        $('.display_industry_data[industry-id="' + $(this).attr('industry-id') + '"]').show();
        $('.edit_industry_control[industry-id="' + $(this).attr('industry-id') + '"]').hide();
    });
    
    $('.delete_industry_row').click(function ()
    {
        var confirm = window.confirm("Do you really want to delete this Industry Name ?");

        var industry_id = $(this).attr('industry-id');

        if(confirm)
        {
            var url = public_url + '/cms/delete_industry';
            url += '/'+industry_id;
            
            var data = "";
            
            $.ajax
            ({
                type: "GET",
                url: url,
                data: data,                
                success: function (data)
                {
                    console.log(data);
                    window.location = public_url + '/cms';
                }
            });
        }
    });
//End : Update and Delete Record : Industry Table //

//Start : Update and Delete Record : Sector Table //
    $('.edit_sector_row').click(function ()
    {
        $('.display_sector_data[sector-id="' + $(this).attr('sector-id') + '"]').hide();
        $('.edit_sector_control[sector-id="' + $(this).attr('sector-id') + '"]').show();
        $('.edit_sector_control[sector-id="' + $(this).attr('sector-id') + '"]').removeClass("hide");
    });

    $('.save_sector_changes').click(function ()
    {
        var sector_name = $('#vSectorName[sector-id="'+$(this).attr('sector-id')+'"]').val();
        var sector_id = $(this).attr('sector-id');
        
        var url = public_url + '/cms/update_sector/1';
        var data = 'sector_name='+sector_name+'&sector_id='+sector_id;

        $('.sector_spinner_span').removeClass("hide");
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            { 
                console.log(data);
                $('#display_sector'+sector_id).html(sector_name);                
                $('.sector_spinner_span').hide();
                $('.display_sector_data[sector-id="' + sector_id + '"]').show();
                $('.edit_sector_control[sector-id="' + sector_id + '"]').hide();                
            }
        });
    });
    
    $('.cancel_sector_row').click(function ()
    {
        $('.display_sector_data[sector-id="' + $(this).attr('sector-id') + '"]').show();
        $('.edit_sector_control[sector-id="' + $(this).attr('sector-id') + '"]').hide();
    });

   
    $('.delete_sector_row').click(function ()
    {
        var confirm = window.confirm("Do you really want to delete this Sector Name ?");

        var sector_id = $(this).attr('sector-id');

        if(confirm)
        {
            var url = public_url + '/cms/delete_sector';
            url += '/'+sector_id;
            
            var data = "";
            
            $.ajax
            ({
                type: "GET",
                url: url,
                data: data,                
                success: function (data)
                {
                    console.log(data);
                    window.location = public_url + '/cms';
                }
            });
        }
    });
//End : Update and Delete Record : Sector Table //
});