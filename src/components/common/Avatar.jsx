const Avatar = ({ className, avatar }) => {

    return <img className={className}
        src={avatar ||'https://avatars.mds.yandex.net/i?id=3bdd061bff68b2ae3e738956432bb77b-2399446-images-thumbs&n=13&exp=1'}
        alt="user"
    />
}

export default Avatar