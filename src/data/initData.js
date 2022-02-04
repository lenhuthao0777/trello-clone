import vicky1 from 'assets/images/girl.jpg'
import vicky2 from 'assets/images/vicky.jpg'

export const initData = {
  boards: [
    {
      id: 'board_1',
      columnOrder: ['column_1', 'column_2', 'column_3'],
      columns: [
        {
          id: 'column_1',
          boardId: 'board_1',
          title: 'To do colum',
          cardOrder: [
            'card_1',
            'card_2',
            'card_3',
            'card_4',
            'card_5',
            'card_6',
            'card_7',
          ],
          cards: [
            {
              id: 'card_1',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 1',
              cover: vicky1,
            },
            {
              id: 'card_2',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 2',
              cover: vicky2,
            },
            {
              id: 'card_3',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 3',
              cover: null,
            },
            {
              id: 'card_4',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 4',
              cover: null,
            },
            {
              id: 'card_5',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 5',
              cover: null,
            },
            {
              id: 'card_6',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 6',
              cover: null,
            },
            {
              id: 'card_7',
              boardId: 'board_1',
              columnId: 'column_1',
              title: 'CARD 7',
              cover: null,
            },
          ],
        },
        {
          id: 'column_2',
          boardId: 'board_1',
          title: 'To do colum 2',
          cardOrder: ['card_8', 'card_9', 'card_10'],
          cards: [
            {
              id: 'card_8',
              boardId: 'board_1',
              columnId: 'column_2',
              title: 'CARD',
              cover: null,
            },
            {
              id: 'card_9',
              boardId: 'board_1',
              columnId: 'column_2',
              title: 'CARD 2',
              cover: null,
            },
            {
              id: 'card_10',
              boardId: 'board_1',
              columnId: 'column_2',
              title: 'CARD 3',
              cover: null,
            },
          ],
        },
        {
          id: 'column_3',
          boardId: 'board_1',
          title: 'To do colum 3',
          cardOrder: ['card_11', 'card_12', 'card_13'],
          cards: [
            {
              id: 'card_11',
              boardId: 'board_1',
              columnId: 'column_3',
              title: 'CARD',
              cover: null,
            },
            {
              id: 'card_12',
              boardId: 'board_1',
              columnId: 'column_3',
              title: 'CARD 2',
              cover: null,
            },
            {
              id: 'card_13',
              boardId: 'board_1',
              columnId: 'column_3',
              title: 'CARD 3',
              cover: null,
            },
          ],
        },
      ],
    },
  ],
}
