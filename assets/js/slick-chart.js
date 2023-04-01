var options = {
    chart: {
        height: 380,
        type: "line",
        selection: true,
    },
    grid: {
        row: {
            colors: ['#ffffff', 'transparent'],
        },
        column: {
            colors: ['#ffffff', 'transparent'],
        },
        xaxis: {
            lines: {
                show: true
            }
        }
    },

    series: [
        {
            data: [45, 52, 38, 45]
        },
        {
            data: [12, 42, 68, 33]
        }
    ],
    labels: ["Jan", "Feb", "Mar", "Apr"],
    markers: {
        size: 0
    },
    stroke: {
        width: 4,
        curve: 'smooth',
        lineCap: 'round',
    },

};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
