window.addEventListener('DOMContentLoaded', () => {
  const sheetURL = 'https://docs.google.com/spreadsheets/d/1YMnA04wSPLXowwML3MkilCD4MEUehontx8DoXIKGdvI/pubhtml';

  Tabletop.init({
    key: sheetURL,
    simpleSheet: false,
    wantedSheets: ['ttotal presentasi'], // pastikan nama tab persis seperti ini
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
          <td>${row['keuntungan dari modal'] || '-'}</td>
          <td>${row['total presentasi'] || '-'}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  });
});
