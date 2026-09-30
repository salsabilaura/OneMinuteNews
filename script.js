/* ==========================================================
   OMN – One Minute News
   ----------------------------------------------------------
   CARA MENGGANTI KONTEN
   1. Semua berita ada di objek DATA di bawah ini.
   2. Untuk memakai foto asli, isi properti `img` dengan URL gambar,
      misalnya: img: "https://situs-anda.com/foto/krakatau.jpg".
      Jika `img` kosong, ilustrasi bawaan (motif) yang dipakai.
   3. Nanti data ini bisa diganti dengan hasil fetch() dari API/CMS Anda.
   ========================================================== */
'use strict';

/* ---------- Data contoh ---------- */
const DATA = {
  slides: [
    { id: 's1', cat: 'Nasional', t1: 'Gunung Anak Krakatau', t2: 'Kembali Bergejolak', motif: 'volcano', img: '',
      text: 'Aktivitas vulkanik Gunung Anak Krakatau kembali meningkat sejak Jumat (4/9). Erupsi ini berdampak pada sejumlah wilayah, mulai dari Lampung, Banten, Jakarta hingga Jawa Barat.',
      sum: 'Aktivitas vulkanik Gunung Anak Krakatau kembali meningkat sejak Jumat (4/9). Erupsi ini berdampak pada sejumlah wilayah, mulai dari Lampung, Banten, Jakarta hingga Jawa Barat.' },
    { id: 's2', cat: 'Ekonomi', t1: 'Harga BBM Kembali', t2: 'Jadi Sorotan', motif: 'fuel', img: '',
      text: 'Perubahan harga bahan bakar kembali ramai dibicarakan. Pertamina memberikan tanggapan atas sorotan publik.',
      sum: 'Perubahan harga bahan bakar kembali ramai dibicarakan. Pertamina memberikan tanggapan atas sorotan publik.' },
    { id: 's3', cat: 'Politik', t1: 'Prabowo Panggil Panglima TNI', t2: 'dan Kapolri ke Hambalang', motif: 'person', img: '',
      text: 'Presiden memanggil Panglima TNI dan Kapolri untuk membahas perkembangan situasi nasional, termasuk karhutla.',
      sum: 'Presiden memanggil Panglima TNI dan Kapolri untuk membahas perkembangan situasi nasional, termasuk karhutla.' },
    { id: 's4', cat: 'Ekonomi', t1: 'Rupiah Melemah Lagi,', t2: 'Pemerintah Siapkan Antisipasi', motif: 'coin', img: '',
      text: 'Menteri Keuangan menyatakan pemerintah sudah menyiapkan langkah untuk menjaga stabilitas nilai tukar rupiah.',
      sum: 'Menteri Keuangan menyatakan pemerintah sudah menyiapkan langkah untuk menjaga stabilitas nilai tukar rupiah.' },
    { id: 's5', cat: 'Teknologi', t1: 'Indonesia Siap Jadi', t2: 'Pusat Data AI Asia Tenggara', motif: 'chip', img: '',
      text: 'Pemerintah menargetkan Indonesia menjadi pusat data dan pengembangan AI di kawasan Asia Tenggara dalam 2 tahun ke depan.',
      sum: 'Pemerintah menargetkan Indonesia menjadi pusat data dan pengembangan AI di kawasan Asia Tenggara dalam 2 tahun ke depan.' }
  ],

  terkini: [
    { id: 't1', time: '21:15', cat: 'Ekonomi', title: 'Purbaya: Jangan Ngaco! Soal Hitungan Dana Bencana', motif: 'person', img: '',
      sum: 'Menteri Keuangan menanggapi perdebatan soal hitungan dana bencana dan meminta perhitungan dilakukan dengan data yang benar.' },
    { id: 't2', time: '20:42', cat: 'Ekonomi', title: 'Pertalite Bakal Dibatasi Berdasarkan Desil, Ini Kata Pertamina', motif: 'fuel', img: '',
      sum: 'Rencana pembatasan Pertalite berdasarkan kelompok desil mendapat tanggapan dari Pertamina.' },
    { id: 't3', time: '19:30', cat: 'Politik', title: 'Kaesang Minta Masa Jabatan Tak Terbatas, DPR: Presiden Tidak Baik', motif: 'building', img: '',
      sum: 'Usulan masa jabatan tanpa batas memicu tanggapan dari anggota DPR.' },
    { id: 't4', time: '18:12', cat: 'Hukum', title: 'Kejagung Sita Rp338,3 M Kasus Korupsi IUP Aseng', motif: 'building', img: '',
      sum: 'Kejaksaan Agung menyita uang senilai Rp338,3 miliar dalam penyidikan kasus korupsi izin usaha pertambangan.' },
    { id: 't5', time: '16:45', cat: 'Nasional', title: 'Rocky Gerung Tolak Hukuman Mati untuk Koruptor', motif: 'person', img: '',
      sum: 'Pengamat Rocky Gerung menyatakan penolakannya terhadap hukuman mati bagi pelaku korupsi.' }
  ],

  sixty: [
    { id: 'v1', cat: 'Ekonomi', title: 'Harga BBM Kembali Jadi Sorotan, Ini Respons Pertamina', dur: 58, hot: true, motif: 'fuel', img: '',
      points: ['Harga bahan bakar kembali menjadi bahan pembicaraan publik.', 'Pertamina memberi tanggapan atas keluhan dan pertanyaan konsumen.', 'Pantau pengumuman resmi untuk penyesuaian harga terbaru.'] },
    { id: 'v2', cat: 'Politik', title: 'Prabowo Panggil Panglima TNI dan Kapolri ke Hambalang, Bahas Situasi Nasional', dur: 52, motif: 'person', img: '',
      points: ['Presiden memanggil Panglima TNI dan Kapolri ke Hambalang.', 'Pertemuan membahas perkembangan situasi nasional.', 'Salah satu topiknya adalah penanganan karhutla.'] },
    { id: 'v3', cat: 'Nasional', title: 'Erupsi Anak Krakatau Ganggu Penerbangan & Sekolah', dur: 49, motif: 'volcano', img: '',
      points: ['Aktivitas vulkanik meningkat sejak Jumat (4/9).', 'Sejumlah penerbangan tertunda akibat abu vulkanik.', 'Beberapa sekolah menyesuaikan jadwal belajar.'] },
    { id: 'v4', cat: 'Ekonomi', title: 'Pertalite Bakal Dibatasi Berdasarkan Desil', dur: 56, motif: 'station', img: '',
      points: ['Pemerintah membahas pembatasan Pertalite berdasarkan desil.', 'Pertamina menyatakan siap mengikuti aturan yang ditetapkan.', 'Detail pelaksanaan masih menunggu keputusan resmi.'] }
  ],

  sections: [
    { key: 'politik', label: 'Politik', big: true, items: [
      { id: 'p1', title: 'Prabowo Panggil Panglima TNI dan Kapolri ke Hambalang, Bahas Situasi Nasional', ago: '2 jam lalu', motif: 'person', img: '',
        sum: 'Presiden Prabowo Subianto memanggil Panglima TNI dan Kapolri ke Hambalang untuk membahas perkembangan situasi nasional, termasuk karhutla.' }] },
    { key: 'ekonomi', label: 'Ekonomi', big: true, items: [
      { id: 'e1', title: 'Rupiah Melemah Lagi, Surabaya Pastikan Sudah Siapkan Langkah Antisipasi', ago: '3 jam lalu', motif: 'coin', img: '',
        sum: 'Menteri Keuangan Purbaya Yudhi Sadewa menyatakan pemerintah sudah menyiapkan langkah untuk menjaga stabilitas nilai tukar rupiah.' }] },
    { key: 'teknologi', label: 'Teknologi', big: true, items: [
      { id: 'k1', title: 'Indonesia Siap Jadi Pusat Data AI di Asia Tenggara', ago: '4 jam lalu', motif: 'chip', img: '',
        sum: 'Pemerintah menargetkan Indonesia menjadi pusat data dan pengembangan AI di kawasan Asia Tenggara dalam 2 tahun ke depan.' }] },
    { key: 'bisnis', label: 'Bisnis', items: [
      { id: 'b1', title: 'Ekspor Indonesia Tembus Rekor, Didorong Permintaan Global', ago: '5 jam lalu', motif: 'ship', img: '',
        sum: 'Nilai ekspor Indonesia mencatat rekor baru, didorong naiknya permintaan global.' }] },
    { key: 'lifestyle', label: 'Lifestyle', items: [
      { id: 'l1', title: 'SKYE Salon: Fast Nailing, High Quality, Satu Tempat, Semua Kebutuhan', ago: '6 jam lalu', motif: 'salon', img: '',
        sum: 'Salon kecantikan yang menawarkan layanan kuku cepat dengan kualitas terjaga dalam satu tempat.' }] },
    { key: 'internasional', label: 'Internasional', items: [
      { id: 'i1', title: 'Ketegangan AS-China Kembali Memanas, Dunia Waspada', ago: '7 jam lalu', motif: 'flags', img: '',
        sum: 'Hubungan Amerika Serikat dan China kembali menegang dan memicu kewaspadaan di banyak negara.' }] }
  ],

  trending: [
    { id: 'r1', cat: 'Nasional', title: 'Erupsi Anak Krakatau Ganggu Penerbangan, 1.588 Flight Delay', motif: 'volcano', img: '',
      sum: 'Erupsi Gunung Anak Krakatau menyebabkan 1.588 penerbangan tertunda.' },
    { id: 'r2', ref: 't1' },
    { id: 'r3', cat: 'Ekonomi', title: 'Pertalite Dibatasi Desil 9–10, Ini Respons Pertamina', motif: 'station', img: '',
      sum: 'Pembatasan Pertalite untuk kelompok desil 9–10 mendapat tanggapan dari Pertamina.' },
    { id: 'r4', cat: 'Politik', title: 'Kades Minta Jabatan Tak Terbatas, DPR Angkat Bicara', motif: 'building', img: '',
      sum: 'Permintaan masa jabatan kepala desa tanpa batas memicu tanggapan dari DPR.' },
    { id: 'r5', ref: 't5' }
  ]
};

