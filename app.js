function formkontrolu(){
    if(document.getElementById("kullaniciadi").value==""){
        alert("KULLANICI ADI BOŞ GEÇİLEMEZ!");
        document.uyelikformu.kullaniciadi.focus();
        return;
    }
    if(document.getElementById("kullaniciadi").value!=""){
        if(document.getElementById("kullaniciadi").value.length<2 || document.getElementById("kullaniciadi").value.length>25){
            alert("KULLANICI ADI MİNİMUM 2 MAXİMUM 25 KARAKTER OLMALIDIR!");
            document.uyelikformu.kullaniciadi.value="";
            document.uyelikformu.kullaniciadi.focus();
            return;
        }
    }
    if(document.getElementById("kullanicisoyadi").value==""){
        alert("KULLANICI SOYADI BOŞ GEÇİLEMEZ!");
        document.uyelikformu.kullanicisoyadi.focus();
        return;
    }
    if(document.getElementById("kullanicisoyadi").value!=""){
        if(document.getElementById("kullanicisoyadi").value.length<2 || document.getElementById("kullanicisoyadi").value.length>25){
            alert("KULLANICI SOYADI MİNİMUM 2 MAXİMUM 25 KARAKTER OLMALIDIR!");
            document.uyelikformu.kullanicisoyadi.value="";
            document.uyelikformu.kullanicisoyadi.focus();
            return;
        }
    }

    if(document.getElementById("kullanicisifresi").value==""){
        alert("KULLANICI ŞİFRESİ ALANI BOŞ GEÇİLEMEZ!");
        document.uyelikformu.kullanicisifresi.focus();
        return;
    }
    if(document.getElementById("kullanicisifresi").value!=""){
        if(document.getElementById("kullanicisifresi").value.length<6 || document.getElementById("kullanicisifresi").value.length>25){
            alert("ŞİFRE UZUNLUĞU MİNİMUM 6 MAXİMUM 25 KARAKTER OLMALIDIR!");
            document.uyelikformu.kullanicisifresi.value="";
            document.uyelikformu.kullanicisifresitekrar.value="";
            document.uyelikformu.kullanicisifresi.focus();
            return;
        }
    }
    if(document.getElementById("kullanicisifresitekrar").value==""){
        alert("ŞİFRE TEKRAR ALANI BOŞ GEÇİLEMEZ!");
        document.uyelikformu.kullanicisifresitekrar.focus();
        return;
    }
    if(document.getElementById("kullanicisifresitekrar").value!=""){
        if(document.getElementById("kullanicisifresitekrar").value.length<6 || document.getElementById("kullanicisifresitekrar").value.length>25){
            alert("ŞİFRE TEKRAR UZUNLUĞU MİNİMUM 6 MAXİMUM 25 KARAKTER OLMALIDIR!");
            document.uyelikformu.kullanicisifresi.value="";
            document.uyelikformu.kullanicisifresitekrar.value="";
            document.uyelikformu.kullanicisifresi.focus();
            return;
        }
        else if(document.getElementById("kullanicisifresi").value!="" && document.getElementById("kullanicisifresitekrar").value!=""){
        if(document.getElementById("kullanicisifresi").value!=document.getElementById("kullanicisifresitekrar").value){
            alert("ŞİFRE VE TEKRARI UYUŞMUYOR!");
            document.uyelikformu.kullanicisifresi.value="";
            document.uyelikformu.kullanicisifresitekrar.value="";
            document.uyelikformu.kullanicisifresi.focus();
            return;
        }
        }
        else if(document.getElementById("kullanicisifresi").value!="" && document.getElementById("kullanicisifresitekrar").value!=""){
        if(document.getElementById("kullanicisifresi").value!=document.getElementById("kullanicisifresitekrar").value){
            alert("ŞİFRE VE TEKRARI UYUŞMUYOR!");
            document.uyelikformu.kullanicisifresi.value="";
            document.uyelikformu.kullanicisifresitekrar.value="";
            document.uyelikformu.kullanicisifresi.focus();
            return;
        }
        }
    }

    if(document.getElementById("kullaniciemail").value==""){
        alert("E-MAİL ADRESİ BOŞ GEÇİLEMEZ!");
        document.uyelikformu.kullaniciemail.focus();
        return;
    }
    if(document.getElementById("kullaniciemail").value!=""){
        if(document.getElementById("kullaniciemail").value.indexOf("@",0)==-1 || document.getElementById("kullaniciemail").value.indexOf(".",0)==-1){
            alert("E-MAİL ADRESİ UYGUN DEĞİLDİR!");
            document.uyelikformu.kullaniciemail.value="";
            document.uyelikformu.kullaniciemail.focus();
            return;
        } 
    }
    if(document.getElementsByName("cinsiyet")[0].checked==false && document.getElementsByName("cinsiyet")[1].checked==false ){
        alert("CİNSİYET SEÇİNİZ!");
        return;
    }
    if(document.getElementById("kullanicinotu").value==""){
        alert("NOT YAZINIZ!");
        document.uyelikformu.kullanicinotu.focus();
        return;
    }
    if(document.getElementById("guvenlik").value==""){
        alert("GÜVENLİK KODUNU GİRİNİZ!");
        document.uyelikformu.guvenlik.focus();
        return;
    }
    if(document.getElementById("guvenlik").value!=sonkod){
        alert("KOD HATALI!");
        document.uyelikformu.guvenlik.value="";
        document.uyelikformu.guvenlik.focus();
        return;
    }
    document.uyelikformu.submit();
}

var islem;
        var sonkod;

        function ornek(){
            islem = document.getElementById("kodalani").getContext("2d");
            islem.fillStyle = "#edbbd4";
            degistir();
        }
        var metin="";
        function degistir(){
            var metin="";
            for(var baslangic=0 ; baslangic<6 ; baslangic++){
                var rastgele = Math.random();
                if(Math.round(rastgele)==0){
                    metin += String.fromCharCode(48+9 * Math.random());
                }
                else{
                    metin += String.fromCharCode(65+25 * Math.random());
                }
            }
            var a=String(metin[0]);
            var b=String(metin[1]);
            var c=String(metin[2]);
            var d=String(metin[3]);
            var e=String(metin[4]);
            var f=String(metin[5]);
            sonkod=a+b+c+d+e+f;
            islem.clearRect(0,0,150,50);
            islem.fillRect(0,0,150,50);
            islem.font = "30px calibri";
            islem.strokeText(metin,24,34);
            return(sonkod);
        }