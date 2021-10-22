<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: {
    chartKmByDayData: {
      type: Array,
    },
    chartFinesData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    const date = this.chartKmByDayData.map((item) =>
      new Date(item.data).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    );
    const totalKmByDay = this.chartKmByDayData.map((item) => item.total);
    const averageDay = this.chartKmByDayData.map((item) => item.total / 2);
    const finesTotalByDay = this.chartFinesData.map((item) => item.finesTotal);

    this.renderChart(
      {
        labels: date,
        datasets: [
          {
            label: 'Total Km by day',
            data: totalKmByDay,
            backgroundColor: '#DADADA',
            order: 3,
          },
          {
            label: 'Average km',
            data: averageDay,
            type: 'line',
            backgroundColor: `rgba(255, 255, 255, 0)`,
            borderColor: '#D69E2E',
            order: 2,
          },
          {
            label: 'Fines By day',
            data: finesTotalByDay,
            type: 'line',
            backgroundColor: `rgba(255, 255, 255, 0)`,
            borderColor: '#0096B5',
            order: 1,
          },
        ],
      },
      this.options
    );
  },
};
</script>
