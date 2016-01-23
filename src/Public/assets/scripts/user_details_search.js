

$('#vCountry').on('change',function(e){
   
    var optionSelected = $("option:selected",this);
    var valueSelected = this.value;
    
    $.ajax
    ({
        url: public_url + '/user/get_states/' + valueSelected,
        success: function(result)
        {
            $('#vRegionDiv').html(result);
            
            if ($().select2){
                $('select.select2me').select2({
                    placeholder:"Select",
                    allowClear:true
                });
            }
            if(valueSelected === "222"){
                $('#vRegion').val(3537).trigger('change');
            }
        }
    });    
});