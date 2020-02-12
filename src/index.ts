// Import the appropriate service and chosen wrappers
import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'

import { 
  helpIntent,
  welcomeIntent,
  byeIntent,
  familyIntent,
  starvedIntent,
  GwenIntent,
  SylvainIntent,
  SSMLIntent,
} from './default/base.intent';

const express = require('express');
const bodyParser = require('body-parser');

// Create an app instance
const app = dialogflow()

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', welcomeIntent)

// Intent in Dialogflow called `Goodbye`
app.intent('Goodbye', byeIntent)

app.intent('Help', helpIntent)

app.intent('Family', familyIntent)

app.intent('Starved', starvedIntent)

app.intent('Gwen', GwenIntent)

app.intent('Sylvain', SylvainIntent)

app.intent('SSML', (SSMLIntent) => {
    SSMLIntent.ask(`<speak>` +
      `Here are <say-as interpet-as="characters">SSML</say-as> examples.` +
      `Here is a buzzing fly ` +
      `<audio src="https://actions.google.com/sounds/v1/animals/buzzing_fly.ogg"></audio>` +
      `and here's a short pause <break time="800ms"/>` +
      `</speak>`);
      SSMLIntent.ask('Which response would you like to see next?');
  });
  // [START df_js_media_response]
app.intent('Media Response', (conv) => {
    if (!conv.surface.capabilities
      .has('actions.capability.MEDIA_RESPONSE_AUDIO')) {
        conv.ask('Sorry, this device does not support audio playback.');
        conv.ask('Which response would you like to see next?');
        return;
    }

express().use(bodyParser.json(), app).listen(8080);