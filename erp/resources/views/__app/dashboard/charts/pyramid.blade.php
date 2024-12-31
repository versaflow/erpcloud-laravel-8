
<div class="control-section">
    <div id="pyramid-container{{$id}}"></div>
</div>
<script>
    

    var data = [{ x: 'Milk, Youghnut, Cheese', y: 435, text: ej.base.Browser.isDevice ? 'Milk, Youghnut,<br> Cheese:  435 cal' : 'Milk, Youghnut, Cheese: 435 cal' },
    { x: 'Vegetables', y: 470, text: 'Vegetables: 470 cal' },
    { x: 'Meat, Poultry, Fish', y: 475, text: ej.base.Browser.isDevice ? 'Meat, Poultry,<br> Fish: 475 cal' : 'Meat, Poultry, Fish: 475 cal' },
    { x: 'Rice, Pasta', y: 930, text: ej.base.Browser.isDevice ? 'Rice, Pasta:<br> 930 cal' : 'Rice, Pasta: 930 cal' },
    { x: 'Fruits', y: 520, text: ej.base.Browser.isDevice ? 'Fruits: <br> 520 cal' : 'Fruits: 520 cal' }];
    var pyramid_chart{{$id}} = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
                type: 'Pyramid', dataSource: data, xName: 'x', yName: 'y', width: '45%', height: '80%',
                neckWidth: '15%', gapRatio: 0.03, name: 'Food',
                dataLabel: {
                    name: 'text', visible: true, position: 'Outside',connectorStyle: {length: '20px'}, font: {
                        fontWeight: '600', 
                    }
                }, explode: true, emptyPointSettings: { mode: 'Drop', fill: 'red' },
           }],
        legendSettings: {
            visible: false
        },
        tooltip: {enable: true, format: '${point.x} : <b>${point.y} cal</b>',header:''},
        textRender: function (args) {
            args.text = args.text;
        },

        //Initializing Chart Title
        title: 'Food Comparison Chart',
    });
    pyramid_chart{{$id}}.appendTo('#pyramid-container{{$id}}');

</script>