/* ---------- Utilitas ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ico = n => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const pad = n => String(n).padStart(2, '0');
const mmss = s => `${pad(Math.floor(s / 60))}:${pad(Math.floor(s % 60))}`;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Indeks semua berita berdasarkan id */
const ALL = new Map();
DATA.slides.forEach(s => { s.title = `${s.t1} ${s.t2}`; ALL.set(s.id, s); });
DATA.terkini.forEach(o => ALL.set(o.id, o));
DATA.sixty.forEach(o => ALL.set(o.id, o));
DATA.sections.forEach(sec => sec.items.forEach(o => { o.cat = sec.label; ALL.set(o.id, o); }));
DATA.trending = DATA.trending.map(t => t.ref ? { ...ALL.get(t.ref), id: t.id } : t);
DATA.trending.forEach(o => ALL.set(o.id, o));

/* ---------- Ilustrasi bawaan (dipakai bila `img` kosong) ---------- */
const svg = inner => `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${inner}</svg>`;
const ART = {
  volcano: svg(`<defs><linearGradient id="gV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#18202e"/><stop offset=".6" stop-color="#465164"/><stop offset="1" stop-color="#858a92"/></linearGradient></defs>
    <rect width="400" height="250" fill="url(#gV)"/>
    <g fill="#33363c"><circle cx="255" cy="72" r="46"/><circle cx="295" cy="55" r="40"/><circle cx="218" cy="102" r="34"/><circle cx="272" cy="108" r="38"/><circle cx="318" cy="92" r="30"/><circle cx="240" cy="40" r="26"/></g>
    <g fill="#5a5e66" opacity=".75"><circle cx="258" cy="62" r="28"/><circle cx="300" cy="72" r="24"/></g>
    <path d="M110 192 L236 130 L264 130 L392 192Z" fill="#14171d"/><rect y="192" width="400" height="58" fill="#0c1420"/>
    <path d="M0 206h400" stroke="#2c3b52" opacity=".6"/>`),
  fuel: svg(`<rect width="400" height="250" fill="#240a0d"/><rect x="30" width="96" height="250" fill="#8e1119"/>
    <path d="M176 220v-70a32 32 0 0 1 32-32h52" stroke="#1a7a3e" stroke-width="26" fill="none" stroke-linecap="round"/>
    <rect x="258" y="98" width="72" height="32" rx="9" fill="#1a7a3e"/><rect x="326" y="106" width="60" height="10" fill="#c9ccd1"/>
    <circle cx="176" cy="222" r="10" fill="#0e4d27"/>`),
  station: svg(`<defs><linearGradient id="gS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa7e0"/><stop offset="1" stop-color="#cfe6f7"/></linearGradient></defs>
    <rect width="400" height="250" fill="url(#gS)"/><rect x="20" y="70" width="360" height="26" fill="#f4f4f4"/><rect x="20" y="96" width="360" height="8" fill="#c8202c"/>
    <rect x="60" y="104" width="14" height="110" fill="#e8e8e8"/><rect x="326" y="104" width="14" height="110" fill="#e8e8e8"/>
    <rect x="140" y="150" width="46" height="64" rx="4" fill="#c8202c"/><rect x="214" y="150" width="46" height="64" rx="4" fill="#c8202c"/>
    <rect y="214" width="400" height="36" fill="#6b6f76"/><text x="200" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#c8202c" font-family="Arial">PERTAMINA</text>`),
  person: svg(`<rect width="400" height="250" fill="#3a2a1f"/><rect width="120" height="125" fill="#b3151f" opacity=".9"/><rect y="125" width="120" height="125" fill="#e7e3da" opacity=".9"/>
    <circle cx="240" cy="98" r="38" fill="#c69a7a"/><path d="M180 84a60 34 0 0 1 120 0z" fill="#111"/>
    <path d="M136 250c0-62 46-98 104-98s104 36 104 98z" fill="#1a2233"/><path d="M224 158l16 44 16-44z" fill="#d9d5cc"/><path d="M236 164l4 46 4-46z" fill="#b3151f"/>`),
  coin: svg(`<rect width="400" height="250" fill="#1a110f"/>
    <g transform="rotate(-14 200 125)"><rect x="80" y="64" width="200" height="106" rx="6" fill="#c2453c"/><rect x="90" y="74" width="180" height="86" rx="3" fill="none" stroke="#f2c4b8" stroke-width="2"/><circle cx="180" cy="117" r="26" fill="#f2c4b8" opacity=".7"/></g>
    <g transform="rotate(9 250 145)"><rect x="150" y="96" width="200" height="106" rx="6" fill="#dc6d5e"/><rect x="160" y="106" width="180" height="86" rx="3" fill="none" stroke="#fbd9cf" stroke-width="2"/><circle cx="250" cy="149" r="26" fill="#fbd9cf" opacity=".7"/></g>`),
  chip: svg(`<rect width="400" height="250" fill="#081020"/><rect x="104" y="52" width="192" height="118" rx="8" fill="#0e1c3a" stroke="#3b82f6" stroke-width="2"/>
    <rect x="146" y="80" width="108" height="56" rx="8" fill="none" stroke="#60a5fa" stroke-width="3"/>
    <text x="200" y="120" text-anchor="middle" font-size="36" font-weight="800" fill="#93c5fd" font-family="Arial">AI</text>
    <path d="M84 180h232l22 16H62z" fill="#1f2a44"/><g stroke="#3b82f6" stroke-width="2" opacity=".6"><path d="M40 60h50M40 110h50M310 60h50M310 110h50M60 60v40M340 60v40"/></g>`),
  ship: svg(`<defs><linearGradient id="gH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b8fd8"/><stop offset="1" stop-color="#bfe0f6"/></linearGradient></defs>
    <rect width="400" height="250" fill="url(#gH)"/><rect y="188" width="400" height="62" fill="#1c5f9e"/>
    <g><rect x="60" y="130" width="40" height="22" fill="#d9503b"/><rect x="102" y="130" width="40" height="22" fill="#2f6fb5"/><rect x="144" y="130" width="40" height="22" fill="#e6b93a"/><rect x="186" y="130" width="40" height="22" fill="#d9503b"/><rect x="228" y="130" width="40" height="22" fill="#2f9d6b"/>
    <rect x="80" y="154" width="40" height="22" fill="#2f6fb5"/><rect x="122" y="154" width="40" height="22" fill="#d9503b"/><rect x="164" y="154" width="40" height="22" fill="#e6b93a"/><rect x="206" y="154" width="40" height="22" fill="#2f9d6b"/></g>
    <path d="M40 176h250l-20 20H62z" fill="#22262d"/><g stroke="#d9503b" stroke-width="5" fill="none"><path d="M320 190V60l40 0M320 60l-50 26"/></g>`),
  building: svg(`<rect width="400" height="250" fill="#2b323d"/><rect x="90" y="46" width="220" height="176" fill="#8d99a8"/>
    <g fill="#d5e2f0" opacity=".85">${Array.from({ length: 4 }, (_, r) => Array.from({ length: 7 }, (_, c) => `<rect x="${104 + c * 28}" y="${62 + r * 32}" width="16" height="20"/>`).join('')).join('')}</g>
    <rect x="176" y="176" width="48" height="46" fill="#3c4553"/><rect x="70" y="222" width="260" height="10" fill="#1b2029"/>`),
  flags: svg(`<rect width="200" height="250" fill="#1e3a8a"/><g fill="#c8102e">${[0, 1, 2, 3, 4, 5].map(i => `<rect x="90" y="${i * 42}" width="110" height="21"/>`).join('')}</g>
    <rect x="90" y="21" width="110" height="21" fill="#fff" opacity=".9"/><rect width="90" height="126" fill="#1e3a8a"/><rect x="200" width="200" height="250" fill="#c8102e"/>
    <text x="252" y="80" font-size="40" fill="#ffde00" font-family="Arial">★</text><text x="298" y="52" font-size="16" fill="#ffde00" font-family="Arial">★</text><text x="298" y="90" font-size="16" fill="#ffde00" font-family="Arial">★</text>`),
  salon: svg(`<rect width="400" height="250" fill="#d8ccbb"/><rect y="170" width="400" height="80" fill="#b39d80"/>
    <g fill="#f4efe6" stroke="#8a7355" stroke-width="3"><rect x="40" y="40" width="70" height="90" rx="4"/><rect x="150" y="40" width="70" height="90" rx="4"/><rect x="260" y="40" width="70" height="90" rx="4"/></g>
    <g fill="#5a4a36"><rect x="38" y="150" width="74" height="10"/><rect x="148" y="150" width="74" height="10"/><rect x="258" y="150" width="74" height="10"/></g>
    <g fill="#e9d9c4"><circle cx="75" cy="196" r="14"/><circle cx="185" cy="196" r="14"/><circle cx="295" cy="196" r="14"/></g>`),
  news: svg(`<rect width="400" height="250" fill="#14141a"/><circle cx="200" cy="125" r="44" fill="none" stroke="#d4a94a" stroke-width="4"/><path d="M200 125V96M200 125l20 12" stroke="#d4a94a" stroke-width="4" stroke-linecap="round"/>`)
};
const art = it => it.img
  ? `<img src="${esc(it.img)}" alt="" loading="lazy">`
  : (ART[it.motif] || ART.news);

