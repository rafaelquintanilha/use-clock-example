import React from 'react';
import Prism from 'prismjs';
import './prism.css';
import useClock from 'use-clock';

const snippet = `import React from 'react';
import useClock from 'use-clock';

function HookExample() {
  // Initialize by passing any string accepted by
  // https://momentjs.com/docs/#/displaying/format/
  // and an optional period (defaults to 1000ms)
  // onTimezone accepts a string with a valid timezone as per
  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  // raw is a moment object
  const { time, onTimezone, raw } = useClock("HH:mm:ss");
  const londonTime = onTimezone("Europe/London");
  const brasiliaTime = onTimezone("America/Sao_Paulo");
  return (
    <div>
      <div><b>Computer time:</b> {time}</div>
      <div><b>London time:</b> {londonTime}</div>
      <div><b>Brasilia time:</b> {brasiliaTime}</div>
      <div><b>Raw time:</b> {raw.format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
    </div>
  );
}
`;

class App extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <>
        <header>
          <h1>useClock()</h1>
        </header>
        <main>
          <p>
            $ npm install --save use-clock
          </p>
          <HookExample />
          <hr />
          <pre>
            <code className="language-javascript">          
              {snippet}   
            </code>
          </pre>
          <hr />
          <footer>
            <a href="https://github.com/rafaelquintanilha/use-clock">GitHub</a>
            &nbsp;
            •
            &nbsp;
            Created by
            &nbsp;
            <a href="https://rafaelquintanilha.com">Rafael Quintanilha</a>
          </footer>
        </main>
      </>
    );
  }
}

function HookExample() {
  const { time, onTimezone, raw } = useClock("HH:mm:ss");
  const londonTime = onTimezone("Europe/London");
  const brasiliaTime = onTimezone("America/Sao_Paulo");
  return (
    <div>
      <div><b>Computer time:</b> {time}</div>
      <div><b>London time:</b> {londonTime}</div>
      <div><b>Brasilia time:</b> {brasiliaTime}</div>
      <div><b>Raw time:</b> {raw.format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
    </div>
  );
}

export default App;