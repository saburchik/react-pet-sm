
const data = {
    friends: [
        { id: 1, name: 'Kate', avatar: 'https://avatars.mds.yandex.net/i?id=4f1ab024da0436b4472c96782fb11854-5495295-images-thumbs&n=13' },
        { id: 2, name: 'Felix', avatar: 'https://avatars.mds.yandex.net/i?id=918590bce97f5cf639125b8a93631c32-5427554-images-thumbs&n=13' },
        { id: 3, name: 'Michael', avatar: 'https://avatars.mds.yandex.net/i?id=f53c6a9ba8f260f35ff6d22aa5b9e0c5-5652653-images-thumbs&n=13' }
    ]
}

const sidebarReducer = (state = data, action) => {
    return state
}

export default sidebarReducer