/* ---------- Tanggal & jam WIB ---------- */
function initClock() {
  const d = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const t = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false });
  const tick = () => {
    const now = new Date();
    $('#today').textContent = d.format(now);
    $('#clock').textContent = `${t.format(now).replace('.', ':')} WIB`;
  };
  tick();
  setInterval(tick, 20000);
  $('#year').textContent = new Date().getFullYear();
}

/* ---------- Hero slider ---------- */
function initHero() {
  const root = $('#hero');
  const n = DATA.slides.length;
  let cur = 0;

  root.innerHTML = DATA.slides.map((s, i) => `
    <article class="slide${i === 0 ? ' on' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} dari ${n}" ${i ? 'aria-hidden="true"' : ''}>
      <div class="slide-art">${art(s)}</div>
      <div class="slide-body">
        <span class="badge">${i === 0 ? 'Breaking News' : esc(s.cat)}</span>
        ${i === 0 ? '<h1 class="slide-title">' : '<h2 class="slide-title">'}<span>${esc(s.t1)}</span><span class="gold">${esc(s.t2)}</span>${i === 0 ? '</h1>' : '</h2>'}
        <p>${esc(s.text)}</p>
        <button class="readmore" type="button" data-open="${s.id}">${ico('watch')}Baca selengkapnya${ico('arrow')}</button>
      </div>
    </article>`).join('') + `
    <div class="hero-ctl">
      <div class="segs">${DATA.slides.map((_, i) => `<button class="seg" type="button" data-go="${i}" aria-label="Buka slide ${i + 1}"><i></i></button>`).join('')}</div>
      <div class="pager">
        <span id="counter" aria-live="off">01 / ${pad(n)}</span>
        <button class="icon-btn" type="button" data-step="-1" aria-label="Slide sebelumnya">${ico('left')}</button>
        <button class="icon-btn" type="button" data-step="1" aria-label="Slide berikutnya">${ico('right')}</button>
      </div>
    </div>`;

  const slides = $$('.slide', root);
  const segs = $$('.seg', root);

  function go(i) {
    cur = (i + n) % n;
    slides.forEach((s, k) => {
      s.classList.toggle('on', k === cur);
      s.setAttribute('aria-hidden', k === cur ? 'false' : 'true');
    });
    segs.forEach((s, k) => {
      s.classList.remove('on', 'done');
      if (k < cur) s.classList.add('done');
    });
    // beri jeda satu frame agar animasi progres mulai ulang
    requestAnimationFrame(() => segs[cur].classList.add('on'));
    $('#counter', root).textContent = `${pad(cur + 1)} / ${pad(n)}`;
  }

  root.addEventListener('click', e => {
    const step = e.target.closest('[data-step]');
    const goto = e.target.closest('[data-go]');
    if (step) go(cur + Number(step.dataset.step));
    if (goto) go(Number(goto.dataset.go));
  });
  // Slide berganti otomatis saat animasi progres selesai (dijeda saat hover/fokus)
  root.addEventListener('animationend', e => {
    if (!reduceMotion && e.target.closest('.seg.on')) go(cur + 1);
  });
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') go(cur + 1);
    if (e.key === 'ArrowLeft') go(cur - 1);
  });
  // Geser di layar sentuh
  let x0 = null;
  root.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
    x0 = null;
  });
  go(0);
}

