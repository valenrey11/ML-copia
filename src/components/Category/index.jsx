import { useEffect, useState } from 'react'
import { GetSubCategories } from '../../services/GetSubCategories'
import './index.css'
import arrowDown from '../../assets/arrow-down.png'
import arrowUp from '../../assets/arrow-up.png'
import { useLocation } from 'wouter'
export function Category({ nombre, id }) {
  const [subCategories, setCategories] = useState()
  const [location, setLocation] = useLocation()
  useEffect(() => {
    GetSubCategories(id).then((data) => {
      setCategories(data)
    })
  }, [id])
  const handleHide = () => {
    const ulEls = document.querySelectorAll('.cambiante')
    const subContainers = document.querySelectorAll('.sub-cat-container')
    for (let i = 0; i < subContainers.length; i++) {
      const el = subContainers[i]
      const arrow = el.children[1]
      const elInner = el.children[0].innerHTML
      if (elInner === nombre) {
        if (ulEls[i].classList.contains('disable')) {
          ulEls[i].classList.remove('disable')
          ulEls[i].classList.add('enable')
          arrow.setAttribute('src', `${arrowUp}`)
        } else if (ulEls[i].classList.contains('enable')) {
          ulEls[i].classList.remove('enable')
          ulEls[i].classList.add('disable')
          arrow.setAttribute('src', `${arrowDown}`)
        }
      }
    }
  }

  const handlePageCat = (props) => {
    const el = props.target
    const elId = el.getAttribute('info')
    setLocation(`/category/${elId}`)
  }

  return (
    <div className='sub-cat'>
      <div className='sub-cat-container' onClick={handleHide}>
        <h4 className='category-name'>{nombre}</h4>
        <img className='arrow' src={arrowDown} alt='arrow' />
      </div>
      <ul className='cambiante disable'>
        {subCategories === undefined ? (
          <div />
        ) : (
          subCategories.map((sub) => {
            return (
              <li key={sub.name} className='sub-category' onClick={handlePageCat} info={sub.id}>
                {sub.name}
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}
