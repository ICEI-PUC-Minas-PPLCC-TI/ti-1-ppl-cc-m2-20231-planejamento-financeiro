class CreateCurrencyViewerScreen extends ScreenBuilder{
    #selectedUser;
    #createChartViewerScreen;
    #createRecViwerScreen;
    #prevScreen;

    constructor(selectedUser, createChartViewerScreen, createRecViwerScreen, prevScreen) {
        super();

        this.#selectedUser = selectedUser;
        this.#createChartViewerScreen = createChartViewerScreen;
        this.#createRecViwerScreen = createRecViwerScreen;
        this.#prevScreen = prevScreen;
    }

    build() {
        if (this.#selectedUser == null || this.#selectedUser.user == null || !this.#selectedUser.user.constructor.name == "UserDataHandler") 
            throw new Error("Invalid user!");
        
        this._destroyPage();

        this.#prevScreen.screen = this;

        CommonElementsUtils.setCurrencyHeader(this.#selectedUser.user.getCurrenciesInfo(), this.#selectedUser.user.getProfileInfo());
        CommonElementsUtils.setCurrencyFooter(true, true, true, this.#createRecViwerScreen, this, this.#createChartViewerScreen);

        this.#cleanSection();
        
        this.#buildCurrencies(this.#selectedUser.user.getCurrenciesInfo().getData());
    }

    #cleanSection() {
        const section = document.querySelector("section");

        section.innerHTML = "";
    }

    #buildCurrencies(currenciesData) {
        const section = document.querySelector("section"),
              currencies = currenciesData.currencies;

        currencies.forEach(c => {
            section.appendChild(this.#returnCurrencyContainer(c))
        })
    }

    #returnCurrencyContainer(currency) {
        const currencyContainer = document.createElement("div"),
              currencyData = document.createElement("div"),
              currencySymbol = document.createElement("img"),
              currencyInfo = document.createElement("div"),
              currencyName = document.createElement("h1"),
              currencyAmount = document.createElement("p"),
              currencyExpand = document.createElement("img"),
              currencyDetails = document.createElement("div");

        
        currencyContainer.className = "currency-container";

        currencyData.className = "currency-data";

        currencySymbol.className = "currency-symbol";
        currencySymbol.src = "./assets/images/money_icon.svg";

        currencyInfo.className = "currency-info";

        currencyName.className = "currency-name";
        currencyName.innerText = currency.name;

        currencyAmount.className = "currency-amount" + currency.type ? "positive-currency" : "negative-currency";
        currencyAmount.innerText = currency.value;

        currencyExpand.className = "currency-expand";
        currencyExpand.src = "./assets/images/expand_more.svg"

        currencyExpand.addEventListener("click", () => {
            if (currencyDetails.style && currencyDetails.style.display == "none") {
                currencyDetails.style.display = "";

                currencyExpand.src="./assets/images/expand_less.svg";
            }

            else if(currencyDetails.style && currencyDetails.style.display != "none") {
                currencyDetails.style.display = "none";

                currencyExpand.src="./assets/images/expand_more.svg";
            }
        })

        currencyDetails.innerText = "Descrição: " + currency.description;

        currencyInfo.appendChild(currencyName);
        currencyInfo.appendChild(currencyAmount);

        currencyData.appendChild(currencySymbol);
        currencyData.appendChild(currencyInfo);
        currencyData.appendChild(currencyExpand);

        currencyContainer.appendChild(currencyData);
        currencyContainer.appendChild(currencyDetails);

        return currencyContainer;
    }

    //todo: create add currencies system
    /*
        <div id="add-currency" class="floating-container">
            <div id="add-currency-container">
                <input type="text" placeholder="Titulo" id="add-currency-title-input">
                <div id="add-currency-data">
                    <select id="add-currency-select">
                        <optgroup>
                            <option>Entrada</option>
                            <option>Saida</option>
                        </optgroup>
                    </select>
                    <input type="date">
                    <input type="number" placeholder="Valor">
                </div>
                <textarea id="add-currency-description">

                </textarea>
                <button class="green-button" id="add-currency-button">Adicionar</button>
            </div>
        </div>
    */    
}