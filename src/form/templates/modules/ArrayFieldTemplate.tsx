import { ArrayFieldTemplateProps } from '@rjsf/core'
import BaseButton from '@/components/BaseButton/BaseButton'

const ArrayFieldTemplate: React.FC<ArrayFieldTemplateProps> = (
  props: ArrayFieldTemplateProps
) => {
  return (
    <>
      {/* <div className="field-array__label">{props.title}</div> */}
      <div className="field-array-group">
        {props.items.map((element) => (
          <div className="field-array-item" key={element.key}>
            <div className="col-12 lg:col-11">{element.children}</div>
            {element.hasRemove && (
              <div className="col-12 lg:col-1">
                <BaseButton
                  type="button"
                  icon="mdi:delete"
                  className="btn-del"
                  variant="danger"
                  onClick={element.onDropIndexClick(element.index)}
                />
              </div>
            )}
          </div>
        ))}
        {props.canAdd && (
          <BaseButton
            type="button"
            className="btn-add"
            icon="mdi:plus-circle"
            label={props.uiSchema.add}
            onClick={props.onAddClick}
          />
        )}
      </div>
    </>
  )
}

export default ArrayFieldTemplate
