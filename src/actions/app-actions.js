import axios from 'axios'

const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  }
})

var hobby = [], group = [], school = [];

export function fetchData () {
  return dispatch => {
    client.post('api/hobby').then(function (response){
      hobby = response.data;
      // client.post('api/school').then( function(response){
      //   school = response.data.data;
        client.post('api/group').then( function(response){
          group = response.data
          console.log('success')
          dispatch({
            type: 'FETCH_DATA',
            hobby,
            // school,
            group,
          })
        })
      // })
    })
  }
}
