import { FieldTemplateProps } from '@rjsf/core'

const FieldTemplate: React.FC<FieldTemplateProps> = (props: FieldTemplateProps) => {
  const { id, classNames, label, help, required, description, errors, children } = props
  const mainTitleClasses = 'object' === props.schema.type ? ' control-label-title' : ''

  return (
    <div className={classNames}>
      {label && (
        <label className={`control-label${mainTitleClasses}`} htmlFor={id}>
          {label}
          {required ? '*' : null}
        </label>
      )}
      {description}
      {children}
      {errors}
      {help}
    </div>
  )
}

export default FieldTemplate
