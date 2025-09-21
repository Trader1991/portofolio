window.addEventListener('DOMContentLoaded', () => {
  const sheetURL = 'https://docs.google.com/spreadsheets/d/1YMnA04wSPLXowwML3MkilCD4MEUehontx8DoXIKGdvI/pubhtml';

  Tabletop.init({
    key: sheetURL,
    simpleSheet: false,
    wantedSheets: ['total presentasi'], // nama tab sheet kamu
    callback: function(data, tabletop) {
      const sheetData = data['total presentasi'].elements;
      const tbody = document.querySelector('#portfolio-table tbody');
      tbody.innerHTML = ''; // bersihkan isi sebelumnya

      sheetData.forEach(row => {
        // Filter jika ingin tampilkan hanya profit positif, bisa diaktifkan
        // if (parseFloat(row.profit) <= 0) return;

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
});
