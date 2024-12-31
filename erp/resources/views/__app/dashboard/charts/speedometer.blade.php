<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
            <div id="container" align='center'></div>
        </div>
    </div>
</div>
<!-- Property Panel -->
<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%;">
        <tbody>
            <tr>
                <td style="width: 80%">
                    <div> Combine Ranges</div>
                </td>
                <td style="width: 20%;">
                    <div style="margin-left: 40px;margin-top: -6px;">
                        <input type="checkbox" id="combineRange" checked />
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 80%">
                    <div>Gap Between Ranges</div>
                </td>
                <td style="width: 20%;">
                    <div style="margin-left: 40px;margin-top: -6px;">
                        <input type="checkbox" id="range" checked />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<script id='pointerValue' type="text/x-template">
        <div id='templateWrap'>
            <div class='des'>
                <div id='pointerannotation' style="width:90px;text-align:center;font-size:20px;font-family:Roboto">${pointers[0].value} km/h</div>
            </div>
        </div>
    </script>
<svg style="height:0px;width:0px">
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#82b944;stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:red;stop-opacity:1" />
        </linearGradient>
    </defs>
</svg>

<style>
    .property-panel-table div {
        padding-left: 0px;
    }

    tr {
        height: 48px;
    }
</style>

<script>
    function gauge6() {
    var gauge6 = new ej.circulargauge.CircularGauge({
        title: 'Speedometer',
        background:'transparent',
        titleStyle: { size: '18px', fontFamily: 'inherit' },
        centerY: '75%',
        axes: [{
            radius: '120%',
            minimum: 0,
            maximum: 120,
            lineStyle: { width: 0 },
            majorTicks: { width: 0, },
            minorTicks: { width: 0 },
            labelStyle: {
                useRangeColor: false, position: 'Outside', autoAngle: true,
                font: { size: '13px', fontFamily: 'inherit' }
            },
            startAngle: 270, endAngle: 90,
            pointers: [{
                animation: { enable: true, duration: 900 },
                value: 40,
                radius: '80%',
                color: '#757575',
                pointerWidth: 7,
                cap: {
                    radius: 8,
                    color: '#757575',
                    border: { width: 0 }
                },
                needleTail: {
                    color: '#757575',
                    length: '15%'
                },
            }],
            annotations: [
                {
                    content: '#pointerValue',
                    angle: 0, zIndex: '1',
                    radius: '30%'
                }
            ],
            ranges: [
                {
                    start: 0,
                    end: 20,
                    startWidth: 5, endWidth: 10,
                    radius: '102%',
                    color: '#82b944',
                },
                {
                    start: 20,
                    end: 40,
                    startWidth: 10, endWidth: 15,
                    radius: '102%',
                    color: '#a1cb43',
                }, {
                    start: 40,
                    end: 60,
                    startWidth: 15, endWidth: 20,
                    radius: '102%',
                    color: '#ddec12',
                },
                {
                    start: 60,
                    end: 80,
                    startWidth: 20, endWidth: 25,
                    radius: '102%',
                    color: '#ffbc00',
                },
                {
                    start: 80,
                    end: 100,
                    startWidth: 25, endWidth: 30,
                    radius: '102%',
                    color: '#ff6000',
                },
                {
                    start: 100,
                    end: 120,
                    startWidth: 30, endWidth: 35,
                    radius: '102%',
                    color: 'red',
                }
            ]
        }],
        load: function (args) {

        }
    });
    return gauge6;
}
this.default = function () {
    var circulargauge = this.gauge6();
    circulargauge.appendTo('#container');

    var gauge5Interval1 = setInterval(function () {
        var newVal = circulargauge.axes[0].pointers[0].value + (Math.floor(Math.random() * (10 - (-10))) - 10);
        if (newVal <= 0) {
            newVal = 5;
        }
        if (document.getElementById('container')) {
            circulargauge.axes[0].pointers[0].animation.enable = true;
            circulargauge.setPointerValue(0, 0, newVal);
            if (!ej.base.isNullOrUndefined(document.getElementById('pointerannotation'))) {
                document.getElementById('pointerannotation').innerHTML = newVal.toString() + ' km/h';
            }
        }
        else {
            clearInterval(this.gauge5Interval1);
        }
    }, 1000);
    // Code for Property Panel
    var combineRange;
    var rangeSet = new ej.buttons.CheckBox({
        change: combineRange, checked: false
    }, '#combineRange');
    var gapRanges;
    var showCheckBox = new ej.buttons.CheckBox({
        change: gapRanges, checked: false
    }, '#range');
    rangeSet.change = combineRange = function (e) {
        if (e.checked) {
            showCheckBox.disabled = true;
            circulargauge.axes[0].ranges[0].start = 0;
            circulargauge.axes[0].ranges[0].end = 120;
            circulargauge.axes[0].ranges[0].startWidth = 5;
            circulargauge.axes[0].ranges[0].endWidth = 35;
            circulargauge.axes[0].ranges[0].color = 'url(#grad1)';
            circulargauge.axes[0].ranges[1].start = null;
            circulargauge.axes[0].ranges[1].end = null;
            circulargauge.axes[0].ranges[1].startWidth = '';
            circulargauge.axes[0].ranges[1].endWidth = '';
            circulargauge.axes[0].ranges[1].color = '';
            circulargauge.axes[0].ranges[2].start = null;
            circulargauge.axes[0].ranges[2].end = null;
            circulargauge.axes[0].ranges[2].startWidth = '';
            circulargauge.axes[0].ranges[2].endWidth = '';
            circulargauge.axes[0].ranges[2].color = '';
            circulargauge.axes[0].ranges[3].start = null;
            circulargauge.axes[0].ranges[3].end = null;
            circulargauge.axes[0].ranges[3].startWidth = '';
            circulargauge.axes[0].ranges[3].endWidth = '';
            circulargauge.axes[0].ranges[3].color = '';
            circulargauge.axes[0].ranges[4].start = null;
            circulargauge.axes[0].ranges[4].end = null;
            circulargauge.axes[0].ranges[4].startWidth = '';
            circulargauge.axes[0].ranges[4].endWidth = '';
            circulargauge.axes[0].ranges[4].color = '';
            circulargauge.axes[0].ranges[5].start = null;
            circulargauge.axes[0].ranges[5].end = null;
            circulargauge.axes[0].ranges[5].startWidth = '';
            circulargauge.axes[0].ranges[5].endWidth = '';
            circulargauge.axes[0].ranges[5].color = '';
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.refresh();
        }
        else {
            showCheckBox.disabled = false;
            circulargauge.axes[0].ranges[0].start = 0;
            circulargauge.axes[0].ranges[0].end = 20;
            circulargauge.axes[0].ranges[0].startWidth = 5;
            circulargauge.axes[0].ranges[0].endWidth = 10;
            circulargauge.axes[0].ranges[0].color = '#82b944';
            circulargauge.axes[0].ranges[1].start = 20;
            circulargauge.axes[0].ranges[1].end = 40;
            circulargauge.axes[0].ranges[1].startWidth = 10;
            circulargauge.axes[0].ranges[1].endWidth = 15;
            circulargauge.axes[0].ranges[1].color = '#a1cb43';
            circulargauge.axes[0].ranges[2].start = 40;
            circulargauge.axes[0].ranges[2].end = 60;
            circulargauge.axes[0].ranges[2].startWidth = 15;
            circulargauge.axes[0].ranges[2].endWidth = 20;
            circulargauge.axes[0].ranges[2].color = '#ddec12';
            circulargauge.axes[0].ranges[3].start = 60;
            circulargauge.axes[0].ranges[3].end = 80;
            circulargauge.axes[0].ranges[3].startWidth = 20;
            circulargauge.axes[0].ranges[3].endWidth = 25;
            circulargauge.axes[0].ranges[3].color = '#ffbc00';
            circulargauge.axes[0].ranges[4].start = 80;
            circulargauge.axes[0].ranges[4].end = 100;
            circulargauge.axes[0].ranges[4].startWidth = 25;
            circulargauge.axes[0].ranges[4].endWidth = 30;
            circulargauge.axes[0].ranges[4].color = '#ff6000';
            circulargauge.axes[0].ranges[5].start = 100;
            circulargauge.axes[0].ranges[5].end = 120;
            circulargauge.axes[0].ranges[5].startWidth = 30;
            circulargauge.axes[0].ranges[5].endWidth = 35;
            circulargauge.axes[0].ranges[5].color = 'red';
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.refresh();
        }
    };
    showCheckBox.change = gapRanges = function (e) {
        if (e.checked) {
            circulargauge.axes[0].rangeGap = 5;
        }
        else {
            circulargauge.axes[0].rangeGap = null;
        }
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.refresh();
    };
};
    
</script>