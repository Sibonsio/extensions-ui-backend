import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MANGODB_URI)
        console.log(`The database is connected`)
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB