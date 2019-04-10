export default class Song{
  constructor ({id, mid, singer, name, albumname, interval, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.albumname = albumname
    this.interval = interval
    this.image = image
    this.url = url
  }
}

export function getCdlist ( d ) {
  return new Song( {
    id:d.songid,
    mid: d.songmid,
    singer: Singer( d.singer),
    name: d.songname,
    albumname: d.albumname,
    interval: d.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${d.albummid}.jpg?max_age=2592000`,
    url: `https://api.bzqll.com/music/tencent/url?key=579621905&id=${d.songmid}&br=320`
  })
}

function Singer ( s ) {
  let r = []
  if( !s ) {
    return ''
  }
  s.forEach( (res) => {
    r.push( res.name)
  })
  return r.join('/')
}
