import FormContainer from './components/form';

const App = () => {
  const appStyle = {
    height: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px',
    overflow: 'hidden',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',

  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <FormContainer />
      </div>
    </div>
  );
};

export default App;