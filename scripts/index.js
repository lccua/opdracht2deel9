const setup = () => {
    let personen = [];

    l1 = {straat: "Koekoekstraat 70", postcode: "9090", gemeente: "Melle"}


    l2 = {straat: "Kerkstraat 12", postcode: "8000", gemeente: "Brugge"}


    p1 = {voornaam: "Jan", familienaam: "Janssens", adres: l1};

    p2 = {voornaam: "Mieke", familienaam: "Mickelson", adres: l2};



    personen = [p1, p2]
}

window.addEventListener("load", setup);