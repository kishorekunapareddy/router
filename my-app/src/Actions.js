Actions are payloads of information that send data from your application to your store.
They are the only source of information for the store. 
You send them to the store using 
store.dispatch()

////////////////////////////////////////////////////////////////////



Actions are plain JavaScript objects.
 Actions must have a type property that indicates the type of action being performed. 
 Types should typically be defined as string constants. 
 Once your app is large enough, you may want to move them into a separate module.
 import { ADD_TODO, REMOVE_TODO } from '../actionTypes'


 ///////////////////////////////////////////////////////////////////



 store

 In the previous sections, we defined the actions that represent the facts about
 “what happened” and the reducers that update the state according to those actions.

 The Store is the object that brings them together. The store has the following roles

 •	Holds application state;
 •	Allows access to state via getState();
 •	Allows state to be updated via dispatch(action);
 •	Registers listeners via subscribe(listener);
 •	Handles unregistering of listeners via the function returned by subscribe(listener).
 •	It's important to note that you'll only have a single store in a Redux application. 
 When you want to split your data handling logic, you'll use reducer composition instead of many stores.
 •	It's easy to create a store if you have a reducer. 
 
 In the previous section, we used combineReducers() to combine several reducers into one. We will now import it, and pass it to createStore().
 •	import { createStore } from 'redux'
 •	import todoApp from './reducers'
 •	let store = createStore(todoApp)
 •	You may optionally specify the initial state as the second argument to createStore(). This is useful for hydrating the state of the client to match the state of a Redux application running on the server.
 •	let store = createStore(todoApp, window.STATE_FROM_SERVER)
//////////////////////////////////////////////////


There are two main ways to initialize state for your application. 

The createStore method can accept an optional preloadedState value as its second argument.

 Reducers can also specify an initial value by looking for an incoming state argument that is undefined,
 and returning the value they'd like to use as a default.

 This can either be done with an explicit check inside the reducer,
 or 
 by using the ES6 default argument value syntax: function myReducer(state = someDefaultValue, action). 