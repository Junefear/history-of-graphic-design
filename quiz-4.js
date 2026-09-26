const questions_4 = [
    {
        q: " Hangisi öncüleri Picasso  ve Georges Braque olan, kolajın birleştirici  yönünü ön plana çıkaran akımdır?",
        options_4: ["Kübizm", "Sentetik Kübizm", "Sürrealizm", "Dadaizm"],
        answer_4: 1,
        img_4: "./images//modern-art/61_sekil.png"
    },
    {
        q: "Hangisi geleneksel değerlerin reddini,teknolojiyle beraber gelişen makinelerin hızı ve hareketinden ilham alarak sanatı yeniden şekillendirme arzularını görsel sanatlar ve şiire yansıtan akımdır?",
        options_4: ["Dadaizm", "Süprematizm", "Bauhaus", "Fütürizm"],
        answer_4: 3,
        img_4: "./images/modern-art/64_sekil.jpg"
    },
    {
        q: "Hangisi yapılarında bilinçaltı, rüyalar ve sezgisel algıların olduğu ve 'Gerçeküstücülük' anlamına gelen akımdır?",
        options_4: ["Sürrealizm", "Kübizm", "Dadaizm", "Pop Art"],
        answer_4: 0,
        img_4: "./images/modern-art/80_sekil.png"
    },
    {
        q: "Hangisi Birinci Dünya Savaşı’na ve savaşın arkasındaki kapitalist düzene karşı bir isyan olarak ortaya çıkan akımdır??",
        options_4: ["Op Art ", "Süprematizm", "Dadaizm", "Konstrüktivizm"],
        answer_4: 2,
        img_4: "./images/modern-art/71_sekil.jpg"
    },
    {
        q: "Hangisi temelinde dik açılı biçimlerin kullanımı ve ana renklerle (kırmızı, mavi, sarı) yapılan sade düzenlemeler yer aldığı, soyut ve geometrik bir üslubu benimseyen akımdır?",
        options_4: ["Op Art", "Bauhaus", "Pop Art", "De Stij"],
        answer_4: 3,
        img_4: "./images/modern-art/101_sekil.png"
    },
    {
        q: "Hangisi tüketim kültürü ve reklam tekniklerinden faydalanan, geçici ve hızlı tüketimi anlatan akımdır?",
        options_4: ["Op Art", "Bauhaus", "Pop Art", "De Stij"],
        answer_4: 2,
        img_4: "./images/modern-art/116_sekil.jpg"
    },
    {
        q: "Hangisi sanat ile zanaatı birleştirmeyi temel hedef edinerek kurulan kurumdur?",
        options_4: ["Dadaizm", "Süprematizm", "Bauhaus", "Fütürizm"],
        answer_4: 2,
        img_4: "./images/modern-art/bauhaus.JPG"
    },
    {
        q: "Hangisi toplumsal faydayı önceleyen bir sanat anlayışına duyulan ihtiyaç doğrultusunda, sanatı doğrudan işlevselliğe hizmet etmesi gerektiğini savunan akımdır?",
        options_4: ["Pop Art", "Süprematizm", "Dadaizm", "Konstrüktivizm"],
        answer_4: 3,
        img_4: "./images/modern-art/93_sekil.png"
    },
    {
        q: "Hangisi algıyı manipüle etme fikrine dayanan, 1960’lı yıllarda ortaya çıkan ve özellikle siyah-beyaz zıtlığı ile geometrik şekillerin kullanıldığı bir çağdaş sanat akımıdır?",
        options_4: ["Op Art", "Bauhaus", "Pop Art", "De Stij"],
        answer_4: 0,
        img_4: "./images/modern-art/121_sekil.png"
    },
    {
        q: "Hangisi \"Siyah Kare\" adlı yapıtla kendini duyuran ve saf soyut sanatı hedeflemiş; nesne temsiline dayanmayan, sezgiye dayalı bir yaratım süreciyle şekillenen akımdır?",
        options_4: ["Pop Art", "Süprematizm", "Dadaizm", "Konstrüktivizm"],
        answer_4: 1,
        img_4: "./images/modern-art/87_sekil.jpg"
    }
];

// 🔧 Tanımlanmamış değişkenleri ekleyelim
let current_4 = 0;
let score_4 = 0;

// Changed: appended underscore to const variable names to avoid duplicates
const startBtn_4 = document.getElementById("startBtn-4");
const startScreen_4 = document.getElementById("startScreen-4");
const quizContainer_4 = document.getElementById("quizContainer-4");
const questionText_4 = document.getElementById("questionText-4");
const optionsArea_4 = document.getElementById("options-4");
const nextBtn_4 = document.getElementById("nextBtn-4");
const scoreDisplay_4 = document.getElementById("scoreDisplay-4");
const ada_4 = document.getElementById("ada-4");
const quizImage_4 = document.getElementById("quizImage-4");

