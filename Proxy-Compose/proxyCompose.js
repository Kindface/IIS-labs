  
class SignIn {    
    constructor(user){
        this.user = user;
    }

	login() {
		console.log('Добро пожаловать,', this.user.login);
	}

	logout(name) {
		console.log('До свидания,', this.user.login);
	}
};

class SecuritySystem {
	constructor(user) {
		this.user = user;
	}

	login(user) {
		if (this.authenticate(user)) {
            this.user.login(user);
            return true;
		} else {
            console.log('Неверный пароль!');
            return false;
		}
	}

	authenticate(user) {
		return user.login === "Petya" && user.password === '123';
	}

	logout(user) {
        if(this.authenticate(user)) {
            this.user.logout(user)
        }
		
	}
};

class Data {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
}

class CounterStrike extends Data {
	constructor() {
		super();
		this.setName('CS');
		this.setPrice(5000);
	}
}

class Dota2 extends Data {
	constructor() {
		super();
		this.setName('Dota2');
		this.setPrice(3000);
	}
}

class PUBG extends Data {
    constructor() {
		super();
		this.setName('PUBG');
		this.setPrice(500);
	}
}

class Composite extends Data {
	constructor() {
		super();
		this.data = [];
	}

	add(data) {
		this.data.push(data);
	}

	getPrice() {
		return this.data
			.map(data => data.getPrice())
			.reduce((a, b) => a + b);
	}
}

class Inventory extends Composite {
	constructor(user) {
        super();
        this.user = user;
		this.setName("Инвентарь " + user.login + " стоит: ");
	}
}

Petya = {
    "login": "Petya",
    "password": "123"
};

const user = new SecuritySystem(new SignIn(Petya));
if (user.login(Petya)){
    const inventory = new Inventory(Petya);
    inventory.add(new CounterStrike());
    inventory.add(new Dota2());
    inventory.add(new PUBG());
    console.log(inventory.getName() + inventory.getPrice() + "$");
    user.logout(Petya);
}
