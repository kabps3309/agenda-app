const API_URL = "https://script.google.com/macros/s/AKfycbz5KSoaxZcPcPcYx9ruW13vHxIpxbwk20vhbrQWA-Dm-vt30I4B6H80MI5spgopDh8S/exec";

async function loadData() {
  alert(API_URL + "?action=api_get");
  const res = await fetch(API_URL + "?action=api_get"); alert(res.stringify());
  const data = await res.json();
  alert(data);
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = "";

  data.forEach(row => {
    const tr = `
      <tr>
        <td>${row.tanggal}</td>
        <td>${row.jam}</td>
        <td>${row.kegiatan}</td>
        <td>${row.peserta}</td>
        <td>${row.lokasi}</td>
      </tr>
    `;
    tbody.innerHTML += tr;
  });
}
