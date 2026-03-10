/* js/hero-slider.js
   Prosty fade slider z autoplay i aktualizacją CTA.
   Konfiguracja SLIDES poniżej.
*/
document.addEventListener('DOMContentLoaded', function(){

  // -------- KONFIGURACJA: podmień ścieżki / teksty tutaj -----------
  const SLIDES = [
    {
      id: 'slide-1',
      desktop: 'banery/strona-61.jpg',
      mobile:  null, 
      title: 'Witamy w Linux Kings',
      subtitle: 'Oficjalna strona',
      ctaText: 'Chcesz pograć?',
      ctaHref: 'matches.html',
      textColor: 'light' 
    },
    {
      id: 'slide-2',
      desktop: 'banery/strona-63.jpg', 
      mobile:  null,
      title: '',
      subtitle: '',
      ctaText: 'Przejdz do sklepu',
      ctaHref: 'jerseys.html',
      textColor: 'light'
    },
    {
      id: 'slide-3',
      desktop: 'banery/strona-64.jpg', 
      mobile:  null,
      title: '',
      subtitle: '',
      ctaText: 'Zobacz kolekcje',
      ctaHref: 'jerseys.html?type=gadka',
      textColor: 'light'
    }
  ];
  const AUTOPLAY_DELAY = 5000; // ms
  // ----------------------------------------------------------------

  const slider = document.getElementById('heroSlider');
  if(!slider) return;

  const slidesContainer = slider.querySelector('.hero-slides');
  const dotsContainer = slider.querySelector('.hero-dots');
  const prevBtn = slider.querySelector('.hero-prev');
  const nextBtn = slider.querySelector('.hero-next');
  const cta = document.getElementById('heroCta');

  // helper: createSlideElement
  function createSlideEl(slide, idx) {
    const div = document.createElement('div');
    div.className = 'hero-slide';
    div.dataset.index = idx;
    div.id = slide.id || ('slide-' + idx);
    const img = (window.innerWidth < 760 && slide.mobile) ? slide.mobile : slide.desktop;
    div.style.backgroundImage = `url('${img}')`;
    // inner content for accessibility (used by screen reader; visible content stays in .hero-content static)
    return div;
  }

  // append slides (skip index 0 because first is statyczny fallback already in DOM)
  for(let i=0;i<SLIDES.length;i++){
    if(i===0) { /* leave static first slide (fallback) */ continue; }
    slidesContainer.appendChild(createSlideEl(SLIDES[i], i));
  }

  // collect slide nodes (combine static first .hero-slide and generated)
  const staticFirst = slider.querySelector('.hero-slide[data-index="0"]');
  const createdSlides = Array.from(slidesContainer.children);
  const allSlides = [staticFirst].concat(createdSlides);

  // create dots
  SLIDES.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'hero-dot';
    b.type = 'button';
    b.dataset.index = i;
    b.setAttribute('aria-label', 'Pokaż slajd ' + (i+1));
    dotsContainer.appendChild(b);
  });

  const dots = Array.from(dotsContainer.children);

  // state
  let idx = 0;
  let timer = null;
  let isPaused = false;

  function applySlide(index, instant){
    // bounds
    index = (index + SLIDES.length) % SLIDES.length;
    // hide previous
    allSlides.forEach((el,i)=>{
      el.classList.toggle('hero-slide--active', i===index);
      // aria
      el.setAttribute('aria-hidden', i===index ? 'false' : 'true');
    });
    // update textual content in hero-content (so screen readers and SEO get meaningful text)
    const content = slider.querySelector('.hero-content');
    if(content){
      content.querySelector('.hero-title')?.remove?.();
      content.querySelector('.hero-sub')?.remove?.();
      const title = document.createElement('h1');
      title.className = 'hero-title';
      title.textContent = SLIDES[index].title || '';
      const sub = document.createElement('p');
      sub.className = 'hero-sub';
      sub.textContent = SLIDES[index].subtitle || '';
      // clear and append
      content.innerHTML = '';
      content.appendChild(title);
      content.appendChild(sub);
    }
    // update CTA
    if(cta){
      cta.textContent = SLIDES[index].ctaText || 'Szczegóły';
      cta.setAttribute('href', SLIDES[index].ctaHref || '#');
      if(SLIDES[index].textColor === 'dark') cta.classList.add('dark'); else cta.classList.remove('dark');
    }
    // dots active
    dots.forEach((d,i)=> d.classList.toggle('active', i===index));
    idx = index;
  }

  // autoplay
  function startAutoplay(){
    stopAutoplay();
    timer = setInterval(()=> { if(!isPaused) goNext(); }, AUTOPLAY_DELAY);
  }
  function stopAutoplay(){
    if(timer) { clearInterval(timer); timer = null; }
  }

  function goNext(){ applySlide(idx+1); }
  function goPrev(){ applySlide(idx-1); }

  // attach events
  if(nextBtn) nextBtn.addEventListener('click', ()=> { goNext(); startAutoplay(); });
  if(prevBtn) prevBtn.addEventListener('click', ()=> { goPrev(); startAutoplay(); });
  dots.forEach(d => d.addEventListener('click', (e)=> { applySlide(Number(d.dataset.index)); startAutoplay(); }));

  // pause on hover/focus
  slider.addEventListener('mouseenter', ()=> isPaused = true);
  slider.addEventListener('mouseleave', ()=> isPaused = false);
  slider.addEventListener('focusin', ()=> isPaused = true);
  slider.addEventListener('focusout', ()=> isPaused = false);

  // keyboard
  document.addEventListener('keydown', (e)=> {
    if(e.key === 'ArrowRight') { goNext(); startAutoplay(); }
    if(e.key === 'ArrowLeft')  { goPrev(); startAutoplay(); }
  });

  // init: set initial slide (0) and start autoplay
  applySlide(0, true);
  startAutoplay();

  // responsive: if mobile images provided, update backgrounds on resize (simple)
  window.addEventListener('resize', ()=> {
    allSlides.forEach((el,i)=>{
      const s = SLIDES[i];
      const img = (window.innerWidth < 760 && s && s.mobile) ? s.mobile : s.desktop;
      if(img) el.style.backgroundImage = `url('${img}')`;
    });
  });

});