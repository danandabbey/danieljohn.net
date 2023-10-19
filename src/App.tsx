
const App = () => {

  const app = {
    'alignItems': 'center',
    'height': '100vh',
    'width': '100vw',
  }

  const textStyle: any = {
    'color': '#fff',
    'fontSize': '32px',
  }
  const container = {
    'display': 'flex',
    'alignItems': 'center',
    'backgroundColor': '#000',
    'justifyContent': 'center',
    'height': '20%',
    'width': '100%'
  }
    
  return (
    <div style={app}>
      <div style={container}>
        <h1 style={textStyle}>We are currently under construction</h1>
      </div>
    </div>
  )
};

export default App
