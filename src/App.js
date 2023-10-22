import React, { useState, useEffect , useRef } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import './App.css';
import CustomPlayer from './CustomPlayer';
import logo from './logoYad.svg';
import Navbar from './Navbar'; // נתיב היחסי יכול להשתנות בהתאם למיקום הקבצים בפרויקט שלך

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
 
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('/yadbarzel/feed.xml');
        const parser = new xml2js.Parser();
        parser.parseString(response.data, (err, result) => {
          if (!err) {
            const items = result.rss.channel[0].item;
            const parsedEpisodes = items.map((item) => ({
              title: item.title[0],
              description: item.description[0],
              audio_url: item.enclosure[0].$.url,
              image_url: item['itunes:image'] ? item['itunes:image'][0].$.href : null,
            }));
            setEpisodes(parsedEpisodes);
          }
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchEpisodes();
  }, []);

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
  };

  

  return (
    
    <div>  
      <Navbar />

    
      <div class="card">
        <div className="App">
          <header className="App-header">
          </header>
          <div className="App-body">
          <nav className="App-nav">
  {/* List of episodes */}
  {episodes.length > 0 && (
    <ul>
      {episodes.map((episode, idx) => (
        <li key={idx} onClick={() => handleEpisodeSelect(episode)}>
          {"פרק " + (idx + 1)} {/* מספר הפרק, נקודת ההתחלה היא 1 ולא 0 */}
        </li>
      ))}
    </ul>
  )}
</nav>




            <div className="App-content">
              {/* Selected episode details */}
              {selectedEpisode && (
                <div>
                  <h2>{selectedEpisode.title}</h2>
                  <div className="flex-container">
                    {/* Episode image */}
                    {selectedEpisode.image_url && (
                      <div>
                        <img src={selectedEpisode.image_url} alt="Episode" />
                      </div>
                    )}
                    {/* Episode description */}
                    <div>
                      <p>{selectedEpisode.description}</p>
                    </div>
                  </div>
                  {/* Audio player: using the 'key' prop to force re-creating the component when the URL changes */}
                  <audio controls key={selectedEpisode.audio_url}>
                    <source src={selectedEpisode.audio_url} type="audio/mpeg" />
                  </audio>
                  <CustomPlayer src={selectedEpisode.audio_url} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
