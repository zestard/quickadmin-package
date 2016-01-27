@extends('admin.layouts.master')

<!-- BEGIN PAGE LEVEL STYLES -->
<link href="{{ URL::asset('assets/plugins/bootstrap-switch/css/bootstrap-switch.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ URL::asset('assets/plugins/ion.rangeslider/css/ion.rangeSlider.css') }}" rel="stylesheet" type="text/css">
<link href="{{ URL::asset('assets/css/pages/personsearch.css') }}" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css') }}"/>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/datatables/extensions/Scroller/css/dataTables.scroller.min.css') }}"/>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/datatables/extensions/ColReorder/css/dataTables.colReorder.min.css') }}"/>
<!-- END PAGE LEVEL STYLES --> 

@section('content')

    @if (session('status'))
        <div class="alert alert-success"> {{ session('status') }} </div>
    @endif

    <form name="" action="<?php echo url('/role/delete_role'); ?>" method="post">
      <input type="hidden" name="_token" value="{{ csrf_token() }}">
      <div class="row search-results">
        <div class="col-md-12">
          <div class="table-responsive">
            <div class="row search-filters mar_buttom20 hide">
              <div class="col-md-12"> 
                <!--BEGIN SEARCH-->
                <div class="row">
                  <div class="col-md-4 search-type">
                    <label class="fieldlabel">SEARCH TYPE</label>
                    <div class="btn-group" data-toggle="buttons">
                      <label class="btn btn-default active">
                        <input type="radio" class="toggle person_type" name="person_type" value="all">
                        ALL </label>
                      <label class="btn btn-default">
                        <input type="radio" class="toggle person_type" name="person_type" value="candidate">
                        CANDIDATE </label>
                      <label class="btn btn-default">
                        <input type="radio" class="toggle person_type" name="person_type" value="client">
                        CLIENT </label>
                    </div>
                  </div>
                  <div class="col-md-2 pull-right"> <i class="fa fa-minus"></i> Hide Search
                    &nbsp; &nbsp; &nbsp; <i class="fa fa-refresh"></i> Reset Search </div>
                  <div class="clearfix margin-bottom-25"></div>
                  <div class="col-md-8">
                    <label class="fieldlabel">STATUS</label>
                    <label class="fieldlabelminor margin-left-15">FILLED BY OTHER AGENCY</label>
                    <input type="checkbox" name="eType" class="make-switch" data-size="mini" data-on-text="YES" data-off-text="NO">
                    <label class="fieldlabelminor margin-left-15">UNFILLED</label>
                    <input type="checkbox" name="eType" class="make-switch" data-size="mini" data-on-text="No" data-off-text="YES">
                    <label class="fieldlabel marleft25"> FULL/PART-TIME</label>
                    <label class="fieldlabelminor margin-left-15">ALL</label>
                    <input type="checkbox" name="eType" class="make-switch" data-size="mini" data-on-text="YES" data-off-text="NO">
                    <label class="fieldlabelminor margin-left-15">FULL TIME</label>
                    <input type="checkbox" name="eType" class="make-switch" data-size="mini" data-on-text="YES" data-off-text="NO">
                    <label class="fieldlabelminor margin-left-15">PART TIME</label>
                    <input type="checkbox" name="eType" class="make-switch" data-size="mini" data-on-text="YES" data-off-text="NO">
                  </div>
                  <div class="col-md-3">
                    <label class="fieldlabel">SKILLS</label>
                    <input type="text" placeholder="Please enter your keywords..." name="skills" class="form-control skills-field">
                  </div>
                  <div class="clearfix margin-bottom-25"></div>
                  <div class="col-md-4">
                    <label class="fieldlabel">SALARY RANGE</label>
                    <div class="salary-range">
                      <input id="range_2" type="text" name="range_2" value="10000;150000" data-type="double" data-step="500" data-prefix=" &pound;" data-from="10000" data-to="150000" data-hasgrid="true"/>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <label class="fieldlabel">LOCATION</label>
                    <input type="text" class="form-control location-field search-location" id="location_textbox" name="location_textbox" placeholder="Postcode or Town" >
                  </div>
                  <div class="locationselect marleft-30">
                    <select>
                      <option>Within 10 miles</option>
                      <option>Within 10 miles -1</option>
                      <option>Within 10 miles -2</option>
                      <option>Within 10 miles -3</option>
                    </select>
                  </div>
                  <div class="inqu_main">
                    <div class="sectomain marleft25">
                      <div class="secrortext">INDUSTRY</div>
                      <div class="sectorbox">
                        <select>
                          <option>- Please Select Industry -</option>
                          <option>- Please Select Industry -1</option>
                          <option>- Please Select Industry -2</option>
                          <option>- Please Select Industry-3</option>
                        </select>
                      </div>
                    </div>
                    <div class="sectomain marleft25">
                      <div class="secrortext">Discipline</div>
                      <div class="sectorbox">
                        <select>
                          <option>- Please Select Discipline -</option>
                          <option>- Please Select Discipline -1</option>
                          <option>- Please Select Discipline -2</option>
                          <option>- Please Select Discipline -3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix margin-bottom-25"></div>
                </div>
              </div>
            </div>
            <div class="col-md-12 hide">
                <div class="addbt_main"> <a href="<?php echo url('/role/add_role_detail'); ?>" id="sample_editable_1_new" class="btn btn-success"> Add New <i class="fa fa-plus"></i> </a>
                    <div class="btn-group pull-right ">
                        <button type="submit" id="sample_editable_1_new" class="btn btn-danger"> Delete Selected <i class="fa fa-minus"></i> </button>
                    </div>
                </div>
            </div>
            <div class="alert alert-danger hide error_div"></div>
            <div class="quickmain">
                <div class="quick-search"><input type="text" placeholder="Quick Search" /> </div>
                <div class="abcdmain">A B C D J K L R S</div>
                <div class="quick-count">
                    <span class="people12">12 people</span>
                    <span class="acc10">10 accounts</span>
                    <span class="invit2">2 invited</span>
                </div>
            </div>
            <table class="table table-striped table-bordered table-hover vacn_listing thbg" id="sample_1">
            <thead>
                <tr style="background:none repeat scroll 0 0 #9698cb; color:white;">
                  <th class="table-checkbox"> <input type="checkbox" class="group-checkable all_checked" data-set="#sample_1 .checkboxes"/></th>
                  <th> ROLE NAME </th>
                  <th> ACTION </th>
                </tr>
            </thead>
            <tbody id="role_details_list_tbody">
                @if($roles->count() > 0)
                    @foreach ($roles as $role)
                        <tr class = "odd gradeX">
                            <td><input type="checkbox" class="role_id_checkbox list_check_box" name="role_id[]" id="<?php echo $role->id; ?>" value="<?php echo $role->id; ?>"></td>
                            <td>{{ $role->title }}</td>
                            <td>
                                {!! link_to_route('roles.edit', 'Edit', [$role->id], ['class' => 'btn btn-xs btn-info']) !!}
                                {!! Form::open(['style' => 'display: inline-block;', 'method' => 'DELETE', 'onsubmit' => 'return confirm(\'' . 'Are you sure?' . '\');',  'route' => array('roles.destroy', $role->id)]) !!}
                                {!! Form::submit('Delete', array('class' => 'btn btn-xs btn-danger')) !!}
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                @else
                    No entries found
                @endif
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>

@endsection