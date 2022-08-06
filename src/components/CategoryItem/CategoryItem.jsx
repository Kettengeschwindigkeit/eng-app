import { NavLink } from 'react-router-dom'
import style from './CategoryItem.module.css'

const CategoryItem = (props) => {

    return (
        <div className={style.categoryItem}>
            <NavLink to={props.path + props.id}>{props.title}</NavLink>
        </div>
    )
}

export default CategoryItem
