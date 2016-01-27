<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="{{ URL::asset('assets/plugins/jquery.peity.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery.pulsate.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery-knob/js/jquery.knob.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/flot/jquery.flot.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/flot/jquery.flot.resize.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/scripts/jquery.flot.orderbars.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/moment.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/daterangepicker.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/gritter/js/jquery.gritter.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery-easypiechart/jquery.easypiechart.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery.sparkline.min.js') }}" type="text/javascript"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="{{ URL::asset('assets/scripts/app.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/scripts/index.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/scripts/tasks.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/scripts/portlet-draggable.js') }}"></script>
<!-- END PAGE LEVEL SCRIPTS -->

<script>
$(document).ready(function() {    
   App.init(); // initlayout and core plugins
   Index.init();
   Index.initCharts(); // init index page's custom scripts
   Index.initChat();
   Index.initMiniCharts();
   Index.initPeityElements();
   Index.initKnowElements();
   Index.initDashboardDaterange();
   Tasks.initDashboardWidget();
   PortletDraggable.init();

});
</script>