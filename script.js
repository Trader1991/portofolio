Tabletop.init({
  key: 'https://docs.google.com/spreadsheets/d/1YMnA04wSPLXowwML3MkilCD4MEUehontx8DoXIKGdvI/pubhtml',
  simpleSheet: false,
  wantedSheets: ['total presentasi'],
  callback: function(data, tabletop) {
    const sheetData = data['total presentasi'].elements;
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
