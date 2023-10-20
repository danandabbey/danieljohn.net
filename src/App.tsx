import style from './assets/styles'
import Contact from './components/Contact';
import Name from './components/Name';

const App = () => {
  return (
    <div id={'app'} style={style.app}>
      <Name/>
      <Contact />
    </div>
  )
};

export default App
