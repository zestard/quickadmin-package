$(document).ready(function(){

 $('#next_profile_tab').click(function(){
          
        $("#profile-tab1").attr('data-toggle', 'tab');
        $("#profile-tab1").attr('href', '#umbrella');
        $("#profile-tab1").click();

    });
});