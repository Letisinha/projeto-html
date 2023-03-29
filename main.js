// tipos clientes

$(document).ready(function() {
    $.getJSON("http://localhost:3000/tipo_cliente", function(data) {
        var tipo_cliente = $("#tipo_cliente_id") 

        $.each(data, function(i, tipo) {
            (tipo_cliente).append($("<option>", {
                value: tipo.id,
                text: tipo.descricao
            }));
            
        });
    })
})

// Get cep

function buscarCep() {
    var fcep = document.getElementById("cep").value;

    var reqcep = new XMLHttpRequest()

    reqcep.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ret = JSON.parse(this.responseText)

            if (ret.erro) {
                document.getElementById("logradouro").value = "";
                document.getElementById("bairro").value = "";
                document.getElementById("complemento").value = "";
                document.getElementById("localidade").value = "";
                document.getElementById("uf").value = "";
                alert("CEP não encontrado. Insira um CEP válido");
            } else {
                document.getElementById("logradouro").value = ret.logradouro;
                document.getElementById("bairro").value = ret.bairro;
                document.getElementById("complemento").value = ret.complemento;
                document.getElementById("localidade").value = ret.localidade;
                document.getElementById("uf").value = ret.uf;
            }
                
        }
    };
    reqcep.open("GET", "https://viacep.com.br/ws/"+fcep+"/json/", true);
    reqcep.send();
}


// $(document).ready(function(){
//     $('button').click(function(postdata){
//         postdata.preventDefault();
//         var	id = $("#id").val();
//         var	name = $("#name").val();
//         var	telefone = $("#telefone").val();
//         var	email = $("#email").val();
//         var	cep = $("#cep").val();
//         var	logradouro = $("#logradouro").val();
//         var	bairro = $("#bairro").val();
//         var	localidade = $("#localidade").val();
//         var	uf = $("#uf").val();
//         var	numero = $("#numero").val();
//         var	complemento = $("#complemento").val();
//         var	tipo_cliente_id = $("#ipo_cliente_id").val();
//         $.ajax({
//             type: "POST",
//             url: "http://192.168.1.7:3000/cliente/gravar",
//             data: { id:id, name:name, telefone:telefone, email:email, cep:cep, logradouro:logradouro, uf:uf, numero:numero, complemento:complemento, tipo_cliente_id:tipo_cliente_id },		    
//             dataType: "json",
//             success: function(result){
//             }
//         });
//     });
// });



// const formElement = document.querySelector("form");
// const request = new XMLHttpRequest();
// request.open("POST", "nodejsqlbd01.sql");
// request.send(new FormData(formElement));

// Get por email

function getemail() {
    var email = document.getElementById("email").value;

    var reqmail = new XMLHttpRequest()

    reqmail.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var emailret = JSON.parse(this.responseText)

            if (emailret.erro) {
                alert("Email não encontrado. Insira um Email válido");
            } else {
                document.getElementById("id").value = emailret[0].id;
                document.getElementById("name").value = emailret[0].nome;
                document.getElementById("telefone").value = emailret[0].telefone;
                document.getElementById("cep").value = emailret[0].cep;
                document.getElementById("tipo_cliente_id").value = emailret[0].tipo_cliente_id;
            }
                
        }
    };
    reqmail.open("GET", "http://192.168.1.7:3000/cliente/email/"+email+"", true);
    reqmail.send();
}

// get por ID

function getbyid() {
    var varid = document.getElementById("id").value;

    var reqid = new XMLHttpRequest()

    reqid.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var idret = JSON.parse(this.responseText)

            if (idret.erro) {
                alert("Email não encontrado. Insira um Email válido");
            } else {
                document.getElementById("name").value = idret[0].nome;
                document.getElementById("telefone").value = idret[0].telefone;
                document.getElementById("email").value = idret[0].email;
                document.getElementById("cep").value = idret[0].cep;
                document.getElementById("tipo_cliente_id").value = idret[0].tipo_cliente_id;
            }
                
        }
    };
    reqid.open("GET", "http://192.168.1.7:3000/cliente/id/"+varid+"", true);
    reqid.send();
}

// post de dados
// function postForm() {
//     var datapost = new FormData();

//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200) { 
//             datapost.append("id");
//             datapost.append("name").value = xhr.nome;
//             datapost.append("telefone").value = xhr.telefone;
//             datapost.append("email").value = xhr.email;
//             datapost.append("cep").value = xhr.cep;
//             datapost.append("logradouro").value = xhr.logradouro;
//             datapost.append("bairro").value = xhr.bairro;
//             datapost.append("localidade").value = xhr.localidade;
//             datapost.append("uf").value = xhr.uf;
//             datapost.append("numero").value = xhr.numero;
//             datapost.append("complemento").value = xhr.complemento;
//             datapost.append("tipo_cliente_id").value = xhr.tipo_cliente_id;
//         }else {
//             alert("não deu não hein")
//         }

//         xhr.open("POST", "http://192.168.1.7:3000/cliente/gravar", true);
//         xhr.send(datapost);
//             console.log("gravei hein");
//     };
// };


// function postForm ("http://192.168.1.7:3000/cliente/gravar", body){
//     console.log("body=",body)
//     let request = new XMLHttpRequest ()
//     request.open("POST", "http://192.168.1.7:3000/cliente/gravar", true)
//     request.setRequestHeader("Content-type","application/json")
//     request.send(JSON.stringify(body))
    
//     request.onload = function(){
//         console.log(this.responseText)
//         alert("Cliente cadastrado com sucesso!")
//         }
//     return request.responseText
// }

function postForm(){
    const formData = new FormData
    event.preventDefault()

        const id = document.getElementById("id").value
        const nome = document.getElementById("name").value
        const telefone = document.getElementById("telefone").value 
        const email = document.getElementById("email").value
        const cep = document.getElementById("cep").value
        const logradouro = document.getElementById("logradouro").value 
        const bairro = document.getElementById("bairro").value
        const localidade = document.getElementById("localidade").value
        const uf = document.getElementById("uf").value
        const numero = document.getElementById("numero").value
        const complemento = document.getElementById("complemento").value
        const tipo_cliente_id = document.getElementById("tipo_cliente_id").value

        formData.append("nome", nome);
        formData.append("telefone", telefone);
        formData.append("email", email);
        formData.append("cep", cep);
        formData.append("logradouro", logradouro);
        formData.append("bairro", bairro);
        formData.append("localidade", localidade);
        formData.append("uf", uf);
        formData.append("numero", numero);
        formData.append("complemento", complemento);
        formData.append("tipo_cliente_id", tipo_cliente_id);

    const reqpost = new XMLHttpRequest();
    reqpost.open("POST", "http://192.168.1.7:3000/cliente/gravar");
    reqpost.send(formData);
}


