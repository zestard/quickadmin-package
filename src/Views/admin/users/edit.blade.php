@extends('admin.layouts.master')

<!-- BEGIN PAGE LEVEL STYLES -->
<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/jquery_custom_cal/jsDatePick_ltr.min.css') }}"/>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-datepicker/css/datepicker.css') }}"/>
<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/select2/select2.css') }}"/>
<style>
.error {
  color:red;
}

</style>
<!-- END PAGE LEVEL STYLES -->

@section('content')

    <div class="row profile">
      <div class="col-md-12"> 
        <!--BEGIN TABS-->
        <div class="tabbable tabbable-custom">
          <ul class="nav nav-tabs">
            <li class="active"> <a href="#tab_0" data-toggle="tab">ESSENTIALS DETAILS & ADDRESS</a> </li>
            <li> <a id="shedule">PROFILE</a> </li>
            <li> <a>SOCIAL </a> </li>
            <li> <a>PERMISSIONS</a> </li>
          </ul>
          <div class="tab-content overvivemain">
            <div id="tab_0" class="tab-pane active"> @foreach ($errors->all() as $error)
              <p class="error">{{ $error }}</p>
              @endforeach

              <form method="post" action="<?php echo url('users', array('id' => $user->id)); ?>" id="user_form" name="add_user" role="form" enctype="multipart/form-data">
                <input type="hidden" name="update_form" value="update_form">
                <input name="_method" type="hidden" value="PATCH">
                <input type="hidden" name="iUserId" id="iUserId" value="<?php echo $user->id; ?>">
                <div class="row">
                  <div class="col-md-4 center_date">
                    <h3 class="essentitle">Essentials</h3>
                    <div class="form-group">
                      <label class="col-md-4 control-label">FIRST NAME&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text" id="first_name" name="first_name" class="form-control" value="<?php echo $user->first_name; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">LAST NAME&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="last_name" name="last_name" value="<?php echo $user->last_name; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">EMAIL&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="email" name="email" value="<?php echo $user->email; ?>">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">COMPANY<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <select class="form-control select2me" id="vCompany" name="vCompany" >
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                        {!! Form::label('role_id', 'Role', ['class'=>'col-md-4 control-label']) !!}
                        <div class="col-sm-8">
                            {!! Form::select('role_id', $roles, old('role_id', $user->role_id), ['class'=>'form-control select2me']) !!}
                        </div>
                    </div>
                    <div class="form-group">
                        {!! Form::label('password', 'Password', ['class'=>'col-md-4 control-label']) !!}
                        <div class="col-sm-8">
                            {!! Form::password('password', ['class'=>'form-control', 'placeholder'=> 'Password']) !!}
                        </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">SEND INVITE?</label>
                      <div class="col-md-8">
                        <select class="form-control select2me" id="vSendInvite" name="vSendInvite" value="<?php echo $user->vSendInvite; ?>" >
                          <option>Yes, send an invite new</option>
                          <option>Yes, send an invite new 1</option>
                          <option>Yes, send an invite new 2</option>
                          <option>Yes, send an invite new 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="upoadmain"> <span class="userimg"><img src="{{ URL::asset('assets/img/userimg.jpg') }}" width="169" height="168" /> </span>
                      <div class="up_photomain">
                        <div class="browbt">
                          <input type="button" value="UPLOAD PHOTO" value="{{ isset($user -> vImage) ? $user->vImage : '' }}" class="uploadphoto" />
                          <input type="file" id="vImage" name="vImage" value="{{ isset($user -> vImage) ? $user->vImage : '' }}" class="btopicity" />
                        </div>
                        <div class="onlyimg_text">Only JPEG,GIF and PNG can be displayed</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 center_date">
                    <h3 class="essentitle">Details</h3>
                    <div class="form-group">
                      <label class="col-md-4 control-label">JOB TITLE&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text"  id="vJobTitle" name="vJobTitle" class="form-control" value="<?php echo $user->vJobTitle; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">OFFICE PHONE:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="iOfficePhone" name="iOfficePhone" value="<?php echo $user->iOfficePhone; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">MOBILE PHONE&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="iMobilePhone" name="iMobilePhone" value="<?php echo $user->iMobilePhone; ?>">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">HOME PHONE:</label>
                      <div class="col-md-8">
                        <input type="text"   id="iHomePhone" name="iHomePhone" class="form-control" value="<?php echo $user->iHomePhone; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">FAX:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="vFax" name="vFax" value="<?php echo $user->vFax; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label"></label>
                      <div class="col-md-8">
                        <div class="alternative_text">Alternative email addresses are only used for sending tasks and messages to the system via email. </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">ALT. EMAIL 1&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="vAltEmail1" name="vAltEmail1" value="<?php echo $user->vAltEmail1; ?>">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">ALT. EMAIL 2</label>
                      <div class="col-md-8">
                        <input type="text"  id="vAltEmail2" name="vAltEmail2" class="form-control" value="<?php echo $user->vAltEmail2; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">ALT. EMAIL 3</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="vAltEmail3" name="vAltEmail3" value="<?php echo $user->vAltEmail3; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">OPENID <br />
                        <small>Optional</small></label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="vOpenId" name="vOpenId" value="<?php echo $user->vOpenId; ?>">
                        <a href="#" title="What is an Openid">What is an Openid</a> </div>
                    </div>
                  </div>
                  <div class="col-md-4 center_date">
                    <h3 class="essentitle">Address</h3>
                    <div class="form-group">
                      <label class="col-md-4 control-label">ADDRESS&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <textarea  value=""  id="tAddress" name="tAddress" class="form-control" rows="3"><?php echo $user->tAddress; ?></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">POST CODE&nbsp;<span class="star" style="color:red">*</span>&nbsp;:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="vPostcode" name="vPostcode" value="<?php echo $user->vPostcode; ?>" >
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">COUNTRY:</label>
                      <div class="col-md-8">
                        <select class="form-control select2me" id="vCountry" name="vCountry">
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">COUNTY:</label>
                      @if(isset($user))
                      <input type="hidden" id="selected_state_id" value="{{ $user->vRegion }}">
                      @endif
                      <div class="col-md-8" id="vRegionDiv">
                        <select class="form-control select2me" id="vRegion" name="vRegion">
                          <option> -- select county -- </option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">AREA :</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control"  name="vArea" id="vArea" placeholder="Enter Area" value="<?php echo $user->vArea; ?>">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-4 control-label">TEL NO.:</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" id="iTelephoneNumber" name="iTelephoneNumber" value="<?php echo $user->iTelephoneNumber; ?>">
                      </div>
                    </div>
                    <!--<div class="form-group">
                            <label class="col-md-4 control-label">FAX:</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="vWebSiteUrl" name="vWebSiteUrl">
                            </div> 
                        </div>--> 
                  </div>
                </div>
                <div style="float: right;">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <input type="submit" id="add_tab_0" name="add_tab_0" class="demo-loading-btn btn btn-primary" value="Save Changes">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

