// Chart.js Market Value Graph
const ctx = document.getElementById('marketChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Market Value (€m)',
      data: [0, 0, 0, 0, 0],
      borderColor: '#00ffcc',
      backgroundColor: 'rgba(0, 255, 204, 0.2)',
      tension: 0.3,
      fill: true,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#00ffcc',
      pointRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});
