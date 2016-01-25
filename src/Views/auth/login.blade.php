<div class="login_bg">
@include('admin.partials.loginheader')
<!-- BEGIN LOGO -->

<div class="logo">
    <a href="<?php echo url('/auth/login'); ?>">
        <img src="{{ URL::asset('assets/img/logo-large.png') }}" alt="" />
    </a>
</div>
<!-- END LOGO -->
<!-- BEGIN LOGIN -->
<div class="content">
    <!-- BEGIN LOGIN FORM -->
    <form class="login-form" action="login" method="post">
        {!! csrf_field() !!}
        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <h3 class="form-title"><span>LOGIN</span>to your account</h3>
        <div class="alert alert-danger display-hide">
            <button class="close" data-close="alert"></button>
            <span>Enter any username and password. </span>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">Username</label>
            <div class="input-icon">
                <i class="icon-user"></i>
                <input class="form-control placeholder-no-fix" type="email" name="email" value="{{ old('email') }}"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Password</label>
            <div class="input-icon">
                <i class="icon-lock"></i>
                <input class="form-control placeholder-no-fix" type="password" name="password" id="password"/>
            </div>
        </div>
        <div class="form-actions">
            <label class="checkbox"><input type="checkbox" name="remember"/> Remember me </label>
            <button type="submit" class="btn btn-info pull-right"> LOGIN </button>
        </div>
        <div class="forget-password">
            <h4>Forgot your password ?</h4>
            <p>
                no worries, click <a href="javascript:;" id="forget-password">here</a>
                to reset your password.
            </p>
        </div>
        <div class="create-account">
            <p>Don't have an account yet ?&nbsp; <a href="javascript:;" id="register-btn">Request an account</a></p>
        </div>
    </form>
    <!-- END LOGIN FORM -->

    <!-- BEGIN FORGOT PASSWORD FORM -->
    <form class="forget-form" role="form" method="POST" action="<?php echo url('/password/email/'); ?>">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <h3>Forgot Password ?</h3>
        <p>Enter your e-mail address below to reset your password.</p>
        <div class="form-group">
            <div class="input-icon">
                <i class="fa fa-envelope"></i>
                <input class="form-control placeholder-no-fix" type="text" type="email" name="email" value="{{ old('email') }}" />
            </div>
        </div>
        <div class="form-actions">
            <button type="button" id="back-btn" class="btn btn-default">
            <i class="m-icon-swapleft"></i> Back </button>
            <button type="submit" class="btn btn-info pull-right"> Submit </button>
        </div>
    </form>
    <!-- END FORGOT PASSWORD FORM -->

    <!-- BEGIN REGISTRATION FORM -->
    <form class="register-form" role="form" method="POST" action="register">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <h3>Request an account</h3>
        <p>Enter your personal details below:</p>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Username</label>
            <div class="input-icon">
                <i class="fa fa-font"></i>
                <input class="form-control placeholder-no-fix" type="text" placeholder="Username" name="name" value="{{ old('name') }}"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">First Name</label>
            <div class="input-icon">
                <i class="fa fa-font"></i>
                <input class="form-control placeholder-no-fix" type="text" placeholder="First Name" name="first_name" value="{{ old('first_name') }}"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Surname</label>
            <div class="input-icon">
                <i class="fa fa-font"></i>
                <input class="form-control placeholder-no-fix" type="text" placeholder="Surname" name="last_name" value="{{ old('last_name') }}"/>
            </div>
        </div>
        <div class="form-group">
            <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
            <label class="control-label visible-ie8 visible-ie9">Email</label>
            <div class="input-icon">
                <i class="fa fa-envelope"></i>
                <input class="form-control placeholder-no-fix" type="text" placeholder="Email" name="email" value="{{ old('email') }}"/>
            </div>
        </div>
        <p>Enter your account details below:</p>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Password</label>
            <div class="input-icon">
                <i class="fa fa-lock"></i>
                <input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password" placeholder="Password" name="password"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
            <div class="controls">
                <div class="input-icon">
                    <i class="fa fa-check"></i>
                    <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Re-type Your Password" name="password_confirmation"/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>
                <input type="checkbox" name="tnc"/> I agree to the <a href="#">Terms & Conditions</a>
            </label>
            <div id="register_tnc_error"></div>
        </div>
        <div class="form-actions">
            <button id="register-back-btn" type="button" class="btn btn-default">
            <i class="m-icon-swapleft"></i> Back </button>
            <button type="submit" id="register-submit-btn" class="btn btn-info pull-right">
                SUBMIT <i class="m-icon-swapright m-icon-white"></i>
            </button>
        </div>
    </form>
    <!-- END REGISTRATION FORM -->
</div>

<!-- END LOGIN -->
@include('admin.partials.loginfooter')</div>