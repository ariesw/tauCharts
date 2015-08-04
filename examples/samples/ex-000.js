window.samples.push({

    type: 'scatterplot',
    x: ['Age'],
    y: ['Total Medals'],

    plugins: [
        tauCharts.api.plugins.get('legend')(),
        tauCharts.api.plugins.get('tooltip')({
            fields: ['Athlete', 'Age', 'Total Medals', 'Sport']
        })
    ],

    data: olimpics

});