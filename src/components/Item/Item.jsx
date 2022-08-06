import style from './Item.module.css'

const Item = (props) => {

    return (
        <div className={style.item}>
            <div>{props.term}</div>
            <div>{props.translate}</div>
        </div>
    )
}

export default Item
