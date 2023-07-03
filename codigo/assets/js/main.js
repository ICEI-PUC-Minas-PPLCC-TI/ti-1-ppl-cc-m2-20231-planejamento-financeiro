(() => {
    const arrayUserDataHandler = new ArrayUserDataHandler();

    const selectedUser = {user: null};

    const prevScreen = {screen: null}

    const createRecViwerScreen = new CreateRecViewerScreen(selectedUser, prevScreen), 
    createChartViewerScreen = new CreateChartViewerScreen(selectedUser, prevScreen),
    createCurrencyViewerScreen = new CreateCurrencyViewerScreen(selectedUser, createChartViewerScreen, createRecViwerScreen, prevScreen), 
    createProfileScreen = new CreateProfileScreen(createCurrencyViewerScreen, arrayUserDataHandler, selectedUser), 
    createSelectProfileScreen = new CreateSelectProfileScreen(arrayUserDataHandler, createProfileScreen, createCurrencyViewerScreen, selectedUser),
    createEditProfileScreen = new CreateEditProfileScreen(selectedUser);

    createSelectProfileScreen.build();
})();