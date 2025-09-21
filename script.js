window.addEventListener('DOMContentLoaded', () => {
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pubhtml',
    callback: function(data, tabletop) {
      const tbody = document.querySelector('#portfolio-table tbody');
      data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.modal}</td>
          <td>${row.no}</td>
          <td>${row.tanggal}</td>
          <td>${row.profit}</td>
          <td>${row.keuntungan_dari_modal}</td>
          <td>${row.total_presentasi}</td>
        `;
        tbody.appendChild(tr);
      });
    },
    simpleSheet: false,
    wantedSheets: ['total presentasi']
  });
});
