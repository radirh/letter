/* ================================================================
   SWEET SIXTEEN BIRTHDAY LETTER — script.js
   ----------------------------------------------------------------
   CARA KUSTOMISASI:
   Semua konten ada di CONFIG object di bawah.
   Untuk menambah / mengubah:
     1. Upload file ke folder yang sesuai (lihat FILE STRUCTURE).
     2. Edit nilai di CONFIG.
     3. Selesai — tidak perlu sentuh HTML.

   FILE STRUCTURE:
     assets/images/derly.jpg
     assets/images/final-photo.jpg
     assets/images/surprise.gif                  (easter egg jumpscare)
     assets/images/friends/friend1.jpg  ... friend10.jpg
     assets/images/together/together1.jpg ... together10.jpg  (opsional per friend)
     assets/images/memory/memory1.jpg   ... (sesuai array memoryPhotos)
     assets/music/main-theme.mp3
     assets/music/final-letter.mp3
     assets/music/surprise.mp3                   (easter egg jumpscare song)
     assets/music/friends/friend1.mp3   ... friend10.mp3
   ================================================================ */

const CONFIG = {

  /* ----------------------------------------------------------
     INFO ORANG
  ---------------------------------------------------------- */
  person: {
    name:     'Lakeisha Derly Surayuda',
    born:     '12 July 2010',
    birthday: '12 July 2026',
  },

  /* ----------------------------------------------------------
     FOTO UTAMA
  ---------------------------------------------------------- */
  photos: {
    main:  'assets/images/derly.jpg',   // foto bundar di hero
  },

  /* ----------------------------------------------------------
     MUSIK UTAMA
     Cukup ubah file & name jika ingin ganti lagu background.
  ---------------------------------------------------------- */
  mainMusic: {
    name: 'main-theme.mp3',
    file: 'assets/music/main-theme.mp3',
  },

  /* ----------------------------------------------------------
     SURAT UTAMA (diketik typewriter setelah amplop dibuka)
     Paragraf dipisah dengan baris kosong.
  ---------------------------------------------------------- */
  letters: {
    main: `Happy Sweet Sixteen. 🎉

Before anything else, I just want to say thank you for being here and for being yourself.

Today is your sixteenth birthday, and honestly, I wanted this to be more than just a simple "happy birthday" message. That's why this little website exists. It's a small place filled with memories, wishes, and a few surprises made especially for you.

Sixteen years ago, the world became a little brighter because you arrived in it. Since then, you've grown into someone who brings warmth, laughter, and comfort to the people around you, often without even realizing it.

I hope this year gives you many reasons to smile. I hope you find the courage to chase the things you dream about, the strength to overcome difficult days, and the happiness you truly deserve.

As you go through this page, take your time. Open every letter, read every message, and enjoy every little memory waiting for you. Each one comes from people who care about you and are grateful to have you in their lives.

Today is your day.

So laugh a little louder, smile a little longer, and make another beautiful memory to add to the story you're still writing.

Happy 16th Birthday, Derly.

With love and warm wishes,

-Someone who cares about you
`,
  },

  /* ----------------------------------------------------------
     SURAT TEMAN (tepat 10 teman)
     Untuk mengubah:
       - Ganti name, photo, togetherPhoto, music, message.
       - togetherPhoto: null → foto bersama tidak ditampilkan.
     Untuk menambah foto / lagu:
       - Upload ke folder masing-masing.
       - Ubah path di sini.
  ---------------------------------------------------------- */
  friends: [
    {
      id:           1,
      name:         'Dea',
      photo:        'assets/images/friends/friend1.jpg',
      togetherPhoto: null,  // atau: 'assets/images/together/together1.jpg'
      music:        'assets/music/friends/friend1.mp3',
      message:      'p kecot. anjayy udah 16 tahun, seumuran kita yeeee gue sih cuma mau bilang pls TINGKATKAN RASA KEMANUSIAAN LO DAN KURANGIN CUEK NYAAA fakk lah akhir akhir ini gue ngerasa lo cuek bgt sm gue😔 tapi yaudahlah what can i do emang lo begitu kesannya? lo tuh orangnya kayak sebenernya imut lemah lembut (geli bgt bukan gue yg ngetik) tp sedikit keras kepala dan ngeselin..."',
    },
    {
      id:           2,
      name:         'AZZA',
      photo:        'assets/images/friends/friend2.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend2.mp3',
      message:      'happy birthday lakei, wishing you nothing but happiness, good health, success and all the best things life has to offer, i hope this new age brings you closer to your dreams, surrounds you with genuine people, gives you countless reasons to smile everyday, dan lepas dari genggaman pEg3eR1. its been great knowing u bb imutku, impression ak ke km adalah ure such a fun n adorable person, ure funny, pretty n somehow always manage to people smile :p. being around u feels comfortable n honestlyyy getting to know u has been one of the nicest things (anjay nicest ga tu) dannnnn pesan ak adalah dont be too hard on urself, take things one step at a time, keep believing in urself and NeVerR stop chasing the things that make u hAPpY!!!! :D. even when life gets tough, remember that ure stronger than u think :b, may this year be filled with new opportunities, unforgettable memories and endless blessings. enjoy ur special day, make lots of memories and dont forget to treat urself cz you deserve it!!!!! happiiii birthdayyyiii lakeica',
    },
    {
      id:           3,
      name:         'Igoena',
      photo:        'assets/images/friends/friend3.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend3.mp3',
      message:      'Hari ini, jam ini, menit ini, detik ini adalah dimana sebuah anak lahir dengan membawa kisahnya sendiri kepada dunia. Selamat ulang tahun yang ke-16, lakeisha. Bertambahnya usia, biasanya orang-orang sering dianggap hanya sebatas angka. Padahal di balik satu angka yang bertambah, ada begitu banyak cerita yang berhasil dilewati, begitu banyak versi diri yang telah ditinggalkan, dan begitu banyak hal yang telah membuat seseorang menjadi dirinya hari ini. Terima kasih sudah ikut serta mewarnai kehidupan kita saat di masa remaja kita ini di semua cerita yang hari ini hadir ikut serta mengucapkan kepadamu, lakei. Arc pas kelas 9 PEAKK bgt menurut aku, apalagi dengan bulan kematian—oktober. Walau bagiku ARGGGHHH@*#&%##, tapi setitik kehadiran kamu juga saat itu berpengaruh bgt in my life omfg. Semoga tahun ini menjadi tahun yang terbaik- eh bukan tahun ini, tapi tiaaaappp hari kedepannya. Semua keinginanmu mudah-mudahan segera dikabulkan, dan selalu bahagia serta membawa aura kebahagiaan untuk orang lain.',
    },
    {
      id:           4,
      name:         'carissa',
      photo:        'assets/images/friends/friend4.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend4.mp3',
      message:      'kesan: aku senang banget bisa berteman dengan kamu karena kamu asik dan selalu berbahagia gitu. kalo kita ketemu kamu bikin hariku yang bosenin jadi seru karena dengerin jokes kamu pesan: happy birthday lakei, semoga panjang umur sehat selalu bahagian terus  cantik, i hope you always be grateful for your presence in this world.',
    },
    {
      id:           5,
      name:         'Cantika a.k.a caca',
      photo:        'assets/images/friends/friend5.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend5.mp3',
      message:      'pi bdayyy untuk lakeisha derly surayuda (bener gak yah) yang penting itulah, sejauh ini kita udah temenan jalan ke 3 tahun dan aku bener bener seneng bisa ketemu sama kamu, sampai hari ini kita rayain ulangtahun kamu yang ke 16 tahun, happy birthday!! semoga di umur yang sekarang semua yang kamu pengenin bisa pelan pelan tercapai, sehat terus, bahagia terus, makin banyak rezekinya, makin banyak orang baik yang dateng ke hidup kamu, pokoknya semoga semua doa yang baik baik balik ke kamu. makasih ya udah mau jadi temen aku selama ini, makasih juga udah bertahan sampai sekarang. walaupun kadang kita suka bercanda gaje (kamu yg gaje), saling bully membully, atau menghina dea (ini wajib), tapi justru itu yang bikin seru. semoga pertemanan kita gak berhenti di 3 tahun aja, semoga masih bisa lanjut terus sampai lama banget dan masih bisa ngerayain ulang tahun satu sama lain di tahun tahun berikutnya (next ultah pls undang cosplayer genshin biar bisa aku jilat, ups bercanda) tambah tua di kurangin emelnya, jangan emel terus terusan, apalagi main plorin! main emel terus tapi *imo gak dek?* semoga di umur yang baru ini kamu makin dewasa, makin kuat ngadepin losetreak, spiral lt 12, ngadepin dea, ngadepin bonbon, caca, aku, miwa, Carissa, semua lah yang tantrum tantrum! jangan terlalu keras sama diri sendiri juga (jangan overhate ke prabowo) pokoknya semoga ulang tahun kamu kali ini jadi salah satu ulang tahun yang paling berkesan. sekali lagi, happy birthday lakeikei!! semoga 16 tahun ini jadi awal dari banyak hal baik buat kamu der, maksudnya derly kok bukan der der der der~ truth or dare maksud aku tuh!',
    },
    {
      id:           6,
      name:         'Marissa',
      photo:        'assets/images/friends/friend6.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend6.mp3',
      message:      'HAPPYY BIRTHDAYY MY BEUATIFYLL FRIENDD!!🤍🤍to the girl who never judges me, to the girl who makes me smile with her jokes, i am so happy to meet u in this generation, bcs of u i have progress n enthusiasm to study harder. u deserve nothing but happiness, ilysmm❤️‍🩹',
    },
    {
      id:           7,
      name:         'ASTIIIII',
      photo:        'assets/images/friends/friend7.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend7.mp3',
      message:      'HAPPY BIRTHDAY happieest wishes for u lakeishA ^ ^ wishing u a day full of laughter n a life filled with love - ! ♡´▽`♡ new age, new year, new dream :33',
    },
    {
      id:           8,
      name:         'Rehann',
      photo:        'assets/images/friends/friend8.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend8.mp3',
      message:      'Happy Birthday, Derly! 🎂 Semoga sehat selalu, banyak rezeki, makin bahagia, dan semua yang kamu inginkan bisa terwujud. Semoga harimu menyenangkan dan penuh momen indah. 🎉✨',
    },
    {
      id:           9,
      name:         'Azril',
      photo:        'assets/images/friends/friend9.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend9.mp3',
      message:      'Happy birthday derly my friend, semoga kamu tambah sehat, tambah pinter, tambah cerdas, ga ngelawan ortu, jaga kesehatan juga jangan main wuwa terus menerus, pokoknya tambah baik tinggalkan yang buruk buruk yaa🥳            -azrilgantengpacarmikasadanalya😜',
    },
    {
      id:           10,
      name:         'Ayyash',
      photo:        'assets/images/friends/friend10.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend10.mp3',
      message:      'Happy birthday to someone who feels like home. Sixteen years of you in this world has made it so much better — I can\'t wait to see what this year brings you.',
    },
    {
      id:           11,
      name:         'ANINN',
      photo:        'assets/images/friends/friend11.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend11.mp3',
      message:      'Happy birthday to someone who feels like home. Sixteen years of you in this world has made it so much better — I can\'t wait to see what this year brings you.',
    },
    {
      id:           12,
      name:         'ZAKII',
      photo:        'assets/images/friends/friend12.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend12.mp3',
      message:      'Happy birthday to someone who feels like home. Sixteen years of you in this world has made it so much better — I can\'t wait to see what this year brings you.',
    },
    {
      id:           13,
      name:         'NAZZKUY',
      photo:        'assets/images/friends/friend13.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend13.mp3',
      message:      'Happy birthday to someone who feels like home. Sixteen years of you in this world has made it so much better — I can\'t wait to see what this year brings you.',
    },
    {
      id:           14,
      name:         'Firdan',
      photo:        'assets/images/friends/friend14.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend14.mp3',
      message:      '"Selamat ulang tahun, Derly! Selamat menyambut babak baru kehidupan. Seiring berkurangnya angka waktu kita di dunia, semoga setiap langkah ke depan membawa evolusi diri yang luar biasa. Aku berdoa agar kamu selalu diberi kesehatan yang prima, kebahagiaan, serta pundak yang kokoh dan hati yang tangguh untuk melewati setiap plot twist kehidupan yang ada. Oh iya, kalau selama ini aku ada salah, maafin ya. Nikmati harimu!"',
    },
    {
      id:           14,
      name:         'Violaaa',
      photo:        'assets/images/friends/friend15.jpg',
      togetherPhoto: null,
      music:        'assets/music/friends/friend15.mp3',
      message:      'Happy birthday to someone who feels like home. Sixteen years of you in this world has made it so much better — I can\'t wait to see what this year brings you.',
    },
  ],

  /* ----------------------------------------------------------
     SURAT TERAKHIR
     Ubah photo, music, dan message di sini.
  ---------------------------------------------------------- */
  finalLetter: {
    photo:   'assets/images/final-photo.jpg',
    music:   'assets/music/final-letter.mp3',
    message: `Hai deyyikk,

Kalau kamu sudah sampai di bagian ini, berarti kamu sudah membuka semua surat, membaca semua ucapan, dan menemukan surat terakhir yang sengaja aku simpan untuk paling akhir.

Jujur saja, bagian ini adalah bagian yang paling sulit untuk aku tulis ahehehe bukan karena gamau ngucap apapun tapi kayanya kebanyakan yang mau di ucapin...

Pertama-tama, selamat ulang tahun yang ke-16.

Aku harap hari ini berjalan dengan baik untukmu. Aku harap kamu banyak tersenyum, banyak tertawa, dan merasakan betapa berartinya dirimu bagi orang-orang di sekitarmu. Enam belas tahun bukan waktu yang sebentar. Sudah banyak hal yang kamu lewati, banyak orang yang datang dan pergi, banyak kenangan yang tercipta, dan banyak pelajaran yang mungkin membentukmu menjadi dirimu yang sekarang.

Di hari ulang tahunmu ini, ada beberapa hal yang ingin aku sampaikan.

Yang pertama tentu saja tidak lain dan tidak bukan adalah maaf.

Maaf kalau selama kita "masih berteman", aku pernah banyak membuat kesalahan. Maaf untuk perkataan yang mungkin menyakitkan, sikap yang mungkin mengecewakan, keputusan yang mungkin membuatmu kesal, dan semua hal yang seharusnya bisa aku lakukan dengan lebih baik.

Aku sadar bahwa selama satu tahun terakhir, aku melakukan banyak hal yang mungkin meninggalkan kesan buruk bagimu. Semakin lama aku melihat ke belakang, semakin banyak hal yang aku sadari seharusnya tidak terjadi. Ada banyak momen yang kalau bisa diulang, mungkin akan aku lakukan dengan cara yang berbeda.

Aku tidak menulis ini untuk mencari pembenaran atau meminta semuanya dilupakan begitu saja sihhh,tapi tapi Aku hanya ingin mengakui bahwa aku memang punya kesalahan, dan aku benar-benar minta maaf untuk itu serius deh.

Kalau boleh jujur, ada satu hal tentangmu yang selalu aku ingat.

Kamu itu orang yang susah dibujuk.

Kalau sudah punya pendapat, biasanya susah berubah. Kalau sudah yakin dengan sesuatu, kamu akan mempertahankannya. Dan kalau sudah marah atau kecewa, kadang butuh waktu yang cukup lama sampai semuanya benar-benar membaik lagi.

Dulu aku sering merasa kesal karena itu.

Tapi semakin lama aku sadar kalau mungkin itu memang bagian dari dirimu. Kamu bukan orang yang mudah mengikuti apa kata orang lain hanya karena mereka memintanya. Kamu punya cara berpikir dan pendirianmu sendiri.

Meskipun kadang membuat orang lain pusing (aku contohnya), aku rasa itu juga salah satu hal yang membuatmu menjadi dirimu sendiri.

Aku juga tidak tahu bagaimana kamu memandangku sekarang sihh sejujurnya.

Mungkin biasa saja.

Mungkin masih kesal.

Mungkin sudah tidak peduli.

Atau mungkin aku hanya seseorang dari masa lalu yang sesekali teringat ketika tidak sengaja muncul di hidupmuuu...

Dan jujur saja, aku tidak punya hak untuk menentukan bagaimana kamu harus melihatku sihh deyy

Karena itu aku hanya ingin bertanya satu hal... satu hal penting..

Apakah kita masih bisa berteman?

Kalau jawabannya tidak, tidak apa-apa deyy...

Sungguh kali ini aku tidak akan memaksa apapun itu...

Aku tidak akan memaksakan apa pun. Aku tidak akan marah. Aku tidak akan menyalahkanmu. Setelah semua yang terjadi, aku mengerti kalau setiap orang berhak menentukan siapa yang ingin mereka pertahankan dalam hidupnya.....

Tapi kalau jawabannya iya, aku akan sangat bersyukur....

Bukan karena aku berharap semuanya kembali seperti dulu, melainkan karena aku masih menghargai keberadaanmu sebagai seseorang yang pernah memberi banyak warna dalam hidupku.

Apa pun jawabanmu nanti, ada satu hal yang tidak akan berubah.

Aku tetap ingin yang terbaik untukmu.

Aku berharap kamu berhasil mencapai impian-impianmu.

Aku berharap kamu bertemu orang-orang yang tulus menyayangimu.

Aku berharap kamu selalu diberikan kesehatan, kebahagiaan, dan kekuatan saat menghadapi hari-hari yang sulit.

Aku berharap suatu hari nanti kamu bisa melihat kembali perjalanan hidupmu dan bangga pada semua hal yang sudah berhasil kamu lewati.

Dan mungkin, meskipun tidak selalu berada di dekatmu, aku akan tetap menjadi seseorang yang diam-diam ikut senang melihatmu baik-baik saja.

Melihatmu bahagia.

Melihatmu berhasil.

Melihatmu mencapai hal-hal yang dulu hanya menjadi impian.

Bukan karena aku ingin selalu ada dalam hidupmu, tetapi karena aku memang ingin hal-hal baik terjadi padamu.

Terima kasih sudah menjadi bagian dari cerita yang pernah aku jalani.

Terima kasih untuk semua kenangan, pelajaran, tawa, dan bahkan kesalahan yang membuatku belajar menjadi pribadi yang lebih baik.

Sekali lagi, selamat ulang tahun yang ke-16, Derly.

Semoga tahun ini menjadi awal dari banyak hal baik yang menunggumu di depan.

Jaga dirimu baik-baik.

Dan semoga kamu selalu menemukan alasan untuk tersenyum.

-MAMASS RADITTHEOKKK
`,
  },

  /* ----------------------------------------------------------
     EASTER EGG: "ONE LAST THING" SURPRISE
     ----------------------------------------------------------
     Muncul otomatis (sebagai tombol kecil mengambang di pojok)
     beberapa saat setelah final letter ditutup. Begitu di-tap:
       1. baris kalimat "intro" diketik dulu (bikin penasaran),
       2. lalu "jumpscare" muncul: layar berkedip + sedikit shake,
          gif/foto kocak muncul dengan animasi pop, dan musik
          kocak mulai diputar,
       3. caption lucu diketik di bawah gambar.
     Ganti image & music di bawah dengan file kocak kamu sendiri.
  ---------------------------------------------------------- */
  surprise: {
    delayMs:     5000,                          // jeda (ms) sebelum tombol muncul setelah final letter ditutup
    triggerDelayMs: 1700,                       // jeda antara intro selesai diketik & jumpscare muncul
    introText:   "deyy ada satu hal yang mau aku sampaikan",
    captionText: 'entah kenapa lagu ini selalu bikin aku inget satu kalimat "mau disuruh memilih berapa kali pun aku akan tetep pilih kamu"',
    image:       'assets/images/surprise.gif',  // ganti dengan gif/foto kocak kamu
    music:       'assets/music/surprise.mp3',   // ganti dengan lagu kocak/troll kamu
  },

  /* ----------------------------------------------------------
     MEMORY WALL
     Tambah foto: upload ke assets/images/memory/, lalu tambah
     object baru ke array di bawah.
     caption bersifat opsional (bisa dihapus / dikosongkan).
  ---------------------------------------------------------- */
  memoryPhotos: [
    { image: 'assets/images/memory/memory1.jpg',  caption: 'Memory 1'  },
    { image: 'assets/images/memory/memory2.jpg',  caption: 'Memory 2'  },
    { image: 'assets/images/memory/memory3.jpg',  caption: 'Memory 3'  },
    { image: 'assets/images/memory/memory4.jpg',  caption: 'Memory 4'  },
    { image: 'assets/images/memory/memory5.jpg',  caption: 'Memory 5'  },
    { image: 'assets/images/memory/memory6.jpg',  caption: 'Memory 6'  },
    { image: 'assets/images/memory/memory7.jpg',  caption: 'Memory 7'  },
    { image: 'assets/images/memory/memory8.jpg',  caption: 'Memory 8'  },
    { image: 'assets/images/memory/memory9.jpg',  caption: 'Memory 9'  },
    { image: 'assets/images/memory/memory10.jpg', caption: 'Memory 10' },
    { image: 'assets/images/memory/memory11.jpg', caption: 'Memory 11' },
    { image: 'assets/images/memory/memory12.jpg', caption: 'Memory 12' },
  ],

  /* ----------------------------------------------------------
     TIMELINE
  ---------------------------------------------------------- */
  timeline: [
    { year: '2010', text: 'Born on July 12th, 2010, a little girl began a journey that would slowly bring joy, laughter, and countless precious memories to the people around her. No one knew what the future would hold, but a beautiful story had just begun...' },
    { year: '2013', text: 'The years of endless curiosity, innocent laughter, and discovering the world one small adventure at a time. Every day brought something new to learn, explore, and wonder about.' },
    { year: '2016', text: 'A cheerful little adventurer with a growing heart and an even bigger imagination. These were the days of simple happiness, playful memories, and finding magic in the smallest moments.' },
    { year: '2020', text: 'A year unlike any other. While the world changed around her, she continued growing, learning, and collecting experiences that would quietly shape the person she would become in the years ahead.' },
    { year: '2023', text: 'The chapter of friendships, memories, lessons, and self-discovery. New people, new experiences, and new challenges all became part of the story, helping her grow stronger and wiser with each passing day.' },
    { year: '2026', text: 'Sweet Sixteen. Sixteen years filled with laughter, dreams, friendships, lessons, and moments that can never be replaced. From a little girl born on a July morning to someone who has touched the lives of many people around her, this milestone is a celebration of every step taken along the way. The memories behind are precious, but the possibilities ahead are endless. May this new chapter bring happiness, success, unforgettable adventures, and all the beautiful things that a sixteen-year-old heart could ever hope for. Today isnt just about turning sixteen, its about celebrating the wonderful person you ve become and the amazing future waiting ahead. ✨🎂' },
  ],

};

