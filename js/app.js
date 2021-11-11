const navBar = document.querySelector('#nav')

navBar.innerHTML = `<div class="container">
<div class="nav-header">
  <div class="logo">
    <a href="./"><img src="./img/logo.png" alt="Abent Law Firm" /></a>
  </div>
  <div class="menu">
    <img src="./img/menu-white.svg" alt="" />
    
  </div>
</div>

<div class="links-container">
  <img src="./img/close.svg" class="close-btn" alt="" />
  <ul class="nav-links">
    <li class="drop-down"><a href="#" class="scroll-link drop-down-link">Our Services</a>
      
      <ul class="sublinks">
        <div class="corp-link">
          <h3>For Corporate Clients</h3>
          <li><a href="./corp.html">
           <img src="./img/sublink/bus.svg" alt=""> Corporate and general business council</a></li>
          <li><a href="./rep.html">
           <img src="./img/sublink/rep.svg" alt=""> Representation in Litigations and Tribunals </a></li>
          <li><a href="./legal.html">
           <img src="./img/sublink/due.svg" alt=""> Legal Due Diligence</a></li>
          <li><a href="./doc.html">
           <img src="./img/sublink/doc.svg" alt=""> Document Verification</a></li>
          <li><a href="./par.html">
           <img src="./img/sublink/par.svg" alt=""> Long-term Partnership</a></li>
        </div>
        <div class="indvidual-link">
          <h3>For Individual Clients</h3>
          <li><a href="./general.html">
           <img src="./img/sublink/general.svg" alt=""> General Legal Consultation</a></li>
          <li><a href="./civil.html">
           <img src="./img/sublink/catena.svg" alt=""> Civil Litigation & Criminal Defense</a></li>
        </div>
      </ul>
    
    </li>
    <li><a href="./attorney.html" class="scroll-link">Attorney</a></li>
    <li><a href="./about.html" class="scroll-link">About</a></li>
    <li><a href="./laws.html" class="scroll-link">Laws</a></li>
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
  sublinks.classList.add('show')
  sublinks.style.left = `-${center + 5}px`
  console.log(center);
})

dropDownFull.addEventListener('mouseleave', () => {
  sublinks.classList.remove('show')
})

const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.links-container')
const close = document.querySelector('.close-btn')
const banner = document.querySelector('.banner')
menu.addEventListener('click', () => {
  sidebar.style.right = '0'
})
close.addEventListener('click', () => {
  sidebar.style.right = '-100vw'
})

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav')
  const menu =document.querySelector('.menu')
  const scrollLink = document.querySelectorAll('.scroll-link')
  const navHeight = nav.getBoundingClientRect().height
  const scrollHeight = window.pageYOffset

  if(navHeight < scrollHeight){
    nav.classList.add('fixed')

    if(window.innerWidth > 768){
      scrollLink.forEach( link => {
        link.classList.add('black')
      })
    }
    menu.innerHTML = `<img src="./img/menu-black.svg" alt="" />`
  }else{
    nav.classList.remove('fixed')
   
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
          title: 'Business',
          text: 'Looking for sound legal advice on matters that arise in your business and/or legal interest in Ethiopia?'
        },
        {
          id: 2,
          img: './img/represent.svg',
          title: 'Representation',
          text: 'AbnetLaw represents both international and domestic clients who seek to protect and enforce their legal rights in Ethiopia.'
        },
        {
          id: 3,
          img: './img/due.svg',
          title: 'Legal Due Diligence',
          text: 'Do you want to get accurate and detailed information about any laws, procedures, or any legal requirements in Ethiopia?'
        },
        {
          id: 4,
          img: './img/ltr.svg',
          title: 'Long Term Partnership',
          text: 'We are providing a long-term service on a retainer basis only for our corporate clients. For more information, please contact us by email or by phone.'
        },
        {
          id: 5,
          img: './img/consl.svg',
          title: 'General Legal Consultation',
          text: 'We provide legal advice and consultation services on a wide range of issues pertaining to your legal questions and needs.'
        },
        {
          id: 6,
          img: './img/catena.svg',
          title: 'Civil Litigation & Criminal Defense',
          text: ' We handle a variety of civil litigation, from breach of contract, tortious interference, assault, family disputes, personal injury, and labor dispute'
        },
        {
          id: 7,
          img: './img/document.svg',
          title: 'Document Verification',
          text: 'Our Document Verification Service lets our international corporate clients verify any government-issued or other public document from anywhere in the world in just a couple of days.'
        }
      ]
    }
  }
})

app.mount('#card')

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
      <img src="./img/logo.png" alt="" class="logo">
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
        For Corporate Client
      </h2>

      <ul>
        <li><a href="#">Business</a></li>
        <li><a href="#">Representation</a></li>
        <li><a href="#">Legal Due Diligence</a></li>
        <li><a href="#">Long Term Partnership</a></li>
      </ul>
    </div>
    <div class="single col-12 col-md-6 col-lg-3">
      <h2 class="single-title">
        For Individual Client
      </h2>

      <ul>
        <li><a href="#">General Legal Consultation</a></li>
        <li><a href="#">Civil Litigation & Criminal Defense</a></li>
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