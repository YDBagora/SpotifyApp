import React from 'react';
import artist from './DataArtists';

const ArtistCard = ({artist}) => {
    return(
        <div className="artist-card">
      {/* <img src={artist.image} alt={artist.name} className="artist-image" /> */}
      <h2>{artist.name}</h2>
    </div>
    )
}

export const ArtistsPage = () => {
    return (
        <div>
        {artist.map((data)=> {
            <ArtistCard key="data.id" artist={data}/> 
            console.log(data.name)
            // document.write(data.image)
        })}
    </div>
  )
}
