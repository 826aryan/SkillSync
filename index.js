const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const adminRoute = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use("/admin", adminRoute); // Correctly adding the adminRoute middleware
app.use("/user", userRouter);  // Fixed the syntax error here

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 