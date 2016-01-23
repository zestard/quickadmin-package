<!-- BEGIN PAGE HEADER-->

<h3 class="page-title">
    {{ $page_title }}  <small> {{ $page_description }}</small>
</h3>
<div class="page-bar">
    <ul class="page-breadcrumb">
        <li>
            <i class="fa fa-home"></i>
            <a href="<?php echo url('/home'); ?>">Dashboard</a>
            
            <i class="fa fa-angle-right"></i>
        </li>
        
        @forelse ($page_navigation as $navigation)
            
            <li>
                @if ($navigation['navigation_link'] !== '')
                    <a href="<?php echo url($navigation['navigation_link']); ?>">
                @endif
                
                {{ $navigation['navigation_text'] }}</a>
                
                @if ($navigation['navigation_link'] !== '')
                    <i class="fa fa-angle-right"></i>                
                @endif
                
            </li>
        @empty
            
        @endforelse
        
                
    </ul>    
    <div class="pull-right">
            <?php
                if(count($actions) > 1)
                {
                    ?>
                    <div class="btn-group pull-right">
                        <button data-close-others="true" data-delay="1000" data-hover="dropdown" data-toggle="dropdown" class="btn btn-fit-height default dropdown-toggle" type="button"> Actions <i class="fa fa-angle-down"></i> 
                        </button>
                        <ul role="menu" class="dropdown-menu">


                            @forelse ($actions as $action)            
                                <li> <a {{ $action['action_link'] }} style="cursor: pointer;"> {{ $action['action_name'] }} </a> </li>
                            @empty

                            @endforelse
                        </ul>
                    </div>
                    <?php
                }
            ?>
        </div>       
</div>
<!-- END PAGE HEADER-->