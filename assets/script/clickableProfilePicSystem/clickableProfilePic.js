function returnUserExample(){
    return {
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
        username: "Username"
    }
}

function blurControl(){
    const body = document.querySelector("body"),
          bodyChilds = body.childNodes;

    bodyChilds.forEach((e) => {
        if(e.nodeType != 3 && e.nodeType != 8 && e.nodeName != "SCRIPT"){
            e.className = e.className ? "" : "blur-filter"
        }
    })
}

function destroyUserInfoContainer(){
    const body = document.querySelector("body");

    body.lastChild.remove()

    blurControl();
}

function returnUserInfoContainer(data){
    usageData = data.data

    const userInfoContainer = document.createElement("div"),
          backButton = document.createElement("div"),
          backButtonImage = document.createElement("img"),
          userInfoImage = document.createElement("img"),
          userNameH1 = document.createElement("h1"),
          editButton = document.createElement("button");
    
    userInfoContainer.id = "user-info-container";

    backButton.className = "back-button";
    editButton.innerText = "Editar";
    
    userInfoImage.id = "user-info-image";

    backButtonImage.src = "./assets/images/back_button_icon.svg";
    
    backButton.appendChild(backButtonImage);

    userInfoImage.src = usageData.profilePic;

    userNameH1.innerText = usageData.username;

    userInfoContainer.appendChild(backButton);
    userInfoContainer.appendChild(userInfoImage);
    userInfoContainer.appendChild(userNameH1);
    userInfoContainer.appendChild(editButton);

    backButton.addEventListener("click", () => destroyUserInfoContainer());

    return userInfoContainer;
}

function presentUserInfo(data){
    const container = returnUserInfoContainer(data),
          body = document.querySelector("body");

    blurControl();

    body.appendChild(container);
}

(() => {
    const data2 = new UserBasicInfoDataHandler(returnUserExample()),
        profilePicElement = document.querySelector("#profile-pic-container");
    
    profilePicElement.addEventListener("click", () => presentUserInfo(data2));
})();