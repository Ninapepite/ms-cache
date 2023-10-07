import mongoose from 'mongoose';

const RequestResponseSchema = new mongoose.Schema({
    location: String,
    personality: String,
    response: String,
    timestamp: { type: Date, default: Date.now }
});

const RequestResponse = mongoose.model('RequestResponse', RequestResponseSchema);

const resolvers = {
    Query: {
        getRequestResponse: async (_, { location, personality }) => {
            const entry = await RequestResponse.findOne({ location, personality });
            return entry ? entry.response : "Pas de réponse trouvée pour cette combinaison de localisation et de personnalité.";
        }
    }
};

export default resolvers;
