import React, { Component } from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import Button from 'material-ui/Button';
import { MenuItem} from 'material-ui/Menu'
// import { Redirect } from 'react-router-dom'
import Select from 'material-ui/Select'
import axios from 'axios'
import { connect} from "react-redux"
import CustomTextField from '../components/CustomTextField'
import { InputLabel} from 'material-ui/Input'
import Table, { TableBody, TableCell, TableRow, TableHead } from 'material-ui/Table';
import {fetchData} from '../actions/app-actions'
import Grid from 'material-ui/Grid'
import querystring from 'querystring';

class HelperForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      score: '',
      hobby: '',
      group: '',
      // school: '',
      area: '',
      result: [],
      errorNull: ''
    }
  }

  componentDidMount = () => {
    this.props.fetchData();
  }

  submit = (event) => {
    var seft = this
    console.log(this.state)
    const client = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 100000
    })
    client.post('api/result', querystring.stringify({
      hobby: this.state.hobby,
      group: this.state.group,
      area: this.state.area,
      score: this.state.score
    })).then(function(response){
      if(response.data != undefined){
        let data = response.data
        console.log(data)
        seft.setState({
          result: data,
          errorNull: ''
        })
      } else{
        seft.setState({
          errorNull: 'data'
        })
      }
    })
  }

  onScoreChange = (event) => {
    this.setState({
      score: event.target.value
    })
  }

  onSelectFieldChange = (name) => (event) => {
    console.log(name)
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return(
      <div >
        <Grid container spacing={24}>
          <Grid item xs={5} sm={5}>
            <h2 style={{textAlign: 'center'}}>Nhập thông tin tư vấn</h2>
            <Form onSubmit={this.props.handleSubmit(this.submit)}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <InputLabel>Điểm thi</InputLabel>
                    </TableCell>
                    <TableCell>
                      <Field
                        onChange={this.onScoreChange}
                        autoFocus={true}
                        name="score"
                        component={CustomTextField}
                        placeholder="Điểm thi"
                        />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <InputLabel>Sở thích</InputLabel>
                    </TableCell>
                    <TableCell>
                      <Select value={this.state.hobby} onChange={this.onSelectFieldChange('hobby')} fullWidth>
                        {
                          this.props.hobby.sort().map( (el, index) => {
                            return <MenuItem value={el.id} key={index} >{el.name}</MenuItem>
                          })
                        }
                      </Select>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <InputLabel>Khu vực</InputLabel>
                    </TableCell>
                    <TableCell>
                      <Select value={this.state.area} onChange={this.onSelectFieldChange('area')} fullWidth>
                        {
                          this.props.area.sort().map( (el, index) => {
                            return <MenuItem value={el.id} key={index} >{el.area}</MenuItem>
                          })
                        }
                      </Select>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <InputLabel>Khối thi</InputLabel>
                    </TableCell>
                    <TableCell>
                      <Select value={this.state.group} onChange={this.onSelectFieldChange('group')} fullWidth>
                        {
                          this.props.group.sort().map( (el, index) => {
                            return <MenuItem value={el} key={index} >{el}</MenuItem>
                          })
                        }
                      </Select>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br/><br/>
              <Button style = {{float: "right"}} raised color="primary" type="submit" disabled={ this.props.pristine || this.props.submitting}>Xác nhận</Button>
            </Form>
          </Grid>
          <Grid item xs={1} sm={1}></Grid>

          <Grid item xs={5} sm={6}>
            <h2 style={{textAlign: 'center'}}>Kết quả</h2>
            {
              this.state.result[0] != null &&

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Tên trường</TableCell>
                    <TableCell>Tên ngành</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    this.state.result.map( (el, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <InputLabel>
                              {index + 1}
                            </InputLabel>
                          </TableCell>
                          <TableCell>
                            {el.data['uni_name']}
                          </TableCell>
                          <TableCell>
                            {el.data['dep_name']}
                          </TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            }
            {
              this.state.errorNull != '' && this.state.errorNull != null &&
              <p>Không tìm được thông tin phù hợp</p>
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hobby: state.appStore.hobby,
    group: state.appStore.group,
    school: state.appStore.school,
    area: state.appStore.area,
  }
}

HelperForm = reduxForm({
  form: 'HelperForm',
  // validate,
})(HelperForm)
export default connect (mapStateToProps, {fetchData})(HelperForm)
