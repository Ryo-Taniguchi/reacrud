// type typeに対応するkey typeの値はuniqueでなければならない
// actionを返す関数 action-creater
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})
// reducer actionが発生した時にそのactionに組み込まれているtypeに対して状態(state)をどう変化させるか