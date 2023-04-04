const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DATABASE_URL;

async function withMongoDb(callback) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    await callback(client);
  } finally {
    await client.close();
  }
}

function MongoDBAdapter() {
  async function getSurveys(callback) {
    await withMongoDb(async (client) => {
      const surveys = await client.db('probahsurveys').collection('SurveySchemas').find().toArray();
      callback(surveys);
    });
  }

  async function getSurvey(surveyId, callback) {
    await withMongoDb(async (client) => {
      const survey = await client.db('probahsurveys').collection('SurveySchemas').findOne({ survey_id: surveyId });
      callback(survey);
    });
  }

  async function addSurvey(name, callback) {
    await withMongoDb(async (client) => {
      const newObj = {
        survey_id: new Date().toISOString(), // Generate a unique ID
        name: name || 'Default Name',
        json: '{}',
      };
      await client.db('probahsurveys').collection('SurveySchemas').insertOne(newObj);
      callback(newObj);
    });
  }

  async function storeSurvey(id, name, json, callback) {
    await withMongoDb(async (client) => {
      const survey = {
        survey_id: id,
        name: name || id,
        json: json,
      };

      await client.db('probahsurveys').collection('SurveySchemas').updateOne({ survey_id: id }, { $set: survey }, { upsert: true });
      callback(survey);
    });
  }

  async function deleteSurvey(surveyId, callback) {
    await withMongoDb(async (client) => {
      const result = await client.db('probahsurveys').collection('SurveySchemas').deleteOne({ survey_id: surveyId });
      callback(result);
    });
  }

  async function postResults(postId, json, callback) {
    await withMongoDb(async (client) => {
      const result = await client.db('probahsurveys').collection('SurveyResults').insertOne({
        result_id: new Date().toISOString(),
        survey_id: postId,
        content: json,
      });
      callback(result);
    });
  }

  async function getResults(postId, callback) {
    await withMongoDb(async (client) => {
      const results = await client.db('probahsurveys').collection('SurveyResults').find({ survey_id: postId }).toArray();
      callback(results);
    });
  }

  async function changeName(id, name, callback) {
    await withMongoDb(async (client) => {
      await client.db('probahsurveys').collection('SurveySchemas').updateOne({ survey_id: id }, { $set: { name: name } });
      const updatedSurvey = await client.db('probahsurveys').collection('SurveySchemas').findOne({ survey_id: id });
      callback(updatedSurvey);
    });
  }

  return {
    addSurvey,
    getSurvey,
    storeSurvey,
    getSurveys,
    deleteSurvey,
    postResults,
    getResults,
    changeName,
  };
}

module.exports = MongoDBAdapter;
