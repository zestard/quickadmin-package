var rules_basic = {
  condition: 'AND',
  rules: [{
    id: 'price',
    operator: 'less',
    value: 10.25
  }, {
    condition: 'OR',
    rules: [{
      id: 'category',
      operator: 'equal',
      value: 2
    }, {
      id: 'category',
      operator: 'equal',
      value: 1
    }]
  }]
};

$('#builder-basic').queryBuilder({
  plugins: ['bt-tooltip-errors'],
  
  filters: [{
    id: 'name',
    label: 'Name',
    type: 'string'
  }, {
    id: 'category',
    label: 'Contains',
    type: 'integer',
    input: 'select',
    values: {
      1: 'Books',
      2: 'Movies',
      3: 'Music',
      4: 'Tools',
      5: 'Goodies',
      6: 'Clothes'
    },
    
    
	operators: ['equal']
  }, {
    id: 'price',
    label: 'Contains',
    type: 'double',
    validation: {
      min: 0,
      step: 0.01
    }
  }, 
  
  ],

  rules: rules_basic
});




































