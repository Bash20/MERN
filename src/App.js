import MyGitHub from './components/MyGitHub';
import MyCounter from './components/MyCounter';

function App() {
  return (
    <div>
      <MyCounter incBy={1}/>
      <hr />
      <MyCounter incBy={5}/>
      <hr />
      <MyGitHub />
      <hr />
    </div>
  );
}

export default App;
