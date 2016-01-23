<!-- BEGIN HEADER -->
<div class="header navbar navbar-fixed-top">
    <!-- BEGIN TOP NAVIGATION BAR -->
    <div class="header-inner">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
            <a href="<?php echo url('/admin'); ?>">
                <img src="{{ URL::asset('assets/img/logo.png') }}" alt="logo"/>
            </a>
        </div>
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <img src="{{ URL::asset('assets/img/menu-toggler.png') }}" alt=""/>
        </a>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN TOP NAVIGATION MENU -->
        <ul class="nav navbar-nav pull-right">
            <li id="header-search">
                <form class="search-form search-form-header" role="form" action="index.html">
                    <div class="input-icon right">
                        <i class="icon-magnifier"></i>
                        <input type="text" class="form-control input-sm" name="query" placeholder="Search...">
                    </div>
                </form>
            </li>


            <!-- BEGIN TODO DROPDOWN -->
            <li class="dropdown" id="header_task_bar">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <i class="icon-plus"></i>
                </a>
                <ul class="dropdown-menu extended tasks">

                    <li>
                        <a href="<?php echo url('/company/add_company'); ?>">
                            <span class="label label-icon">
                                <i class="icon-briefcase"></i>
                            </span>
                            COMPANY
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo url('/vacancy/add_vacancy'); ?>">
                            <span class="label label-icon">
                                <i class="icon-pin"></i>
                            </span>
                            VACANCY
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo url('/user/add_user_detail'); ?>">
                            <span class="label label-icon">
                                <i class="icon-volume-2"></i>
                            </span>
                            CONTACT ATTEMPT
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo url('/calendar'); ?>">
                            <span class="label label-icon">
                                <i class="icon-calendar"></i>
                            </span>
                            CALENDAR ENTRY
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo url('/message'); ?>">
                            <span class="label label-icon">
                                <i class="icon-envelope-letter"></i>
                            </span>
                            MESSAGE
                        </a>
                    </li>

                </ul>
            </li>
            <!-- END TODO DROPDOWN -->
            <!-- BEGIN NOTIFICATION DROPDOWN -->

            <li class="dropdown" id="header_notification_bar">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <i class="icon-bell"></i>
                    <span class="badge"> 1 </span>
                </a>
                <ul class="dropdown-menu extended notification">
                    <li>
                        <p>You have no new notifications</p>
                    </li>
                    <li class="external new_user_ragistration">
                        <a>See all notifications <i class="fa fa-angle-right"></i></a>
                    </li>
                </ul>
            </li>
            <!-- END NOTIFICATION DROPDOWN -->
            <li class="devider">
                &nbsp;
            </li>
            <!-- BEGIN USER LOGIN DROPDOWN -->
            <li class="dropdown user">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  
                   @if (isset($get_current_user_img->vImage) && $get_current_user_img->vImage != '')
                    <img  style="height:30px; width:30px;" src="{{ URL::asset('assets/img/profile/user/'.$get_current_user_img->vImage) }}" />
                    @else
                     <img  style="height:30px; width:30px;" src="{{ URL::asset('assets/img/userimg.jpg') }}" />
                    @endif
                    
                   
                    <span class="username username-hide-on-mobile">
                        <?php 
                            if(isset($first_name))
                            {   
                                echo $first_name.' '.$last_name;
                            }
                        ?>
                    </span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#"><i class="icon-list"></i> My Tasks <span class="badge badge-danger">
                                7 </span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-envelope"></i> My Inbox <span class="badge badge-info">
                                3 </span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-question"></i> Help</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-settings"></i> Settings</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-lock"></i> Lock Screen</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-calendar"></i> My Calendar</a>
                    </li>
                    <!--<li class="divider"></li>-->
                    <li>
                        <a href="{{ url('logout') }}"><i class="icon-key"></i> Log Out</a>
                    </li>
                </ul>
            </li>
            <!-- END USER LOGIN DROPDOWN -->
            <!-- ACTION PANEL TOGGLE -->
            <li href="" id="action-panel-toggle">
                |
            </li>
            <!-- END ACTION PANEL TOGGLE -->
        </ul>
        <!-- END TOP NAVIGATION MENU -->

    </div>
    <!-- END TOP NAVIGATION BAR -->
</div>
<!-- END HEADER -->
<div class="clearfix">
</div>
<script>
$(document).ready(function () 
{
    $('.email_list').click(function ()
    {
        var url = public_url + '/message/view_message_detail/' + $(this).attr('data-message-id');
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $('.mail-body').html(data);
                //$(location).attr('href',url);
                window.location.replace(public_url + '/message');
            }
           
        });
    });

    $('.new_user_ragistration').click(function ()
    {
        var url = public_url + '/user'
        var data = "";
        $.ajax
        ({
            type: "GET",
            url: url,
            data: data,
            success: function (data)
            {
                $(location).attr('href',url);
                //window.location.replace(public_url + '/message');
            }
           
        });
    });

});
</script>

<!--BEGIN CONTAINER -->
<div class = "page-container">
