import { ObjectFieldTemplateProps } from '@rjsf/core'

const ObjectFieldTemplate: React.FC<ObjectFieldTemplateProps> = (
  props: ObjectFieldTemplateProps
) => {
  return <div className="row">{props.properties.map((element) => element.content)}</div>
}

export default ObjectFieldTemplate
