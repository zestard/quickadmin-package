@extends('admin.layouts.master')

@section('content')

    <div class="row">
        <div class="col-md-10 col-md-offset-2">
            <h1>Create admin</h1>

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

    {!! Form::open(['route' => ['roles.update', $role->id], 'class' => 'form-horizontal', 'method' => 'PATCH']) !!}

    <div class="form-group">
        {!! Form::label('title', 'Title', ['class'=>'col-md-2 control-label']) !!}
        <div class="col-sm-10">
            {!! Form::text('title', old('title', $role->title), ['class'=>'form-control', 'placeholder'=> 'Title']) !!}
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">&nbsp;</label>

        <div class="col-sm-10">
            {!! Form::submit('Update', ['class' => 'btn btn-primary']) !!}
        </div>
    </div>

    {!! Form::close() !!}

@endsection


