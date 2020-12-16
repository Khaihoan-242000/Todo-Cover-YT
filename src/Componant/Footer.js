import React, { memo } from 'react'

const Footer = memo(props => {
    const { status, setStatusFilter, numOfTodoLeft, numOfTodos, clearCompleted } = props
    const filterBtns = [{
            title: 'All',
            isActived: status === 'ALL',
            onClick: () => setStatusFilter('ALL'),
            link: ''
        },{
            title: 'Actived',
            isActived: status === 'ACTIVE',
            onClick: () => setStatusFilter('ACTIVE'),
            link: 'Actived'
        },{
            title: 'Completed',
            isActived: status === 'COMPLETED',
            onClick: () => setStatusFilter('COMPLETED'),
            link: 'Completed'
        }]

    return (
        <footer className="footer">
           <span className="todo-count">
                <strong>
                    {numOfTodoLeft}
                </strong>
                <span> </span>
                <span>
                    {numOfTodoLeft === 1 ? 'item' : 'items'}
                </span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => <FilterBtn {...btn}  />)
                }
            </ul>
            {
              numOfTodos > numOfTodoLeft && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
        </footer>
    )
})

const FilterBtn = memo(props => {
    const { title, isActived, onClick, link } = props
    return (
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActived ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
        </>
    )
})

export default Footer;