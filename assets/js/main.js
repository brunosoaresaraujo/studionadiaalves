/* Studio Nailda Alves — LP v2 */
(function(){
  var PHONE='5561998289253';
  function wa(msg){return 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg)}
  document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa(a.getAttribute('data-wa'))});

  // seletor de serviço
  var btn=document.getElementById('bookBtn'), label=btn.querySelector('.svc');
  function setSvc(s){
    label.style.opacity=0;
    setTimeout(function(){label.textContent=s;label.style.opacity=1},180);
    btn.href=wa('Olá, Nailda! Vi o site e quero agendar '+s+'. Quais horários você tem disponíveis?');
  }
  document.querySelectorAll('.chip').forEach(function(c){
    c.addEventListener('click',function(){
      document.querySelectorAll('.chip').forEach(function(o){o.setAttribute('aria-pressed','false')});
      c.setAttribute('aria-pressed','true'); setSvc(c.dataset.svc);
    });
  });
  btn.href=wa('Olá, Nailda! Vi o site e quero agendar progressiva. Quais horários você tem disponíveis?');

  // header + botão flutuante
  var header=document.querySelector('header'), fl=document.querySelector('.wa-float');
  function onScroll(){var y=window.scrollY;header.classList.toggle('scrolled',y>10);fl.classList.toggle('show',y>window.innerHeight*.55)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // reveal
  var els=document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(el){io.observe(el)});
  } else els.forEach(function(el){el.classList.add('in')});

  // leve parallax no visual do hero
  var vis=document.querySelector('.visual .arch');
  if(vis && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    window.addEventListener('mousemove',function(e){
      var x=(e.clientX/innerWidth-.5)*10, y=(e.clientY/innerHeight-.5)*10;
      vis.style.transform='translate('+x+'px,'+y+'px)';
    },{passive:true});
    vis.style.transition='transform .8s cubic-bezier(.22,.8,.24,1)';
  }
})();
