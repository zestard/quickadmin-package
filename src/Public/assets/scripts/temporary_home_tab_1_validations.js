$(document).ready(function(){

	$('#next_home_tab').click(function(){
          
        $("#profile-tab").attr('data-toggle', 'tab');
        $("#profile-tab").attr('href', '#profile');
        $("#profile-tab").click();

    });

   
});