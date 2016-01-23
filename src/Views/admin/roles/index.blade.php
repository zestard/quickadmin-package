@extends('admin.layouts.master')

@section('content')

    <p>{!! link_to_route('roles.create', 'Add new', [], ['class' => 'btn btn-success']) !!}</p>

    @if($roles->count() > 0)
        <div class="portlet box green">
            <div class="portlet-title">
                <div class="caption">Roles list</div>
            </div>
            <div class="portlet-body">
                <table class="table table-striped table-hover table-responsive datatable">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>

                    <tbody>
                    @foreach ($roles as $role)
                        <tr>
                            <td>{{ $role->title }}</td>
                            <td>
                                {!! link_to_route('roles.edit', 'Edit', [$role->id], ['class' => 'btn btn-xs btn-info']) !!}
                                {!! Form::open(['style' => 'display: inline-block;', 'method' => 'DELETE', 'onsubmit' => 'return confirm(\'' . 'Are you sure?' . '\');',  'route' => array('roles.destroy', $role->id)]) !!}
                                {!! Form::submit('Delete', array('class' => 'btn btn-xs btn-danger')) !!}
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>

    @else
        No entries found
    @endif

@endsection