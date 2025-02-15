
// Set the date we're counting down to
const countDownDate = new Date("June 28, 2025 00:00:00").getTime();

let currentLang = 'sl'; // Default language

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = `
        <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">${currentLang === 'sl' ? 'Dni' : 'Days' }</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">${currentLang === 'sl' ? 'Ur' : 'Hours' }</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">${currentLang === 'sl' ? 'Minut' : 'Minutes' }</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">${currentLang === 'sl' ? 'Sekund' : 'Seconds' }</span>
        </div>
    `;

    // If the countdown is finished, hide the countdown
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-section").style.display = "none";
    }
}, 1000);

const translations = {
    en: {
        heroTitle: "Klara & Tadej",
        weddingDate: "June 28, 2025",
        timelineTitle: "Wedding Timeline",
        timelineItems: [
            {
                time: "3:30 PM - Gathering of guests in front of the church",
                additionalInfo: {
                    text: "Parish Church of St. Jernej",
                    link: "https://maps.app.goo.gl/b1WfydJ8ZhpvYQju9"
                }
            },
            {
                time: "4:00 PM - Wedding Mass",
                additionalInfo: {
                    text: "Parish Church of St. Jernej",
                    link: "https://maps.app.goo.gl/b1WfydJ8ZhpvYQju9"
                }
            },
            {
                time: "5:30 PM - Wedding Celebration at Gostišče Iršič",
                additionalInfo: {
                    text: "Gostišče Iršič",
                    link: "https://www.google.si/maps/place/Gosti%C5%A1%C4%8De+Ir%C5%A1i%C4%8D/@46.3514653,15.5517154,17z/data=!3m1!4b1!4m9!3m8!1s0x476580e5a5adc54f:0x62a1fda4cb9e073d!5m2!4m1!1i2!8m2!3d46.3514653!4d15.5542903!16s%2Fg%2F1tkqz17h?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                }
            },
            {
                time: "Wishes to the newlyweds",
                additionalInfo: {
                    text: "Gostišče Iršič",
                    link: "https://www.google.si/maps/place/Gosti%C5%A1%C4%8De+Ir%C5%A1i%C4%8D/@46.3514653,15.5517154,17z/data=!3m1!4b1!4m9!3m8!1s0x476580e5a5adc54f:0x62a1fda4cb9e073d!5m2!4m1!1i2!8m2!3d46.3514653!4d15.5542903!16s%2Fg%2F1tkqz17h?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                }
            }
        ],
        giftsTitle: "Wishes to the Newlyweds",
        giftsText: "Don't worry about gifts, just a few euros in an envelope would be great.",
        giftsText2: "(We gratefully decline all flowers, decorations, etc.)",
        directionsTitle: "Gostišče Iršič",
        menuTitle: "Menu",
        menuText: "There will be a meat and vegetarian menu available for the wedding dinner. Most guests will have the meat menu, those who would like the vegetarian menu should inform us when confirming attendance. Also, please let us know if you have any dietary restrictions.",
        accommodationTitle: "Accommodation",
        accommodationText: "For the wedding date, all their rooms are reserved for you guests at Gostišče Iršič. You can make a reservation directly with them using the form <a href='https://gostisce-irsic.com/prenocisca/' target='_blank'>Book Accommodation</a> or through contact on their website. When reserving, please note that you are our guests. 😊",
        alternativeAccommodationText: "If all accommodations at Gostišče Iršič are filled, nearby <a href='https://www.h-leonardo.com/' target='_blank'>Hotel Leonardo</a> is also available.",
        photosTitle: "Photos",
        photosText: "All the beautiful photos you manage to capture on our day, you are invited to share with us and others. A link will be prepared before the wedding where you can upload photos.",
        officialPhotosText: "When we receive the official photos, they will be published or accessible on this page.",
        countdownTitle: "Countdown to the Wedding"
    },
    sl: {
        heroTitle: "Klara & Tadej",
        weddingDate: "28.6.2025",
        timelineTitle: "Poročna časovnica",
        timelineItems: [
            {
                time: "15:30 - Zbor svatov pred cerkvijo",
                additionalInfo: {
                    text: "Župnijska cerkev sv. Jerneja",
                    link: "https://maps.app.goo.gl/b1WfydJ8ZhpvYQju9"
                }
            },
            {
                time: "16:00 - Poročna sveta maša",
                additionalInfo: {
                    text: "Župnijska cerkev sv. Jerneja",
                    link: "https://maps.app.goo.gl/b1WfydJ8ZhpvYQju9"
                }
            },
            {
                time: "17:30 - Poročno slavje v Gostišču Iršič",
                additionalInfo: {
                    text: "Gostišče Iršič",
                    link: "https://www.google.si/maps/place/Gosti%C5%A1%C4%8De+Ir%C5%A1i%C4%8D/@46.3514653,15.5517154,17z/data=!3m1!4b1!4m9!3m8!1s0x476580e5a5adc54f:0x62a1fda4cb9e073d!5m2!4m1!1i2!8m2!3d46.3514653!4d15.5542903!16s%2Fg%2F1tkqz17h?hl=sl&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                }
            },
            {
                time: "Voščila mladoporočencema",
                additionalInfo: {
                    text: "Gostišče Iršič",
                    link: "https://www.google.si/maps/place/Gosti%C5%A1%C4%8De+Ir%C5%A1i%C4%8D/@46.3514653,15.5517154,17z/data=!3m1!4b1!4m9!3m8!1s0x476580e5a5adc54f:0x62a1fda4cb9e073d!5m2!4m1!1i2!8m2!3d46.3514653!4d15.5542903!16s%2Fg%2F1tkqz17h?hl=sl&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                }
            }
        ],
        giftsTitle: "Voščila mladoporočencema",
        giftsText: "Z darili si ne delajte skrbi, naj raje kak evro v kuverti zašumi.",
        giftsText2: "(Hvaležno odklanjava vso cvetje, dekoracijo itd.)",
        directionsTitle: "Gostišče Iršič",
        menuTitle: "Meni",
        menuText: "Na voljo bosta mesni in vegetarijanski meni za poročno večerjo. Večina svatov bo imela mesni meni, tisti, ki bi želeli vegetarijanski meni sporočite ob potrditvi udeležbe. Prav tako javite, v kolikor imate prehranske posebnosti.",
        accommodationTitle: "Prenočišča",
        accommodationText: "Za datum poroke so v Gostišču Iršič za vas svate rezervirane vse njihove sobe. Rezervacijo lahko opravite direktno pri njih z obrazcem <a href='https://gostisce-irsic.com/prenocisca/' target='_blank'>Rezervirajte prenočišče</a> ali prek kontakta z njihove spletne strani. Ob rezervaciji je potrebna opomba, da ste najini svatje. 😊",
        alternativeAccommodationText: "V kolikor se v Gostišču Iršič zapolnijo vsa prenočišča, je na voljo tudi bližnji <a href='https://www.h-leonardo.com/' target='_blank'>Hotel Leonardo</a>.",
        photosTitle: "Fotografije",
        photosText: "Vse lepe fotografije, ki vam jih bo uspelo ujeti na najin dan, vabljeni, da delite z nama in ostalimi. Tukaj bo pred poroko pripravljen link, kjer boste lahko odložili fotografije.",
        officialPhotosText: "Ko prejmeva uradne fotografije, bodo objavljene oz. dostopne na tej strani.",
        countdownTitle: "Do poroke še"
    }
};

function switchLanguage() {
    // Toggle the current language
    if (currentLang == 'sl') {
        currentLang = 'en';
    } else {
        currentLang = 'sl';
    }

    // Update hero section
    document.getElementById('hero-title').innerText = translations[currentLang].heroTitle;
    document.getElementById('wedding-date').innerText = translations[currentLang].weddingDate;
    document.getElementById('timeline-title').innerText = translations[currentLang].timelineTitle;

    // Update timeline items
    const timelineItems = translations[currentLang].timelineItems;
    const timelineList = document.querySelector('#timeline ul');
    timelineList.innerHTML = ''; // Clear existing items
    timelineItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="icon-container">
                            <img src="./zbor.png" alt="Icon" class="icon">
                            <div class="text-container">
                                <span id="timeline-item-${index + 1}">${item.time}</span>
                                <div class="additional-info"><a target="_blank" href="${item.additionalInfo.link}">${item.additionalInfo.text}</a></div>
                            </div>
                        </div>`;
        timelineList.appendChild(li);
    });

    // Update other sections
    document.getElementById('gifts-title').innerText = translations[currentLang].giftsTitle;
    document.getElementById('gifts-text').innerHTML = translations[currentLang].giftsText;
    document.getElementById('gifts-text-2').innerText = translations[currentLang].giftsText2;
    document.getElementById('directions-title').innerText = translations[currentLang].directionsTitle;
    document.getElementById('menu-title').innerText = translations[currentLang].menuTitle;
    document.getElementById('menu-text').innerHTML = translations[currentLang].menuText;
    document.getElementById('accommodation-title').innerText = translations[currentLang].accommodationTitle;
    document.getElementById('accommodation-text').innerHTML = translations[currentLang].accommodationText;
    document.getElementById('alternative-accommodation-text').innerHTML = translations[currentLang].alternativeAccommodationText;
    document.getElementById('photos-title').innerText = translations[currentLang].photosTitle;
    document.getElementById('photos-text').innerText = translations[currentLang].photosText;
    document.getElementById('official-photos-text').innerText = translations[currentLang].officialPhotosText;
    document.getElementById('countdown-title').innerText = translations[currentLang].countdownTitle;

    // Change the flag based on the current language
    const langButton = document.getElementById('lang-en');
    langButton.innerHTML = currentLang === 'en' ? '<img src="path/to/slovenian-flag.png" alt="Slovenian" />' : '<img src="path/to/english-flag.png" alt="English" />';
}
