<form id="informações-bar" action="index.php" method="POST">
    <div class="form-group">
        <label for="qtd-armas-com">Quantas Armas foram adquiridas no comércio</label>
        <input type="number" id="qtd-armas-com" class="form-control" name="com">
    </div>
    <div class="form-group">
        <label for="qtd-armas-ind">Quantas Armas foram adquiridas na indústria</label>
        <input type="number" id="qtd-armas-ind" class="form-control" name="ind">
    </div>
    <div class="form-group">
        <label for="text-aux-com">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
            calibre, adquiridas no comércio</label>
        <textarea name="text-com" id="text-aux-com" cols="50" rows="4" class="form-control"
            placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
    </div>
    <div class="form-group">
        <label for="text-aux-ind">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
            calibre, aquiridas na indústria</label>
        <textarea name="text-ind" id="text-aux-ind" cols="50" rows="4" class="form-control"
            placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
    </div>
    <button class="btn btn-primary" type="submit"> Dados Ok</button>
    <br>
    <br>
</form>