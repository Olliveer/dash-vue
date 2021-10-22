import api from '../../../services/api';

export async function getRoutes({ commit }) {
  await api.get('/routes').then((response) => {
    commit('SET_ROUTES', response.data);
  });
}

export async function getTotalKmByDAY({ commit }) {
  const { data } = await api.get('/routes');

  let totalKm = [];

  data.forEach((item) => {
    const { date, initialKm, finalKm } = item;

    const verifyDate = totalKm.find((item) => item.data === date);

    if (verifyDate) {
      let total = verifyDate.total + (finalKm - initialKm);
      Object.assign(
        totalKm[totalKm.findIndex((element) => element.data === date)],
        { data: date, total: total }
      );
    } else {
      totalKm.push({
        data: date,
        total: finalKm - initialKm,
      });
    }
  });

  commit('SET_TOTAL_KM_BY_DAY', totalKm);
}

export async function getFinesByDay({ commit }) {
  const { data } = await api.get('/routes');

  let finesByDay = [];

  data.forEach((item) => {
    const { date, finesTotalAmount } = item;
    const verifyDate = finesByDay.find((item) => item.data === date);

    if (verifyDate) {
      let finesTotalAmountDay = verifyDate.finesTotal + finesTotalAmount;
      Object.assign(
        finesByDay[finesByDay.findIndex((element) => element.data === date)],
        { data: date, finesTotal: finesTotalAmountDay }
      );
    } else {
      finesByDay.push({
        data: date,
        finesTotal: finesTotalAmount,
      });
    }
  });

  commit('SET_TOTAL_FINES_BY_DAY', finesByDay);
}

export async function getTotalKm({ commit }) {
  const { data } = await api.get('/routes');

  const total = data.reduce((acc, total) => {
    return acc + (total.finalKm - total.initialKm);
  }, 0);

  commit('TOTAL_KM', total);
}

export async function getTotalFines({ commit }) {
  const { data } = await api.get('/routes');

  const total = data.reduce((acc, total) => {
    return acc + total.finesTotalAmount;
  }, 0);

  const totalFormatted = Number(total).toLocaleString('pt-BR', {
    styles: 'currency',
    currency: 'BRL',
  });

  commit('SET_TOTAL_FINES', totalFormatted);
}

export async function getTotalDeliveredPackages({ commit }) {
  const { data } = await api.get('/routes');

  const total = data.reduce((acc, total) => {
    return acc + total.deliveredPackages;
  }, 0);

  commit('SET_TOTAL_DELIVERED_PACKAGES', total);
}
