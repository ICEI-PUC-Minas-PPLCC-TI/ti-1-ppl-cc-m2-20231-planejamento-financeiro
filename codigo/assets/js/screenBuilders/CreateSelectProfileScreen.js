class CreateSelectProfileScreen extends ScreenBuilder{
    #data;
    #nextScreenHandlerClassObject;
    #selectedUser;

    constructor (arrayUserDataHandler, nextScreenHandlerClassObject, currencyScreenHandlerClassObject, selectedUser) {
        super();

        if (!arrayUserDataHandler) throw new Error("Invalid profile list");

        arrayUserDataHandler.getProfiles().profiles.forEach(p => { 
            if(!DataUtil.validateSchema(this._returnSchema, p))
                throw new TypeError("Invalid profile");
        })

        if (selectedUser.user != null && currencyScreenHandlerClassObject != null) {
            currencyScreenHandlerClassObject.build();
        }

        this.#data = arrayUserDataHandler;
        this.#nextScreenHandlerClassObject = nextScreenHandlerClassObject;
        this.#selectedUser = selectedUser;
    }
    
    build() {
        this._destroyPage();
        
        const sectionElement = document.querySelector("section"),
              headerElement = document.querySelector("header"),
              footerElement = document.querySelector("footer"),
              pageTitle = document.createElement("h1"),
              createProfileButton = document.createElement("button");

        this.#data.getData().users.forEach(p => {
            sectionElement.appendChild(this._createProfileElement(p));
        })
        
        pageTitle.id = "page-title";
        pageTitle.innerText = "Planejamento financeiro";
        
        createProfileButton.id = "profile-menu-create-profile-button";
        createProfileButton.className = "green-button";
        createProfileButton.innerText = "Criar perfil"

        createProfileButton.addEventListener("click", () => {
            
            if (this.#nextScreenHandlerClassObject != null) {
                this.#nextScreenHandlerClassObject.build();
            }
            
        })

        headerElement.appendChild(pageTitle);

        footerElement.appendChild(createProfileButton);
    }

    _createProfileElement(userDataHandler) {
        profile = userDataHandler.getProfileInfo();

        const profileMenuItem = document.createElement("div"),
              profileMenuImage = document.createElement("img"),
              profileMenuName = document.createElement("h1"),
              profileMenuTrash = document.createElement("img");
        
        profileMenuItem.className = "profile-menu-item";
        
        profileMenuImage.className = "profile-menu-image";
        profileMenuImage.src = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(profile.profilePic) 
        ? "data:image/png;base64, " + profile.profilePic : profile.profilePic
        
        profileMenuName.className = "profile-menu-name";
        profileMenuName.innerText = profile.name;

        profileMenuTrash.className = "profile-menu-trash";
        profileMenuTrash.src = "./assets/images/trash_icon.svg";

        profileMenuItem.appendChild(profileMenuImage);
        profileMenuItem.appendChild(profileMenuName);
        profileMenuItem.appendChild(profileMenuTrash);

        profileMenuImage.addEventListener("click", () => {
            this.#selectedUser.user = userDataHandler;
            currencyScreenHandlerClassObject.build();
        })

        return profileMenuItem;
    }

    _returnSchema() {
        return {
            id: value => typeof value == "number",
            name: value => typeof value == "string",
            profilePic: value => /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value) || 
            /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value),
            recScore: value => typeof value == "number"
        }
    }
    
}