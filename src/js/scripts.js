
let menuicon = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('cabecalho nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('cabecalho nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
     
    reset: true,
    distance: '80px',  
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top'});
ScrollReveal().reveal('.home-img, .servicos-container, .portfolio-box, .contato form',  { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sobre-img',  { origin: 'left'});
ScrollReveal().reveal('.home-content p, .sobre-conteudo',  { origin: 'right'});


function SendEmail() {

    var params = {
        from_name: document.getElementById("nome").value,
        email_id: document.getElementById("email").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value

    };

    emailjs.send("henriqueciprianiertal", "template_qyacrvw", params).then(function (res) {
        alert("Email enviado!");
    })
}

