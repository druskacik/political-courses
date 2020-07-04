const axios = require('axios');

const knex = require('../../../knex_connection');
const getHeaders = require('./utils');
const newCompetitionNotification = require('../../notifications/new-competition');
const getNewMatches = require('./get-new-matches');
const getSports = require('./helpers/get-sports');

const fetchNewCompetitions = async () => {
  try {
    const headers = await getHeaders();
    const sports = await getSports();
    for (let sport of sports) {
      try {
        console.log('FETCHING FOR SPORT:', sport);
        const url = sport.url;
        const response = await axios.post(
          url,
          JSON.parse(sport.parameters),
          {
            headers,
          }
        );
    
        const competitions = response.data.offerSuperSports[0].tabs[0].offerCompetitions;
        for (let competition of competitions) {
          let competitionID = '';
          const savedComp = await knex('competition')
            .where({
              provider_id: competition.id
            }).select();
          if (savedComp.length > 0) {
            competitionID = savedComp[0].id;
          } else {
            const response = await knex('competition').insert({
              provider_id: competition.id,
              name: competition.name,
              type: 'tennis'
            });
            competitionID = response[0];
            console.log(`Competition ${competition.name} inserted to DB !`);  
            await newCompetitionNotification(competition.name);
          }
          // get new matches and notify about them
          await getNewMatches({
            ...competition,
            clientID: competitionID,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = fetchNewCompetitions;