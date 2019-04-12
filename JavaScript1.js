function Enviar() {
 
    var nome = document.getElementById("nomeid");
	var email = document.getElementById("email");
	var msg = document.getElementById("msg");
 
    if (nome.value != ""&&email.value != ""&&msg.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' sua mensagem foi enviada!');
    }
	else{
		alert('Preencha todos os campos');
	}
 
}
function Enviapedido() {
	 
		var nome = document.getElementById("cnome");
		var tel = document.getElementById("ctelefone");
		var end = document.getElementById("cendereco");
		var ncasa = document.getElementById("cnumerocasa");
		var qtdm =document.getElementById("qtdm");
		var qtdmo =document.getElementById("qtdmo");
		var qtdc =document.getElementById("qtdc");
		var qtda =document.getElementById("qtda");
		var totped=(parseFloat(0+qtdm.value)+parseFloat(0+qtdmo.value)+parseFloat(0+qtdc.value)+parseFloat(0+qtda.value))*6.00;
	
	
 
    if (nome.value != ""&&tel.value != ""&&end.value != ""&&ncasa.value != "") {
        alert('Obrigado sr(a) ' + cnome.value + ' encaminharemos seu pedido o mais breve possivel! o valor do seu pedido é R$ '+totped+',00');
		
    }
	else{
		alert('Preencha todos os dados');
	}
 
}
function Mapapenha(){

	
document.getElementById('mapapadrao').src="images/mapapenha.jpg";
}
function Mapaitaquera(){
document.getElementById('mapapadrao').src="images/mapaitaquera.jpg";
}
function Mapaluz(){
document.getElementById('mapapadrao').src="images/mapaluz.jpg";
}