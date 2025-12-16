import { getCssVariables } from './src/public/basic-script.js'


let barChartDom = document.getElementById('barChart');
let barChart;

let barChartOption = {
    backgroundColor: getCssVariables('--color-surface'),
    textStyle: {
        fontFamily: getCssVariables('--font-Inter'),
        fontWeight: '400',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            let html = `تعداد بازدید در تاریخ ${params[0].axisValue} : <br>`;
            params.forEach(p => html += `<div style="text-align: center; margin-top: 5px;">${p.value}</div>`);
            return html;
        },
        borderWidth: 0,
        backgroundColor: getCssVariables('--border-color'),
        textStyle: { color: getCssVariables('--color-text-primary') }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: true,
                lineStyle: { color: getCssVariables('--border-color') }
            },
            axisLabel: {
                color: getCssVariables('--color-text-primary'),
                fontSize: 12
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: { color: getCssVariables('--border-color') }
            },
            axisLabel: { color: getCssVariables('--color-text-primary') },
            splitLine: {
                lineStyle: {
                    color: getCssVariables('--hover-smooth')
                }
            },
        }
    ],
    series: [
        {
            name: 'تعداد بازدید',
            type: 'bar',
            barWidth: '60%',
            barMaxWidth: 40,

            data: [280, 52, 204, 134, 390, 490, 220, 390, 330, 620],
            itemStyle: {
                // color: '#009991',
                borderRadius: [60, 60, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#00cac0ff' },
                    { offset: 1, color: '#009991' }
                ]),
                animationDuration: 1200,
                animationEasing: 'cubicOut',
            },
        }
    ]
};

export function initBarChart() {
    if (barChart) barChart.dispose();
    barChart = echarts.init(barChartDom);

    barChartOption.backgroundColor = getCssVariables('--color-surface');
    barChartOption.tooltip.backgroundColor = getCssVariables('--border-color');
    barChartOption.tooltip.textStyle.color = getCssVariables('--color-text-primary');
    barChartOption.xAxis[0].axisLine.lineStyle.color = getCssVariables('--border-color');
    barChartOption.xAxis[0].axisLabel.color = getCssVariables('--color-text-primary');
    barChartOption.yAxis[0].axisLine.lineStyle.color = getCssVariables('--border-color');
    barChartOption.yAxis[0].axisLabel.color = getCssVariables('--color-text-primary');
    barChartOption.yAxis[0].splitLine.lineStyle.color = getCssVariables('--hover-smooth');

    barChart.setOption(barChartOption);
}
initBarChart();

window.addEventListener('resize', () => {
    barChart.resize();
});

barChartOption && barChart.setOption(barChartOption);


let donutChartDom = document.getElementById('donutChart');
let donutChart;

let donutChartOption = {
    backgroundColor: getCssVariables('--color-surface'),
    textStyle: {
        fontFamily: getCssVariables('--font-Inter'),
        fontWeight: '400',
    },
    tooltip: {
        trigger: 'item',
        formatter: (params) => {
            const marker = `
                    <span style="
                        display:inline-block;
                        margin-left:8px;
                        width:10px;
                        height:10px;
                        border-radius:50%;
                        background:${params.color};">
                    </span>`;
            return `${marker}${params.name}: ${params.value}`;
        },
        borderWidth: 0,
        backgroundColor: getCssVariables('--border-color'),
        textStyle: { color: getCssVariables('--color-text-primary') }
    },
    legend: {
        left: '10',
        bottom: '10',
        orient: 'vertical',
        textStyle: { color: getCssVariables('--color-text-primary') },
        backgroundColor: getCssVariables('--hover-smooth'),
        borderRadius: 10,
        padding: 15
    },
    series: [
        {
            name: 'وضیعت پروژه',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                formatter: '{d}%',
                fontSize: 25,
                fontWeight: 'bold',
                color: getCssVariables('--color-text-primary')
            },
            emphasis: {
                scale: true,
                scaleSize: 4,
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: getCssVariables('--color-text-primary')
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'زمین های بازی' },
                { value: 735, name: 'زمین های کشت' },
                { value: 580, name: 'آسفالت' },
                { value: 484, name: 'مدارس' },
                { value: 300, name: 'فضا های باز' },

            ],
            animationDuration: 1200,
            animationEasing: 'cubicOut',
        }
    ]
};

export function initDonutChart() {
    if (donutChart) donutChart.dispose();
    donutChart = echarts.init(donutChartDom);

    donutChartOption.backgroundColor = getCssVariables('--color-surface');
    donutChartOption.series[0].label.color = getCssVariables('--color-text-primary');
    donutChartOption.series[0].emphasis.label.color = getCssVariables('--color-text-primary');
    donutChartOption.tooltip.backgroundColor = getCssVariables('--border-color');
    donutChartOption.tooltip.textStyle.color = getCssVariables('--color-text-primary');
    donutChartOption.legend.textStyle.color = getCssVariables('--color-text-primary');
    donutChartOption.legend.backgroundColor = getCssVariables('--hover-smooth');

    donutChart.setOption(donutChartOption);
}
initDonutChart();

window.addEventListener('resize', () => {
    donutChart.resize();
});

donutChartOption && donutChart.setOption(donutChartOption);
