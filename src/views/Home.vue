<template>
  <b-container class="bv-example-row">
    <b-row align-v="center" class="justify-content-between">
      <div class="col-sm-6  col-md-6 col-lg-3 col-xl-3">
        <stats-card class="mt-3">
          <div slot="header">
            <b-icon
              icon="truck"
              style="width: 5rem; height: 5rem;"
              class="me-2"
            ></b-icon>
          </div>
          <div slot="content" class="text-end me-1">
            <p class="card-category">Total Km</p>
            <h5 class="card-title">{{ totalKm }} km</h5>
          </div>
          <div slot="footer" class="">
            <b-icon icon="calendar" style="color: gray" class="me-2"></b-icon>
            <span style="font-size: 0.825rem; color: gray"
              >Última atualização: 22/04/2021</span
            >
          </div>
        </stats-card>
      </div>

      <div class="col-xl-3 col-md-6 col-lg-3 col-sm-6">
        <stats-card class="mt-3">
          <div slot="header">
            <b-icon
              icon="dash-square"
              style="width: 5rem; height: 5rem; color: orange;"
              class="me-2"
            ></b-icon>
          </div>
          <div slot="content" class="text-end me-1">
            <p class="card-category">Média total</p>
            <h5 class="card-title">{{ totalKm / 2 }} km</h5>
          </div>
          <div slot="footer" class="">
            <b-icon icon="calendar" style="color: gray" class="me-2"></b-icon>
            <span style="font-size: 0.825rem; color: gray"
              >Última atualização: 22/04/2021</span
            >
          </div>
        </stats-card>
      </div>

      <div class="col-xl-3 col-md-6 col-lg-3 col-sm-6">
        <stats-card class="mt-3">
          <div slot="header">
            <b-icon
              icon="arrow-down-square"
              style="width: 5rem; height: 5rem; color: red;"
              class="me-2"
            ></b-icon>
          </div>
          <div slot="content" class="text-end me-1">
            <p class="card-category">Total multas</p>
            <h5 class="card-title">
              {{ `R$ ${totalFines}` }}
            </h5>
          </div>
          <div slot="footer" class="">
            <b-icon icon="calendar" style="color: gray" class="me-2"></b-icon>
            <span style="font-size: 0.825rem; color: gray"
              >Última atualização: 22/04/2021</span
            >
          </div>
        </stats-card>
      </div>

      <div class="col-xl-3 col-md-6 col-lg-3 col-sm-6">
        <stats-card class="mt-3">
          <div slot="header">
            <b-icon
              icon="box-seam"
              style="width: 5rem; height: 5rem; color: blue;"
              class="me-2"
            ></b-icon>
          </div>
          <div slot="content" class="text-end me-1">
            <p class="card-category">Encomendas</p>
            <h5 class="card-title">{{ deliveredPackages }}</h5>
          </div>
          <div slot="footer" class="">
            <b-icon icon="calendar" style="color: gray" class="me-2"></b-icon>
            <span style="font-size: 0.825rem; color: gray"
              >Última atualização: 22/04/2021</span
            >
          </div>
        </stats-card>
      </div>
    </b-row>
    <chart-container />
  </b-container>
</template>

<script>
import ChartContainer from '../components/ChartContainer.vue';
import StatsCard from '../components/StatsCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    'chart-container': ChartContainer,
    'stats-card': StatsCard,
  },
  computed: {
    ...mapState('route', ['totalKm']),
    ...mapState('route', ['totalFines']),
    ...mapState('route', ['deliveredPackages']),
  },
  methods: {
    ...mapActions('route', ['getTotalKm']),
    ...mapActions('route', ['getTotalFines']),
    ...mapActions('route', ['getTotalDeliveredPackages']),
  },
  mounted() {
    this.getTotalKm();
    this.getTotalFines();
    this.getTotalDeliveredPackages();
  },
};
</script>

<style scoped></style>
