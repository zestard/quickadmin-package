$(document).ready(function () {
    // initiate layout and plugins
    App.init();
    var url = public_url + '/message/received_messages_list';
    var data = "";
    $.ajax
    ({
        type: "GET",
        url: url,
        data: data,
        success: function (data)
        {
            $('.email-list').html(data);
        }
    });
    
    $('.search_message_text_box').keyup(function ()
    {
        var query = $.trim($(this).val()).toLowerCase();
        console.log("Value : " + query);
        $('div.email-list-item').each(function()
        {
            var $this = $(this);
            if($this.text().toLowerCase().indexOf(query) === -1)
            {
                $this.closest('div.email-list-item').fadeOut();
            }
            else 
            {
                $this.closest('div.email-list-item').fadeIn();
            }
        });
    });
    
    
    
    $('.compose-mail-button').click(function ()
    {
        var url = public_url + '/message/compose_message';
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $('.mail-body').html(data);
                $('.mail-body').css('display','block');
            }
        });
    });
    
    $('#show_list_of_sent_messages').click(function ()
    {
        var url = public_url + '/message/sent_messages_list';
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $('.email-list').html(data);
            }
        });
    });
    
    $('#show_list_of_received_messages').click(function ()
    {
        var url = public_url + '/message/received_messages_list';
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                
                $('.email-list').html(data);
            }
        });
    });

    $('#show_list_of_draft_messages').click(function ()
    {
        var url = public_url + '/message/draft_message_list';
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $('.email-list').html(data);
            }
        });
    });

    $('#show_list_of_spam_messages').click(function ()
    {
        var url = public_url + '/message/spam_message_list';
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $('.email-list').html(data);
            }
        });
    });

     $('#show_list_of_starred_messages').click(function ()
    {
        var url = public_url + '/message/starred_message_list';
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $('.email-list').html(data);
            }
        });
    });
});