<?php
class Arma
{
    public $id;
    public $tombamento;
    public $numSerie;
    public $marca;
    public $especie;
    public $modelo;
    public $calibre;
    public $grupoCalibre;
    public $municao;
    public $funcionamento;
    public $canos;
    public $comprimento;
    public $uniMedida;
    public $alma;
    public $raias;
    public $sentidoRaias;
    public $acabamento;
    public $pais;

    function __construct(
        $id,
        $tombamento,
        $numSerie,
        $marca,
        $especie,
        $modelo,
        $calibre,
        $grupoCalibre,
        $municao,
        $funcionamento,
        $canos,
        $comprimento,
        $uniMedida,
        $alma,
        $raias,
        $sentidoRaias,
        $acabamento,
        $pais
    ) {
        $this->$id = $id;
        $this->$tombamento = $tombamento;
        $this->$numSerie = $numSerie;
        $this->$marca = $marca;
        $this->$especie = $especie;
        $this->$modelo = $modelo;
        $this->$calibre = $calibre;
        $this->$grupoCalibre = $grupoCalibre;
        $this->$municao = $municao;
        $this->$funcionamento = $funcionamento;
        $this->$canos = $canos;
        $this->$comprimento = $comprimento;
        $this->$uniMedida = $uniMedida;
        $this->$alma = $alma;
        $this->$raias = $raias;
        $this->$sentidoRaias = $sentidoRaias;
        $this->$acabamento = $acabamento;
        $this->$pais = $pais;
    }
}

class Policial
{
    public $id;
    public $cpf;
    public $nome;
    public $nascimento;
    public $rg;
    public $dataExpedicaoRg;
    public $orgaoEmissor;
    public $pai;
    public $mae;
    public $cidade;

    function __construct(
        $id,
        $cpf,
        $nome,
        $nascimento,
        $rg,
        $,
        $orgaoEmissor,
        $pai,
        $mae,
        $cidade
    ) {
        $this->$id = $id;
        $this->$cpf = $cpf;
        $this->$nome = $nome;
        $this->$nascimento = $nascimento;
        $this->$rg = $rg;
        $this->$ = $;
        $this->$orgaoEmissor = $orgaoEmissor;
        $this->$pai = $pai;
        $this->$mae = $mae;
        $this->$cidade = $cidade;
    }
}

class DadosGerais
{
    public $textInd;
    public $textCom;
    public $qtdCom;
    public $qtdInd;
    public $qtdProcessos;

    function __construct(
        $textInd,
        $textCom,
        $qtdCom,
        $qtdInd,
        $qtdProcessos
    ) {
        $this->$textInd = $textInd;
        $this->$textCom = $textCom;
        $this->$qtdCom = $qtdCom;
        $this->$qtdInd = $qtdInd;
        $this->$qtdProcessos = $qtdProcessos;
    }
}
