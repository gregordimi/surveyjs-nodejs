require('dotenv').config();

const { MongoClient } = require('mongodb');

// Replace the hardcoded URI with the environment variable
const uri = process.env.DATABASE_URL;

async function main() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        // Create 'SurveySchemas' collection
        const surveySchemasCollection = await client.db('probahsurveys').createCollection('SurveySchemas');

        // Create 'SurveyResults' collection
        const surveyResultsCollection = await client.db('probahsurveys').createCollection('SurveyResults');

        console.log('Collections created successfully.');
    } catch (error) {
        console.error('Error creating collections:', error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