/* ---------- Render daftar ---------- */
function renderTerkini() {
  $('#terkiniList').innerHTML = DATA.terkini.map(t => `
    <li><div class="t-item">
      <time datetime="${t.time}">${t.time}</time>
      <button type="button" class="stretch t-title" data-open="${t.id}">${esc(t.title)}</button>
      <span class="cat">${esc(t.cat)}</span>${ico('right')}
    </div></li>`).join('');
}

function renderSixty() {
  $('#sixtyList').innerHTML = DATA.sixty.map(v => `
    <li><article class="s-card">
      <div class="thumb">${art(v)}
        ${v.hot ? '<span class="s-hot">Hot News</span>' : ''}
        <span class="s-play" aria-hidden="true">${ico('play')}</span>
        <span class="s-dur">${mmss(v.dur)}</span>
      </div>
      <div class="s-body">
        <button type="button" class="stretch s-title" data-open="${v.id}" aria-label="Putar: ${esc(v.title)} (${v.dur} detik)">${esc(v.title)}</button>
        <span class="cat">${esc(v.cat)}</span>
      </div>
    </article></li>`).join('');
}

function renderSections() {
  const big = DATA.sections.filter(s => s.big).map(sec => {
    const it = sec.items[0];
    return `
    <section class="cat-card" id="${sec.key}" aria-labelledby="h-${sec.key}">
      <header class="sec-head"><h2 id="h-${sec.key}">${esc(sec.label)}</h2>
        <button class="see-all" type="button" data-search="${esc(sec.label)}">Lihat semua ${ico('arrow')}</button></header>
      <div class="thumb">${art(it)}</div>
      <div class="card-body">
        <h3><button type="button" class="stretch" data-open="${it.id}">${esc(it.title)}</button></h3>
        <p>${esc(it.sum)}</p>
        <div class="meta"><span class="cat">${esc(sec.label)}</span><span>${esc(it.ago)}</span>${ico('arrow')}</div>
      </div>
    </section>`;
  }).join('');
  $('#catGrid').insertAdjacentHTML('afterbegin', big);

  const small = DATA.sections.filter(s => !s.big).map(sec => {
    const it = sec.items[0];
    return `
    <section class="mini-card" id="${sec.key}" aria-labelledby="h-${sec.key}">
      <h2 id="h-${sec.key}">${esc(sec.label)}</h2>
      <div class="thumb">${art(it)}</div>
      <h3><button type="button" class="stretch" data-open="${it.id}">${esc(it.title)}</button></h3>
      <div class="meta"><span class="cat">${esc(sec.label)}</span><span>${esc(it.ago)}</span>${ico('arrow')}</div>
    </section>`;
  }).join('');
  $('#moreGrid').insertAdjacentHTML('afterbegin', small);
}