/* ================================================================
   STATE
   ================================================================ */
const state = {
  hasOpenedLetter:   false,
  openedFriends:     loadOpenedFriends(),
  currentAudioKey:   null,   // 'main' | 'friend' | 'final' | 'surprise' | null
  isMuted:           false,
  volume:            0.6,
  activeFriendIndex: null,
  hasShownEasterEgg: false,  // tombol "one last thing" sudah pernah dimunculkan?
  easterEggTimer:    null,   // id setTimeout yang menunggu untuk memunculkan tombol
};

/* ================================================================
   DOM REFS
   ================================================================ */
const $    = (sel, root = document) => root.querySelector(sel);
const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const loadingScreen    = $('#loading-screen');
const loadingBarFill   = $('#loading-bar-fill');
const siteEl           = $('#site');
const particleLayer    = $('#particle-layer');

const heroEnvelopeBtn  = $('#open-letter-btn');
const heroCtaBtn       = $('#open-letter-cta');

const friendsGrid      = $('#friends-grid');
const progressCountEl  = $('#progress-count');
const progressBarFill  = $('#progress-bar-fill');

const finalTeaser      = $('#final-teaser');
const finalEnvelopeBtn = $('#final-envelope-btn');

const memoryGrid       = $('#memory-grid');
const timelineTrack    = $('#timeline-track');

