import ApexCharts from 'apexcharts';

export class Chart {
    constructor(element, data) {

        this.data = [
            { a: 12, b: 30 },
            { a: 12, b: 30 },
            { a: 12, b: 30 },
            { a: 12, b: 30 },
            { a: 12, b: 30 },
            { a: 12, b: 30 },
            { a: 12, b: 30 },
        ]

        element.addEventListener(
            'line', () => { this.line(element) }
        )

        element.addEventListener(
            'area', () => { this.area(element) }
        )
    }

    async line(element) {

        if (this.chart) { this.chart.destroy() }

        this.chart = new ApexCharts(element, {
            chart: {
                type: 'line'
            },
            series: [{
                name: 'sales',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }],
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        })

        this.chart.render()
    }

    async area(element) {

        if (this.chart) { this.chart.destroy() }

        this.chart = new ApexCharts(element, {
            chart: {
                type: 'area'
            },
            series: [{
                name: 'sales',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }],
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        })

        this.chart.render()
    }
}