class CommonElementsUtils {

    static setCurrencyHeader (currencyDataHandler, profileDataHandler) {
        const negativeSum = currencyDataHandler.getNegativeCurrency()["sum"],
        positiveSum = currencyDataHandler.getPositiveCurrency()["sum"];

        const header = document.querySelector("header"),
              profilePicContainer = document.createElement("div"),
              profilePicContainerImage = document.createElement("img"),
              positiveDataContainer = CommonElementsUtils.returnDataContainer(true, positiveSum),
              currencyContainerInfo = document.createElement("div"),
              currencyContainer = document.createElement("div"),
              currencyContainerSelect = document.createElement("select"),
              currencyContainerSelectOptGroup = document.createElement("optgroup"),
              currencyContainerSelectOptGroupOptionsArray = CommonElementsUtils.returnMonthOptions(),
              currencyTitle = document.createElement("h1"),
              actualCurrency = document.createElement("h1"),
              negativeDataContainer = CommonElementsUtils.returnDataContainer(false,  negativeSum);
        
        profilePicContainer.id = "profile-pic-container";

        profilePicContainerImage.src ="./assets/images/profile_pic_icon.svg"

        currencyContainer.id = "currency-container";

        currencyContainerInfo.id = "currency-container-info";

        currencyTitle.innerText = "Saldo";
        currencyTitle.id = "currency-title";

        actualCurrency.id = "actual-currency";
        actualCurrency.className = positiveSum - negativeSum < 0 ? "negative-currency" : "positive-currency";
        actualCurrency.innerText = "$" + Math.abs(positiveSum - negativeSum);

        profilePicContainer.addEventListener("click" , () => {
            CommonElementsUtils.presentUserInfo(profileDataHandler);
        })

        currencyContainerInfo.appendChild(currencyContainerSelect)

        profilePicContainer.appendChild(profilePicContainerImage);

        currencyContainerSelectOptGroupOptionsArray.forEach(n => currencyContainerSelectOptGroup.appendChild(n))

        currencyContainerSelect.appendChild(currencyContainerSelectOptGroup);

        currencyContainer.appendChild(currencyContainerInfo);
        currencyContainerInfo.appendChild(currencyTitle);
        currencyContainerInfo.appendChild(actualCurrency);

        header.appendChild(profilePicContainer);
        header.appendChild(positiveDataContainer);
        header.appendChild(currencyContainer);
        header.appendChild(negativeDataContainer);

    }

    static setCurrencyFooter(haveRecomendationsViewer, 
                             haveCurrencyViewer, 
                             haveChartViewer, 
                             createRecViewerScreenObject,
                             createCurrencyViewerScreenObject,
                             createChartViewerScreenObject) {
        
        const footer = document.querySelector("footer"),
              footerImages = [];

        if (haveRecomendationsViewer == true && createRecViewerScreenObject != null) {
            footerImages.push(CommonElementsUtils.createFooterImageWithScreenObject("./assets/images/book_icon.svg", createRecViewerScreenObject));
        }

        if (haveCurrencyViewer == true && createCurrencyViewerScreenObject != null) {
            footerImages.push(CommonElementsUtils.createFooterImageWithScreenObject("./assets/images/add_icon.svg", createCurrencyViewerScreenObject));
        }

        if (haveChartViewer == true && createChartViewerScreenObject != null) {
            footerImages.push(CommonElementsUtils.createFooterImageWithScreenObject("./assets/images/graph_icon.svg", createChartViewerScreenObject));
        }
        
        footerImages.forEach((n) => footer.appendChild(n));

    }

    static createFooterImageWithScreenObject(src, screenObject) {
        const footerImage = document.createElement("img");

        footerImage.src = src;

        footerImage.addEventListener("click", () => screenObject.build());

        return footerImage;
    }

    static returnMonthOptions() {
        const months = [
            ["", "Meses"],
            ["0", "Janeiro"],
            ["1", "Fevereiro"],
            ["2", "Março"],
            ["3", "Abril"],
            ["4", "Maio"],
            ["5", "Junho"],
            ["6", "Julho"],
            ["7", "Agosto"],
            ["8", "Setembro"],
            ["9", "Outubro"],
            ["10", "Novembro"],
            ["11", "Dezembro"]
        ], options = [];
        
        months.forEach((month) => {
            options.push(CommonElementsUtils.returnOption(month[0], month[1]));
        })

        return options;
    }

    static returnOption(value, text) {
        const option = document.createElement("option");

        option.value = value;
        option.innerText = text;
        
        return option;
    }