const friendModal         = $('#friend-modal');
const friendModalBackdrop = $('#friend-modal-backdrop');
const friendModalClose    = $('#friend-modal-close');
const modalEnvelope       = $('#modal-envelope');
const modalContent        = $('#modal-content');
const modalFriendPhoto    = $('#modal-friend-photo');
const modalTogetherWrap   = $('#modal-together-wrap');
const modalTogetherPhoto  = $('#modal-together-photo');
const modalFriendName     = $('#modal-friend-name');
const modalFriendText     = $('#modal-friend-text');

const finalModal          = $('#final-modal');
const finalModalBackdrop  = $('#final-modal-backdrop');
const finalModalClose     = $('#final-modal-close');
const finalPhotoEl        = $('#final-photo');
const finalLetterTextEl   = $('#final-letter-text');

/* ---- Easter egg: "one last thing" surprise ---- */
const easterEggBtn         = $('#easter-egg-btn');
const surpriseModal        = $('#surprise-modal');
const surpriseModalBackdrop = $('#surprise-modal-backdrop');
const surpriseModalClose   = $('#surprise-modal-close');
const surpriseStage        = $('#surprise-stage');
const surpriseIntro        = $('#surprise-intro');
const surpriseIntroText    = $('#surprise-intro-text');
const surprisePop          = $('#surprise-pop');
const surpriseFlash        = $('#surprise-flash');
const surprisePopImage     = $('#surprise-pop-image');
const surpriseImg          = $('#surprise-img');
const surpriseCaption      = $('#surprise-caption');