function renderTrending() {
  $('#trendingList').innerHTML = DATA.trending.map((t, i) => `
    <li><div class="tr-item">
      <span class="rank" aria-hidden="true">${i + 1}</span>
      <div class="tr-thumb thumb"><span class="rank" aria-hidden="true">${i + 1}</span>${art(t)}</div>
      <button type="button" class="stretch tr-t" data-open="${t.id}"><span class="sr-only">Nomor ${i + 1}: </span>${esc(t.title)}</button>
      <span class="cat tr-c">${esc(t.cat)}</span>
    </div></li>`).join('');
  $('#drawerList').innerHTML = $$('#mainNav a').map(a => `<li><a href="${a.getAttribute('href')}">${esc(a.textContent)}</a></li>`).join('');
}

/* ---------- Dialog berita / pemutar 60 detik ---------- */
const dlg = $('#dlg');
const body = $('#dlgBody');
let player = null;

const store = {
  get() { try { return JSON.parse(localStorage.getItem('omn-saved') || '[]'); } catch { return []; } },
  set(v) { try { localStorage.setItem('omn-saved', JSON.stringify(v)); } catch { /* penyimpanan tidak tersedia */ } }
};

function stopPlayer() { if (player) { clearInterval(player.timer); player = null; } }

function openItem(id) {
  const it = ALL.get(id);
  if (!it) return;
  closeSearch();
  stopPlayer();
  const video = Array.isArray(it.points);
  const saved = store.get().includes(id);
  body.innerHTML = `
    <div class="dlg-art thumb">${art(it)}</div>
    <div class="dlg-txt">
      <p class="dlg-meta"><span class="cat">${esc(it.cat)}</span>${it.time ? `<time>${esc(it.time)} WIB</time>` : ''}${it.ago ? `<span>${esc(it.ago)}</span>` : ''}${video ? `<span>Ringkasan ${it.dur} detik</span>` : ''}</p>
      <h2 id="dlgTitle">${esc(it.title)}</h2>
      ${video ? `
        <div class="player">
          <div class="bar" role="progressbar" aria-label="Progres ringkasan" aria-valuemin="0" aria-valuemax="${it.dur}" aria-valuenow="0"><i></i></div>
          <div class="p-row"><button class="btn" id="ppBtn" type="button">${ico('pause')}Jeda</button><span id="ppTime">00:00 / ${mmss(it.dur)}</span></div>
          <ol class="points">${it.points.map(p => `<li>${esc(p)}</li>`).join('')}</ol>
        </div>` : `<p class="dlg-sum">${esc(it.sum || '')}</p>`}
      <p class="dlg-note">Ini konten contoh. Hubungkan ke CMS atau API Anda untuk artikel lengkap.</p>
      <div class="dlg-actions">
        <button class="btn" type="button" data-save="${id}" aria-pressed="${saved}">${ico('bookmark')}<span>${saved ? 'Tersimpan' : 'Simpan berita'}</span></button>
      </div>
    </div>`;
  if (!dlg.open) dlg.showModal();
  if (video) startPlayer(it);
}

