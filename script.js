Tabletop.init({
  key: 'https://docs.google.com/spreadsheets/d/1YMnA04wSPLXowwML3MkilCD4MEUehontx8DoXIKGdvI/pubhtml',
  simpleSheet: false,
  wantedSheets: ['ttotal presentasi'], // atau nama tab yang sesuai
  callback: function(data, tabletop) {
    const sheetData = data['ttotal presentasi'].elements;
    const tbody = document.querySelector('#portfolio-table tbody');
    tbody.innerHTML = '';

    sheetData.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.modal || '-'}</td>
        <td>${row.no || '-'}</td>
        <td>${row.tanggal || '-'}</td>
        <td>${row.profit || '-'}</td>
        <td>${row.keuntungan_dari_modal || '-'}</td>
        <td>${row.total_presentasi || '-'}</td>
      `;
      tbody.appendChild(tr);
    });
  }
});
