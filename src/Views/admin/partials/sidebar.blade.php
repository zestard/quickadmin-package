<!--BEGIN SIDEBAR -->

<div class="page-sidebar-wrapper">
  <div class="page-sidebar navbar-collapse collapse"> 
    <!-- BEGIN SIDEBAR MENU --> 
    <!-- DOC: for circle icon style menu apply page-sidebar-menu-circle-icons class right after sidebar-toggler-wrapper -->

        <ul class="page-sidebar-menu">
      <li class="sidebar-toggler-wrapper"> 
        <!-- BEGIN SIDEBAR TOGGLER BUTTON --> 
        <!-- Small modal -->
        
        <button type="button" class="sidebar-toggler navbarleftbt"> </button>
        
        <!--                <div class="sidebar-toggler"></div>-->
        <div class="clearfix"></div>
        <!-- BEGIN SIDEBAR TOGGLER BUTTON --> 
      </li>
      <li class="sidebar-search-wrapper">
        <form class="search-form" role="form" action="index.html" method="get">
          <div class="input-icon right"> <i class="icon-magnifier"></i>
            <input type="text" class="form-control" name="query" placeholder="Search...">
          </div>
        </form>
      </li>
      <li class="start"> <a href="<?php echo url('/home'); ?>"> <i class="icon-home"></i> <span class="title">Dashboard</span> <span class="selected"></span> </a> </li>
      <li > <a href="<?php echo url('/calendar'); ?>"> <i class="icon-calendar"></i> <span class="title">Calendar</span> </a> </li>
      <li > <a href=""> <i class="fa fa-comment-o"></i> <span class="title">Message</span> <span class="arrow "></span> </a>
        <ul class="sub-menu">
          <li> <a href="<?php echo url('/message'); ?>"> Messages</a> </li>
        </ul>
      </li>
      <li > <a href=""> <i class="icon-users"></i> <span class="title">People</span> <span class="arrow "></span> </a>
        <ul class="sub-menu">
          <li> <a href="<?php echo url('/person'); ?>"> All</a> </li>
          <li> <a href="#"> Temporary Candidates</a> </li>
          <li> <a href="#"> Permanent Candidates</a> </li>
          <li> <a href="#"> High Value Candidates</a> </li>
          <li> <a href="#"> New Applicants</a> </li>
          <li> <a href="#"> Client Contacts</a> </li>
        </ul>
      </li>
      <li> <a href=""> <i class="icon-briefcase"></i> <span class="title">Companies</span> <span class="arrow "></span> </a>
        <ul class="sub-menu">
          <li> <a href="<?php echo url('/company'); ?>"> List Of Companies</a> </li>
          <li> <a href="<?php echo url('/company/add_company'); ?>"> Add Company</a> </li>
        </ul>
      </li>
      <li > <a href="#"> <i class="icon-user"></i> <span class="title">Vacancy</span> <span class="arrow "></span> </a>
        <ul class="sub-menu">
          <li> <a href="<?php echo url('/vacancy'); ?>"> List of Vacancies </a> </li>
          <li> <a href="<?php echo url('/vacancy/add_vacancy'); ?>"> Add Vacancy</a> </li>
          <li> <a href="#"> Temp Vacancies</a> </li>
          <li> <a href="#"> Perm Vacancies</a> </li>
        </ul>
      </li>
      <li > <a href="#"> <i class="icon-clock"></i> <span class="title">Timesheets</span> <span class="arrow "></span> </a>
        <ul class="sub-menu">
          <li> <a href="<?php echo url('/timesheet/add_timesheet_detail'); ?>"> Add TimeSheet </a> <a href="<?php echo url('/timesheet/timesheet_image_process'); ?>"> TimeSheet Image Process </a> </li>
        </ul>
      </li>
      <li @if(Request::path() == 'users' || Request::path() == 'users/create') class="active open" @endif>
        <a href="#"> <i class="icon-users"></i> <span class="title">User</span> <span class="arrow open"></span> </a>
        <ul class="sub-menu">
          <li> <a href="{{ url('users') }}"> List of User </a> </li>
          <li> <a href="{{ url('users/create') }}"> Add User </a> </li>
        </ul>
      </li>

      <li @if(Request::path() == 'roles' || Request::path() == 'roles/create') class="active open" @endif>
        <a href="#"> <i class="fa fa-users"></i> <span class="title">Role</span> <span class="arrow open"></span> </a>
        <ul class="sub-menu">
          <li> <a href="{{ url('roles') }}"> List of Roles </a> </li>
          <li> <a href="{{ url('roles/create') }}"> Add Role </a> </li>
        </ul>
      </li>
      <li > <a href="#"> <i class="icon-graph"></i> <span class="title">Accounting</span> </a> </li>
      <li > <a href="#"> <i class="icon-wrench"></i> <span class="title">Tools</span> <span class="arrow "></span> </a>
        <ul class="sub-menu">
          <li> <a href="<?php echo url('/tools/highlighter'); ?>"> Highlighter</a> </li>
          <li> <a href="<?php echo url('/tools/parsing_response'); ?>"> Parsing Response</a> </li>
          <li>
          </ul>
        </li>
        <li > <a href="#"> <i class="icon-bar-chart"></i> <span class="title">Reports</span> <span class="arrow "></span> </a>
          <ul class="sub-menu">
            <li> <a href="<?php echo url('/reports/crm_report'); ?>"> CRM Report</a> </li>
            <li> <a href="<?php echo url('/reports/analytics'); ?>"> Analytics</a> </li>
            <li>
            </ul>
          </li>
          <!-- <li>
            <a href="<?php echo url('/cms'); ?>">
                <i class="icon-list"></i>
                <span class="title">CMS</span>
                <span class="arrow "></span>
            </a>
          </li> -->
          <li> <a href="#"> <i class="icon-pin"></i> <span class="title">Saved Searches</span> </a> </li>
          <li> <a href="#"> <i class="icon-wrench"></i> <span class="title">Settings</span> <span class="arrow "></span> </a>
            <ul class="sub-menu">
              <li> <a href="<?php echo url('/system_settings/index'); ?>"> System Settings </a> </li>
            </ul>
          </li>
          <li class="last"> <a href="#"> <i class="glyphicon glyphicon-bell"></i> <span class="title">PopUp</span> <span class="arrow "></span> </a>
            <ul class="sub-menu">
              <li> <a href="#" data-toggle="modal" data-target=".bs-example-modal-sm">Alert 1 </a> </li>
              <li> <a href="#" data-toggle="modal" data-target=".alert2">Alert 2 </a> </li>
            </ul>
          </li>
