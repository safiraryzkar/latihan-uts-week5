// File: business-layer-user. js
app.get("/get-user/:useremail", function (reg, res) {
// Makes a call to the data access layer
const user = User.getUserByEmail(req.params.useremail, (error, user) => {
    res.status (200) .json({
        name: user.name, 
        email: user.email, 
        profileUrl: user.profileUrl, 
    });
  });
});