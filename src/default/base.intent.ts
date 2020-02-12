import {
    DialogflowConversation
  } from 'actions-on-google'
import { messages } from '../constants';

export const helpIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.help);    
} 

export const welcomeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.welcome);    
}

export const byeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.goodbye);    
}

export const familyIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.family);    
} 

export const starvedIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.starved);    
} 

export const GwenIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.gwen);    
} 

export const SylvainIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.sylvain);    
} 

export const SSMLIntent = (conv) => {
    conv.ask(`<speak>` +
      `Here are <say-as interpet-as="characters">SSML</say-as> examples.` +
      `Here is a buzzing fly ` +
      `<audio src="https://actions.google.com/sounds/v1/animals/buzzing_fly.ogg"></audio>` +
      `and here's a short pause <break time="800ms"/>` +
      `</speak>`);
    conv.ask('Which response would you like to see next?');
  }   
