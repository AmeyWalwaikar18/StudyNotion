import React from 'react'

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type
}) => {
  return (
    <div>
        <button
        disabled={disabled}
        onClick={onclick}
        type={type}>
            {
                children?(
                    <>
                    <span>{text}</span>
                    {children}
                    </>
                ):(text)
            }
        </button>
      
    </div>
  )
}

export default IconBtn
