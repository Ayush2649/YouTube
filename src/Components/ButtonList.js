import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All","Music","Sports","Gaming","News","Movies","Live","Fashion","Learning","Spotlight","360° Video","Comedy","Cooking","Podcast","Travel","Documentary","Science & Technology"];
  return (
    <div className='flex overflow-x-auto whitespce-nowrap gap-3 px-4 scrollable-hide'>
      {
        list.map((item) => (
          <Button key={item} name={item} />
        ))
      }
    </div>
  )
};

export default ButtonList