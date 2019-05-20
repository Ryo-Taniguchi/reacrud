// 外部のAPIサーバに対してリクエストを送信するhttpクライアントをインポート
import axios from 'axios'
// type typeに対応するkey typeの値はuniqueでなければならない
// actionを返す関数 action-creater
export const READ_EVENTS = 'READ_EVENTS'

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
