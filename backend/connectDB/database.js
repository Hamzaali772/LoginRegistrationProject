import mongoose from "mongoose";

const connectDataBase=async(DATABASE_URL)=>{

    try {
            const OPTION_DB={
                dbName:process.env.DatabaseName
            }
        await mongoose.connect(DATABASE_URL,OPTION_DB)
        console.log("DataBase connected!!")
    } catch (error) {

        console.log(error)

    }

}
export default connectDataBase