function startPlayer(it) {
  const bar = $('.bar', body), fill = $('.bar i', body), time = $('#ppTime', body), btn = $('#ppBtn', body);
  const items = $$('.points li', body);
  player = { t: 0, playing: true, timer: null };
  const paint = () => {
    const p = player.t / it.dur;
    fill.style.width = `${Math.min(p, 1) * 100}%`;
    bar.setAttribute('aria-valuenow', Math.floor(player.t));
    time.textContent = `${mmss(player.t)} / ${mmss(it.dur)}`;
    items.forEach((li, k) => li.classList.toggle('on', p >= k / items.length || player.t >= it.dur));
  };
  const label = state => { btn.innerHTML = `${ico(state === 'pause' ? 'pause' : 'play')}${{ pause: 'Jeda', play: 'Lanjut', replay: 'Putar ulang' }[state]}`; };
  player.timer = setInterval(() => {
    if (!player.playing) return;
    player.t = Math.min(player.t + 0.25, it.dur);
    paint();
    if (player.t >= it.dur) { player.playing = false; label('replay'); }
  }, 250);
  btn.addEventListener('click', () => {
    if (player.t >= it.dur) { player.t = 0; player.playing = true; label('pause'); paint(); return; }
    player.playing = !player.playing;
    label(player.playing ? 'pause' : 'play');
  });
  paint();
}

