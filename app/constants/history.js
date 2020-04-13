/**
 * Max esposure reporting window in days
 */
export const MAX_EXPOSURE_WINDOW = 14;

/**
 * The value in minutes of each "bin" in the crossed path data.
 */
export const BIN_DURATION = 5;

/**
 * Format of a single history item
 *
 * @typedef {{
 *   daysAgo: number,
 *   exposureTime: number,
 * }} HistoryDay
 */

/**
 * Exposure history
 *
 * @typedef {!HistoryDay[]} History
 */