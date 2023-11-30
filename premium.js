const addButton = () => {

    const islemler = [{
        key: "Topla",
        isim: "Topla",
        operator: (x,y) => x+y
    },
    {
        key: "Cikart",
        isim: "Çıkart",
        operator: (x,y) => x-y
    },
    {
        key: "Carp",
        isim: "Çarp",
        operator: (x,y) => x*y
    },
    {
        key: "Bol",
        isim: "Böl",
        operator: (x,y) => x/y
    }];

    const div1 = document.querySelector(".div1");


    for(let i=0;i<islemler.length; i++){
        const Btn = document.createElement("button")
        Btn.classList.add("button")
        Btn.innerHTML = islemler[i].isim;
        if(i>=2){
            Btn.classList.add("premium");
        }
        div1.appendChild(Btn);

        Btn.addEventListener("click", function () {
            let sayi1 = Number(document.getElementById("s1").value);
            let sayi2 = Number(document.getElementById("s2").value);
            
            let sonuc = islemler[i].operator(sayi1, sayi2);

            alert("İşleminizin sonucu : " + sonuc);

            
        })
}

}

addButton();