function openSaved() {
  stopPlayer();
  const list = store.get().map(id => ALL.get(id)).filter(Boolean);
  body.innerHTML = `<div class="saved-list"><h2 id="dlgTitle">Berita tersimpan</h2>
    ${list.length
      ? `<ul>${list.map(it => `<li><button type="button" data-open="${it.id}"><span>${esc(it.title)}</span><span class="cat">${esc(it.cat)}</span></button></li>`).join('')}</ul>`
      : '<p class="empty">Belum ada berita tersimpan. Buka sebuah berita, lalu pilih “Simpan berita”.</p>'}</div>`;
  if (!dlg.open) dlg.showModal();
}

dlg.addEventListener('close', stopPlayer);
dlg.addEventListener('click', e => {
  if (e.target === dlg) dlg.close();               // klik latar
  const sv = e.target.closest('[data-save]');
  if (sv) {
    const id = sv.dataset.save;
    let list = store.get();
    const now = !list.includes(id);
    list = now ? [...list, id] : list.filter(x => x !== id);
    store.set(list);
    sv.setAttribute('aria-pressed', now);
    $('span', sv).textContent = now ? 'Tersimpan' : 'Simpan berita';
    toast(now ? 'Berita disimpan' : 'Berita dihapus dari tersimpan');
  }
});
$('#dlgClose').addEventListener('click', () => dlg.close());

/* ---------- Pencarian ---------- */
const sp = $('#searchPanel'), sInput = $('#searchInput'), sList = $('#searchResults');
let showAll = false;

function renderResults() {
  const q = sInput.value.trim().toLowerCase();
  if (!q && !showAll) { sList.innerHTML = '<li class="empty">Ketik judul atau nama kategori, misalnya “ekonomi”.</li>'; return; }
  const seen = new Set();
  const hits = [...ALL.values()].filter(it => {
    const key = it.title.toLowerCase();
    if (seen.has(key)) return false;
    const ok = !q || key.includes(q) || (it.cat || '').toLowerCase().includes(q);
    if (ok) seen.add(key);
    return ok;
  }).slice(0, 20);
  sList.innerHTML = hits.length
    ? hits.map(it => `<li><button type="button" data-open="${it.id}"><span class="r-t">${esc(it.title)}</span><span class="r-c">${esc(it.cat)}</span></button></li>`).join('')
    : `<li class="empty">Tidak ada berita untuk “${esc(sInput.value.trim())}”. Coba kata kunci lain.</li>`;
}
function openSearch(q = '', all = false) {
  sp.hidden = false;
  $('#searchBtn').setAttribute('aria-expanded', 'true');
  sInput.value = q;
  showAll = all;
  renderResults();
  sInput.focus();
}
function closeSearch() {
  if (sp.hidden) return;
  sp.hidden = true;
  $('#searchBtn').setAttribute('aria-expanded', 'false');
}
$('#searchBtn').addEventListener('click', () => (sp.hidden ? openSearch() : closeSearch()));
$('#searchClose').addEventListener('click', () => { closeSearch(); $('#searchBtn').focus(); });
sInput.addEventListener('input', () => { showAll = false; renderResults(); });

