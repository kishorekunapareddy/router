import React,{Component} from  'react';

class App2 extends Component
{
   constructor(props)
   {
   super(props);
   this.state = {Name1: 'Kishore,',
                Name2: 'Kunnapareddy'};
   }

render()
{
 return <h1>Hello {this.state.Name1} {this.state.Name2}</h1>;
}
}
export default App2;
