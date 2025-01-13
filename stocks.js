class StockDataManager {
    constructor(){
        this.maxPrice = null;
        this.minPrice = null;
        this.currentStock = null;
        this.currentTimestamp = null;
    }

    updateStock([timestamp, stockPrice]){
        this.currentStock = stockPrice;
        this.currentTimestamp = timestamp;

        if(this.maxPrice === null || stockPrice > this.maxPrice){
            this.maxPrice = stockPrice
        }
        if(this.minPrice === null || stockPrice < this.minPrice){
            this.minPrice = stockPrice
        }
    }

    maxStockPrice(){
        return this.maxPrice;
    }

    minStockPrice(){
        return this.minPrice;
    }

    currentStockPrice() {
        return this.currentStock;
    }

    getCurrentTimestamp() {
        return this.currentTimestamp;
    }
}

const stockManager = new StockDataManager();

// Simulating a stream of data
stockManager.updateStock(["2025-01-13T10:00:00Z", 150]);
stockManager.updateStock(["2025-01-13T10:01:00Z", 155]);
stockManager.updateStock(["2025-01-13T10:02:00Z", 148]);
stockManager.updateStock(["2025-01-13T10:03:00Z", 160]);

console.log("Max Stock Price:", stockManager.maxStockPrice()); // 160
console.log("Min Stock Price:", stockManager.minStockPrice()); // 148
console.log("Current Stock Price:", stockManager.currentStockPrice()); // 160
console.log("Current Timestamp:", stockManager.getCurrentTimestamp()); // "2025-01-13T10:03:00Z"