import { Schema, connection } from "mongoose"

const campaignSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please Enter The Title"],
    },
    contacts: {
        type: Array,
        required: [true, "Please Enter The Contacts"],
    },
    bgColor: {
        type: String,
        default: "bg-stone-700"
    },
    textColor: {
        type: String,
        default: "text-stone-700"
    },
    borderColor: {
        type: String,
        default: "border-stone-700"
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, "Please Enter The User ID"],
    }
}, { timestamps: true });


const Db = connection.useDb("Morpi")
const Campaigns = Db.models.Campaigns || Db.model('Campaigns', campaignSchema);
export default Campaigns