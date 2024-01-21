import { defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import * as rules from '@vee-validate/rules'

export default () => {
  configure({
    generateMessage: localize('zh_TW', {
      messages: {
        required: '此欄位為必填'
      }
    })
  })

  defineRule('required', (value: string | any[]) => {
    if (!value || !value.length) {
      return false
    } else {
      return true
    }
  })
}
