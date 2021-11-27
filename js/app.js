const navBar = document.querySelector('#nav')

navBar.innerHTML = `<div class="container">
<div class="nav-header">
  <div class="logo">
    <a href="./"> <img src="./img/ABNET-logo-wh.svg" alt=""></a>
  </div>
  <div class="menu">
    <img src="./img/menu-white.svg" alt="" />
    
  </div>
</div>

<div class="links-container">
  <img src="./img/close.svg" class="close-btn" alt="" />
  <ul class="nav-links">
    <li><a href="./" class="scroll-link"> Home</a></li>
    <li><a href="./about.html" class="scroll-link">About Us</a></li>
    <li class="drop-down"><a href="./corp.html" class="scroll-link drop-down-link">Practice Area</a>
      
      <ul class="sublinks">
        <div class="corp-link">
       
          <li><a href="./corp.html">
           Corporate business council</a></li>
          <li><a href="./rep.html">
          Legal Representation</a></li>
          <li><a href="./legal.html">
          Legal Due Diligence</a></li>
          <li><a href="./doc.html">Document Verification</a></li>
         
          <li><a href="./general.html">Legal Consultation</a></li>
          <li><a href="./civil.html">
          Litigation & Criminal Defense</a></li>
          <li><a href="./ltr.html"> Long-term Partnership</a></li>
        </div>
        
      </ul>
    
    </li>
    <li><a href="./attorney.html" class="scroll-link">Our Attorney</a></li>
    <li><a href="./laws.html" class="scroll-link">Legal Resources</a></li>
    <li><a href="./contact.html" class="scroll-link">Contact</a></li>
  </ul>
</div>


</div>`


const dropDown = document.querySelector('.drop-down-link')
const dropDownFull = document.querySelector('.nav-links')
const sublinks = document.querySelector('.sublinks')
console.log(sublinks);
dropDown.addEventListener('mouseover', e => {
  const text = e.currentTarget.textContent
  const tempBtn = e.currentTarget.getBoundingClientRect();
  const center = (tempBtn.width) / 2;
  sublinks.classList.add('show-links')
  // sublinks.style.left = `-${center + 5}px`
  console.log(center);
})

dropDownFull.addEventListener('mouseleave', () => {
  sublinks.classList.remove('show-links')
})

const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.links-container')
const close = document.querySelector('.close-btn')
const banner = document.querySelector('.banner')
menu.addEventListener('click', () => {
  sidebar.style.right = '0'
})
close.addEventListener('click', () => {
  sidebar.style.right = '-70vw'
})
const scrollLink = document.querySelectorAll('.scroll-link')
window.addEventListener('load', () => {

  scrollLink.forEach(link => {
    if(link.href === path){
      link.style.color = '#71deb5'
      link.style.fontWeight = "bold"
    }
  })
})
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav')
  const menu =document.querySelector('.menu')
  const logo = document.querySelector('.logo a')
  const navHeight = nav.getBoundingClientRect().height
  const scrollHeight = window.pageYOffset
 
  if(navHeight < scrollHeight){
    nav.classList.add('fixed')
    logo.innerHTML = `<picture>
    <source media="(min-width:650px)" srcset="./img/ABNET-logo.svg">
    <img src="./img/mobile-logo.svg" class="mobile-logo" alt="Abnet Solomon Law Office" />
  </picture>`
   
    if(window.innerWidth > 768){
      scrollLink.forEach( link => {
        link.classList.add('black')
        if(link.href === path){
          link.classList.remove('black')
          link.style.color = '#71deb5'
        }
      })
    }
   
    menu.innerHTML = `<img src="./img/menu-black.svg" alt="" />`
  }else{
    nav.classList.remove('fixed')
    logo.innerHTML = `<picture>
    <source media="(min-width:650px)" srcset="./img/ABNET-logo-wh.svg">
    <img src="./img/mobile-logo-wh.svg" class="mobile-logo" alt="Abnet Solomon Law Office" />
  </picture>`

  if(window.innerWidth > 768){
    scrollLink.forEach( link => {
      link.classList.remove('black')
    })

  }

  
    menu.innerHTML = `<img src="./img/menu-white.svg" alt="" />`
  }
})


