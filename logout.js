let signOutButton = document.getElementById("SignOutButton");

signOutButton.addEventListener("click", async () => {
  let isLoggedIn = false;
  chrome.action.setPopup({popup: "login.html"});
  window.location.href="login.html";
  chrome.storage.sync.set({ isLoggedIn }, function () {
    console.log('isLoggedIn is set to ' + isLoggedIn);
  });

  //showLoggedOutView();
  //clearItemsTable();

});