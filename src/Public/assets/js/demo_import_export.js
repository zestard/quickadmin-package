var sql_import_export = 'name LIKE "%Johnny%" AND (category = 2 OR in_stock = 1)';

var mongo_import_export = {
  "$and": [{
    "price": { "$lt": 10.25 }
  }, {
    "$or": [{
      "category": 2
    }, {
      "category": 1
    }]
  }]
}

$('#builder-import_export').queryBuilder({
  plugins: ['bt-tooltip-errors'],
  
  filters: [{
    id: 'person_type',
    label: 'Person Type',
    type: 'string',
    input: 'radio',
    values: {      
      candidate: 'CANDIDATE',
      client: 'CLIENT'        
    },
    operators: ['equal']
  }, 
  {
    id: 'name',
    label: 'Name',
    type: 'string',
    operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null','not_begins_with','is_empty','not_contains','contains']
  }, {
    id: 'reference_no',
    label: 'Reference No',
    type: 'string',
    operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null','not_begins_with','is_empty','not_contains','contains']
  }, {
    id: 'country',
    label: 'Country',
    type: 'string',
    operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null','begins_with','contains','not_begins_with','not_contains']
  },{
    id: 'skill',
    label: 'Skill',
    type: 'string',
     operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null','not_begins_with','is_empty','not_contains','contains']
  }, {
    id: 'minimum_salary',
    label: 'Minimum Salary',
    type: 'double',
    validation: {
      min: 1000,
      step: 1000
    }
  },{
    id: 'hourly_rate',
    label: 'Hourly Rate',
    type: 'double',
    validation: {
      min: 0,
      step: 5
    }
  },
  { 
    id: 'status',
    label: 'Status',
    type: 'string',
    input: 'radio',
    values: {     
      active: 'Active',       
      inactive: 'IN-ACTIVE',
      unavailable: 'UNAVAILABLE'
    },
    operators: ['equal']
  },    
  ],
});

$('#btn-reset').on('click', function() {
  $('#builder-import_export').queryBuilder('reset');
});

$('#btn-set-sql').on('click', function() {
  $('#builder-import_export').queryBuilder('setRulesFromSQL', sql_import_export);
});

$('#btn-set-mongo').on('click', function() {
  $('#builder-import_export').queryBuilder('setRulesFromMongo', mongo_import_export);
});

$('#btn-get-sql').on('click', function() {  
  var result = $('#builder-import_export').queryBuilder('getSQL', 'question_mark');    
  if (result.sql.length) {
    alert(result.sql + '\n\n' + JSON.stringify(result.params, null, 2));
  }
});

$('#btn-get-mongo').on('click', function() {
  var result = $('#builder-import_export').queryBuilder('getMongo');
  
  if (!$.isEmptyObject(result)) {
    alert(JSON.stringify(result, null, 2));
  }
});

$('#run_sql').on('click',function() {
    var result = $('#builder-import_export').queryBuilder('getSQL', false, true);
    var url = public_url + '/person/ajaxLoadAdvancesearch?iVacancyId=' + $('#vacancy_id').val();
    if (result.sql.length) {
        url += '&sql_code=' + result.sql;    
        $.ajax({
            url: url,
            success: function (result)
            {
                $('#person_list_tbody').html(result);
                $('.view_person_details_row_class').click(function ()
                {
                    window.location = public_url + '/person/detail/' + $(this).attr('data-person-id');
                });
            }
        });
    }
});