// ✅ Başlat butonuna tıklanınca quiz başlasın
startBtn_4.addEventListener("click", () => {

    document.body.style.overflow = 'hidden';
    startScreen_4.classList.add("loaded");
    setTimeout(() => {
        quizContainer_4.classList.add("visible");
        loadQuestion_4();
    }, 100);
});

function showNext_4(show) {
    nextBtn_4.style.display = show ? 'inline-block' : 'none';
}

function loadQuestion_4() {

    showNext_4(false);
    if (ada_4) ada_4.classList.remove('hidden-slide');
    
    debugger;
    const q = questions_4[current_4];
    questionText_4.textContent = q.q;

    // Resim önce bulanık olur
    quizImage_4.style.transition = 'none';
    quizImage_4.style.filter = 'blur(25px)';
    quizImage_4.getBoundingClientRect(); // repaint
    quizImage_4.src = q.img_4;
    setTimeout(() => {
        quizImage_4.style.transition = 'filter 600ms ease';
    }, 30);

    // Şıkları oluştur
    optionsArea_4.innerHTML = "";
    q.options_4.forEach((opt, i) => {
        const btn_4 = document.createElement("button");
        btn_4.textContent = opt;
        btn_4.type = "button";
        btn_4.onclick = () => checkAnswer_4(i);
        optionsArea_4.appendChild(btn_4);
    });

    
}

function checkAnswer_4(selected) {
    const q = questions_4[current_4];
    const buttons = optionsArea_4.querySelectorAll("button");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer_4) btn.classList.add("correct");
        if (i === selected && selected !== q.answer_4) btn.classList.add("wrong");
    });

    if (selected === q.answer_4) {
        score_4 += 10;
        if (scoreDisplay_4) scoreDisplay_4.textContent = score_4;
    }

    // Cevap sonrası resim netleşsin
    quizImage_4.style.transition = 'filter 600ms ease';
    quizImage_4.style.filter = 'blur(0px)';

    if (ada_4) ada_4.classList.add('hidden-slide');
    showNext_4(true);
}


nextBtn_4.addEventListener('click', () => {
    debugger;

    current_4++;
    if (current_4 < questions_4.length) {
        loadQuestion_4();
    } else {
        // 10 soru x 10 puan = maksimum 100
        const percent = score_4;

        const leftCol = document.querySelector('.quiz-main-left-4');
        const rightCol = document.querySelector('.quiz-main-right-4');
        const scoreArea = document.querySelector('.quiz-container-4 > article');

        if (leftCol) leftCol.style.opacity = '0';
        if (rightCol) rightCol.style.opacity = '0';
        if (scoreArea) scoreArea.style.opacity = '0';

        quizContainer_4.innerHTML += `
          <div class="result-screen">
            <span>Başarı Oranın</span>
            <h2>${percent}%</h2>
            <a href="javascript:void(0)" class="restart-btn-4">
                Yeni Konuya Geç
            </a>
          </div>
        `;

        const restartBtn = document.querySelector('.restart-btn-4');

        restartBtn.addEventListener('click', () => {
            document.body.style.overflow = 'auto';

            window.removeEventListener('scroll', handleScrollLock4);

            const quizGame = document.querySelector('.quiz-game-4');
            if (quizGame) quizGame.style.display = 'none';

            setTimeout(() => {
                ScrollTrigger.refresh(true);
            }, 300);

            localStorage.setItem("quiz-4-Hidden", "true");
        });
    }
});



window.addEventListener("load", () => {
    const quizGame = document.querySelector(".quiz-game-4");
    if (localStorage.getItem("quiz-4-Hidden") === "true" && quizGame) {
        quizGame.style.display = "none";
        document.body.style.overflow = "auto";
        setTimeout(() => {
            if (typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.refresh(true);
            }
        }, 100);
    }
});


function handleScrollLock4() {
    const quizGame = document.querySelector('.quiz-game-4');
    if (!quizGame || window.getComputedStyle(quizGame).display === 'none') return;

    const quizTop = Math.round(quizGame.getBoundingClientRect().top + window.scrollY);
    if (window.scrollY > quizTop) {
        window.scrollTo(0, quizTop);
    }
}

// Scroll listener'ı bir kez ekliyoruz
window.addEventListener('scroll', handleScrollLock4);