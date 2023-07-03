class CreateProfileScreen extends ScreenBuilder{
    #userdata;
    #nextScreenHandlerClassObject;
    #arrayUserDataHandler;
    #selectedUser;

    constructor(nextScreenHandlerClassObject, arrayUserDataHandler, selectedUser) {
        super();

        this.#userdata = {};
        this.#nextScreenHandlerClassObject = nextScreenHandlerClassObject;
        this.#arrayUserDataHandler = arrayUserDataHandler;
        this.#selectedUser = selectedUser;

        this.#userdata["recScore"] = 0;

        this.#userdata["profilePic"] = "";
    }

    build() {
        this._destroyPage();

        const section = document.querySelector("section"), 
              createProfileQuestionArea = document.createElement("div"),
              headerElement = document.querySelector("header"),
              pageTitle = document.createElement("h1");

        createProfileQuestionArea.id = "create-profile-question-area";
        
        pageTitle.id = "page-title";
        pageTitle.innerText = "Planejamento financeiro";

        headerElement.appendChild(pageTitle);

        section.appendChild(createProfileQuestionArea);

        this.#createFirstQuestion();
    }

    #clearQuestionArea() {
        const createProfileQuestionArea = document.querySelector("#create-profile-question-area");

        createProfileQuestionArea.innerHTML = "";
    }

    #returnQuestion(question) {
        const createProfileQuestionQuestion = document.createElement("h1");

        createProfileQuestionQuestion.id = "create-profile-question-question";
        createProfileQuestionQuestion.innerText = question;

        return createProfileQuestionQuestion;
    }

    #returnNextButton(functionHandler) {
        const createProfileNextButton = document.createElement("button");

        createProfileNextButton.className = "green-button";
        createProfileNextButton.innerText = "Proximo";
        createProfileNextButton.id = "create-profile-question-next-button";
        createProfileNextButton.addEventListener("click", functionHandler);

        return createProfileNextButton;
    }

    #returnRadio(id, name) {
        const radio = document.createElement("input");

        radio.type = "radio";
        radio.id = id;
        radio.name = name;

        return radio;
    }

    #returnLabel(id, text) {
        const label = document.createElement("label");

        label.htmlFor = id;
        label.innerText = text;

        return label;
    }

    #createFirstQuestion() {
        const createProfileQuestionArea = document.querySelector("#create-profile-question-area"),
              createProfileQuestionInput = document.createElement("input");

        createProfileQuestionInput.placeholder = "Nome";
        createProfileQuestionInput.type = "text";
        createProfileQuestionInput.id = "create-profile-question-input";

        createProfileQuestionArea.appendChild(createProfileQuestionInput);
        createProfileQuestionArea.appendChild(this.#returnNextButton(() => {
            if (createProfileQuestionInput.value != null && createProfileQuestionInput.value.trim().length > 0) {
                this.#userdata["name"] = createProfileQuestionInput.value.trim();
                this.#createSecondQuestion();
            }
        }))

    }

    #createSecondQuestion() {
        this.#clearQuestionArea();

        const createProfileQuestionArea = document.querySelector("#create-profile-question-area"),
              createProfileQuestionOptions = document.createElement("div"),
              yesRadio = this.#returnRadio("yes", "option"),
              noRadio = this.#returnRadio("no", "option"),
              yesLabel = this.#returnLabel("yes", "Sim"),
              noLabel = this.#returnLabel("no", "Não"),
              createProfileQuestionQuestion = this.#returnQuestion("Você se considera consumista?"),
              createProfileNextButton = this.#returnNextButton(() => {
                const selectedRadio = document.querySelector("input[type='radio'][name=option]:checked");
                if (selectedRadio != null) {

                    if (selectedRadio.id == "yes") {
                        this.#userdata["recScore"]++;
                    }

                    this.#createThirdQuestion();
                }

              })

        createProfileQuestionQuestion.id = "create-profile-question-question";

        createProfileQuestionOptions.id = "create-profile-question-options";

        createProfileQuestionOptions.appendChild(yesRadio);
        createProfileQuestionOptions.appendChild(yesLabel);
        createProfileQuestionOptions.appendChild(noRadio);
        createProfileQuestionOptions.appendChild(noLabel);

        createProfileQuestionArea.appendChild(createProfileQuestionQuestion);
        createProfileQuestionArea.appendChild(createProfileQuestionOptions);
        createProfileQuestionArea.appendChild(createProfileNextButton);
    }

    #createThirdQuestion() {
        this.#clearQuestionArea();

        const createProfileQuestionArea = document.querySelector("#create-profile-question-area"),
              createProfileQuestionOptions = document.createElement("div"),
              yesRadio = this.#returnRadio("yes", "option"),
              noRadio = this.#returnRadio("no", "option"),
              yesLabel = this.#returnLabel("yes", "Sim"),
              noLabel = this.#returnLabel("no", "Não"),
              createProfileQuestionQuestion = this.#returnQuestion("Você sabe o básico sobre investimentos?"),
              createProfileNextButton = this.#returnNextButton(() => {
                const selectedRadio = document.querySelector("input[type='radio'][name=option]:checked");
                if (selectedRadio != null) {

                    if (selectedRadio.id == "no") {
                        this.#userdata["recScore"]++;
                    }

                    if (this.#nextScreenHandlerClassObject != null ) {
                        const userListLastIndex = this.#arrayUserDataHandler.getLastIndex();

                        if (userListLastIndex < 0) {
                            this.#userdata["id"] = 0;
                        }

                        else {
                            const lastUser = this.#arrayUserDataHandler.getUserByIndex(userListLastIndex);

                            this.#userdata["id"] = lastUser.getProfileInfo().id + 1;
                        }

                        this.#selectedUser.user = new UserDataHandler({
                            profileInfo: new ProfileDataHandler(this.#userdata) ,
                            currencyInfo: new CurrencyDataHandler()
                        });

                        this.#arrayUserDataHandler.appendData({users: [this.#selectedUser.user]});
                        
                        this.#nextScreenHandlerClassObject.build();
                        
                    }
                    
                }

              })

        createProfileQuestionQuestion.id = "create-profile-question-question";

        createProfileQuestionOptions.id = "create-profile-question-options";

        createProfileQuestionOptions.appendChild(yesRadio);
        createProfileQuestionOptions.appendChild(yesLabel);
        createProfileQuestionOptions.appendChild(noRadio);
        createProfileQuestionOptions.appendChild(noLabel);

        createProfileQuestionArea.appendChild(createProfileQuestionQuestion);
        createProfileQuestionArea.appendChild(createProfileQuestionOptions);
        createProfileQuestionArea.appendChild(createProfileNextButton);

    }

    _returnSchema() {
        return;
    }
}