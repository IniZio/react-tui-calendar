```js
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      schedules: [
          {
              id: '1',
              calendarId: '1',
              title: 'my schedule',
              category: 'time',
              dueDateClass: '',
              start: '2018-07-18T22:30:00+09:00',
              end: '2018-07-19T02:30:00+09:00'
          },
          {
              id: '2',
              calendarId: '1',
              title: 'second schedule',
              category: 'time',
              dueDateClass: '',
              start: '2018-07-18T17:30:00+09:00',
              end: '2018-07-19T17:31:00+09:00'
          }
      ]
    }
  }

  addSchedule () {
      this.setState(({schedules}) => ({schedules: [...schedules, {
              id: '2',
              calendarId: '1',
              title: 'second schedule',
              category: 'time',
              dueDateClass: '',
              start: '2018-07-18T17:30:00+09:00',
              end: '2018-07-19T17:31:00+09:00'
          }]}))
  }

  render() {
      return (
          <div>
              <button onClick={this.addSchedule.bind(this)}>Add schedule</button>
              <TuiCalendar
                  schedules={this.state.schedules}
              />
          </div>
      )
  }
}

<Demo/>
```
