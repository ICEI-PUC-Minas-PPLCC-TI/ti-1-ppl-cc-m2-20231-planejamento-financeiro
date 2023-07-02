function returnUserExample() {
    return {
        id: 1,
        name: "teste",
        profilePic: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg",
        recScore: 1
    }
}



(() => {
    const createProfileScreen = new CreateProfileScreen(), 
    createSelectProfileScreen = new CreateSelectProfileScreen({profiles: [returnUserExample()]}, createProfileScreen);

    createSelectProfileScreen.build();
})();