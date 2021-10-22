<template>
  <b-container class="mt-5">
    <b-jumbotron>
      <template #header>Dashboard-vue</template>

      <template #lead>
        <p>
          Uma dashboard simples que mostra as informações em gráfico das rotas
          percorridas em um intervalo de 15 dias.
        </p>

        <b-row class="text-center">
          <p>Tecnologias</p>
        </b-row>

        <b-container>
          <b-row align-h="center">
            <b-list-group style="max-width: 720px">
              <b-list-group-item
                href="https://bootstrap-vue.org/"
                target="_blank"
                ><b-icon icon="bootstrap" style="margin-right: 10px"></b-icon>
                Bootstrap-vue</b-list-group-item
              >
              <b-list-group-item href="https://vue-chartjs.org/" target="_blank"
                ><b-icon icon="bar-chart" style="margin-right: 10px"></b-icon>
                Vue-chartjs</b-list-group-item
              >
              <b-list-group-item href="https://www.chartjs.org/" target="_blank"
                ><b-icon
                  icon="bar-chart-line"
                  style="margin-right: 10px"
                ></b-icon>
                Chartjs</b-list-group-item
              >
              <b-list-group-item href="https://vuejs.org/" target="_blank"
                ><b-icon icon="app" style="margin-right: 10px"></b-icon>
                Vuejs</b-list-group-item
              >
              <b-list-group-item href="https://vuex.vuejs.org/" target="_blank"
                ><b-icon icon="archive" style="margin-right: 10px"></b-icon>
                Vuex</b-list-group-item
              >
            </b-list-group>
          </b-row>
        </b-container>
      </template>

      <hr class="my-4" />

      <b-row align-h="center">
        <b-button
          variant="primary"
          href="https://github.com/Olliveer/dash-vue"
          target="_blank"
          style=" width: 200px"
          ><b-icon icon="github" style="margin-right:10px;" />Github</b-button
        >
      </b-row>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: 'About',
};
</script>
