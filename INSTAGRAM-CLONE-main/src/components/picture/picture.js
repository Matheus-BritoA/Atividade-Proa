import './picture.css';

function Picture() {

  function vermelho(qtdLikes) {
    const imagem = document.querySelector(".like")
    imagem.setAttribute("src", "https://img.icons8.com/color/344/filled-like.png")
  }
  function preto() {
    const imagem = document.querySelector(".like")
    imagem.setAttribute("src", "https://img.icons8.com/material-outlined/344/filled-like.png")
  }
  
  return (
    <div className='feed'>
      <div>
        <img className='imagem' src={"https://images.pexels.com/photos/3597423/pexels-photo-3597423.jpeg?cs=srgb&dl=pexels-verschoren-maurits-3597423.jpg&fm=jpg"} alt="imagem" />
      </div>
      <div className='reactions'>
        <button onClick={vermelho} onDoubleClick={preto} type='button' className='botao'>
          <img className='like' src={"https://img.icons8.com/material-outlined/344/filled-like.png"} alt='like'/>
        </button>
        <button type='button' className='botao'>
          <img className='comments' src={"https://img.icons8.com/material-outlined/344/filled-topic.png"} alt='comments'/>
        </button>
        <button type='button' className='botao'>
          <img className='send' src={"https://img.icons8.com/material-outlined/344/filled-sent.png"} alt='send'/>
        </button>
        <button type='button' className='botao'>
          <img className='favoritos' src={"https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png"} alt='favoritos'/>
        </button>
      </div>
      <span>333 Curtidas</span>
      <div className='legenda'>
        <h4>BryanBelum</h4>
        <span>Passeio sinistro!</span>
      </div>
      <div className='seeAll'>
        <button type='button' className='button'>Ver todos os comentários</button>
      </div>
      <div className='comentarios'>
        <h4>MatheusRamos</h4>
        <span>Muito bom! KKKK</span>
      </div>
    </div>
  );
}

export default Picture;

