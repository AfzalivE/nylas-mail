import {PLUGIN_ID} from './send-reminders-constants'
import {getLatestMessageWithReminder} from './send-reminders-utils'

export const name = 'SendRemindersThreadListExtension'

export function cssClassNamesForThreadListItem(thread) {
  const {shouldNotify} = thread.metadataForPluginId(PLUGIN_ID) || {}
  if (shouldNotify) {
    return 'thread-list-reminder-item'
  }
  return ''
}

export function cssClassNamesForThreadListIcon(thread) {
  const {shouldNotify} = thread.metadataForPluginId(PLUGIN_ID) || {}
  if (shouldNotify) {
    return 'thread-icon-reminder-triggered'
  }
  if (getLatestMessageWithReminder(thread)) {
    return 'thread-icon-reminder-pending'
  }
  return ''
}