const audioMain     = $('#audio-main');
const audioFriend   = $('#audio-friend');
const audioFinal    = $('#audio-final');
const audioSurprise = $('#audio-surprise');

const musicPlayer    = $('#music-player');
const musicToggleBtn = $('#music-toggle');
const musicPlayPause = $('#music-play-pause');
const musicMuteBtn   = $('#music-mute');
const musicVolume    = $('#music-volume');
const musicTrackName = $('#music-track-name');

const mainLetterTextEl = $('#main-letter-text');

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', init);

function init() {
  startPerformanceMonitor();
  applyConfigToDOM();
  renderFriendCards();
  renderMemoryWall();   // ← pasang lightbox trigger di dalam fungsi ini
  renderTimeline();
  restoreProgressUI();
  setupRevealObserver();
  setupAmbientParticles();
  setupMusicPlayerUI();
  setupEventListeners();
  runLoadingSequence();
  attachStaticLightboxTriggers(); // ← hanya hero photo + final photo (statis)
}

/* ------------------------------------------------------------------
   applyConfigToDOM
------------------------------------------------------------------ */
function applyConfigToDOM() {
  mainLetterTextEl.dataset.fullText = CONFIG.letters.main;

  const derlyPhoto = $('#derly-photo');
  derlyPhoto.src = CONFIG.photos.main;
  attachImageFallback(derlyPhoto, 'derly.jpg');

  finalPhotoEl.src = CONFIG.finalLetter.photo;
  attachImageFallback(finalPhotoEl, CONFIG.finalLetter.photo.split('/').pop());
  finalLetterTextEl.dataset.fullText = CONFIG.finalLetter.message;

  surpriseIntroText.dataset.fullText = CONFIG.surprise.introText;
  surpriseCaption.dataset.fullText   = CONFIG.surprise.captionText;
  surpriseImg.src = CONFIG.surprise.image;
  attachImageFallback(surpriseImg, CONFIG.surprise.image.split('/').pop());

  const nameEls   = $all('.birthday-title__name');
  const datesEl   = $('.birthday-title__dates');
  const heroName  = $('.hero__name');
  nameEls.forEach((el) => { el.textContent = CONFIG.person.name; });
  if (heroName)  heroName.innerHTML = CONFIG.person.name.replace(' ', '&nbsp;');
  if (datesEl)   datesEl.textContent = `${CONFIG.person.born} • ${CONFIG.person.birthday}`;
}

/* ================================================================
   LOADING SCREEN
   ================================================================ */
function runLoadingSequence() {
  let progress = 0;
  const duration = 2200;
  const start    = performance.now();

  function tick(now) {
    progress = Math.min(1, (now - start) / duration);
    loadingBarFill.style.width = `${progress * 100}%`;
    if (progress < 1) requestAnimationFrame(tick);
    else finishLoading();
  }
  requestAnimationFrame(tick);
}

