import { FiMenu, FiX } from 'react-icons/fi'
import { useAnimate } from 'framer-motion'
import { useState } from 'react'

export default function Navmenu() {
  const [scope, animate] = useAnimate()
  const [menuRotationComplete, setMenuRotationComplete] = useState(false)

  const onComplete = () => { setMenuRotationComplete(prev => !prev) }
  
  return (
    menuRotationComplete ? (
      <div className='sm:hidden' ref={scope} onClick={() => animate(scope.current, {rotate: 180}, {onComplete})}>
        <FiX className='text-2xl'/>
      </div>
    ) : (
        <div className='sm:hidden' ref={scope} onClick={() => animate(scope.current, {rotate: -180}, {onComplete})}>
          <FiMenu className='text-2xl'/>
        </div>
      )
  )  
}
