

export const StackItem = (props) => {
  return (
    <article className='skills__item'>
      {props.tech.icon}
      <div className='skills__item__desc'>
        <h4>{props.tech.name}</h4>
        <small className='text-light'>{props.tech.proficiency}</small>
      </div>
    </article>
  )
}