function finishLoading() {
  loadingScreen.classList.add('is-hidden');
  siteEl.removeAttribute('aria-hidden');
  siteEl.classList.add('is-visible');
  setTimeout(() => loadingScreen.remove(), 1000);
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function setupRevealObserver() {
  const targets = $all(
    '.photo-reveal, .birthday-title, .main-letter, ' +
    '.friends-section .section-eyebrow, .friends-section .section-title, .progress-tracker, .friend-card, ' +
    '.memory-wall .section-eyebrow, .memory-wall .section-title, .memory-tile, ' +
    '.timeline-section .section-eyebrow, .timeline-section .section-title, .timeline-item, ' +
    '.footer__text'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 6) * 70}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        if (entry.target === $('.main-letter')) {
          startTypewriterOnce(mainLetterTextEl);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  targets.forEach((el) => observer.observe(el));
}

/* ================================================================
   PERFORMANCE / EFFECT QUALITY SYSTEM
   ================================================================ */
const PERF = {
  mode:     'full',
  samples:  [],
  lastTick: typeof performance !== 'undefined' ? performance.now() : Date.now(),
};

function startPerformanceMonitor() {
  function tick(now) {
    const delta = now - PERF.lastTick;
    PERF.lastTick = now;
    if (delta > 0 && delta < 1000) {
      PERF.samples.push(1000 / delta);
      if (PERF.samples.length > 90) PERF.samples.shift();
      if (PERF.samples.length >= 60) {
        const avg = PERF.samples.reduce((a, b) => a + b, 0) / PERF.samples.length;
        PERF.mode = avg < 28 ? 'reduced' : 'full';
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function effectSettings() {
  return PERF.mode === 'reduced'
    ? { spawnInterval: 1300, burstScale: 0.75 }
    : { spawnInterval: 900,  burstScale: 1    };
}

/* ================================================================
   AMBIENT PARTICLES
   ================================================================ */
const AMBIENT_SYMBOLS = [
  { char: '✦', cls: 'particle--sparkle' },
  { char: '✧', cls: 'particle--sparkle' },
  { char: '🌸', cls: 'particle--flower'  },
  { char: '🌷', cls: 'particle--flower'  },
  { char: '💕', cls: 'particle--heart'   },
  { char: '🎈', cls: 'particle--balloon' },
];

function setupAmbientParticles() { scheduleAmbientParticle(); }

function scheduleAmbientParticle() {
  const { spawnInterval } = effectSettings();
  setTimeout(() => {
    spawnAmbientParticle();
    scheduleAmbientParticle();
  }, spawnInterval);
}

function spawnAmbientParticle() {
  if (document.hidden) return;
  const pick = AMBIENT_SYMBOLS[Math.floor(Math.random() * AMBIENT_SYMBOLS.length)];
  const el   = document.createElement('span');
  el.className   = `particle ${pick.cls}`;
  el.textContent = pick.char;
  el.style.left  = `${Math.random() * 100}%`;
  el.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
  const duration = 9 + Math.random() * 6;
  el.style.animationDuration = `${duration}s`;
  particleLayer.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000 + 200);
}

function spawnBurst(originX, originY, { count = 26, symbols = ['🎉', '🎊', '✨', '💖', '🌸', '🎈'] } = {}) {
  const { burstScale } = effectSettings();
  const finalCount     = Math.max(10, Math.round(count * burstScale));
  for (let i = 0; i < finalCount; i++) {
    const el       = document.createElement('span');
    el.className   = 'burst';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const angle    = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 220;
    el.style.left = `${originX}px`;
    el.style.top  = `${originY}px`;
    el.style.fontSize = `${14 + Math.random() * 14}px`;
    el.style.setProperty('--bx', `${Math.cos(angle) * distance}px`);
    el.style.setProperty('--by', `${Math.sin(angle) * distance - 60}px`);
    el.style.setProperty('--br', `${(Math.random() - 0.5) * 480}deg`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
}

function burstFromElement(el, opts) {
  const rect = el.getBoundingClientRect();
  spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, opts);
}

/* ================================================================
   TYPEWRITER EFFECT
   ================================================================ */
function startTypewriterOnce(el) {
  if (el.dataset.typed === 'true' || el.dataset.typing === 'true') return;
  typewrite(el, el.dataset.fullText || '');
}

function typewrite(el, fullText, speed = 16) {
  if (typeof el._cancelTypewriter === 'function') el._cancelTypewriter();

  el.dataset.typing = 'true';
  el.dataset.typed  = 'false';
  el.textContent    = '';

  const paragraphs = fullText.split(/\n\s*\n/);
  el.innerHTML     = paragraphs.map(() => '<p></p>').join('');
  const pEls       = $all('p', el);

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';

  let pIndex    = 0;
  let cIndex    = 0;
  let cancelled = false;
  let timeoutId = null;

  function finishInstantly() {
    if (cancelled) return;
    cancelled = true;
    if (timeoutId) clearTimeout(timeoutId);
    pEls.forEach((p, i) => { p.textContent = paragraphs[i]; });
    cursor.remove();
    el.dataset.typing = 'false';
    el.dataset.typed  = 'true';
    el.removeEventListener('click', finishInstantly);
    if (el._cancelTypewriter === finishInstantly) el._cancelTypewriter = null;
  }

  el._cancelTypewriter = finishInstantly;
  el.addEventListener('click', finishInstantly, { once: true });

  function step() {
    if (cancelled) return;
    const currentParagraph = paragraphs[pIndex] || '';
    if (cIndex <= currentParagraph.length) {
      pEls[pIndex].textContent = currentParagraph.slice(0, cIndex);
      pEls[pIndex].appendChild(cursor);
      cIndex++;
      timeoutId = setTimeout(step, speed);
    } else if (pIndex < paragraphs.length - 1) {
      pIndex++;
      cIndex    = 0;
      timeoutId = setTimeout(step, speed * 4);
    } else {
      cursor.remove();
      el.dataset.typing = 'false';
      el.dataset.typed  = 'true';
      el.removeEventListener('click', finishInstantly);
      if (el._cancelTypewriter === finishInstantly) el._cancelTypewriter = null;
    }
  }
  step();
}

/* ================================================================
   IMAGE FALLBACKS
   ================================================================ */
function attachImageFallback(imgEl, label) {
  imgEl.addEventListener('error', () => {
    const wrap       = document.createElement('div');
    wrap.className   = 'img-fallback';
    wrap.innerHTML   = `<span class="icon">🖼️</span><span>Add photo:<br>${label}</span>`;
    imgEl.replaceWith(wrap);
  }, { once: true });
}

/* ================================================================
   HERO: OPEN LETTER EXPERIENCE
   ================================================================ */
function setupEventListeners() {
  heroEnvelopeBtn.addEventListener('click', handleOpenLetter);
  heroCtaBtn.addEventListener('click', handleOpenLetter);

  friendModalClose.addEventListener('click', closeFriendModal);
  friendModalBackdrop.addEventListener('click', closeFriendModal);

  finalEnvelopeBtn.addEventListener('click', openFinalLetter);
  finalModalClose.addEventListener('click', closeFinalModal);
  finalModalBackdrop.addEventListener('click', closeFinalModal);

  easterEggBtn.addEventListener('click', openSurpriseModal);
  surpriseModalClose.addEventListener('click', closeSurpriseModal);
  surpriseModalBackdrop.addEventListener('click', closeSurpriseModal);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (friendModal.classList.contains('is-active'))   closeFriendModal();
    if (finalModal.classList.contains('is-active'))    closeFinalModal();
    if (surpriseModal.classList.contains('is-active')) closeSurpriseModal();
  });
}

function handleOpenLetter() {
  if (state.hasOpenedLetter) return;
  state.hasOpenedLetter = true;
  heroEnvelopeBtn.classList.add('is-open');
  heroCtaBtn.disabled     = true;
  heroCtaBtn.textContent  = 'Opening...';
  burstFromElement(heroEnvelopeBtn, { count: 34 });
  playMain();
  setTimeout(() => {
    $('#reveal-stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 650);
}

/* ================================================================
   FRIEND CARDS + PROGRESS
   ================================================================ */
function renderFriendCards() {
  CONFIG.friends.forEach((friend, index) => {
    const isOpen = state.openedFriends.has(index);
    const card   = document.createElement('button');
    card.className        = `friend-card${isOpen ? ' is-opened' : ''}`;
    card.dataset.index    = String(index);
    card.innerHTML        = `
      <span class="friend-card__icon">${isOpen ? '💙' : '🔒'}</span>
      <span class="friend-card__label">${isOpen ? friend.name : `Secret Letter #${index + 1}`}</span>
      <span class="friend-card__status">${isOpen ? 'Opened' : 'Locked'}</span>
    `;
    card.addEventListener('click', () => openFriendModal(index));
    friendsGrid.appendChild(card);
  });
}

function updateFriendCard(index) {
  const card = friendsGrid.querySelector(`[data-index="${index}"]`);
  if (!card) return;
  card.classList.add('is-opened');
  card.querySelector('.friend-card__icon').textContent   = '💙';
  card.querySelector('.friend-card__label').textContent  = CONFIG.friends[index].name;
  card.querySelector('.friend-card__status').textContent = 'Opened';
}

function restoreProgressUI() {
  const count = state.openedFriends.size;
  progressCountEl.textContent     = String(count);
  progressBarFill.style.width     = `${(count / CONFIG.friends.length) * 100}%`;
  if (count >= CONFIG.friends.length) finalTeaser.hidden = false;
}

function markFriendOpened(index) {
  if (state.openedFriends.has(index)) return;
  state.openedFriends.add(index);
  saveOpenedFriends(state.openedFriends);
  updateFriendCard(index);

  const count = state.openedFriends.size;
  progressCountEl.textContent = String(count);
  progressBarFill.style.width = `${(count / CONFIG.friends.length) * 100}%`;
  if (count === CONFIG.friends.length) revealFinalTeaser();
}

function revealFinalTeaser() {
  finalTeaser.hidden = false;
  setTimeout(() => {
    finalTeaser.scrollIntoView({ behavior: 'smooth', block: 'center' });
    burstFromElement(finalEnvelopeBtn, { count: 20, symbols: ['✨', '💙', '🤍'] });
  }, 900);
}

/* ----------------------------------------------------------------
   PERSISTENCE (intentionally disabled)
   ------------------------------------------------------------------
   This site is designed to ALWAYS restart from a blank slate on every
   refresh or new visit. No localStorage / sessionStorage / cookies are
   used anywhere. loadOpenedFriends() always returns a fresh empty Set,
   and saveOpenedFriends() is a deliberate no-op kept only so the rest
   of the code (markFriendOpened, etc.) doesn't need to change.
---------------------------------------------------------------- */
function loadOpenedFriends() {
  return new Set();
}

function saveOpenedFriends(set) {
  // no-op: progress is never persisted across page loads
}

/* ================================================================
   FRIEND LETTER MODAL
   ================================================================ */
let friendModalTimers = [];
function clearFriendModalTimers() {
  friendModalTimers.forEach((id) => clearTimeout(id));
  friendModalTimers = [];
}

function resetFriendModalVisuals() {
  modalEnvelope.classList.remove('is-open');
  modalEnvelope.hidden  = false;
  modalContent.hidden   = true;
  if (typeof modalFriendText._cancelTypewriter === 'function') {
    modalFriendText._cancelTypewriter();
  }
  modalFriendText.dataset.typed  = 'false';
  modalFriendText.dataset.typing = 'false';
}

function openFriendModal(index) {
  clearFriendModalTimers();
  state.activeFriendIndex = index;
  const friend            = CONFIG.friends[index];

  resetFriendModalVisuals();
  document.body.classList.add('modal-open');
  friendModal.classList.add('is-active');
  friendModal.setAttribute('aria-hidden', 'false');

  fadeOut(audioMain).then(() => playFriendAudio(friend));

  friendModalTimers.push(setTimeout(() => {
    modalEnvelope.classList.add('is-open');
    burstFromElement(modalEnvelope, { count: 16, symbols: ['✨', '💌', '💖'] });
  }, 500));

  friendModalTimers.push(setTimeout(() => {
    modalEnvelope.hidden = true;
    modalContent.hidden  = false;

    modalFriendPhoto.src = friend.photo;
    modalFriendPhoto.alt = friend.name;
    attachImageFallback(modalFriendPhoto, friend.photo.split('/').pop());

    if (friend.togetherPhoto) {
      modalTogetherWrap.hidden      = false;
      modalTogetherPhoto.src        = friend.togetherPhoto;
      modalTogetherPhoto.alt        = `${friend.name} and Derly`;
      attachImageFallback(modalTogetherPhoto, friend.togetherPhoto.split('/').pop());
    } else {
      modalTogetherWrap.hidden = true;
    }

    modalFriendName.textContent          = friend.name;
    modalFriendText.dataset.fullText     = friend.message;
    typewrite(modalFriendText, friend.message);
    markFriendOpened(index);

    // Pasang lightbox pada foto yang baru dimuat ke dalam modal
    attachFriendModalPhotoTriggers();
  }, 1300));
}

function closeFriendModal() {
  if (!friendModal.classList.contains('is-active')) return;
  clearFriendModalTimers();
  friendModal.classList.remove('is-active');
  friendModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  resetFriendModalVisuals();
  // Reset lbAttached agar bisa dipasang ulang saat modal dibuka berikutnya
  if (modalFriendPhoto)   delete modalFriendPhoto.dataset.lbAttached;
  if (modalTogetherPhoto) delete modalTogetherPhoto.dataset.lbAttached;
  fadeOut(audioFriend).then(() => { if (state.hasOpenedLetter) playMain(); });
}

/* ================================================================
   FINAL LETTER MODAL
   ================================================================ */
let finalLetterTimer = null;

function resetFinalEnvelopeVisuals() {
  finalEnvelopeBtn.classList.remove('is-open');
  if (typeof finalLetterTextEl._cancelTypewriter === 'function') {
    finalLetterTextEl._cancelTypewriter();
  }
  finalLetterTextEl.dataset.typed  = 'false';
  finalLetterTextEl.dataset.typing = 'false';
}

function openFinalLetter() {
  if (finalLetterTimer) { clearTimeout(finalLetterTimer); finalLetterTimer = null; }

  finalEnvelopeBtn.classList.remove('is-open');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { finalEnvelopeBtn.classList.add('is-open'); });
  });

  document.body.classList.add('modal-open');
  finalModal.classList.add('is-active');
  finalModal.setAttribute('aria-hidden', 'false');

  finalLetterTextEl.dataset.typed  = 'false';
  finalLetterTextEl.dataset.typing = 'false';

  Promise.all([fadeOut(audioMain), fadeOut(audioFriend)]).then(playFinalAudio);
  burstFromElement(finalEnvelopeBtn, { count: 30, symbols: ['💙', '🤍', '✨', '🎉'] });

  finalLetterTimer = setTimeout(() => {
    typewrite(finalLetterTextEl, CONFIG.finalLetter.message);
    finalLetterTimer = null;
  }, 500);
}

function closeFinalModal() {
  finalModal.classList.remove('is-active');
  finalModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (finalLetterTimer) { clearTimeout(finalLetterTimer); finalLetterTimer = null; }
  resetFinalEnvelopeVisuals();
  fadeOut(audioFinal).then(() => { if (state.hasOpenedLetter) playMain(); });

  // Easter egg: beberapa saat setelah final letter ditutup pertama kali,
  // munculkan tombol kecil "one last thing..." di pojok layar.
  scheduleEasterEgg();
}

/* ================================================================
   EASTER EGG: "ONE LAST THING" SURPRISE
   ================================================================ */
function scheduleEasterEgg() {
  if (state.hasShownEasterEgg || state.easterEggTimer) return;
  state.easterEggTimer = setTimeout(() => {
    state.easterEggTimer = null;
    state.hasShownEasterEgg = true;
    showEasterEggButton();
  }, CONFIG.surprise.delayMs);
}

function showEasterEggButton() {
  easterEggBtn.hidden = false;
  requestAnimationFrame(() => easterEggBtn.classList.add('is-visible'));
}

function resetSurpriseStageVisuals() {
  surprisePop.hidden = true;
  surpriseIntro.hidden = false;
  surpriseFlash.classList.remove('is-flashing');
  surprisePopImage.classList.remove('is-popping');
  surpriseStage.classList.remove('is-shaking');

  if (typeof surpriseIntroText._cancelTypewriter === 'function') surpriseIntroText._cancelTypewriter();
  surpriseIntroText.dataset.typed  = 'false';
  surpriseIntroText.dataset.typing = 'false';

  if (typeof surpriseCaption._cancelTypewriter === 'function') surpriseCaption._cancelTypewriter();
  surpriseCaption.dataset.typed  = 'false';
  surpriseCaption.dataset.typing = 'false';
}

let surpriseJumpscareTimer = null;
let surpriseCaptionTimer   = null;

function openSurpriseModal() {
  if (surpriseJumpscareTimer) { clearTimeout(surpriseJumpscareTimer); surpriseJumpscareTimer = null; }
  if (surpriseCaptionTimer)   { clearTimeout(surpriseCaptionTimer);   surpriseCaptionTimer   = null; }

  resetSurpriseStageVisuals();
  document.body.classList.add('modal-open');
  surpriseModal.classList.add('is-active');
  surpriseModal.setAttribute('aria-hidden', 'false');

  typewrite(surpriseIntroText, CONFIG.surprise.introText, 38);

  surpriseJumpscareTimer = setTimeout(() => {
    surpriseJumpscareTimer = null;
    triggerJumpscare();
  }, CONFIG.surprise.triggerDelayMs);
}

function triggerJumpscare() {
  if (!surpriseModal.classList.contains('is-active')) return;

  surpriseIntro.hidden = true;
  surprisePop.hidden    = false;

  playStinger();
  surpriseStage.classList.add('is-shaking');
  surpriseFlash.classList.add('is-flashing');
  surprisePopImage.classList.add('is-popping');
  burstFromElement(surprisePopImage, { count: 24, symbols: ['😂', '🤣', '✨', '💥', '🎉'] });

  setTimeout(() => surpriseStage.classList.remove('is-shaking'), 500);

  fadeOut(audioMain);
  fadeOut(audioFriend);
  fadeOut(audioFinal);
  playSurpriseAudio();

  surpriseCaptionTimer = setTimeout(() => {
    surpriseCaptionTimer = null;
    typewrite(surpriseCaption, CONFIG.surprise.captionText, 30);
  }, 400);
}

function closeSurpriseModal() {
  if (!surpriseModal.classList.contains('is-active')) return;
  if (surpriseJumpscareTimer) { clearTimeout(surpriseJumpscareTimer); surpriseJumpscareTimer = null; }
  if (surpriseCaptionTimer)   { clearTimeout(surpriseCaptionTimer);   surpriseCaptionTimer   = null; }

  surpriseModal.classList.remove('is-active');
  surpriseModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  resetSurpriseStageVisuals();

  fadeOut(audioSurprise).then(() => { if (state.hasOpenedLetter) playMain(); });
}

/* A tiny synthesized "boop-boop-BWAA" stinger so the jumpscare has an
   instant comedic punch even before assets/music/surprise.mp3 finishes
   fading in. Pure Web Audio API — no extra audio file needed. */
function playStinger() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;

    const notes = [
      { freq: 220, start: 0,    dur: 0.09, type: 'square'   },
      { freq: 330, start: 0.09, dur: 0.09, type: 'square'   },
      { freq: 110, start: 0.18, dur: 0.5,  type: 'sawtooth' },
    ];

    notes.forEach((n) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, now + n.start);
      if (n.type === 'sawtooth') {
        osc.frequency.exponentialRampToValueAtTime(n.freq * 1.8, now + n.start + n.dur);
      }
      gain.gain.setValueAtTime(0.0001, now + n.start);
      gain.gain.exponentialRampToValueAtTime(0.25, now + n.start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + n.start);
      osc.stop(now + n.start + n.dur + 0.02);
    });

    setTimeout(() => ctx.close(), 900);
  } catch (e) {
    // Web Audio unsupported / blocked by autoplay policy — the visual
    // jumpscare still happens, we just skip the synth stinger.
  }
}

/* ================================================================
   MEMORY WALL
   FIX: lightbox trigger dipasang langsung saat setiap tile dibuat,
   sehingga tidak ada race condition dengan waktu rendering DOM.
   ================================================================ */
function renderMemoryWall() {
  // Bangun gallery array sekali untuk dipakai semua tile
  const memoryGallery = CONFIG.memoryPhotos.map((item) => ({
    src:     item.image,
    caption: item.caption || '',
  }));

  CONFIG.memoryPhotos.forEach((item, i) => {
    const tile       = document.createElement('div');
    tile.className   = 'memory-tile reveal';

    const img        = document.createElement('img');
    img.src          = item.image;
    img.alt          = item.caption || `Memory ${i + 1}`;
    img.loading      = 'lazy';
    attachImageFallback(img, item.image.split('/').pop());

    tile.appendChild(img);

    // ── FIX: pasang listener di tile (bukan img) agar ::after
    //    pseudo-element tidak memblokir klik ──────────────────────
    tile.style.cursor = 'zoom-in';
    tile.addEventListener('click', () => {
      openLightbox(
        memoryGallery[i].src,
        memoryGallery[i].caption,
        memoryGallery,
        i
      );
    });
    // ─────────────────────────────────────────────────────────────

    if (item.caption) tile.title = item.caption;

    memoryGrid.appendChild(tile);
  });
}

/* ================================================================
   TIMELINE
   ================================================================ */
function renderTimeline() {
  CONFIG.timeline.forEach((item) => {
    const el       = document.createElement('div');
    el.className   = 'timeline-item reveal';
    el.innerHTML   = `
      <p class="timeline-item__year">${item.year}</p>
      <p class="timeline-item__text">${item.text}</p>
    `;
    timelineTrack.appendChild(el);
  });
}

/* ================================================================
   MUSIC SYSTEM
   ================================================================ */
function setVolumeImmediate(audioEl, vol) {
  audioEl.volume = Math.max(0, Math.min(1, vol));
}

function fadeIn(audioEl, target = state.volume, duration = 3000) {
  return new Promise((resolve) => {
    audioEl.volume = 0;
    audioEl.muted  = state.isMuted;
    const playPromise = audioEl.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {});
    }
    const steps    = 24;
    const stepTime = duration / steps;
    let i = 0;
    const id = setInterval(() => {
      i++;
      audioEl.volume = Math.min(target, (target * i) / steps);
      if (i >= steps) { clearInterval(id); resolve(); }
    }, stepTime);
  });
}

function fadeOut(audioEl, duration = 900) {
  return new Promise((resolve) => {
    if (audioEl.paused || audioEl.volume === 0) { resolve(); return; }
    const startVol = audioEl.volume;
    const steps    = 14;
    const stepTime = duration / steps;
    let i = 0;
    const id = setInterval(() => {
      i++;
      audioEl.volume = Math.max(0, startVol * (1 - i / steps));
      if (i >= steps) {
        clearInterval(id);
        audioEl.pause();
        resolve();
      }
    }, stepTime);
  });
}

function playMain() {
  if (audioMain.getAttribute('src') !== CONFIG.mainMusic.file) {
    audioMain.src = CONFIG.mainMusic.file;
  }
  audioMain.loop       = true;
  state.currentAudioKey = 'main';
  musicTrackName.textContent = CONFIG.mainMusic.name;
  fadeIn(audioMain);
  bindAudioErrorNote(audioMain, CONFIG.mainMusic.file);
}

function playFriendAudio(friend) {
  audioFriend.src      = friend.music;
  audioFriend.loop     = false;
  state.currentAudioKey = 'friend';
  musicTrackName.textContent = `${friend.name}'s Song`;
  fadeIn(audioFriend);
  bindAudioErrorNote(audioFriend, friend.music);
}

function playFinalAudio() {
  audioFinal.src       = CONFIG.finalLetter.music;
  audioFinal.loop      = true;
  state.currentAudioKey = 'final';
  musicTrackName.textContent = 'Final Letter';
  fadeIn(audioFinal);
  bindAudioErrorNote(audioFinal, CONFIG.finalLetter.music);
}

function playSurpriseAudio() {
  audioSurprise.src   = CONFIG.surprise.music;
  audioSurprise.loop  = true;
  state.currentAudioKey = 'surprise';
  musicTrackName.textContent = 'One More Surprise 😈';
  fadeIn(audioSurprise);
  bindAudioErrorNote(audioSurprise, CONFIG.surprise.music);
}

function bindAudioErrorNote(audioEl, path) {
  audioEl.addEventListener('error', () => {
    musicTrackName.textContent = `Add music: ${path.split('/').pop()}`;
  }, { once: true });
}

function getCurrentAudio() {
  if (state.currentAudioKey === 'main')     return audioMain;
  if (state.currentAudioKey === 'friend')   return audioFriend;
  if (state.currentAudioKey === 'final')    return audioFinal;
  if (state.currentAudioKey === 'surprise') return audioSurprise;
  return null;
}

/* ---------------- Floating Music Player UI ---------------- */
function setupMusicPlayerUI() {
  musicVolume.value = String(state.volume);

  musicToggleBtn.addEventListener('click', () => {
    musicPlayer.classList.toggle('is-open');
  });

  musicPlayPause.addEventListener('click', () => {
    const audio = getCurrentAudio();
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      musicPlayPause.textContent = '⏸';
    } else {
      audio.pause();
      musicPlayPause.textContent = '▶';
    }
  });

  musicMuteBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    [audioMain, audioFriend, audioFinal, audioSurprise].forEach((a) => { a.muted = state.isMuted; });
    musicMuteBtn.textContent = state.isMuted ? '🔈' : '🔊';
  });

  musicVolume.addEventListener('input', (e) => {
    state.volume = parseFloat(e.target.value);
    const audio  = getCurrentAudio();
    if (audio) setVolumeImmediate(audio, state.volume);
  });

  [audioMain, audioFriend, audioFinal, audioSurprise].forEach((audio) => {
    audio.addEventListener('play',  () => { musicPlayPause.textContent = '⏸'; });
    audio.addEventListener('pause', () => { musicPlayPause.textContent = '▶'; });
  });
}

/* ================================================================
   PHOTO LIGHTBOX SYSTEM
   ================================================================ */

/* ================================================================
   LIGHTBOX STATE
   ================================================================ */
const lbState = {
  gallery:      [],
  currentIndex: 0,
  touchStartX:  null,
  touchStartY:  null,
  isAnimating:  false,
};

/* ================================================================
   BUILD LIGHTBOX DOM (injected once on first call)
   ================================================================ */
let lightboxEl  = null;
let lbImgEl     = null;
let lbCapEl     = null;
let lbPrevBtn   = null;
let lbNextBtn   = null;
let lbDotsEl    = null;
let lbSwipeHint = null;

function buildLightboxDOM() {
  if (lightboxEl) return;

  lightboxEl = document.createElement('div');
  lightboxEl.id        = 'photo-lightbox';
  lightboxEl.className = 'lightbox';
  lightboxEl.setAttribute('aria-modal', 'true');
  lightboxEl.setAttribute('role', 'dialog');
  lightboxEl.setAttribute('aria-label', 'Photo viewer');
  lightboxEl.innerHTML = `
    <button class="lightbox__close" id="lb-close" aria-label="Close photo viewer">✕</button>
    <button class="lightbox__nav lightbox__nav--prev is-hidden" id="lb-prev" aria-label="Previous photo">&#8592;</button>
    <button class="lightbox__nav lightbox__nav--next is-hidden" id="lb-next" aria-label="Next photo">&#8594;</button>
    <div class="lightbox__stage">
      <div class="lightbox__img-wrap">
        <img class="lightbox__img" id="lb-img" src="" alt="" draggable="false" />
      </div>
      <p class="lightbox__caption" id="lb-caption"></p>
      <div class="lightbox__dots" id="lb-dots"></div>
    </div>
    <span class="lightbox__swipe-hint" id="lb-swipe-hint" aria-hidden="true">swipe to browse</span>
  `;

  document.body.appendChild(lightboxEl);

  lbImgEl     = lightboxEl.querySelector('#lb-img');
  lbCapEl     = lightboxEl.querySelector('#lb-caption');
  lbPrevBtn   = lightboxEl.querySelector('#lb-prev');
  lbNextBtn   = lightboxEl.querySelector('#lb-next');
  lbDotsEl    = lightboxEl.querySelector('#lb-dots');
  lbSwipeHint = lightboxEl.querySelector('#lb-swipe-hint');

  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  lightboxEl.querySelector('#lb-close').addEventListener('click', closeLightbox);
  lbPrevBtn.addEventListener('click', () => navigateLightbox(-1));
  lbNextBtn.addEventListener('click', () => navigateLightbox(1));

  lightboxEl.addEventListener('touchstart', (e) => {
    lbState.touchStartX = e.changedTouches[0].screenX;
    lbState.touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  lightboxEl.addEventListener('touchend', (e) => {
    if (lbState.touchStartX === null) return;
    const dx = e.changedTouches[0].screenX - lbState.touchStartX;
    const dy = e.changedTouches[0].screenY - lbState.touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      navigateLightbox(dx < 0 ? 1 : -1);
    }
    lbState.touchStartX = null;
    lbState.touchStartY = null;
  }, { passive: true });

  document.addEventListener('keydown', handleLightboxKey);
}

function handleLightboxKey(e) {
  if (!lightboxEl || !lightboxEl.classList.contains('is-active')) return;
  if (e.key === 'Escape')     { closeLightbox(); return; }
  if (e.key === 'ArrowLeft')  navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
}

/* ================================================================
   OPEN / CLOSE
   ================================================================ */
function openLightbox(src, caption = '', galleryItems = [], currentIndex = 0) {
  buildLightboxDOM();

  lbState.gallery      = galleryItems.length ? galleryItems : [{ src, caption }];
  lbState.currentIndex = currentIndex;
  lbState.isAnimating  = false;

  document.body.classList.add('lightbox-open');
  lightboxEl.classList.add('is-active');

  renderLightboxSlide(src, caption, false);
  updateNavButtons();
  buildDots();

  if (lbState.gallery.length > 1 && 'ontouchstart' in window) {
    lbSwipeHint.style.display = '';
    lbSwipeHint.style.animation = 'none';
    void lbSwipeHint.offsetWidth;
    lbSwipeHint.style.animation = '';
  } else {
    lbSwipeHint.style.display = 'none';
  }
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove('is-active');
  document.body.classList.remove('lightbox-open');

  setTimeout(() => {
    if (lbImgEl) lbImgEl.src = '';
    if (lbCapEl) lbCapEl.textContent = '';
    if (lbDotsEl) lbDotsEl.innerHTML = '';
    lbState.gallery = [];
  }, 400);
}

/* ================================================================
   NAVIGATE (gallery mode)
   ================================================================ */
function navigateLightbox(direction) {
  if (lbState.gallery.length <= 1) return;
  if (lbState.isAnimating) return;

  const newIndex = lbState.currentIndex + direction;
  if (newIndex < 0 || newIndex >= lbState.gallery.length) return;

  lbState.isAnimating = true;

  const outClass = direction > 0 ? 'slide-out-left' : 'slide-out-right';
  lbImgEl.classList.add(outClass);

  setTimeout(() => {
    lbImgEl.classList.remove(outClass);
    lbState.currentIndex = newIndex;
    const item = lbState.gallery[newIndex];
    renderLightboxSlide(item.src, item.caption, true, direction);
    updateNavButtons();
    updateDots();
    lbState.isAnimating = false;
  }, 220);
}

function renderLightboxSlide(src, caption, animate = false, direction = 1) {
  lbImgEl.classList.add('is-loading');
  lbCapEl.style.opacity = '0';

  const inClass = animate ? (direction > 0 ? 'slide-in-left' : 'slide-in-right') : '';

  const tempImg = new Image();
  tempImg.onload = () => {
    lbImgEl.src = src;
    lbImgEl.alt = caption || '';
    lbImgEl.classList.remove('is-loading');
    if (inClass) {
      lbImgEl.classList.add(inClass);
      lbImgEl.addEventListener('animationend', () => lbImgEl.classList.remove(inClass), { once: true });
    }
    lbCapEl.textContent   = caption || '';
    lbCapEl.style.opacity = '1';
  };
  tempImg.onerror = () => {
    lbImgEl.src = src;
    lbImgEl.classList.remove('is-loading');
    lbCapEl.textContent   = caption || '';
    lbCapEl.style.opacity = '1';
  };
  tempImg.src = src;
}

/* ================================================================
   NAV BUTTONS
   ================================================================ */
function updateNavButtons() {
  const isGallery = lbState.gallery.length > 1;
  lbPrevBtn.classList.toggle('is-hidden', !isGallery || lbState.currentIndex === 0);
  lbNextBtn.classList.toggle('is-hidden', !isGallery || lbState.currentIndex === lbState.gallery.length - 1);
}

/* ================================================================
   DOTS INDICATOR
   ================================================================ */
function buildDots() {
  lbDotsEl.innerHTML = '';
  if (lbState.gallery.length <= 1) return;

  const total = Math.min(lbState.gallery.length, 12);
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className   = `lightbox__dot${i === lbState.currentIndex ? ' is-active' : ''}`;
    dot.setAttribute('aria-label', `Photo ${i + 1}`);
    dot.dataset.index = String(i);
    dot.addEventListener('click', () => {
      const diff = i - lbState.currentIndex;
      if (diff !== 0) navigateLightbox(diff > 0 ? 1 : -1);
    });
    lbDotsEl.appendChild(dot);
  }
}

function updateDots() {
  const dots = lbDotsEl.querySelectorAll('.lightbox__dot');
  const idx  = Math.min(lbState.currentIndex, dots.length - 1);
  dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
}

/* ================================================================
   STATIC LIGHTBOX TRIGGERS
   Hanya untuk elemen statis (hero photo + final photo).
   Memory wall sudah ditangani di renderMemoryWall().
   Friend modal ditangani di attachFriendModalPhotoTriggers().
   ================================================================ */
function attachStaticLightboxTriggers() {
  // Hero photo (bundar)
  const derlyPhoto = document.getElementById('derly-photo');
  if (derlyPhoto) {
    derlyPhoto.style.cursor = 'zoom-in';
    derlyPhoto.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(CONFIG.photos.main, CONFIG.person.name);
    });
  }

  // Final letter photo
  const finalPhoto = document.getElementById('final-photo');
  if (finalPhoto) {
    finalPhoto.style.cursor = 'zoom-in';
    finalPhoto.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(finalPhoto.src, 'MAMASS RADITHH');
    });
  }
}

/* ================================================================
   FRIEND MODAL PHOTO TRIGGERS
   Dipanggil di dalam openFriendModal() setelah foto dimuat.
   ================================================================ */
function attachFriendModalPhotoTriggers() {
  const friendPhoto   = document.getElementById('modal-friend-photo');
  const togetherPhoto = document.getElementById('modal-together-photo');
  const friendName    = document.getElementById('modal-friend-name');

  if (friendPhoto && friendPhoto.src && !friendPhoto.dataset.lbAttached) {
    friendPhoto.dataset.lbAttached = 'true';
    friendPhoto.style.cursor = 'zoom-in';
    friendPhoto.addEventListener('click', (e) => {
      e.stopPropagation();
      const name  = friendName ? friendName.textContent : '';
      const items = [{ src: friendPhoto.src, caption: name }];
      if (togetherPhoto && !document.getElementById('modal-together-wrap').hidden) {
        items.push({ src: togetherPhoto.src, caption: `${name} & Derly` });
      }
      openLightbox(friendPhoto.src, name, items, 0);
    });
  }

  if (togetherPhoto && togetherPhoto.src && !togetherPhoto.dataset.lbAttached) {
    const togetherWrap = document.getElementById('modal-together-wrap');
    if (togetherWrap && !togetherWrap.hidden) {
      togetherPhoto.dataset.lbAttached = 'true';
      togetherPhoto.style.cursor = 'zoom-in';
      const name = friendName ? friendName.textContent : '';
      togetherPhoto.addEventListener('click', (e) => {
        e.stopPropagation();
        const items = [];
        if (friendPhoto && friendPhoto.src) items.push({ src: friendPhoto.src, caption: name });
        items.push({ src: togetherPhoto.src, caption: `${name} & Derly` });
        openLightbox(togetherPhoto.src, `${name} & Derly`, items, items.length - 1);
      });
    }
  }
}