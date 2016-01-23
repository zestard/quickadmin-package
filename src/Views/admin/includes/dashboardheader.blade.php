    <!DOCTYPE html>
    <!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
    <!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
    <!--[if !IE]><!-->
    <html lang="en" class="no-js">
        <!--<![endif]-->
        <!-- BEGIN HEAD -->
        <head>
            <meta charset="utf-8"/>
            <title>Dashboard | Rubicon ERP System</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="" name="description"/>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
            <meta content="" name="author"/>
            <meta name="MobileOptimized" content="320">
            
            @include('includes.common_css')
            @include('includes.common_js')
            <script>
                var public_url = "<?php echo url(''); ?>";  
                //$('.sidebar-toggler').click();                
            </script>
        </head>
        <!-- END HEAD -->
        <!-- BEGIN BODY -->
        <!-- <body class="page-header-fixed page-sidebar-closed page-actions-none"> -->
        <body class="page-header-fixed page-sidebar-fixed page-actions-none">
            <!-- BEGIN HEADER -->
            <div class="header navbar navbar-fixed-top">
                <!-- BEGIN TOP NAVIGATION BAR -->
                <div class="header-inner">
                    <!-- BEGIN LOGO -->
                    <div class="page-logo">
                        <a href="<?php echo url('/auth/login'); ?>">
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
                                @if(count($user_notifications) > 0)
                                <span class="badge">
                                    1 </span>
                                @else
                                   
                                @endif
                            </a>
                            <ul class="dropdown-menu extended notification">
                                
                                <li>
                                     @if(count($user_notifications) > 0)
                                    <p>
                                        You have 1 new notifications
                                    </p>
                                    @else
                                    <p>
                                        You have no new notifications
                                    </p>
                                    @endif
                                </li>
                                <li>
                                    <ul class="dropdown-menu-list scroller" style="height: 150px;">
                                        <li class="new_user_ragistration">
                                           @if(count($user_notifications) > 0)
                                            <a>
                                                <span class="label label-sm label-icon label-info">
                                                    <i class="icon-user"></i>
                                                </span>
                                                {{count($user_notifications)}}&nbsp; New user registered. 
                                                <!-- <span class="time">
                                                    Just now </span> -->
                                            </a>
                                           @endif 
                                        </li>
                                
                                       <!--  <li>
                                            <a href="#">
                                                <span class="label label-sm label-icon label-danger">
                                                    <i class="fa fa-bolt"></i>
                                                </span>
                                                Server maintenance sc...<span class="time">
                                                    15 mins </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="label label-sm label-icon label-warning">
                                                    <i class="fa fa-bell-o"></i>
                                                </span>
                                                Meeting today at 14:00 <span class="time">
                                                    22 mins </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="label label-sm label-icon label-success">
                                                    <i class="icon-check"></i>
                                                </span>
                                                New Match Found <span class="time">
                                                    40 mins </span>
                                            </a>
                                        </li>
 -->
                                    </ul>
                                </li>
                                <li class="external new_user_ragistration">
                                     @if(count($user_notifications) > 0)
                                    <a>See all notifications <i class="fa fa-angle-right"></i></a>
                                    @endif
                                </li>
                            </ul>
                        </li>
                        <!-- END NOTIFICATION DROPDOWN -->
                        <!-- BEGIN INBOX DROPDOWN -->
                        <li class="dropdown" id="header_inbox_bar">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <i class="icon-bubbles"></i>
                                @if((count($message)>0))
                                <span class="badge">
                                    {{ count($message) }}  </span>
                                @endif
                            </a>
                            <ul class="dropdown-menu extended inbox">
                                <li>
                                    <p>
                                        You have {{ count($message) }} new messages
                                    </p>
                                </li>
                                <li>
                                    <ul class="dropdown-menu-list scroller" style="height: 150px;">
                                        @forelse ($message as $message)
                                        <li >
                                            <a href="#" class="email_list" data-message-id="{{ $message->iMessageId }}">
                                                 <span class="photo">
                                                    @if (isset($message->person_image) && $message->person_image != '')
                                                    <img src="{{ URL::asset('assets/img/profile/person/'.$message->person_image) }}" alt="sprout">
                                                     @elseif (isset($message->company_image) && $message->company_image != '')
                                                    <img src="{{ URL::asset('assets/img/profile/company/'.$message->company_image) }}" alt="sprout">
                                                     @elseif(isset($message->vImage) && $message->vImage != '')
                                                    <img src="{{ URL::asset('assets/img/profile/user/'.$message->vImage) }}" height="50px" width="50px">
                                                    @else
                                                    <img src="{{ URL::asset('assets/img/userimg.jpg') }}" height="50px" width="50px">
                                                     @endif
                                                </span>
                                                <span class="subject">
                                                    <span class="from">
                                                        {{ $message->vFirstName }}
                                                        {{ $message->vLastName }}
                                                         </span>
                                                        
                                                    <span class="time">
                                                        {{ $message->dCreatedAt }} </span>
                                                </span>
                                                <span class="message">
                                                {!! str_limit($message->tMessage, $limit = 15, $end = '...') !!}
                                                </span>
                                            </a>
                                        </li>
                                        @empty
                                            <p id="no_message_found">No message Found</p>
                                        @endforelse
                                    </ul>
                                </li>
                                <li class="external email_list">
                                    @if(count($message) > 0)
                                    <a href="#">See all messages <i class="fa fa-angle-right"></i></a>
                                    @endif
                                </li>
                            </ul>
                        </li>
                        <!-- END INBOX DROPDOWN -->
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
                                    <a href="auth/logout"><i class="icon-key"></i> Log Out</a>
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
                @include('includes.dashboard_sidebar')