@endsection



@section('javascript')

<!-- <script src="{{URL::asset('assets/scripts/add_user_tab_0_validations.js') }}" type="text/javascript"></script>  -->
<script src="{{URL::asset('assets/scripts/user_details_search.js') }}" type="text/javascript"></script> 
<script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js') }}"></script> 
<script type="text/javascript" src="{{ URL::asset('assets/plugins/jquery_custom_cal/jsDatePick.min.1.3.js') }}"></script> 
<script src="{{ URL::asset('assets/plugins/select2/select2.min.js') }}"></script> 

<!-- END PAGE LEVEL SCRIPTS --> 
<script>
jQuery(document).ready(function () {
    
    $('select.select2me').select2({
       placeholder: "Select",
       allowclear: true     
    });
    
    $.ajax
    ({
        url: public_url + '/user/get_states/' + $('#vCountry option:selected').val(),
        success:function(result)
        {
            $('#vRegionDiv').html(result);
            
            if($().select2){
                $('select.select2me').select2({
                   placeholder: "Select",
                   allowClear: true
                });
            }
            
            
            $('#vRegion option[value="'+$('#selected_state_id').val()+'"]').prop('selected', 'selected');
            $('#vRegion').trigger("change");
        }              
    });  
    
    $(".js-example-basic-multiple").select2();
});
</script> 

@endsection

<!-- 

    <div class="row">
        <div class="col-md-10 col-md-offset-2">
            <h1>Update user</h1>

            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        {!! implode('', $errors->all('
                        <li class="error">:message</li>
                        ')) !!}
                    </ul>
                </div>
            @endif
        </div>
    </div>

    {!! Form::open(['route' => ['users.update', $user->id], 'class' => 'form-horizontal', 'method' => 'PATCH']) !!}

    <div class="form-group">
        {!! Form::label('name', 'Name', ['class'=>'col-md-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', old('name', $user->name), ['class'=>'form-control', 'placeholder'=> 'Name']) !!}
        </div>
    </div>

    <div class="form-group">
        {!! Form::label('email', 'Email', ['class'=>'col-md-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::email('email', old('email', $user->email), ['class'=>'form-control', 'placeholder'=> 'Email']) !!}
        </div>
    </div>

    <div class="form-group">
        {!! Form::label('password', 'Password', ['class'=>'col-md-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::password('password', ['class'=>'form-control', 'placeholder'=> 'Password']) !!}
        </div>
    </div>

    <div class="form-group">
        {!! Form::label('role_id', 'Role', ['class'=>'col-md-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::select('role_id', $roles, old('role_id', $user->role), ['class'=>'form-control']) !!}
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">&nbsp;</label>

        <div class="col-sm-10">
            {!! Form::submit('Update', ['class' => 'btn btn-primary']) !!}
        </div>
    </div>

    {!! Form::close() !!}