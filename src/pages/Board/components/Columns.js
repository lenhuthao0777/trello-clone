import { initData } from 'data/initData'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { applyDrag, mapOrder } from 'utils'
import '../assets/_columns.scss'
import CreateCol from '../Module/CreateColumn'
import Column from './Column'
function Columns() {
  const [data, setData] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const db = initData.boards.find((board) => board.id === 'board_1')
    if (db) {
      setData(db)
      setColumns(mapOrder(db.columns, db.columnOrder, 'id'))
    }
  }, [])

  const onColumnDrop = (result) => {
    let newCols = [...columns]
    newCols = applyDrag(newCols, result)

    let newDatas = { ...data }
    newDatas.columnOrder = newCols.map((col) => col.id)
    newDatas.columns = newCols
    setData(newDatas)
    setColumns(newCols)
  }

  const onCardDrop = (colId, result) => {
    if (result.removedIndex !== null || result.addedIndex !== null) {
      let newCols = [...columns]
      let currentCol = newCols.find((col) => col.id === colId)
      currentCol.cards = applyDrag(currentCol.cards, result)
      currentCol.cardOrder = currentCol.cards.map((card) => card.id)
      setColumns(newCols)
    }
  }

  const createCol = (title) => {
    const newCol = {
      id: `column_${Math.random().toString(36).substr(2, 5)}`,
      boardId: data.id,
      title: title,
      cardOrder: [],
      cards: [],
    }
    let newCols = [...columns]
    newCols.push(newCol)

    let newDatas = { ...data }
    newDatas.columnOrder = newCols.map((col) => col.id)
    newDatas.columns = newCols
    setData(newDatas)
    setColumns(newCols)
  }

  const removeCol = (id) => {
    let newCols = [...columns]
    const index = newCols.findIndex((item) => item.id === id)
    index !== -1 && newCols.splice(index, 1)

    let newDatas = { ...data }
    newDatas.columnOrder = newCols.map((col) => col.id)
    newDatas.columns = newCols
    setData(newDatas)
    setColumns(newCols)
    console.log(index)
  }

  const hdUpdateCol = (colUpdate) => {
    const colID = colUpdate.id
    let newCols = [...columns]
    const index = newCols.findIndex((item) => item.id === colID)

    index !== -1 && newCols.splice(index, 1, colUpdate)

    let newDatas = { ...data }
    newDatas.columnOrder = newCols.map((col) => col.id)
    newDatas.columns = newCols
    setData(newDatas)
    setColumns(newCols)
  }

  const addCardToCol = (value) => {
    const colID = value.id
    let newCols = [...columns]
    const index = newCols.findIndex((item) => item.id === colID)

    index !== -1 && newCols.splice(index, 1, value)

    let newDatas = { ...data }
    newDatas.columnOrder = newCols.map((col) => col.id)
    newDatas.columns = newCols
    setData(newDatas)
    setColumns(newCols)
  }

  if (_.isEmpty(data)) {
    return <div>Not data</div>
  }
  return (
    <div className='columns'>
      <Container
        orientation='horizontal'
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector='.head'
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'col-drop-preview',
        }}
      >
        {columns.map((item, index) => (
          <Draggable key={index}>
            <Column
              column={item}
              rmCol={removeCol}
              onCardDrop={onCardDrop}
              hdUpdateCol={hdUpdateCol}
              addCardToCol={addCardToCol}
            />
          </Draggable>
        ))}
      </Container>
      <CreateCol createCol={createCol} />
    </div>
  )
}

export default Columns
