const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.links-container')
const close = document.querySelector('.close-btn')
const banner = document.querySelector('.banner')
menu.addEventListener('click',() =>{
    sidebar.style.right = '0'
})
close.addEventListener('click', () => {
    sidebar.style.right = '-80vw'
})


const app = Vue.createApp({
    data(){
        return{
            practiceCard : [
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
                    title: 'Due Diligence',
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
            ]
        }
    }
})

app.mount('#card')