// 外部のAPIサーバに対してリクエストを送信するhttpクライアントをインポート
import axios from 'axios'
// type typeに対応するkey typeの値はuniqueでなければならない
// actionを返す関数 action-creater
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 今まではactionを返していた
// export const readEvents= () => ({
//     type: READ_EVENTS
// })

// thunk
// actionの代わりの関数を返す事ができる
// 内部の関数はdispatchとgetstateを受けとる事ができる
// 戻り値がpormiseになるのでasyns awaitを使う
// reducer actionが発生した時にそのactionに組み込まれているtypeに対して状態(state)をどう変化させるか
    export const readEvents = () => async dispatch => {
       const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
       dispatch({type: READ_EVENTS, response})
    }

    export const postEvent = values => async dispatch => {
      const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
      dispatch({type: CREATE_EVENT, response})
   }
   
   export const deleteEvent = id => async dispatch => {
      await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
      dispatch({type: DELETE_EVENT, id })
   }