<!-- BEGIN ACTION PANEL -->
<div class="page-sidebar-wrapper-actions">
    <div class="page-sidebar-actions navbar-collapse collapse">
        <!-- BEGIN ACTION PANEL MENU -->
        <ul class="page-sidebar-menu-actions">
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
</div>
<!-- END ACTION PANEL -->
<!-- BEGIN FOOTER -->
<div class="footer">
	<div class="footer-inner">
		 &copy; Rubicon Recruitment Group 2015 | ProRecruit v1.0.1 (June 2015)
	</div>
	<div class="footer-tools">
		<span class="go-top">
		<i class="fa fa-angle-up"></i>
		</span>
	</div>
</div>
<!-- END FOOTER -->

@include('admin.dashboard.page_js')
<script>
    $(document).ready(function ()
    {
        $('#action-panel-toggle').click();
        var pathname = window.location.pathname;
        var regEx = /calendar/;
        
        if ($(window).width() < 960 || regEx.test(pathname)) 
        {
            //$('.sidebar-toggler').click();
        }
        
	regEx = /home/;
        
        if(regEx.test(pathname))
        {
            $('#action-panel-toggle').click();
        }
        
        $('.action_panel_delete_icon').click(function ()
        {
            $('.error_div').html("");
            $('.error_div').hide();
            if($('.list_check_box:checked').length > 0)
            {
                $('[type=submit]').trigger("click");
            }
            else
            {
                $('.error_div').removeClass("hide");
                $('.error_div').show();
                $('.error_div').html("Please select atleast one record");
            }
        });
        
        $('.add_shortlist_class').click(function ()
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
    });
</script>


</body>
<!-- END BODY -->
</html>