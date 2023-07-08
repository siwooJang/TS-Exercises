import React from 'react'
import {Menu} from './model/restaurant'

interface OwnProps extends Menu{
    showBestMenuName(name:string):string

}
const BestMenu:React.FC<OwnProps> = ({name,price,category,showBestMenuName}) => {
    return (
        <div>{name}</div>
    )
}

export default BestMenu