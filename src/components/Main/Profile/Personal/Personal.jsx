// == Styles:
import './Personal.scss'

const Personal = () => {
    return (
        <div className='personal'>
            <img src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614764808_2-p-zadnie-foni-dlya-fotoshopa-2.jpg' alt='background' />
            <div className='personal__inner'>
                <img className='personal__avatar' src='https://avatars.mds.yandex.net/i?id=a1047238679c590fea78c993024b2bc1-4255244-images-thumbs&n=13&exp=1' alt='avatar' />
                <article className='personal__info'>
                    <h3 className='title-h3'>John Doe</h3>
                    <ul>
                        <li>Date of Birth: 22 April 1997</li>
                        <li>City: Toronto, Canada</li>
                        <li>E-mail: smith-07@gmail.com</li>
                        <li>Web-site:
                            <a href='https://saburchik.herokuapp.com' target="_blank" rel="noreferrer">https://saburchik.herokuapp.com</a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    )
}

export default Personal