$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
});

$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            nome: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "Seu nome deve ter no mínimo 2 caracteres.",
                maxlength: "Seu nome deve ter no máximo 50 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            mensagem: {
                required: "Por favor, insira sua mensagem.",
                minlength: "Sua mensagem deve ter no mínimo 10 caracteres."
            }
        }
    });
});