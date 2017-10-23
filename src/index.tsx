/* app/index.tsx */ 
import * as React from 'react' 
import { render } from 'react-dom' 
interface IAppProps {} 
interface IAppState {} 
class App extends React.Component<IAppProps, IAppState> { 
  constructor(props:object){
    super(props)
    // this.a = ''
  }
  // let a='';
  bi(){
    setInterval(()=>{
      this.setState({
        'time':new Date().toLocaleTimeString()
      })
    },1000)
  }
  public render(): JSX.Element { 
    this.bi()
    return ( 
      <div id="app">
        <div> Hello world </div>
        <p>welcome to use tsx</p>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    ) 
  } 
} 
render(<App />, document.getElementById('app'))
