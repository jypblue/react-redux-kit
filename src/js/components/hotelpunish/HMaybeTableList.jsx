/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-14 14:57:47
 * @version $Id$
 */

import React, {Component} from 'react';


export default class HMaybeTableList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { hmaytable } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>酒店ID</th>
            <th>酒店名称</th>
            <th>疑似作弊点评数</th>
            <th>作弊类型</th>
            <th>5分/非5分佣金比</th>
            <th>低佣点评率</th>
            <th>整体点评率</th>
            <th>是否在处罚期</th>
            <th>处罚开始时间</th>
            <th>处罚结束时间</th>
            <th>处罚系数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            hmaytable.map(function(el,i){
              return (
               <HMaybeTr el={el} i={i} key={i} />
              )
            })
          }
        </tbody>
      </table>
    )
  }

}

class HMaybeTr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stime:this.props.el.stime,
      etime:this.props.el.etime,
      nums:this.props.el.nums
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleBtn = this.handleBtn.bind(this);
    this.handleStime = this.handleStime.bind(this);
    this.handleEtime = this.handleEtime.bind(this);
    this.handleNums = this.handleNums.bind(this);
  }

  handleBtn(e){
    console.log(e.target);
  }
  handleCancel(e){
    console.log(e.target);
  }
  handleStime(e) {
    this.setState({
      stime:e.target.value
    })
  }
  handleEtime(e) {
    this.setState({
      etime:e.target.value
    })
  }
  handleNums(e) {
    this.setState({
      nums:e.target.value
    })
  }
  render(){
    const { el, i } = this.props;
    return (
      <tr>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.commentNums}</td>
        <td>{el.type}</td>
        <td>{el.scale}</td>
        <td>{el.rate}</td>
        <td>{el.allRate}</td>
        <td>{el.punish}</td>
        <td><input type="text" value={this.state.stime} onChange={this.handleStime}/></td>
        <td><input type="text" value={this.state.etime} onChange={this.handleEtime}/></td>
        <td><input type="text" value={this.state.nums} onChange={this.handleNums}/></td>
        <td>
          <a href="#" onClick={this.handleBtn}>提交</a>
          <a href="#" onClick={this.handleCancel}>忽略</a>
        </td>
      </tr>
    )
  }
}
