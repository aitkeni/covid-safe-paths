import React from 'react';
import moment from 'moment';
import { DayOfWeek, CalendarDay } from './CalendarDay';
import { MonthGrid } from './MonthGrid';

/**
 * Get a date key that does not include time.
 *
 * @param {moment.Moment} date
 */
function getDayKey(date) {
  return date.endOf('day').unix();
}

/**
 * Calendar view of recent exposures.
 *
 * @param {{
 *   history: !import('../../constants/history').HistoryDay[],
 *   weeks?: number,
 * }} param0
 */
export const ExposureCalendarView = ({ history, weeks }) => {
  /** @type {{[date: string]: number}} */
  const exposureMap = {};
  history.forEach(day => {
    const date = moment().subtract(day.daysAgo, 'days');
    exposureMap[getDayKey(date)] = day.exposureTime;
  });

  return (
    <MonthGrid
      weeks={weeks}
      renderDayHeader={d => <DayOfWeek key={d}>{d}</DayOfWeek>}
      renderDay={date => {
        const exposureTime = exposureMap[getDayKey(date)];
        return (
          <CalendarDay showToday date={date} exposureTime={exposureTime} />
        );
      }}
    />
  );
};
