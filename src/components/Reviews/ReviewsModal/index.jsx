import React from 'react'
import c from './ReviewsModal.module.scss'
import staticImg from '../../../images/rev_add.svg'
import {API} from '../../../api'


const ReviewsModal = ({setModalState}) => {
  const [choosenFile, setChoosenFile] = React.useState(null)
  const [fullName, setFullName] = React.useState(null)
  const [desc, setDesc] = React.useState(null)


  const post = () => {
    const formData = new FormData()
    formData.append('image', choosenFile)

    API.postReview({
      image: staticImg,
      full_name: fullName,
      description: desc,
    }).then(r => console.log(r.data))
  }
  

  return (
    <div className={c.modal}>
      <div className={c.background} onClick={() => setModalState(false)}></div>
      <div className={c.modal_block}>
        <h1>Добавить отзыв</h1>
        <div className={c.user_photo}>
          <img src={staticImg} alt="user" />
          <input type="file" id='add' onChange={(e) => setChoosenFile(e.target.files[0])}/>
          <label htmlFor="add">Нажмите чтобы выбрать фото</label>
        </div>
        <input 
          type="text" 
          placeholder='Ваше имя' 
          onChange={(e) => setFullName(e.target.value)}
        />
        <textarea 
          type="text" 
          placeholder='Ваше сообщение' 
          onChange={(e) => setDesc(e.target.value)}
        >
        </textarea>
        <button onClick={post}>Отправить</button>
      </div>
    </div>
  )
}

export default ReviewsModal
