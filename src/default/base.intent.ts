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