    static returnDataContainer(isPositive, value) {
        const dataContainer = document.createElement("div"),
              dataContainerData = document.createElement("div"),
              emptyDiv = document.createElement("div"),
              currencyImage = document.createElement("img"),
              currencyInfo = document.createElement("div"),
              pTypeOfCurrency = document.createElement("p"),
              pCurrency = document.createElement("p");


        if (isPositive) {
            dataContainer.id = "input-container";
            dataContainer.className = "flex-end-container";
            
            dataContainerData.id = "input-data-container";
            
            currencyImage.src = "./assets/images/input_icon.svg";
            currencyImage.className = "positive-currency";
            
            pTypeOfCurrency.innerText = "Entrada";
             
            pCurrency.className = "positive-currency";
        }
        else {
            dataContainer.id = "output-container";
            dataContainer.className = "flex-end-container";
            
            dataContainerData.id = "output-data-container";
            
            currencyImage.src = "./assets/images/output_icon.svg";
            currencyImage.className = "negative-currency";
            
            pTypeOfCurrency.innerText = "Saida";
             
            pCurrency.className = "negative-currency";
        }

        currencyInfo.className = "currency-info"
        
        dataContainerData.className = "data-container";

        pCurrency.innerText = "R$ " + value;
        
        currencyInfo.appendChild(pTypeOfCurrency);
        currencyInfo.appendChild(pCurrency);

        dataContainerData.appendChild(emptyDiv);
        dataContainerData.appendChild(currencyImage);
        dataContainerData.appendChild(currencyInfo);

        dataContainer.appendChild(dataContainerData);

        return dataContainer;
    }

    static returnUserInfoContainer(data){
        const usageData = data.getData();
    
        const userInfoContainer = document.createElement("div"),
              backButton = document.createElement("div"),
              backButtonImage = document.createElement("img"),
              userInfoImage = document.createElement("img"),
              userNameH1 = document.createElement("h1"),
              editButton = document.createElement("button");
        
        userInfoContainer.id = "user-info-container";
        
        userInfoContainer.className = "floating-container"

        backButton.className = "back-button";
        editButton.innerText = "Editar";
        
        userInfoImage.id = "user-info-image";
    
        backButtonImage.src = "./assets/images/back_button_icon.svg";
        
        backButton.appendChild(backButtonImage);
    
        userInfoImage.src = usageData.profilePic;
    
        userNameH1.innerText = usageData.name;
    
        userInfoContainer.appendChild(backButton);
        userInfoContainer.appendChild(userInfoImage);
        userInfoContainer.appendChild(userNameH1);
        userInfoContainer.appendChild(editButton);
    
        backButton.addEventListener("click", () => CommonElementsUtils.destroyUserInfoContainer());
    
        return userInfoContainer;
    }

    static blurControl(){
        const body = document.querySelector("body"),
              bodyChilds = body.childNodes;
    
        bodyChilds.forEach((e) => {
            if(e.nodeType != 3 && e.nodeType != 8 && e.nodeName != "SCRIPT"){
                e.className = e.className ? "" : "blur-filter"
            }
        })
    }

    static destroyUserInfoContainer(){
        const body = document.querySelector("body");
    
        body.lastChild.remove()
    
        CommonElementsUtils.blurControl();
    }
    
    static presentUserInfo(data){
        const container = CommonElementsUtils.returnUserInfoContainer(data),
              body = document.querySelector("body");
    
        CommonElementsUtils.blurControl();
    
        body.appendChild(container);
    }
}

/*
<>.constructor.name -> get classname of object

        <div id="profile-pic-container">
            <img src="./assets/images/profile_pic_icon.svg">
        </div>
        <div id="input-container" class="flex-end-container">
            <div id="input-data-container" class="data-container">
                <div></div>
                <img src="./assets/images/input_icon.svg" class="positive-currency">
                <div class="currency-info">
                    <p>Entrada</p>
                    <p class="positive-currency">$0.00</p>
                </div>
            </div>
        </div>
        <div id="currency-container">
            <div id="currency-container-info">
                <select>
                    <optgroup>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </optgroup>
                </select>
                <h1 id="currency-title">
                    Saldo
                </h1>
                <h1 id="actual-currency" class="positive-currency">
                    $0.00
                </h1>
            </div>
        </div>
        <div id="output-container" class="flex-end-container">
            <div></div>
            <div id="output-data-container" class="data-container">
                <img src="./assets/images/output_icon.svg" class="negative-currency">
                <div class="currency-info">
                    <p>Saida</p>
                    <p class="negative-currency">$0.00</p>
                </div>
            </div>
        </div>

*/ 