class MercedesFactory {
    createSportCar = (model, color) => new Builder(model, color);
    createFamilyCar = (model, color) => new Builder(model, color);
}

class MercedesSportCar {

    constructor(builder) {    
        this.model = builder.model;     
        this.color = builder.color;
        this.engine = builder.engine || false
        this.leather = builder.leather || false
    }

    getInfo() {
        console.log("Модель: " + this.model + ", Цвет: " + this.color + ", Двигатель: " + this.engine + ", Кожа в салоне: " + this.leather);
    }
}

class MercedesFamilyCar {

    constructor(builder) {
        this.model = builder.model;     
        this.color = builder.color;
        this.engine = builder.engine || "По умолчанию"
        this.leather = builder.leather || "По умолчанию"
    }

    getInfo() {
        console.log("Модель: " + this.model + ", Цвет: " + this.color + ", Двигатель: " + this.engine + ", Кожа в салоне: " + this.leather);
    }
}

class Builder {

    constructor(model, color){
        this.model = model;
        this.color = color;
    }

    setEngine = (model) => {
        this.engine = model;
        return this;
    }

    setLeather = (model) => {
        this.leather = model;
        return this;
    }

    buildSportCar = () => new MercedesSportCar(this);
    buildFamilyCar = () => new MercedesFamilyCar(this);
}


mercedesFactory = new MercedesFactory();
sportCar = mercedesFactory
    .createSportCar("Mercedes AMG E63 S", "Черный")
    .setEngine("Mercedes-AMG E 63 S 4MATIC")
    .setLeather("Кожа Nappa AMG Черный")
    .buildSportCar()

familyCar = mercedesFactory
    .createFamilyCar("Mercedes V class", "Белый")
    .setEngine()    
    .setLeather("Кожа Лугано")
    .buildFamilyCar()

sportCar.getInfo();   
familyCar.getInfo();

