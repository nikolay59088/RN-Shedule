import axios from 'axios'
import * as PropTypes from 'prop-types'

let ip = 'localhost'
let port = '3001'

export const getResponse = ({ type, address, args }) => {

  //GET
  if (type === 'GET'){

    axios.get(`http://${ip}:${port}/${address}`, args).then( res => {

      return res
    })

  //POST
  }else if (type === 'POST'){
    axios.post(`http://${ip}:${port}/${address}`, args).then( res => {

      console.log(res)
      return res
    })
  }

}

getResponse.propTypes = {
  type: PropTypes.string,
  address: PropTypes.string,
  query: PropTypes.string,
  args: PropTypes.object
}
