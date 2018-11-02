import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>

    <ul>
      { props.albums.map(album =>
        <li key={album.id} onClick={() => props.selectAlbum(album.id)}>
          { album.name }
        </li>
      ) }
    </ul>

  </div>)
}