/* ---------- Menu samping ---------- */
const drawer = $('#drawer'), scrim = $('#scrim'), menuBtn = $('#menuBtn');
function setDrawer(open) {
  drawer.classList.toggle('open', open);
  drawer.inert = !open;
  scrim.hidden = !open;
  menuBtn.setAttribute('aria-expanded', open);
  if (open) $('#drawerClose').focus(); else if (document.activeElement && drawer.contains(document.activeElement)) menuBtn.focus();
}
menuBtn.addEventListener('click', () => setDrawer(!drawer.classList.contains('open')));
$('#drawerClose').addEventListener('click', () => setDrawer(false));
scrim.addEventListener('click', () => setDrawer(false));
$('#drawerList').addEventListener('click', e => { if (e.target.closest('a')) setDrawer(false); });

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- Klik global (delegasi) ---------- */
document.addEventListener('click', e => {
  const open = e.target.closest('[data-open]');
  if (open) { openItem(open.dataset.open); return; }
  const s = e.target.closest('[data-search]');
  if (s) { openSearch(s.dataset.search, true); window.scrollTo({ top: 0 }); }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (drawer.classList.contains('open')) setDrawer(false);
  else closeSearch();
});

/* ---------- Navigasi bawah (mobile) ---------- */
$('.bottom-nav').addEventListener('click', e => {
  const b = e.target.closest('[data-tab]');
  if (!b) return;
  const tab = b.dataset.tab;
  if (tab === 'home') window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  if (tab === 'kategori') setDrawer(true);
  if (tab === 'video') $('#sixty').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  if (tab === 'saved') openSaved();
  if (tab === 'profil') toast('Fitur profil belum tersedia');
  if (tab === 'home' || tab === 'video') {
    $$('.bottom-nav button').forEach(x => x.classList.toggle('on', x === b));
  }
});

/* ---------- Tombol LIVE & notifikasi ---------- */
$('#liveBtn').addEventListener('click', () => toast('Belum ada siaran langsung saat ini'));
$('#notifyBtn').addEventListener('click', async () => {
  if (!('Notification' in window)) { toast('Browser ini belum mendukung notifikasi'); return; }
  if (Notification.permission === 'granted') { toast('Notifikasi sudah aktif'); return; }
  if (Notification.permission === 'denied') { toast('Notifikasi diblokir. Ubah izin di pengaturan browser.'); return; }
  const res = await Notification.requestPermission();
  toast(res === 'granted' ? 'Notifikasi diaktifkan' : 'Notifikasi tidak diaktifkan');
});

/* ---------- Form berlangganan ---------- */
$('#subscribeForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = $('#subEmail'), msg = $('#subMsg');
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
  msg.classList.toggle('err', !ok);
  if (!ok) { msg.textContent = 'Email belum valid. Contoh: nama@email.com'; input.focus(); return; }
  // TODO: kirim input.value ke server/layanan newsletter Anda di sini.
  msg.textContent = 'Terima kasih. Anda akan menerima berita terbaru lewat email.';
  input.value = '';
});

/* ---------- Penanda menu aktif saat menggulir ---------- */
function initSpy() {
  const links = new Map($$('#mainNav a').map(a => [a.dataset.spy, a]));
  const setOn = key => links.forEach((a, k) => a.classList.toggle('on', k === key));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) setOn(en.target.id); });
  }, { rootMargin: '-35% 0px -55% 0px' });
  ['terkini', 'politik', 'ekonomi', 'teknologi', 'bisnis', 'lifestyle', 'internasional'].forEach(id => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
  window.addEventListener('scroll', () => { if (window.scrollY < 120) setOn('top'); }, { passive: true });
  $('#mainNav').addEventListener('click', e => {
    const a = e.target.closest('a');
    if (a) setOn(a.dataset.spy);
  });
}

/* ---------- Mulai ---------- */
initClock();
renderTerkini();
renderSixty();
renderSections();
renderTrending();
initHero();
initSpy();
