import { Schema, connection } from "mongoose"

const contactsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter The Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter The Email"],
        unique: [true, "Already exists with this email"],
    },
    phone: {
        type: String,
        required: [true, "Please Enter The Passwords"],
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, "Please Enter The User ID"],
    },
}, { timestamps: true });


const Db = connection.useDb("Morpi")
const Contacts = Db.models.Contacts || Db.model('Contacts', contactsSchema);
export default Contacts