import { DropdownSelect } from 'components'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { EditOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { mapOrder } from 'utils'
import '../assets/_column.scss'
import CreateCard from '../Module/CreateCard'
import Card from './Card'

function Column({ column, onCardDrop, rmCol, hdUpdateCol, addCardToCol }) {
  const colRef = useRef(null)
  const [colName, setColName] = useState({ colName: column.title })
  const [open, setOpen] = useState(true)
  useEffect(() => {
    const hdCroll = (e) => {
      if (!colRef.current.contains(e.target)) {
        console.log(colRef.current.scrollTop)
      }
    }
    document.addEventListener('scroll', hdCroll)
    return () => document.removeEventListener('scroll', hdCroll)
    // console.log(colRef.current.clientHeight)
  }, [])

  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  const hdAction = useCallback(
    (item) => {
      switch (item.value) {
        case 'delete':
          return rmCol(column.id)

        default:
          break
      }
    },
    [rmCol, column]
  )
  const changeColName = (e) => {
    setColName({ [e.target.name]: e.target.value })
  }
  const hdOpenEditColName = () => {
    const newCol = {
      ...column,
      title: colName.colName,
    }
    hdUpdateCol(newCol)
    setOpen(!open)
  }

  const addCard = (value) => {
    const newCard = {
      id: `card_${Math.random().toString(36).substr(2, 5)}`,
      boardId: column.boardId,
      title: value.title,
      columnId: column.id,
      cover: null,
    }

    let newCol = _.cloneDeep(column)
    newCol.cards.push(newCard)
    newCol.cardOrder.push(newCard.id)
    addCardToCol(newCol)
  }
  return (
    <div className='col-item' ref={colRef}>
      <div className='head'>
        {open ? (
          <Fragment>
            <h2 onDoubleClick={hdOpenEditColName}>{column.title}</h2>
            <DropdownSelect
              cb={hdAction}
              list={[
                {
                  id: 1,
                  value: 'delete',
                  action: 'Delete',
                },
                {
                  id: 2,
                  value: 'edit',
                  action: 'Edit',
                },
              ]}
            />
          </Fragment>
        ) : (
          <div className='edit-colName'>
            <input
              type='text'
              name='colName'
              value={colName.colName}
              onChange={changeColName}
            />
            <EditOutlined
              onClick={hdOpenEditColName}
              className='edit-colName__icon'
            />
          </div>
        )}
      </div>
      <div className='cards-list'>
        <Container
          {...column.props}
          groupName='columns'
          onDrop={(result) => onCardDrop(column.id, result)}
          getChildPayload={(index) => cards[index]}
          dragClass='card-ghost'
          dropClass='card-ghost-drop'
          dragHandleSelector='.card-item'
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview',
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((item, index) => (
            <Draggable key={index}>
              <Card card={item} index={index} />
            </Draggable>
          ))}
        </Container>
      </div>
      <div className='footer'>
        <CreateCard cb={addCard} />
      </div>
    </div>
  )
}

export default Column
