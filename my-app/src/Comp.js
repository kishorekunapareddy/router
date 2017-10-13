import React , { Component } from 'react';
function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-vertical">
          {props.left}
        </div>
        <div className="SplitPane-horizontal">
          {props.right}
        </div>
      </div>
    );
  }
  
  function App() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />

    );
  }
  
  

  export default Contacts;  