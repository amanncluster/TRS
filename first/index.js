const mongoose = require("mongoose");


mongoose.connect(
"mongodb+srv://amanncluster:s0maliha@amann.pqpstfv.mongodb.net/?retryWrites=true&w=majority&appName=Amann"
)
.then(
    () => {
        console.log("connected");
    }
).catch(
    () => {
        console.log("failed");
    }
)