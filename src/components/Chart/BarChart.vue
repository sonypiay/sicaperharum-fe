<script setup>
import {Bar} from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from "chart.js";
import {reactive} from "vue";

const props = defineProps({
    dataSets: Array
});

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const barChartInstance = reactive({
    chartData: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        datasets: [
            {
                label: 'Total Kunjungan',
                data: props.dataSets,
                backgroundColor: '#028090',
                borderColor: '#028090',
                borderWidth: 1
            }
        ]
    },
    chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Grafik Kunjungan Tahunan'
            }
        }
    }
});
</script>

<template>
    <Bar class="uk-width-1-1" height="400" :options="barChartInstance.chartOptions" :data="barChartInstance.chartData" />
</template>

<style scoped>

</style>