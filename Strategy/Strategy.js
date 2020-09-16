class StrategyManager {
    constructor() {
        this._strategy = null;
    }

    set strategy(strategy) {
        this._strategy = strategy;
    }

    doAction = (array) => {
        this._strategy.doAction(array);
    }
}

class StrategyShuffle {
    doAction = (array) => {
        console.log(array.sort(() => Math.random() - 0.5));
    }
}

class StrategyReverse {
    doAction = (array) => {
        console.log(array.reverse());
    }
}

array = [1,2,3,4,5];
const strategyManager = new StrategyManager();
const strategyShuffle = new StrategyShuffle();
const strategyReverse = new StrategyReverse();
strategyManager.strategy = strategyShuffle;
strategyManager.doAction(array);
array = [1,2,3,4,5];
strategyManager.strategy = strategyReverse;
strategyManager.doAction(array);

