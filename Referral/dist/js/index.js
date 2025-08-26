const player = new Plyr('#Player', {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
});

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#FaqToggleBtn button');
    const btnText = document.querySelector('#FaqToggleBtn button span');
    const arrow = document.querySelector('#FaqToggleBtn button .faq-arrow');
    const faqList = document.getElementById('FaqAccordion');
    const extras = faqList.querySelectorAll('ul > li:nth-child(n+4)');

    if (!extras.length) {
        btn.classList.add('uk-hidden')
        return
    }
    let expanded = false;

    extras.forEach(li => {
        li.classList.add('faq-collapsed');
        li.classList.remove('faq-expanded');
    });

    btn.addEventListener('click', function () {
        expanded = !expanded;
        extras.forEach(li => {
            if (expanded) {
                li.classList.remove('faq-collapsed');
                li.classList.add('faq-expanded');
            } else {
                li.classList.add('faq-collapsed');
                li.classList.remove('faq-expanded');
            }
        });
        btnText.textContent = expanded ? 'نمایش کمتر' : 'نمایش بیشتر';
        arrow.classList.toggle('rotated', expanded);
    });
});