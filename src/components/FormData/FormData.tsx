import { FormProps, withTheme } from '@rjsf/core'
import { FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate } from '@/form/templates'
import BaseButton from '@/components/BaseButton/BaseButton'
import Datepicker from '@/form/widgets/Datepicker/Datepicker'

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
        <BaseButton type="submit" label="Submit" variant="primary" className="btn-save" />
      </div>
    </Form>
  )
}

export default FormData
