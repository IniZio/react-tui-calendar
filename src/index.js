import React from 'react'
import TuiCalendar from 'tui-calendar'

class Calendar extends React.Component {
  state = {
    renderRange: '',
    options: {
      defaultView: 'month',
      template: CalendarTemplate,
      useCreationPopup: true,
      useDetailPopup: true,
      calendars: calendarList,
      month: {},
      week: {}
    }
  }

  calRef = React.createRef()

  componentDidMount() {
    this.calendar = this.createCalendarMain()
    this.setEventHandlers()
    this.setSchedules()
    this.setRenderRangeText()
  }

  componentDidUpdate() {
    this.calendar.render()
  }

  setSchedules() {
    const cal = this.calendar
    const schedules = generateSchedule(
      calendarList,
      cal.getViewName(),
      cal.getDateRangeStart(),
      cal.getDateRangeEnd(),
      cal.getOptions()
    )
    cal.createSchedules(schedules)
  }

  createCalendarMain() {
    return this.calRef.current ? new BaseCalendar(this.calRef.current, this.state.options) : null
  }

  render() {
    return <div ref={this.calRef}/>
  }
}

export default Calendar