const app = Vue.createApp({
  data() {
    return {
      practiceCard: [
        {
          id: 1,
          img: './img/business.svg',
          title: 'Corporate Business Council',
          text: 'Looking for sound legal advice on matters that arise in your business and/or legal interest in Ethiopia?',
          url: './corp.html'
        },
        {
          id: 2,
          img: './img/represent.svg',
          title: 'Legal Representation',
          text: 'AbnetLaw represents both international and domestic clients who seek to protect and enforce their legal rights in Ethiopia.',
          url: './rep.html'
        },
        {
          id: 3,
          img: './img/due.svg',
          title: 'Legal Due Diligence',
          text: 'Do you want to get accurate and detailed information about any laws, procedures, or any legal requirements in Ethiopia?',
          url: './legal.html'
        },
        {
          id: 4,
          img: './img/document.svg',
          title: 'Document Verification',
          text: 'Our Document Verification Service lets our international corporate clients verify any government-issued or other public document from anywhere in the world in just a couple of days.',
          url: './doc.html'
        },
        {
          id: 5,
          img: './img/consl.svg',
          title: 'Legal Consultation',
          text: 'We provide legal advice and consultation services on a wide range of issues pertaining to your legal questions and needs.',
          url: './general.html'
        },
        {
          id: 6,
          img: './img/catena.svg',
          title: 'Litigation & Criminal Defense',
          text: ' We handle a variety of civil litigation, from breach of contract, tortious interference, assault, family disputes, personal injury, and labor dispute',
          url: './civil.html'
        },
        
      ]
    }
  }
})

app.mount('#card')

const servicesAside = Vue.createApp({
  template: `
  <ul>
   <h3> Our Services </h3>
    <li><a href="./corp.html" class="side-link">Corporate Business council</a></li>
    <li><a href="./rep.html" class="side-link"> Legal Representation </a></li>
    <li><a href="./legal.html" class="side-link">Legal Due Diligence</a></li>
    <li><a href="./doc.html" class="side-link">Document Verification</a></li>
    <li><a href="./general.html" class="side-link">Legal Consultation</a></li>
    <li><a href="./civil.html" class="side-link">Litigation & Criminal Defense</a></li>
    <div class="line"> </div>
    <li><a href="./ltr.html" class="side-link">Long Term Partnership</a></li>
  </ul>`
})

servicesAside.mount('#aside')

const sideContact = Vue.createApp({
  template: `<div class="side-email">
  <h3>Email Us</h3>
  <div class="email-container">
    <a href="mailto:info@abnetlaw.com">info@abnetlaw.com</a>
    <a href="mailto:abnet@abnetlaw.com">abnet@abnetlaw.com</a>

  </div>
</div>
<div class="side-call">
  <h3>Call Us</h3>
  <div class="icon-container">
    <a href="tel:+251953946049"> <img src="./img/phone-side.svg" alt="" /></a>
    <a href="">
      <img src="./img/whatsapp-side.svg" alt="" />
    </a>
    <a href="">
      <img src="./img/telegram-side.svg" alt="" />

    </a>
  </div>
</div>

<div class="side-address">
  <h3>Our Address</h3>
  <div class="add">
    <img src="./img/location-side.svg" alt="" />
    <p>
      Liberia Street, Lideta Merkato Mall, 3rd Floor, Office # 364
      Addis Ababa, Ethiopia
    </p>
  </div>
</div>`
})

sideContact.mount('#side-contact')


const testiApp = Vue.createApp({
  data() {
    return {
      testiCard: [
        {
          id: 1,
          img: "./img/testi.png",
          text: `Looking for sound legal advice on matters that arise in your
                    business and/or legal interest in Ethiopia?`,
          name: 'Shewangizaw Debebe',
          url: {
            fb: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
          }


        },
        {
          id: 2,
          img: "./img/testi.png",
          text: `Looking for sound legal advice on matters that arise in your
                    business and/or legal interest in Ethiopia?`,
          name: 'Abebe Debebe',
          url: {
            fb: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
          }


        },
        {
          id: 3,
          img: "./img/testi.png",
          text: `Looking for sound legal advice on matters that arise in your
                    business and/or legal interest in Ethiopia?`,
          name: 'Kebede Debebe',
          url: {
            fb: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
          }


        }
      ]
    }
  }
})

testiApp.mount('#testi')