<!--          <li > <a href="#"> <i class="icon-bar-chart"></i> <span class="title">Data Parsing</span> <span class="arrow "></span> </a>
          <ul class="sub-menu">
            <li> <a href="<?php echo url('/parsing/pdf_parsing'); ?>">Pdf Parsing</a> </li>
            <li> <a href="<?php echo url('/parsing/image_parsing'); ?>">Image Parsing</a> </li>
            <li>
            </ul>
          </li>-->
        </ul>



    <!-- END SIDEBAR MENU --> 
  </div>
</div>
<div class="popupmain">
  <div  id="modal" class="modal fade bs-example-modal-sm" data-backdrop="false"  tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button aria-label="Close" data-dismiss="modal" class="closeicon" type="button"><span aria-hidden="true"></span></button>
          <h2 id="myModalLabel" style="align:center;">Navigation Icon</h2>
          <div class="popuplike_main">
            <p>Click this icon to open and close the Navigation.</p>
            <button type="button" class="popupbt"><i class="fa fa-thumbs-o-up"></i></button>
          </div>
          <div class="popuplike_main martop50">
            <button id="fa-step-backward" type="button" class="nextbt_popup"><i class="fa fa-step-backward"></i></button>
            <button id="fa-pause" type="button" class="nextbt_popup"><i class="fa fa-pause"></i></button>
            <button id="fa-step-forward" type="button" class="nextbt_popup"><i class="fa fa-step-forward"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="addnewalrt">
  <div class="modal fade bs-example-modal-lg alert2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="alertmaindiv">
            <div class="alert-icon"></div>
            <strong>! ALERT</strong> <span>MESSAGE TITLE</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula eu neque id placerat. Quisque lacinia massa sem, et fermentum lacus feugiat ac.</p>
            <div class="alrtpopup_button">
              <button type="button" class="alrt_button"> Button1</button>
              <button type="button" class="alrt_button"> Button2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- END SIDEBAR--> 
<script type="text/javascript">
  $(document).ready(function(){
    $('.sidebar-toggler').on('click',function(event){
      event.preventDefault();
      if($('body').hasClass('page-sidebar-hover-on'))
      {
        $('body').removeClass('page-sidebar-hover-on');
        $('body').addClass('page-sidebar-closed');
        $('body').css('padding-right','15px');
        $('.page-sidebar').css('width','40px');  
      }
      else if($('body').hasClass('page-sidebar-closed'))
      {
        $('body').removeClass('page-sidebar-closed modal-open');
        $('body').removeClass('page-sidebar-hover-on'); 
        $('body').css('padding-right','0px');
        $('.page-sidebar').css('width','215px');
      }
      else
      {
        $('body').removeClass('page-sidebar-hover-on');
        $('body').addClass('page-sidebar-closed');
        $('body').css('padding-right','15px');
        $('.page-sidebar').css('width','40px');
      }          
    });
    $('#fa-step-forward').on('click',function(){
      $('body').removeClass('page-sidebar-closed modal-open');
      $('body').removeClass('page-sidebar-hover-on');            
      $('body').css('padding-right','0px');
      $('.page-sidebar').css('width','215px');      
      $('#modal').modal('toggle');
    });
    $('#fa-step-backward').on('click',function(){
      $('body').removeClass('page-sidebar-hover-on');
      $('body').addClass('page-sidebar-closed modal-open');
      $('body').css('padding-right','15px');
      $('.page-sidebar').css('width','40px');            
      $('#modal').modal('toggle');
    });
    $('#fa-pause').on('click',function(){
      $('body').removeClass('page-sidebar-closed modal-open');
      $('body').removeClass('page-sidebar-hover-on');            
      $('body').css('padding-right','0px');
      $('.page-sidebar').css('width','215px');      
      $('#modal').modal('toggle');
    });
  });
</script>