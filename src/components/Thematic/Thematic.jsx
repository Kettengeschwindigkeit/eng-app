import s from './Thematic.module.css'
import CategoryItem from '../CategoryItem/CategoryItem'
import Item from '../Item/Item'

const Thematic = (props) => {

    let categoryElements = props.state.categories.map(category => <CategoryItem title={category.title} id={category.id} path='/thematic/' />)
    let translateElements = props.state.items.map(translate => <Item term={translate.term} translate={translate.translate} />)

    return (
        <div className={s.thematic} >
            <div className={s.categoryItems}>
                {categoryElements}
            </div>
            <div className={s.translate}>
                {translateElements}
            </div>
        </div>
    )
}

export default Thematic
