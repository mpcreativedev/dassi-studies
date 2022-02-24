import { FormProps, withTheme } from '@rjsf/core'
import { Datepicker } from '@/form/widgets'
import { FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate } from '@/form/templates'
import BaseButton from '@/components/BaseButton/BaseButton'

const Form = withTheme({
  widgets: {
    datepicker: Datepicker,
  },
})

const FormData: React.FC<FormProps<unknown>> = (props: FormProps<unknown>) => {
  return (
    <Form
      {...props}
      FieldTemplate={FieldTemplate}
      ArrayFieldTemplate={ArrayFieldTemplate}
      ObjectFieldTemplate={ObjectFieldTemplate}
    >
      <div>
        <BaseButton type="submit" label="Submit" variant="primary" />
      </div>
    </Form>
  )
}

export default FormData
