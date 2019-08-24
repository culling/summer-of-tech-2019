
//Each bar represents a single discrete quantity.
function exampleData() {
    return [
        {
            key: "Transport",
            values: [
                {
                    "label": "New Zealand Emission Target 2020",
                    "value": 10
                },
                {
                    "label": "New Zealand Average",
                    "value": 15
                },
                {
                    "label": "Your Impact",
                    "value": 30.00
                }
            ]
        }
    ]

}


nv.addGraph(function () {
    console.log("Add graph hit!");

    var chart = nv.models.discreteBarChart()
        .x(function (d) { return d.label })    //Specify the data accessors.
        .y(function (d) { return d.value })
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        ;

    d3.select('#graph-example-01')
        .datum(exampleData())
        .call(chart);

    nv.utils.windowResize(chart.update);
    chart.duration = 300;
    chart.tooltips = false;
    return chart;
});

//$(nv.addGraph());
