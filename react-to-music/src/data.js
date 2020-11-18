import { v4 as uuidv4 } from 'uuid';

const music = () => {
  return[
    {
      name:'Sunrise in Paris',
      artist:'Dan Henig',
      cover:'https://images.unsplash.com/photo-1509460256263-94d60ef7f280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#542d15','#353821'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632432&ei=WP-zX-OjKcy1qQHf26jIDA&ip=0.0.0.0&id=acafcf3c50e3de9b&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=1686920&dur=105.430&lmt=1597762283140609&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wQwIgANYW2pCpHK4-GZRB3mptissMWgjJpYNwCWgMVeIqnp4CH1Fjrp4lrhUPDlpc7WJDuWxZLVqnSEJFjGZp4eAxJaA='
    },
    {
      name:'QuangerineCream',
      artist:'Noir Et Blanc Vie',
      cover:'https://images.unsplash.com/photo-1602532769069-0e856a643e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#d27e1d','#e7b69f'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632730&ei=ggC0X-DKJciJgQOnqZG4Ag&ip=0.0.0.0&id=d6ca9f192e93156a&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2661183&dur=166.321&lmt=1597762202107724&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgC7HiNg-r4Tb0tEW5-7kgMFiHy9gYG8Auzo2TPzx2tDoCIQDSipKCoWS_0qXlO0ypLPjQQm_ShqCI2bFEyMrAeug9yQ=='
    },
    {
      name:'TrueArtRealAffectionPart4',
      artist:'Noir Et Blanc Vie',
      cover:'https://images.unsplash.com/photo-1526310627-0c148cd49f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#3d656a','#8aa0b4'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632778&ei=sgC0X5a5KsiJgQOnqZG4Ag&ip=0.0.0.0&id=3784e086f5ed6603&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2651152&dur=165.694&lmt=1597762190684957&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgBG4v6tZjH4QwW3sDx-eFZCmaoNTs1sDD2IjHFd6zizICIEjZWZu-TOuLS-7ZjIM3EtKLUcAsj5O7fTjqCEJlN3pz'
    },
    {
      name:'Eternal Garden',
      artist:'Dan Henig',
      cover:'https://images.unsplash.com/photo-1571930998273-2d08ed18b1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#e46a66','#4d5532'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632815&ei=1wC0X-ftOa2Bs8IPy8mVgAU&ip=0.0.0.0&id=49bd9a1490cb315d&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2119926&dur=132.493&lmt=1597762278902459&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgKz4TD93Kzjgkm8t9o3FN72VYp_TvRcZzqqLSvfipxNICIHsV_Y50D9KURCUMQgQiH1Yz0nUpbQtFE9Y5nGS_2Qd-'
    },
    {
      name:'Hot Hop Rok',
      artist:'Steve Adams',
      cover:'https://images.unsplash.com/photo-1588260411006-a2605a79d788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#ec9d9a','#01474f'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632833&ei=6QC0X_O5C4KvqAGhjb3YAw&ip=0.0.0.0&id=27ccb065c7c15b94&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2331831&dur=145.737&lmt=1597869436511880&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgHb3WOZ5baFcQ2sW56FFvm99-M5QDD6nifT-Yyyi77FICIC8mve8pnqx-oJ6y7KlFhj-r8f8g7GKfNCpOxuDRQ-ny'
    },
    {
      name:'Peacefully',
      artist:'Dan Henig',
      cover:'https://images.unsplash.com/photo-1549321041-8fabe2602d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#c2a799','#8eaaba'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632848&ei=-AC0X9TyNoucs8IP-8uggAk&ip=0.0.0.0&id=c8e13edd2706b552&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2869326&dur=179.330&lmt=1589316245694604&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgYZ3UgjvU_WpZs0nzA0VP65ZEPDoPDW9t6oLvFUPtlgwCIQCalP7kIJPJPCNjo4-a-8wSv-Z0ca8vxdd13dQwPGlJVA=='
    },
    {
      name:'Three Wise People',
      artist:"E's Jammy Jams",
      cover:'https://images.unsplash.com/photo-1468022536934-b938a806e490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#fb9a50','#dfcac6'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632864&ei=CAG0X-iKGa2Bs8IPy8mVgAU&ip=0.0.0.0&id=ec73775844772196&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2420020&dur=151.248&lmt=1589316238281343&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgQ5G3J1gO9nwe685ex_6nGcYIFsAQqH0PrIBxwTGVVw4CIQDX3D-FLH8rGS7wM9vgzBZnTnGkbNy_X4Pv1ZGSaFUbEg=='
    },
    {
      name:'Wallflowers',
      artist:'Bad Snacks',
      cover:'https://images.unsplash.com/photo-1599843368794-fd25e66bfeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#e6a393','#9f796d'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632883&ei=GwG0X5DUCoKvqAGhjb3YAw&ip=0.0.0.0&id=ea08a2593baf8515&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=2230267&dur=139.389&lmt=1571775211004799&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgWXH8xMunBe_521IxQyd26xojzvDho2y5E7ou1Lh37moCIQCd7WeWpFOO0zzbbM9c1tp6qzPcGJHQa6wAUyNzuZV2gQ=='
    },
    {
      name:"Kate's Waltz",
      artist:'Bad Snacks',
      cover:'https://images.unsplash.com/photo-1598456448049-1c68e921e8ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#e2e2e2','#2a2a2a'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632897&ei=KQG0X7_aIMfAgAOpjIKwDg&ip=0.0.0.0&id=740a25923368fd6d&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=3586544&dur=224.156&lmt=1571775215664794&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIhAPhbrpBZLzelQZudr4NG8-xuehoGwYkLp0eluhNcZF84AiAYmz1AVIY4g-bj2gOGOJDT0imrr0YZNYumyd99Hq8S1A=='
    },
    {
      name:'Pastoral',
      artist:'Asher Fulero',
      cover:'https://images.unsplash.com/photo-1518862728982-b31cdc14dc15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#263f5b','#738292'],
      audio: 'https://redirector.googlevideo.com/videoplayback?expire=1605632914&ei=OgG0X6GGOK2Bs8IPy8mVgAU&ip=0.0.0.0&id=e415684f0c73f004&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&prv=1&gir=yes&clen=3379237&dur=211.199&lmt=1579068193676164&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,prv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgXYmpZ5qe4h7kNXVA_35W6vb54g5bKw6rjY9GJgFcK9MCIQDP5TQW3lvuHapPCCI1wV6RHZp6X9hYJ0Rvft_6tT1ZTQ=='
    },
  ]
}

export default music;
