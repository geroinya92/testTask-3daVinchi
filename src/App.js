import Sidebar from './components/sidebar'
import './App.css';
import Content from './components/content';
import { StickyContainer, Sticky } from 'react-sticky';

function App() {
  return (
    <StickyContainer className='container'>
      {/*...*/}
      <Sticky>
        {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => (
          <nav style={style}>
            <Sidebar />
          </nav>
        )}
      </Sticky>
      {<Content />}
    </StickyContainer>
  );
}

export default App
