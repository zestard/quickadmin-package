@extends('admin.layouts.master')
@include('admin.dashboard.page_css')  

@section('content')
 
    <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
    <div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body"> Widget settings form goes here </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">Save changes</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        <!-- /.modal-content --> 
      </div>
      <!-- /.modal-dialog --> 
    </div>
    <!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM--> 
    <!-- BEGIN STYLE CUSTOMIZER -->
    <div class="theme-panel hidden-xs hidden-sm">
      <div class="toggler"> <i class="icon-settings"></i> </div>
      <div class="theme-options">
        <div class="theme-option theme-option-header clearfix"> <span> Dashboard View </span> </div>
        <div class="theme-option"> <span> Option </span>
          <select class="layout-option form-control input-small">
            <option value="" selected="selected">Value</option>
            <option value="">Value 2</option>
          </select>
        </div>
        <div class="theme-option"> <span> Option </span>
          <select class="layout-option form-control input-small">
            <option value="" selected="selected">Value</option>
            <option value="">Value 2</option>
          </select>
        </div>
        <div class="theme-option"> <span> Option </span>
          <select class="layout-option form-control input-small">
            <option value="" selected="selected">Value</option>
            <option value="">Value 2</option>
          </select>
        </div>
      </div>
    </div>
    <!-- END BEGIN STYLE CUSTOMIZER --> 
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title"> Dashboard <small>statistics and more</small> </h3>
    <div class="page-bar"> 
      <!--<ul class="page-breadcrumb">
                    <li>
                            <i class="fa fa-home"></i>
                            <a href="index.html">Dashboard</a>
                    </li>
                    
            </ul>-->
      <div class="page-toolbar">
        <div id="dashboard-report-range" class="pull-right tooltips btn btn-fit-height btn-daterange" data-container="body" data-placement="bottom" data-original-title="Change dashboard date range"> <i class="icon-calendar"></i>&nbsp; <span class="thin uppercase visible-lg-inline-block"></span>&nbsp; <i class="fa fa-angle-down"></i> </div>
      </div>
    </div>
    <!-- END PAGE HEADER--> 
    <!-- BEGIN OVERVIEW STATISTIC BARS-->
    <div class="row stats-overview-cont">
      <div class="col-md-2 col-sm-4">
        <div class="stats-overview stat-block">
          <div class="display stat good huge"> <span class="line-chart"> 5, 6, 7, 11, 14, 10, 15, 19, 15, 2 </span>
            <div class="percent"> +16% </div>
          </div>
          <div class="details">
            <div class="title"> Interviews Arranged </div>
            <div class="numbers"> 102 </div>
          </div>
          <div class="progress"> <span style="width: 40%;" class="progress-bar progress-bar-success" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only"> 30% Complete </span> </span> </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4">
        <div class="stats-overview stat-block">
          <div class="display stat good huge"> <span class="line-chart"> 5, 6, 7, 11, 14, 10, 15, 19, 15, 2 </span>
            <div class="percent"> +4% </div>
          </div>
          <div class="details">
            <div class="title"> New Perm Vacancies </div>
            <div class="numbers"> 18 </div>
          </div>
          <div class="progress"> <span style="width: 20%;" class="progress-bar progress-bar-success" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only"> 30% Complete </span> </span> </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4">
        <div class="stats-overview stat-block">
          <div class="display stat good huge"> <span class="line-chart"> 2,6,8,12, 11, 15, 16, 11, 16, 11, 10, 3, 7, 8, 12, 19 </span>
            <div class="percent"> +24% </div>
          </div>
          <div class="details">
            <div class="title"> Perm Jobs Filled </div>
            <div class="numbers"> 42 </div>
            <div class="progress"> <span style="width: 16%;" class="progress-bar progress-bar-success" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only"> 16% Complete </span> </span> </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4">
        <div class="stats-overview stat-block">
          <div class="display stat bad huge"> <span class="line-chart"> 2,6,8,11, 14, 11, 12, 13, 15, 12, 9, 5, 11, 12, 15, 9,3 </span>
            <div class="percent"> -10% </div>
          </div>
          <div class="details">
            <div class="title"> New Temp Vacancies </div>
            <div class="numbers"> 0 </div>
            <div class="progress"> <span style="width: 2%;" class="progress-bar progress-bar-danger" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only"> 1% Complete </span> </span> </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4">
        <div class="stats-overview stat-block">
          <div class="display stat ok huge"> <span class="bar-chart"> 1,4,9,12, 10, 11, 12, 15, 12, 11, 9, 12, 15, 19, 14, 13, 15 </span>
            <div class="percent"> +86% </div>
          </div>
          <div class="details">
            <div class="title"> Temp Contracts Filled </div>
            <div class="numbers"> 66 </div>
            <div class="progress"> <span style="width: 56%;" class="progress-bar progress-bar-warning" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only"> 56% Complete </span> </span> </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4">
        <div class="stats-overview stat-block">
          <div class="display stat good huge"> <span class="line-chart"> 2,6,8,12, 11, 15, 16, 17, 14, 12, 10, 8, 10, 2, 4, 12, 19 </span>
            <div class="percent"> +32% </div>
          </div>
          <div class="details">
            <div class="title"> CVs Sent </div>
            <div class="numbers"> 95 </div>
            <div class="progress"> <span style="width: 90%;" class="progress-bar progress-bar-success" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only"> 90% Complete </span> </span> </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END OVERVIEW STATISTIC BARS-->
    <div class="clearfix"> </div>
    <div class="row ui-sortable" id="sortable_portlets">
      <div class="col-md-6 col-sm-12 column sortable"> 
        <!-- BEGIN PORTLET-->
        <div class="portlet portlet-sortable">
          <div class="portlet-title">
            <div class="caption"> <i class="icon-target"></i>KPIs (Activity v Target) </div>
            <div class="tools"> <a href="" class="fa fa-arrows"></a> <a href="" class="reload"></a> <a href="" class="remove"></a> </div>
          </div>
          <div class="portlet-body">
            <div id="kpi_statistics_loading" class="display-none"> <img src="img/loading.gif" alt="loading"/> </div>
            <div id="kpi_statistics_content">
              <div id="kpi_statistics" class="chart" style="height:320px; width:100%;"> </div>
            </div>
          </div>
        </div>
        <!-- END PORTLET--> 
        <!-- BEGIN PORTLET-->
        <div class="portlet portlet-sortable">
          <div class="portlet-title">
            <div class="caption"> <i class="icon-bar-chart"></i>Placements Graph </div>
            <!--<div class="actions">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-default btn-sm active tempbt">
                                    <input type="radio" name="options" class="toggle">Temp </label>
                                <label class="btn btn-default btn-sm tempbt">
                                    <input type="radio" name="options" class="toggle">Perm </label>
                            </div>
                        </div>-->
            <div class="tools"> <a class="fa fa-arrows" href=""></a> <a class="reload" href=""></a> <a class="remove" href=""></a> </div>
          </div>
          <div class="portlet-body">
            <div id="site_statistics_loading"> <img src="img/loading.gif" alt="loading"/> </div>
            <div id="site_statistics_content" class="display-none">
              <div id="site_statistics" class="chart"> </div>
            </div>
          </div>
        </div>
        <!-- END PORTLET-->
        <div class="portlet">
          <div class="portlet-title">
            <div class="caption"> <i class="icon-lock"></i>Latest Placements </div>
            <div class="tools"> <a class="fa fa-arrows" href=""></a> <a class="reload" href=""></a> <a class="remove" href=""></a> </div>
            <div class="actions">
              <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Filter By <i class="fa fa-angle-down"></i> </a>
                <div class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">
                  <label>
                    <input type="checkbox"/>
                    Panthers</label>
                  <label>
                    <input type="checkbox" checked=""/>
                    Ninjas</label>
                </div>
              </div>
            </div>
          </div>
          <div class="portlet-body">
            <div class="scroller" style="height: 400px;" data-always-visible="1" data-rail-visible="1">
              <table class="table table-striped table-bordered table-hover vacn_listing letesttable">
                <thead>
                  <tr>
                    <th> Candidate </th>
                    <th> Recruiter </th>
                    <th> Type </th>
                    <th> Company </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
                  <tr>
                    <td>Chris Ryu</td>
                    <td>Jessica Jones</td>
                    <td> Permanent </td>
                    <td>honest.agency</td>
                    <td style="text-align:center;"><a href="#" class="btn btn-default btn-xs letestviewbt">View</a></td>
                  </tr>
               </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 column sortable">
        <div class="portlet portlet-sortable">
          <div class="portlet-title">
            <div class="caption"> <i class="icon-bell"></i>Notifications </div>
            <div class="tools"> <a href="" class="collapse"></a> <a href="" class="fa fa-arrows"></a> <a href="" class="reload"></a> <a href="" class="remove"></a> </div>
          </div>
          <div class="portlet-body"> 
            <!--BEGIN TABS-->
            
            <div class="scroller" style="height:320px;" data-always-visible="1" data-rail-visible="0">
              <ul class="feeds">
              </ul>
            </div>
            <!--END TABS--> 
          </div>
        </div>
        <div class="portlet tasks-widget">
          <div class="portlet-title">
            <div class="caption"> <i class="fa fa-check"></i>Tasks </div>
            <div class="tools"> <a href="" class="fa fa-arrows"></a> <a href="" class="reload"></a> <a href="" class="remove"></a> </div>
            <div class="actions">
              <div class="btn-group"> <a class="btn btn-info btn-sm dropdown-toggle more" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> More <i class="fa fa-angle-down"></i> </a>
                <ul class="dropdown-menu pull-right">
                  <li> <a href="#"><i class="i"></i> All Tasks</a> </li>
                  <li class="divider"> </li>
                  <li> <a href="#">Team Tasks</a> </li>
                  <li> <a href="#">Personal Tasks</a> </li>
                  <li class="divider"> </li>
                  <li> <a href="#">Due Today <span class="badge badge-important"> 4 </span> </a> </li>
                  <li> <a href="#">Overdue <span class="badge badge-danger"> 9 </span> </a> </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="portlet-body">
            <div class="task-content">
              <div class="scroller" style="height: 320px;" data-always-visible="1" data-rail-visible1="1"> 
                <!-- START TASK LIST -->
                <ul class="task-list">
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> <span class="label label-sm label-success"> Companies </span> <span class="task-bell"> <i class="fa fa-bell-o"></i> </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="task-checkbox">
                      <input type="checkbox" class="liChild" value=""/>
                    </div>
                    <div class="task-title"> <span class="task-title-sp"> Pellentesque quis venenatis felis. Curabitur hendrerit enim nec </span> </div>
                    <div class="task-config">
                      <div class="task-config-btn btn-group"> <a class="btn btn-xs btn-default dropdown-toggle" href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> <i class="fa fa-cog"></i><i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu pull-right">
                          <li> <a href="#"><i class="fa fa-check"></i> Complete</a> </li>
                          <li> <a href="#"><i class="fa fa-pencil"></i> Edit</a> </li>
                          <li> <a href="#"><i class="fa fa-trash-o"></i> Cancel</a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- END START TASK LIST --> 
              </div>
            </div>
            <div class="task-footer"> <span class="pull-right"> <a href="#">See All Tasks</a> &nbsp; </span> </div>
          </div>
        </div>
        <!-- BEGIN PORTLET-->
        <div class="portlet portlet-sortable">
          <div class="portlet-title">
            <div class="caption"> <i class="fa fa-comments"></i>Rubicon Chat </div>
            <div class="tools"> <a href="" class="fa fa-arrows"></a> 
              <!--<a href="" class="collapse"></a>--> 
              <a href="" class="reload"></a> <a href="" class="remove"></a> </div>
          </div>
          <div class="portlet-body" id="chats">
            <div class="scroller" style="height:530px;" data-always-visible="1" data-rail-visible1="1">
              <ul class="chats">
                <li class="in"> <img class="avatar img-responsive" alt="" src="img/avatar1.jpg"/>
                  <div class="message"> <span class="arrow"> </span> <a href="#" class="name">Sarah Lance</a> <span class="datetime"> at June 16 2015 11:09 </span> <span class="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span> </div>
                </li>
                <li class="out"> <img class="avatar img-responsive" alt="" src="img/avatar2.jpg"/>
                  <div class="message"> <span class="arrow"> </span> <a href="#" class="name">Barry Allen</a> <span class="datetime"> at June 16 2015 11:09 </span> <span class="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span> </div>
                </li>
                <li class="in"> <img class="avatar img-responsive" alt="" src="img/avatar1.jpg"/>
                  <div class="message"> <span class="arrow"> </span> <a href="#" class="name">Sarah Lance</a> <span class="datetime"> at June 16 2015 11:09 </span> <span class="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span> </div>
                </li>
                <li class="out"> <img class="avatar img-responsive" alt="" src="img/avatar3.jpg"/>
                  <div class="message"> <span class="arrow"> </span> <a href="#" class="name">Oliver Queen</a> <span class="datetime"> at June 16 2015 11:09 </span> <span class="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span> </div>
                </li>
                <li class="in"> <img class="avatar img-responsive" alt="" src="img/avatar3.jpg"/>
                  <div class="message"> <span class="arrow"> </span> <a href="#" class="name">Oliver Queen</a> <span class="datetime"> at June 16 2015 11:09 </span> <span class="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span> </div>
                </li>
                <li class="out"> <img class="avatar img-responsive" alt="" src="img/avatar1.jpg"/>
                  <div class="message"> <span class="arrow"> </span> <a href="#" class="name">Sarah Lance</a> <span class="datetime"> at June 16 2015 11:09 </span> <span class="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span> </div>
                </li>
              </ul>
            </div>
            <div class="chat-form">
              <div class="input-cont">
                <input class="form-control" type="text" placeholder="Type a message here..."/>
              </div>
              <div class="btn-cont"> <span class="arrow"> </span> <a href="" class="btn btn-primary icn-only"><i class="fa fa-check"></i></a> </div>
            </div>
          </div>
        </div>
        <!-- END PORTLET--> 
      </div>
    </div>
    <div class="clearfix"> </div>

@endsection