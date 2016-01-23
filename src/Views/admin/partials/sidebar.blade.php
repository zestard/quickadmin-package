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
        @if(Auth::user()->role_id == config('quickadmin.defaultRole'))
            <li @if(Request::path() == config('quickadmin.route').'/menu') class="active" @endif>
                <a href="{{ url(config('quickadmin.route').'/menu') }}">
                    <i class="fa fa-list"></i>
                    <span class="title">Menu</span>
                </a>
            </li>
            <li @if(Request::path() == 'users') class="active" @endif>
                <a href="{{ url('users') }}">
                    <i class="fa fa-users"></i>
                    <span class="title">Users</span>
                </a>
            </li>
            <li @if(Request::path() == 'roles') class="active" @endif>
                <a href="{{ url('roles') }}">
                    <i class="fa fa-users"></i>
                    <span class="title">Roles</span>
                </a>
            </li>
            <li @if(Request::path() == config('quickadmin.route').'/actions') class="active" @endif>
                <a href="{{ url(config('quickadmin.route').'/actions') }}">
                    <i class="fa fa-users"></i>
                    <span class="title">User actions</span>
                </a>
            </li>
        @endif
        @foreach($menus as $menu)
            @if($menu->menu_type != 2 && is_null($menu->parent_id))
                @if(in_array(Auth::user()->role_id, explode(',',$menu->roles)))
                    <li @if(isset(explode('/',Request::path())[1]) && explode('/',Request::path())[1] == strtolower($menu->name)) class="active" @endif>
                        <a href="{{ route(config('quickadmin.route').'.'.strtolower($menu->name).'.index') }}">
                            <i class="fa {{ $menu->icon }}"></i>
                            <span class="title">{{ $menu->title }}</span>
                        </a>
                    </li>
                @endif
            @else
                @if(in_array(Auth::user()->role_id, explode(',',$menu->roles)) && !is_null($menu->children()->first()) && is_null($menu->parent_id))
                    <li>
                        <a href="#">
                            <i class="fa {{ $menu->icon }}"></i>
                            <span class="title">{{ $menu->title }}</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            @foreach($menu['children'] as $child)
                                @if(in_array(Auth::user()->role_id, explode(',',$child->roles)))
                                    <li
                                            @if(isset(explode('/',Request::path())[1]) && explode('/',Request::path())[1] == strtolower($child->name)) class="active active-sub" @endif>
                                        <a href="{{ route(config('quickadmin.route').'.'.strtolower($child->name).'.index') }}">
                                            <i class="fa {{ $child->icon }}"></i>
                                    <span class="title">
                                        {{ $child->title  }}
                                    </span>
                                        </a>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </li>
                @endif
            @endif
        @endforeach
        <li>
            <a href="{{ url('logout') }}">
                <i class="fa fa-sign-out fa-fw"></i>
                <span class="title">Logout</span>
            </a>
        </li>
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
      if($('body').hasClass('page-sidebar-hover-on')){
          $('body').removeClass('page-sidebar-hover-on');
          $('body').addClass('page-sidebar-closed');
          $('body').css('padding-right','15px');
          $('.page-sidebar').css('width','40px');  
      }
      else if($('body').hasClass('page-sidebar-closed')){
          $('body').removeClass('page-sidebar-closed modal-open');
          $('body').removeClass('page-sidebar-hover-on'); 
          $('body').css('padding-right','0px');
          $('.page-sidebar').css('width','215px');
      }
      else {
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