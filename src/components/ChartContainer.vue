<template>
  <div class="container">
    <div
      class="row mt-3"
      v-if="totalKmByDay.length > 0 && totalFinesByDay.length > 0"
    >
      <div class="col text-center">
        <h2 class="p-2">Rotas</h2>
        <line-chart
          :chartKmByDayData="totalKmByDay"
          :chartFinesData="totalFinesByDay"
          :options="chartOption"
        >
        </line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './Chart.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data() {
    return {
      chartOption: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapState('route', ['totalKmByDay']),
    ...mapState('route', ['totalFinesByDay']),
    ...mapState('route', ['routes']),
  },
  methods: {
    ...mapActions('route', ['getRoutes']),
    ...mapActions('route', ['getTotalKmByDAY']),
    ...mapActions('route', ['getFinesByDay']),
  },

  mounted() {
    this.getRoutes();
    this.getTotalKmByDAY();
    this.getFinesByDay();
  },
};
</script>
