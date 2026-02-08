```javascript
import React from 'react';
import Sidebar from './components/Sidebar';
import PlayerBar from './components/PlayerBar';
import AlbumGrid from './components/AlbumGrid';

function App() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AlbumGrid />
        <PlayerBar />
      </div>
    </div>
  );
}

export default App;
```

###