const laws = Vue.createApp({
  data() {
    return {
      lawCard: [
        {
          id: 1,
          img: './img/law1.jpg',
          date: '9 January, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 2,
          img: './img/law2.jpg',
          date: '9 October, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 3,
          img: './img/law3.jpg',
          date: '9 May, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        }
      ]
    }
  }
})

laws.mount('#laws')

const footer = Vue.createApp({
  template: `<div class="container row">
    <div class="footer-logo col-12 col-md-6 col-lg-3">
      <img src="./img/footer_logo.svg" alt="" class="logo">
      <div class="icon-container">
        <a href="#">
          <img src="./img/fb-wh.svg" alt="">
        </a>
        <a href="#">
          <img src="./img/twitter-wh.svg" alt="">
        </a>
        <a href="#">
          <img src="./img/link-wh.svg" alt="">
        </a>
      </div>
    </div>
    <div class="footer-contact col-12 col-md-6 col-lg-3">
      <h2 class="footer-contact-title">
        Contact Details
      </h2>
        <div class="contact-info">
          <img src="./img/phone.svg" alt="">
          <div>
            <a href="#"><p>+251(09)5394 6049</p></a>
            <a href="#"><p>+251(09)4663 4663</p></a>
          </div>
        </div>

        <div class="contact-info">
          <img src="./img/email.svg" alt="">
          <div>
            <a href="#"><p>info@abnetlaw.com</p></a>
            <a href="#"><p>abnet@abnetlaw.com</p></a>
          </div>
        </div>

        <div class="contact-info">
          <img src="./img/location.svg" alt="">
          <div>
            <p class="location">Liberia Street, Lideta Merkato Mall, 3rd Floor, Office # 364
              Addis Ababa, Ethiopia</p>
          </div>
        </div>
    </div>
    <div class="corporate col-12 col-md-6 col-lg-3">
      <h2 class="corporate-title">
        Practice Areas
      </h2>

      <ul>
      <li><a href="./general.html">Corporate Business Council</a></li>
      <li><a href="./rep.html">Legal Representation</a></li>
      <li><a href="./legal.html">Legal Due Diligence</a></li>
      <li><a href="./doc.html">Document Verification</a></li>
      <li><a href="./general.html">Legal Consultation</a></li>
      <li><a href="./civil.html">Litigation & Criminal Defense</a></li>
      </ul>
    </div>
    <div class="single col-12 col-md-6 col-lg-3">
      <h2 class="single-title">
        Quick Links
      </h2>

      <ul>
      <li><a href="./">Home</a></li>
      <li><a href="./about.html">About</a></li>
      <li><a href="./about.html">Our Attorney</a></li>
      <li><a href="./about.html">Legal Resources</a></li>
      <li><a href="./about.html">Contact</a></li>
      </ul>
    </div>
  </div>

  <p class="copyright">
    CopyRight 2021. Designed By
    <a href="https://www.versavvymedia.com/">Versavvy Media PLC</a>
  </p>
    `
})

footer.mount('#footer')

const laws1 = Vue.createApp({
  data() {
    return {
      lawCard: [
        {
          id: 1,
          img: './img/law1.jpg',
          date: '9 January, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 2,
          img: './img/law2.jpg',
          date: '9 October, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 3,
          img: './img/law3.jpg',
          date: '9 May, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 4,
          img: './img/law3.jpg',
          date: '9 May, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 5,
          img: './img/law3.jpg',
          date: '9 May, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        },
        {
          id: 6,
          img: './img/law3.jpg',
          date: '9 May, 2021',
          title: 'Lacus interdum lorem dui auctor quam.'
        }
      ]
    }
  }
})

laws1.mount('#laws1')

const tabs = Vue.createApp({
  data () {
    return {
      toggle: false,
    }
  },
  methods: {
    toggleshow(e){
      let pro = this.$refs.profile
      let exp = this.$refs.exp
      let edu = this.$refs.edu
      let id = e.target.dataset.id
      let btnPro = this.$refs.btnPro
      let btnExp = this.$refs.btnExp
      let btnEdu = this.$refs.btnEdu
      
      if(pro.classList.contains(id)){
        btnEdu.classList.remove('active')
        btnExp.classList.remove('active')
        btnPro.classList.add('active')


        edu.classList.remove('show')
        exp.classList.remove('show')
        pro.classList.add('show')
      }
      if(edu.classList.contains(id)){
        btnPro.classList.remove('active')
        btnExp.classList.remove('active')
        btnEdu.classList.add('active')

        pro.classList.remove('show')
        edu.classList.remove('show')
        exp.classList.add('show')
      }
      if(exp.classList.contains(id)){
        btnPro.classList.remove('active')
        btnEdu.classList.remove('active')
        btnExp.classList.add('active')


        pro.classList.remove('show')
        exp.classList.remove('show')
        edu.classList.add('show')
      }
    }
  }
})

tabs.mount('#tabs')
const sideLink = document.querySelectorAll('.side-link')
var path = window.location.href
window.addEventListener('load', (e) =>{
  
  sideLink.forEach(link => {
    if(link.href === path){
      link.classList.add('active-link')
    }
  })
 

})
const reachOut = document.querySelector('.reach-out')
const contactModal = document.querySelector('.contact-modal')
const modalInner = document.querySelector('.modal-inner')
const closeBtn = document.querySelector('.close-modal-btn')

reachOut.addEventListener('click', () => {
  contactModal.classList.add('show-modal')
  modalInner.classList.add('show-modal-inner')
})
closeBtn.addEventListener('click', () => {
  contactModal.classList.remove('show-modal')
  modalInner.classList.remove('show-modal-inner')
})
contactModal.addEventListener('click', e =>{
  e.stopPropagation()
  contactModal.classList.remove('show-modal')
  modalInner.classList.remove('show-modal-inner')
})