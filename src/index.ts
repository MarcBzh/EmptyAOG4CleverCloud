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
  SongIntent
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

app.intent('Song', SongIntent)

express().use(bodyParser.json(), app).listen(8080);