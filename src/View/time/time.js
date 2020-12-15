var dados = [
    ['Winners', '2001'],
    ['West', '2004'],
    ['Blue Dragon', '1994'],
    ['Eldorado', '2008'],
    ['Rangers', '2005'],
    ['Wolfs', '2010'],
    ['Verdes Mares', '2001'],
    ['Sumycide', '1994'],
    ['Ports', '2010'],
    ['Walv', '1990'],
    ['Energy', '2008'],
    ['Sky', '2004'],
    ['Ferocity', '1997'],
    ['Alvorada', '2000'],
    ['Goóck', '2007'],
    ['Theuss','1997'],
    ['Lorenzo','2014'],
    ['Konig','1995'],
    ['Zin','2004'],
    ['Schalk','2012'],
];

var itenspagina = 10;
var pagina = 0;

function paginar(){
    $('table > tbody > tr').remove();
    var tbody = $('table > tbody');
    for (var i = pagina * intenspagina; i < dados.length && i < (pagina + 1) * itenspagina; i++)
    {
        tbody.append(
            $('<tr>')
            .append($('<td>').append(dados[i][0]))
            .append($('<td>').append(dados[i][1]))
        )
    }                        
    $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / itenspagina));
}

function botoes(){
    $('#proximo').prop('disabled', dados.length <= itenspagina || pagina >= Math.ceil(dados.length / itenspagina) - 1);
    $('#anterior').prop('disabled', dados.length <= itenspagina || pagina == 0);
}
(function() {
    $('#proximo').click(function() {
        if (pagina < dados.length / itenspagina - 1) {
            pagina++;
            paginar();
            botoes();
        }
    });
    $('#anterior').click(function() {
        if (pagina > 0) {
            pagina--;
            paginar();
            botoes();
        }
    });
    paginar();
    botoes();
});
